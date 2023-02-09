EditorSettings.prototype.Attributes.EditorPlayerGeneral = class extends EditorSetting
{
	init()
	{
		this.playerNumber = 2;
		this.playerData = [];
		this.playerIndex = 0;
		this.maxPlayer = this.MAX_PLAYERS;
	}

	toInitAttributes(attribs)
	{
		attribs.settings.PlayerData = this.playerData;
	}

	fromInitAttributes(attribs)
	{
		this.playerData = attribs.settings.PlayerData || [];

		// Skipt Gaia
		if (this.playerData && this.playerData[0] == null)
			this.playerData.shift();

		this.playerNumber = this.playerData.length;
		this.setPlayerIndex(this.playerNumber);
	}

	setPlayerData(playerData, index)
	{
		this.playerData[index] = playerData || { "civ": this.DEFAULT_CIV };
	}

	setPlayerNumber(playerNumber)
	{
		let newPlayerNumber = Math.max(0, Math.min(playerNumber, this.maxPlayer));
		let currenPlayerNumber = this.playerNumber;
		// add new player data
		while (currenPlayerNumber < newPlayerNumber)
			this.setPlayerData(undefined, currenPlayerNumber++);

		//remove player data
		while (this.playerData.length > newPlayerNumber)
			this.playerData.splice(-1);

		this.playerNumber = newPlayerNumber;
		this.setPlayerIndex(this.playerIndex);
	}

	setPlayerIndex(playerIndex)
	{
		this.playerIndex = Math.max(0, Math.min(playerIndex, this.playerNumber - 1));
	}
};

EditorSettings.prototype.Attributes.EditorPlayerGeneral.prototype.MAX_PLAYERS = 8;
EditorSettings.prototype.Attributes.EditorPlayerGeneral.prototype.DEFAULT_CIV = "editor";
