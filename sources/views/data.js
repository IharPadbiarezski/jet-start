import {JetView} from "webix-jet";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";
import DataTableView from "./datatable";

export default class DataView extends JetView {
	config() {
		let tabbar = {
			view: "tabbar",
			multiview: true,
			id: "tabbarApp",
			animate: {type: "flip", direction: "top"},
			options: [
				{
					value: "Countries",
					id: "countries_view"
				},
				{
					value: "Statuses",
					id: "statuses_view"
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
						{$subview: new DataTableView(this.app, "", countries), id: "countries_view"},
						{$subview: new DataTableView(this.app, "", statuses), id: "statuses_view"}
					]
				}
			]
		};
	}

	init() {
	}

	addItem() {
		// if (this.$$("tabbarApp").getValue() === "countries_view") {
		// 	this.$$("countries_view").add({id: "", Name: "New Name"});
		// }
		// else {
		// 	this.$$("statuses_view").add({Name: "New Name", Icon: "New Icon"});
		// }
	}

	deleteItem() {
		// if (this.$$("tabbarApp").getValue() === "countries_view" && this.selCountryId) {
		// 	this.$$("countries_view").remove(this.selCountryId);
		// }
		// else if (this.$$("tabbarApp").getValue() === "statuses_view" && this.selStatusId) {
		// 	this.$$("statuses_view").remove(this.selStatusId);
		// }
	}
}
