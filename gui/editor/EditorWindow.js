class EditorWindow extends BaseSetupWindow
{
	closePage()
	{
		// TODO: Validate if we can close the ditor (saveMap and different things)
		Engine.EndGame();

		super.closePage();
	}
}
