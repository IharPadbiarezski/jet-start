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
					view: "button",
					value: "Save",
					click: () => {
						console.log("Hi")
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
