import {JetView} from "webix-jet";
import {contacts} from "../../models/contacts";

export default class ContactsForm extends JetView {
	config() {
		return {
			view: "form",
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
					options: ["Belarus", "Russia", "Ukraine"]
				},
				{
					view: "combo",
					name: "status",
					label: "Status",
					options: ["Standard", "Silver", "Gold", "Platinum"]
				},
				{
					view: "button",
					value: "Save",
					click: () => {
						const form = this.getRoot();
						if (form.validate()) {
							// this.saveContact(form.getValues());
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
}
