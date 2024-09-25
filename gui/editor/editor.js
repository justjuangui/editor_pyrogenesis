
var editorWindow;

function init(initData, hotloadData)
{
	// In the editor the map is reveales for all
	// we use here because preventing change settings from the map
	MapEditor.RevealMap();

	// disabled constraint in camera
	Engine.GameView_SetConstrainCameraEnabled(false);
	Engine.SetCameraData(140, 720, -140, 0.87, 0.51, 1);

	if (!editorWindow)
		editorWindow = new EditorWindow(initData, hotloadData);
}

function getHotloadData()
{
	return editorWindow.getHotloadData();
}

function handleInputBeforeGui(ev, hoveredObject)
{
	return editorWindow.onHandleInputBeforeGui(ev, hoveredObject);
}

function handleInputAfterGui(ev)
{
	return editorWindow.onHandleInputAfterGui(ev);
}
