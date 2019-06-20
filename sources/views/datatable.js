import {JetView} from "webix-jet";

export default class DataTableView extends JetView {
	constructor(app, name, data) {
		super(app, name);
		this._gridData = data;
	}

	config() {
		return {
			rows: [
				{
					view: "datatable",
					autoConfig: true
				},
				{
					cols: [
						{view: "button", value: "Add", id: "addButton"},
				        {view: "button", value: "Delete", id: "deleteButton"}
					]
				}
			]

		};
	}

	init(view) {
		view.queryView("datatable").parse(this._gridData);
	}
}
