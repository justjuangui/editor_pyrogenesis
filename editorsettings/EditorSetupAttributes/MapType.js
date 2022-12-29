EditorSetupSettings.prototype.Attributes.MapType = class extends EditorSetupSetting
{
	init()
	{
		this.mapType = undefined;
	}

	toInitAttributes(attribs)
	{
		attribs.mapType = this.mapType;
	}

	fromInitAttributes(attribs)
	{
		if (attribs.mapType)
			this.mapType = this.setMapType(attribs.mapType);
	}

	setMapType(newMapType)
	{
		this.mapType = newMapType;
	}

	getTitleDescription()
	{
		const findResult = this.MapTypes.filter(options => options.Name === this.mapType);
		return {
			label: translateWithContext("editor setup", "Map Type"),
			value: findResult.length > 0 ? findResult[0].Title : translateWithContext("editor setup", "Undefined")
		}
	}
};

EditorSetupSettings.prototype.Attributes.MapType.prototype.MapTypes = [
	{
		"Name": "scenario",
		"Title": translateWithContext("map", "Scenario"),
		"Description": translate("A map with a predefined landscape and matchsettings."),
		"Path": "maps/scenarios/",
		"Suffix": ".xml",
		"GetData": Engine.LoadMapSettings,
		"CheckIfExists": mapPath => Engine.FileExists(mapPath + ".xml")
	},
	{
		"Name": "skirmish",
		"Title": translateWithContext("map", "Skirmish"),
		"Description": translate("A map with a predefined landscape and number of players. Freely select the other game settings."),
		"Default": true,
		"Path": "maps/skirmishes/",
		"Suffix": ".xml",
		"GetData": Engine.LoadMapSettings,
		"CheckIfExists": mapPath => Engine.FileExists(mapPath + ".xml")
	},
	{
		"Name": "random",
		"Title": translateWithContext("map", "Random"),
		"Description": translate("Create a unique map with a different resource distribution each time. Freely select the number of players and teams."),
		"Path": "maps/random/",
		"Suffix": ".json",
		"GetData": mapPath => Engine.ReadJSONFile(mapPath + ".json"),
		"CheckIfExists": mapPath => Engine.FileExists(mapPath + ".json")
	}
];
