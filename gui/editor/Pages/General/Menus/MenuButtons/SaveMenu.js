editorMenus.Menus.SaveMenu = class
{
	constructor(menu, button)
	{
		this.button = button;
		this.button.caption = this.Caption;
		this.setupWindow = menu.setupWindow;
	}

	onPress()
	{
		Engine.SaveMap("maps/scenarios/demo.xml");
	}
}

editorMenus.Menus.SaveMenu.ORDER = 999;
editorMenus.Menus.SaveMenu.prototype.Caption = translateWithContext("editor", "Save");
