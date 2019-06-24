import {JetView} from "webix-jet";
import {countries} from "../models/backenddata/countries";
import {statuses} from "../models/backenddata/statuses";

export default class CommonData extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._tdata = data;
	}

	config() {
		const _ = this.app.getService("locale")._;
		return {
			rows: [
				{
					view: "datatable",
					localId: "commonDataTable",
					editable: true,
					autoConfig: true,
					editaction: "dblclick",
					// on: {
					// 	onAfterSelect: (id) => {
					// 		let url = this.getUrlString();
					// 		if (url.includes("countries")) {
					// 			this.show(`../data?countries=undefined?id=${id}`);
					// 		}
					// 		if (url.includes("statuses")) {
					// 			this.show(`../data?statuses=undefined?id=${id}`);
					// 		}
					// 	}
					// }
				},
				{
					cols: [
						{gravity: 2},
						{view: "button", value: _("Add"), css: "webix_primary", click: () => { this.addRow(); }},
						{view: "button", value: _("Delete"), click: () => { this.deleteRow(); }}
					]
				}
			]

		};
	}

	init(view) {
		view.queryView("datatable").sync(this._tdata);
	}

	addRow() {
		// let url = this.getUrlString();
		// if (url.includes("countries")) {
		// 	countries.add({Name: "New Name", Icon: "New Icon"});
		// 	this.showMessage("success", "New country added");
		// }
		// if (url.includes("statuses")) {
		// 	statuses.add({Name: "Status Name", Icon: "New Icon"});
		// 	this.showMessage("success", "New status added");
		// }


		//use waitSave and open this element for editing after it is saved
		// const id = 
		this._tdata.add({});
		// this.$$("commonnDataTable").editRow(id);
	}

	deleteRow() {
		// let url = this.getUrlString();
		// let id = this.getParam("id");
		// if (url.includes("countries")) {
		// 	countries.waitData.then(() => {
		// 		this.webix.confirm({
		// 			text: "Are you sure you want to remove the country?"
		// 		}).then(() => {
		// 			if (id) { countries.remove(id); }
		// 			this.showMessage("success", "The country is deleted");
		// 		});
		// 		return false;
		// 	});
		// }
		// if (url.includes("statuses")) {
		// 	statuses.waitData.then(() => {
		// 		this.webix.confirm({
		// 			text: "Are you sure you want to remove the status?"
		// 		}).then(() => {
		// 			if (id) { statuses.remove(id); }
		// 			this.showMessage("success", "The status is deleted");
		// 		});
		// 		return false;
		// 	});
		// }

		const id  = this.$$("commonDataTable").getSelectedId();
		if(id){
			webix.confirm({
				text: "Are you sure you want to remove the status?"
			}).then(() => {
				 this._tdata.remove(id);
				this.showMessage("success", "The status is deleted");
			});
		}
	}

	showMessage(type, text) {
		webix.message({type: `${type}`, text: `${text}`});
	}
}
