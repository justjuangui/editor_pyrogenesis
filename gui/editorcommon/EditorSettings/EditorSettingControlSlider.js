/**
 * This class is implemented by editor settings that are controlled by a slider.
 */
class EditorSettingControlSlider extends EditorSettingControl
{
	constructor(...args)
	{
		super(...args);

		this.isInGuiUpdate = false;
		this.isPressing = false;

		this.slider.onValueChange = this.onValueChangeSuper.bind(this);
		this.slider.onPress = this.onPress.bind(this);
		this.slider.onRelease = this.onRelease.bind(this);

		if (this.MinValue !== undefined)
			this.slider.min_value = this.MinValue;

		if (this.MaxValue !== undefined)
			this.slider.max_value = this.MaxValue;
	}

	setControl(editorSettingControlManager)
	{
		let row = editorSettingControlManager.getNextRow("sliderSettingFrame");
		this.frame = Engine.GetGUIObjectByName("sliderSettingFrame[" + row + "]");
		this.slider = Engine.GetGUIObjectByName("sliderSettingControl[" + row + "]");
		this.valueLabel = Engine.GetGUIObjectByName("sliderSettingLabel[" + row + "]");

		let labels = this.frame.children[0].children;
		this.title = labels[0];
		this.label = labels[1];
	}

	setControlTooltip(tooltip)
	{
		this.slider.tooltip = tooltip;
		this.valueLabel.tooltip = tooltip;
	}

	setControlHidden(hidden)
	{
		this.slider.hidden = hidden;
		this.valueLabel.hidden = hidden;
	}

	setSelectedValue(value, caption)
	{
		if (!this.isPressing)
		{
			this.isInGuiUpdate = true;
			this.slider.value = value;
			this.isInGuiUpdate = false;
		}

		this.label.caption = caption;
		this.valueLabel.caption = caption;
	}

	onValueChangeSuper()
	{
		if (!this.isInGuiUpdate && !this.timer)
			this.onValueChange(this.slider.value);
	}

	onPress()
	{
		this.isPressing = true;
	}

	onRelease()
	{
		this.isPressing = false;
	}
}

EditorSettingControlSlider.prototype.UnknownValue =
	translateWithContext("settings value", "Unknown");
