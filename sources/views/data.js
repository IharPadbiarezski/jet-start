import {JetView} from "webix-jet";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

export default class DataView extends JetView {
	config() {
		let tabbar = {
			view: "tabbar",
			multiview: true,
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

		let countriesView = {
			id: "countries_view",
			view: "datatable",
			css: "align-center",
			scroll: "y",
			columns: [
				{id: "id", header: "", width: 50, sort: "int"},
				{id: "Name", header: "Name", fillspace: true, sort: "string"}
			]
		};

		let statusesView = {
			id: "statuses_view",
			view: "datatable",
			scroll: "y",
			css: "align-center",
			columns: [
				{id: "Name", header: "Name", fillspace: true, sort: "string"},
				{id: "Icon", header: "Icon", fillspace: true, sort: "string"}
			]
		};


		return {
			rows: [
				{view: "label", label: "Data", align: "center", localId: "label", css: "contact_label"},
				tabbar,
				{
					animate: false,
					cells: [
						countriesView, statusesView
					]
				},
				{cols: [{view: "button", value: "Add"}, {view: "button", value: "Delete"}]}
			]
		};
	}

	init() {
		const countriesView = this.$$("countries_view");
		countriesView.parse(countries);
		const statusesView = this.$$("statuses_view");
		statusesView.parse(statuses);
	}
}
