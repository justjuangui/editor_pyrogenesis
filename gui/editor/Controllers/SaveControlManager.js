EditorWindow.prototype.ClassControls.SaveControlManager = class
{
	constructor(setupWindow)
	{

		this.setupWindow = setupWindow;
		this.initAttributes = null;
		this.changedInitAttributes = null;

		this.setupWindow.registerLoadHandler(() => {
			this.initAttributes = Engine.GetInitAttributes();
		});
	}

	getSaveMapInfo()
	{
		return this.changedInitAttributes || this.initAttributes;
	}

	onSaveMapInfo(info)
	{
		Engine.SaveMap(info.map);
		this.changedInitAttributes = Object.assign(this.initAttributes, info, {editorType: 'changed'});
		this.setupWindow.controls.guiController.saveSettingsIsOpen = false;
	}
}

EditorWindow.prototype.ClassControls.EditorSettings.ORDER = 1;
