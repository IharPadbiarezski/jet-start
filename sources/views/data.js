import {JetView} from "webix-jet";
import {countries} from "../models/countries";
import {statuses} from "../models/statuses";

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

		let countriesView = {
			id: "countries_view",
			view: "datatable",
			css: "align-center",
			select: true,
			scroll: "y",
			editable: true,
			editaction: "dblclick",
			columns: [
				{id: "id", header: "", width: 150, sort: "int"},
				{id: "Name", header: "Name", fillspace: true, editor: "text", sort: "string"}
			]
		};

		let statusesView = {
			id: "statuses_view",
			view: "datatable",
			scroll: "y",
			editable: true,
			editaction: "dblclick",
			css: "align-center",
			select: true,
			columns: [
				{id: "Name", header: "Name", fillspace: true, editor: "text", sort: "string"},
				{id: "Icon", header: "Icon", fillspace: true, editor: "text", sort: "string"}
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
				{cols: [{view: "button",
					value: "Add",
					click: () => {
						this.addItem();
					}
				},
				{view: "button", value: "Delete", click: () => { this.deleteItem(); }}]}
			]
		};
	}

	init() {
		const countriesView = this.$$("countries_view");
		countriesView.parse(countries);
		const statusesView = this.$$("statuses_view");
		statusesView.parse(statuses);
		this.$$("countries_view").attachEvent("onAfterSelect", (id) => { this.selectedId = id.id; });
		this.$$("statuses_view").attachEvent("onAfterSelect", (id) => { this.selectedId = id.id; });
	}

	addItem() {
		if (this.$$("tabbarApp").getValue() === "countries_view") {
			this.$$("countries_view").add({id: "", Name: "New Name"});
		}
		else {
			this.$$("statuses_view").add({Name: "New Name", Icon: "New Icon"});
		}
	}

	deleteItem() {
		if (this.$$("tabbarApp").getValue() === "countries_view") {
			this.$$("countries_view").remove(this.selectedId);
		}
		else {
			this.$$("statuses_view").remove(this.selectedId);
		}
	}
}
