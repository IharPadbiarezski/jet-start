import {JetView, plugins} from "webix-jet";

export default class TopView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		let menu = {
			view: "menu",
			id: "top:menu",
			css: "app_menu",
			width: 200,
			layout: "y",
			select: true,
			template: obj => `<span class='webix_icon ${obj.icon}'></span> ${_(obj.value)}`,
			data: [
				{value: "Contacts", id: "start", icon: "wxi-file"},
				{value: "Data", id: "data", icon: "wxi-folder"},
				{value: "Settings", id: "settings", icon: "wxi-pencil"}
			]
		};

		let ui = {
			type: "clean",
			paddingX: 5,
			css: "app_layout",
			cols: [
				{
					paddingX: 5,
					paddingY: 10,
					rows: [{css: "webix_shadow_medium", rows: [menu]}]
				},
				{
					type: "wide",
					paddingY: 10,
					paddingX: 5,
					rows: [
						{$subview: true}
					]
				}
			]
		};

		return ui;
	}

	init() {
		this.use(plugins.Menu, "top:menu");
	}
}
