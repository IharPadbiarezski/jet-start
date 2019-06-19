import {JetView} from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		return {
			rows: [
				{view: "label", label: "Settings", align: "center", localId: "label", css: "settings_label"},
				{view: "segmented",
					value: "ru",
					inputWidth: 250,
					options: [
						{id: "ru", value: "RU"},
						{id: "en", value: "EN"}
					]}
			]
		};
	}

	init() {
	}
}
