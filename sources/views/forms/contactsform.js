import {JetView} from "webix-jet";
import {contacts} from "../../models/contacts";
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
					options: { body: {
						data: countries, template: "#Name#" }}
				},
				{
					view: "combo",
					name: "status",
					label: "Status",
					options: { body: {
						data: statuses, template: "#Name#" }}
				},
				{
					view: "button",
					value: "Save",
					click: () => {
						const form = this.getRoot();
						if (form.validate()) {
							console.log("Hi")
						}
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
		// this.$$("form").setValues(this.getRoot().$$("list").getSelectedId());
	}
}
