EditorSettings.prototype.Attributes.EditorMapName = class EditorMapName extends EditorSetting
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
