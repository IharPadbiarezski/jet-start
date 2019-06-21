import {JetView, plugins} from "webix-jet";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";
import CommonData from "./commondata";

export default class DataView extends JetView {
	config() {
		let tabbar = {
			view: "tabbar",
			multiview: true,
			id: "data:tabbar",
			options: [
				{
					value: "Countries",
					id: "data:countries"
				},
				{
					value: "Statuses",
					id: "data:statuses"
				}
			],
			height: 50
		};

		return {
			rows: [
				{view: "label", label: "Data", align: "center", localId: "label", css: "contact_label"},
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
