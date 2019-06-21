import {JetView} from "webix-jet";
import {countries} from "../../models/countries";
import {statuses} from "../../models/statuses";

export default class ContactsForm extends JetView {
	config() {
		return {
			view: "form",
			localId: "form",
			elements: [
				{
					view: "text",	name: "name", label: "User Name"
				},
				{
					view: "text", name: "email", label: "Email"
				},
				{
					view: "combo",
					name: "country",
					label: "Country",
					options: {
						body: {
							data: countries, template: "#Name#"
						}
					}
				},
				{
					view: "combo",
					name: "status",
					label: "Status",
					options: {body: {
						data: statuses, template: "#Name#"}}
				},
				{
					view: "button",
					value: "Save",
					click: () => {
						this.addRow();
					}
				},
				{}
			],
			rules: {
				name: webix.rules.isNotEmpty,
				email: webix.rules.isEmail
			}
		};
	}

	init() {
	}

	addRow() {
		const form = this.getRoot();
		if (form.validate()) {
			
		}
	}
}
