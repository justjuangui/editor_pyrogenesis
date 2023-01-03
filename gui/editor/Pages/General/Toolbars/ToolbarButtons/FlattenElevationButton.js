toolbarButtons.Toolbars.FlattenElevationButton = class
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

toolbarButtons.Toolbars.FlattenElevationButton.ORDER = 4;
toolbarButtons.Toolbars.FlattenElevationButton.prototype.IconSprite = "stretched:editor/toolbar/flattenelevation.png";
toolbarButtons.Toolbars.FlattenElevationButton.prototype.Tooltip = translate("Flatten terrain elevation");
