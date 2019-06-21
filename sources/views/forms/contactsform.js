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
						//save to model (collection)
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

	urlChange(view){
		const id = this.getParam("id");
		const values = contacts.getItem(id);

		if(values)
			view.setValues(values);

	}
}
