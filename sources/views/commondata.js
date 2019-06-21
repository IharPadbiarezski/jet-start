import {JetView} from "webix-jet";

export default class CommonData extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._tdata = data;
	}

	config() {
		return {
			rows: [
				{
					view: "datatable",
					editable: true,
					autoConfig: true,
					editaction: "dblclick"
				},
				{
					cols: [
						{gravity: 2},
						{view: "button", value: "Add", css: "webix_primary", click: () => { this.addRow(); }},
						{view: "button", value: "Delete", click: () => { this.deleteRow(); }}
					]
				}
			]

		};
	}

	init(view) {
		view.queryView("datatable").parse(this._tdata);
		this.getRoot().queryView("datatable").attachEvent("onAfterSelect", (id) => { this.selectId = id.id; });
	}

	addRow() {
		if (this.getRoot().queryView("datatable").$scope._container.id === "data:countries") {
			this.getRoot().queryView("datatable").add({id: "", Name: "New Name"});
		}
		else {
			this.getRoot().queryView("datatable").add({Name: "New Name", Icon: "New Icon"});
		}
	}

	deleteRow() {
		if (this.getRoot().queryView("datatable").$scope._container.id === "data:countries") {
			this.getRoot().queryView("datatable").remove(1);
		}
		else {
			this.getRoot().queryView("datatable").remove(1);
		}
	}
}
