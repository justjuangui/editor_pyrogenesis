classEditorSettingControls.CircularMap = class extends EditorSettingControlCheckbox
{
	constructor(...args)
	{
		super(...args);

		this.setupWindow.registerLoadHandler(() => {
			this.setupWindow.controls.editorSettingsController.registerSettingsLoadedHandler(() => {
				this.render();
			});
			this.setupWindow.controls.editorSettings.editorMapCircular.watch(() => this.render(), ["circularMap"]);
			this.render();
		});
	}

	render()
	{
		this.setChecked(this.setupWindow.controls.editorSettings.editorMapCircular.circularMap);
	}

	getAutocompleteEntries()
	{
		return [];
	}

	onPress(checked)
	{
		this.setupWindow.controls.editorSettings.editorMapCircular.setCircularMap(checked);
	}
};

classEditorSettingControls.CircularMap.prototype.TitleCaption = translate("Circular Map");

classEditorSettingControls.CircularMap.prototype.Tooltip = translate("Set the sahpe of your map in circular way");

classEditorSettingControls.CircularMap.prototype.AutocompleteOrder = 0;
