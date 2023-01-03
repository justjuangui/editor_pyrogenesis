EditorSettings.prototype.Attributes.EditorMapDescription = class extends EditorSetting
{
	init()
	{
		this.description = undefined;
	}

	toInitAttributes(attribs)
	{
		attribs.settings.Description = this.description;
	}

	fromInitAttributes(attribs)
	{
		this.setDescription(attribs.settings.Description);
	}

	setDescription(description)
	{
		this.description = description;
	}
};
