import {JetView} from "webix-jet";
import ContactsData from "./contactsdata";
import ContactsForm from "./forms/contactsform";
import {contacts} from "../models/contacts";

export default class ContactsView extends JetView {
	config() {
		return {
			cols: [
				{id: "gridView", $subview: ContactsData},
				{id: "formView", $subview: ContactsForm}
			]
		};
	}

	ready(view) {
		const form = view.queryView({view: "form"});
		// const list = view.queryView({view: "list"});
		console.log(form);
		let id = this.getParam("id");
		let contactItem = contacts.getItem(id);
		console.log(contactItem);
		form.setValues(contactItem);
	}
}
