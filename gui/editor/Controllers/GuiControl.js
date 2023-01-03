EditorWindow.prototype.ClassControls.GuiController = class extends ObservableSetting
{
	constructor(setupWindow)
	{
		super();
		this.setupWindow = setupWindow;

		this.mapSettingsIsOpen = false;
	}
}
