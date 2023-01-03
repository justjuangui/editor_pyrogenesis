classEditorSettingControls.MapName = class extends EditorSettingControlTextbox
{
	constructor(...args)
	{
		super(...args);

		this.setupWindow.registerLoadHandler(() => {
			this.setupWindow.controls.editorSettingsController.registerSettingsLoadedHandler(() => {
				this.render();
			});
			this.setupWindow.controls.editorSettings.editorMapName.watch(() => this.render(), ["name"]);
			this.render();
		});
	}

	render()
	{
		this.setValue(this.setupWindow.controls.editorSettings.editorMapName.name);
	}

	getAutocompleteEntries()
	{
		return [];
	}

	onTextEdit()
	{
		if (!this.isInGuiUpdate)
			this.setupWindow.controls.editorSettings.editorMapName.setName(this.input.caption);
	}
};

classEditorSettingControls.MapName.prototype.TitleCaption = translate("Map Name");

classEditorSettingControls.MapName.prototype.Tooltip = translate("Set the name of your map");

classEditorSettingControls.MapName.prototype.AutocompleteOrder = 0;
