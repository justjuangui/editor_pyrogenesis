class EditorSetupSettings extends BaseSettings {
	init(mapEditorCache)
	{
		super.init();

		if (!mapEditorCache)
			mapEditorCache = new MapEditorCache();

		mapEditorCache.setSettings(this);

		this.mapEditorCache = mapEditorCache;
	}
}
