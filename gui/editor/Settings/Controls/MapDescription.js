classEditorSettingControls.MapDescription = class extends EditorSettingControlTextbox
{
	constructor(...args)
	{
		super(...args);

		this.setupWindow.registerLoadHandler(() => {
			this.setupWindow.controls.editorSettingsController.registerSettingsLoadedHandler(() => {
				this.render();
			});
			this.setupWindow.controls.editorSettings.editorMapDescription.watch(() => this.render(), ["description"]);
			this.render();
		});
	}

	render()
	{
		this.setValue(this.setupWindow.controls.editorSettings.editorMapDescription.description);
	}

	getAutocompleteEntries()
	{
		return [];
	}

	onTextEdit()
	{
		if (!this.isInGuiUpdate)
			this.setupWindow.controls.editorSettings.editorMapDescription.setDescription(this.input.caption);
	}
};

classEditorSettingControls.MapDescription.prototype.TitleCaption = translate("Map Description");

classEditorSettingControls.MapDescription.prototype.Tooltip = translate("Set the description of your map");

classEditorSettingControls.MapDescription.prototype.AutocompleteOrder = 0;
