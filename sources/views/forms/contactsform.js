import {JetView} from "webix-jet";
import {countries} from "../../models/countries";
import {statuses} from "../../models/statuses";
import {contacts} from "../../models/contacts";

export default class ContactsForm extends JetView {
	config() {
		return {
			view: "form",
			localId: "form",
			elements: [
				{
					view: "text",	name: "Name", label: "User Name"
				},
				{
					view: "text", name: "Email", label: "Email"
				},
				{
					view: "combo",
					name: "Country",
					label: "Country",
					options: {
						body: {
							data: countries, template: "#Name#"
						}
					}
				},
				{
					view: "combo",
					name: "Status",
					label: "Status",
					options: {body: {
						data: statuses, template: "#Name#"}}
				},
				{
					view: "button",
					value: "Save",
					css: "webix_primary",
					click: () => {
						this.updateContact();
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

	urlChange(view) {
		const id = this.getParam("id");
		const values = contacts.getItem(id);

		if (values) { view.setValues(values); }

	}

	updateContact() {
		let form = this.$$("form");
		const values = form.getValues();
		const id = this.getParam("id");
		contacts.updateItem(id, values);
	}
}
