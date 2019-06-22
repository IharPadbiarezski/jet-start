import {JetView} from "webix-jet";

export default class SettingsView extends JetView {
	config() {
		const lang = this.app.getService("locale").getLang();
		const _ = this.app.getService("locale")._;
		return {
			rows: [
				{view: "label", label: _("Settings"), align: "center", localId: "label", css: "settings_label"},
				{view: "segmented",
					inputWidth: 250,
					id: "lng",
					options: [
						{id: "en", value: "EN"},
						{id: "ru", value: "RU"}
					],
					click: () => this.toggleLanguage(),
					value: lang
				}
			]
		};
	}

	toggleLanguage() {
		const langs = this.app.getService("locale");
		const value = this.$$("lng").getValue();
		langs.setLang(value);
	}
}
