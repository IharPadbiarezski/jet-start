import {JetView, plugins} from "webix-jet";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";
import CommonData from "./commondata";

export default class DataView extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		let tabbar = {
			view: "tabbar",
			multiview: true,
			id: "data:tabbar",
			options: [
				{
					value: _("Countries"),
					id: "data:countries"
				},
				{
					value: _("Statuses"),
					id: "data:statuses"
				}
			],
			height: 50
		};

		return {
			rows: [
				{view: "label", label: _("Data"), align: "center", localId: "label", css: "contact_label"},
				tabbar,
				{
					animate: false,
					cells: [
						{id: "data:countries", $subview: new CommonData(this.app, "", countries)},
						{id: "data:statuses", $subview: new CommonData(this.app, "", statuses)}
					]
				}

			]
		};
	}

	init() {
		this.use(plugins.Menu, "data:tabbar");
	}
}
