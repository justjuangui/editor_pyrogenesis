EditorSettings.prototype.Attributes.EditorMapName = class extends EditorSetting
{
	init()
	{
		this.name = undefined;
	}

	toInitAttributes(attribs)
	{
		attribs.settings.Name = this.name;
	}

	fromInitAttributes(attribs)
	{
		this.setName(attribs.settings.Name);
	}

	setName(name)
	{
		this.name = name;
	}
};
