toolbarButtons.Toolbars.AlterElevationButton = class
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

toolbarButtons.Toolbars.AlterElevationButton.ORDER = 2;
toolbarButtons.Toolbars.AlterElevationButton.prototype.IconSprite = "stretched:editor/toolbar/alterelevation.png";
toolbarButtons.Toolbars.AlterElevationButton.prototype.Tooltip = translate("Alter terrain elevation");
