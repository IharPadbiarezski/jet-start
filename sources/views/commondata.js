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
					localId: "commonDataTable",
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
	}

	addRow() {
		const datatable = this.$$("commonDataTable");
		datatable.add({Name: "New Name", Icon: "New Icon"});
	}

	deleteRow() {
		const datatable = this.$$("commonDataTable");
		const id = this.$$("commonDataTable").getSelectedId();
		if (datatable.isSelected(id)) {
			datatable.remove(datatable.getSelectedId());
		}
	}
}
