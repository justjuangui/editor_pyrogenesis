toolbarButtons.Toolbars.SmoothElevationButton = class
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

toolbarButtons.Toolbars.SmoothElevationButton.ORDER = 3;
toolbarButtons.Toolbars.SmoothElevationButton.prototype.IconSprite = "stretched:editor/toolbar/smoothelevation.png";
toolbarButtons.Toolbars.SmoothElevationButton.prototype.Tooltip = translate("Smooth terrain elevation");
