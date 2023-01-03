toolbarButtons.Toolbars.TransformButton = class
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

toolbarButtons.Toolbars.TransformButton.ORDER = 1;
toolbarButtons.Toolbars.TransformButton.prototype.IconSprite = "stretched:editor/toolbar/moveobject.png";
toolbarButtons.Toolbars.TransformButton.prototype.Tooltip = translate("Move/rotate object");
