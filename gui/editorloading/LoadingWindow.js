class LoadingWindow extends BaseSetupWindow
{

}

LoadingWindow.prototype.ClassSetupWindowPages.TitleDisplay = class
{
	constructor(setupWindow)
	{
		this.setupWindow = setupWindow;
		let loadingMapName = Engine.GetGUIObjectByName("loadingMapName");

		this,setupWindow.registerLoadHandler((data) => {
			loadingMapName.caption = sprintf(
				data.attribs.mapType == "random" ? this.Generating : this.Loading,
				{ "map": data.attribs.map });
		});
	}
}

LoadingWindow.prototype.ClassSetupWindowPages.TitleDisplay.prototype.Generating = translate("Generating ā%(map)sā");

LoadingWindow.prototype.ClassSetupWindowPages.TitleDisplay.prototype.Loading = translate("Loading ā%(map)sā");
