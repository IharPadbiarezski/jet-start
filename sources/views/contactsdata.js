import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";

export default class ContactsData extends JetView {
	config() {
		return {
			rows: [
				{view: "label", label: "Contacts", align: "center", localId: "label", css: "contact_label"},
				{
					view: "list", localId: "list", scroll: false, template: "#Name# - #Email#  <span class='webix_icon wxi-close rmvicon'></span>"
				}
			]
		};
	}

	init() {
		const list = this.$$("list");
		list.parse(contacts);
	}
}
