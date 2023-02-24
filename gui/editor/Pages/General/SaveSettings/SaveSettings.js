EditorWindow.prototype.ClassSetupWindowPages.SaveSettingsPage = class
{
	constructor(setupWindow)
	{
		this.setupWindow = setupWindow;

		this.gui = Engine.GetGUIObjectByName("saveSettingsWindow");
		this.title = Engine.GetGUIObjectByName("saveSettigsWindowTitle");
		this.save = Engine.GetGUIObjectByName("saveSettingsWindowSaveButton");
		this.cancel = Engine.GetGUIObjectByName("saveSettingsWindowCancelButton");
		this.mapFolderLabel = Engine.GetGUIObjectByName("mapFolderLabel");
		this.mapFolderCtrl = Engine.GetGUIObjectByName("mapFolderCtrl");
		this.mapNameLabel = Engine.GetGUIObjectByName("mapNameLabel");
		this.mapNameCtrl = Engine.GetGUIObjectByName("mapNameCtrl");

		// set default titles
		this.title.caption = this.TitleCaption;
		this.save.caption = this.SaveCaption;
		this.save.tooltip = this.SaveTooltip;
		this.cancel.caption = this.CancelCaption;
		this.cancel.tooltip = this.CancelTooltip;
		this.mapFolderLabel.caption = this.MapFolderCaption;
		this.mapNameLabel.caption = this.MapNameCaption;

		this.cancel.onPress = () => {
			this.setupWindow.controls.guiController.saveSettingsIsOpen = false;
		}

		this.setupWindow.registerLoadHandler(() => {
			this.setupWindow.controls.guiController.watch(() => this.onSaveSettingsIsOpenChange(), ["saveSettingsIsOpen"]);
		});
	}

	onSaveSettingsIsOpenChange()
	{
		const newValue = this.setupWindow.controls.guiController.saveSettingsIsOpen;;
		this.gui.hidden = !newValue;
	}
}

EditorWindow.prototype.ClassSetupWindowPages.SaveSettingsPage.prototype.SaveCaption = translateWithContext("editor", "Save");
EditorWindow.prototype.ClassSetupWindowPages.SaveSettingsPage.prototype.SaveTooltip = translateWithContext("editor", "Save");

EditorWindow.prototype.ClassSetupWindowPages.SaveSettingsPage.prototype.CancelCaption = translateWithContext("editor", "Close");
EditorWindow.prototype.ClassSetupWindowPages.SaveSettingsPage.prototype.CancelTooltip = translateWithContext("editor", "Close");

EditorWindow.prototype.ClassSetupWindowPages.SaveSettingsPage.prototype.TitleCaption = translateWithContext("editor", "Save Settings");

EditorWindow.prototype.ClassSetupWindowPages.SaveSettingsPage.prototype.MapFolderCaption = translateWithContext("editor", "Map Folder");
EditorWindow.prototype.ClassSetupWindowPages.SaveSettingsPage.prototype.MapNameCaption = translateWithContext("editor", "Map Name");
