toolbarButtons.Toolbars.PaintTerrainButton = class
{
	constructor(toolbar, button, icon)
	{
		this.button = button;
		this.setupWindow = toolbar.setupWindow;
		this.button.tooltip = this.Tooltip;
		icon.sprite = this.IconSprite;
	}

	onToogle(isToogle)
	{
		warn(`${this.button.name} ${isToogle}`);
	}
}

toolbarButtons.Toolbars.PaintTerrainButton.ORDER = 5;
toolbarButtons.Toolbars.PaintTerrainButton.prototype.IconSprite = "stretched:editor/toolbar/paintterrain.png";
toolbarButtons.Toolbars.PaintTerrainButton.prototype.Tooltip = translate("Paint terrain texture");
