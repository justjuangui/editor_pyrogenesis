/**
 * Data store for Base settings.
 *
 * This is intended as a helper to create the settings object for a Settings.
 */
class BaseSettings
{
	init()
	{
		for (let comp in this.Attributes)
		{
			let name = comp[0].toLowerCase() + comp.substr(1);
			if (name in this)
				error("Settings attribute '" + name + "' is already used.");
			this[name] = new this.Attributes[comp](this);
		}
		for (let comp in this)
			if (this[comp].init)
				this[comp].init();

		return this;
	}

	setupInitAttributesObject()
	{
		return {};
	}

	toInitAttributes()
	{
		let attribs = this.setupInitAttributesObject();
		for (let comp in this)
			if (this[comp].toInitAttributes)
				this[comp].toInitAttributes(attribs);

		return attribs;
	}

	fromInitAttributes(attribs)
	{
		// Settings may depend on eachother. Some selections of settings
		// might be illegal. So keep looping through all settings until
		// we find something stable.
		const components = Object.keys(this);

		// To check in the loop below if something change we just compare
		// the entire component. However, we must ignore the "settings"
		// keyword to avoid cyclic objects.
		const getComponentData = comp => Object.keys(this[comp]).map(key => key == "settings" ? undefined : this[comp][key]);

		// When we have looped components.length + 1 times, we are considered stuck.
		for (let i = 0; i <= components.length; ++i)
		{
			// Re-init if any setting was changed, to make sure dependencies are cleared.
			let reInit = false;
			for (const comp in this)
			{
				const oldSettings = clone(getComponentData(comp));
				if (this[comp].fromInitAttributes)
					this[comp].fromInitAttributes(attribs);
				reInit = reInit || !deepCompare(oldSettings, getComponentData(comp));
			}
			if (!reInit)
				return;
		}

		throw new Error("Infinite loop initializing attributes detected, components: " + uneval(components));
	}

	pickRandomItems()
	{
		const components = Object.keys(this);

		// When we have looped components.length + 1 times, we are considered stuck.
		for (let i = 0; i <= components.length; ++i)
		{
			// Re-pick if any random setting was unrandomised, to make sure dependencies are cleared.
			let rePick = false;
			for (const comp in this)
				if (this[comp].pickRandomItems)
					rePick = this[comp].pickRandomItems() || rePick;
			if (!rePick)
				return;
		}

		throw new Error("Infinite loop picking random items detected, components: " + uneval(components));
	}

	finalizeAttributes()
	{
		this.pickRandomItems();

		// Let the settings finalize themselves. Let them do anything they need to do before the
		// game starts and set any value in the attributes which mustn't be persisted.
		const attribs = this.toInitAttributes();
		for (const comp in this)
			if (this[comp].onFinalizeAttributes)
				this[comp].onFinalizeAttributes(attribs, playerAssignments);
	}
}

Object.defineProperty(BaseSettings.prototype, "Attributes", {
	"value": {},
	"enumerable": false,
	"writable": true,
});
