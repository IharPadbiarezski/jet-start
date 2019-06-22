import {JetView} from "webix-jet";

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
					editaction: "dblclick"
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
		view.queryView("datatable").parse(this._tdata);
	}

	addRow() {
		const datatable = this.$$("commonDataTable");
		datatable.add({Name: "New Name", Icon: "New Icon"});
		webix.message({type: "success", text: "New item is added!"});
	}

	deleteRow() {
		const datatable = this.$$("commonDataTable");
		const id = this.$$("commonDataTable").getSelectedId();
		if (datatable.isSelected(id)) {
			datatable.remove(datatable.getSelectedId());
			webix.message({type: "success", text: "The item is deleted!"});
		}
	}
}
