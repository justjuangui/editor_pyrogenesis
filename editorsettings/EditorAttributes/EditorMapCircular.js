EditorSettings.prototype.Attributes.EditorMapCircular = class extends EditorSetting
{
	init()
	{
		this.circularMap = false;
	}

	toInitAttributes(attribs)
	{
		attribs.settings.CircularMap = this.circularMap;
	}

	fromInitAttributes(attribs)
	{
		this.setCircularMap(attribs.settings.CircularMap);
	}

	setCircularMap(circularMap)
	{
		this.circularMap = circularMap;
	}
};
