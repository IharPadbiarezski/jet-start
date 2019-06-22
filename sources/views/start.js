import {JetView} from "webix-jet";
import ContactsData from "./contactsdata";
import ContactsForm from "./forms/contactsform";

export default class ContactsView extends JetView {
	config() {
		return {
			cols: [
				{id: "gridView", $subview: ContactsData},
				{id: "formView", $subview: ContactsForm}
			]
		};
	}
}
