import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";

export default class ContactsView extends JetView {
	config() {
		return {
			cols: [
				{
					rows: [
						{view: "label", label: "Contacts", align: "center", localId: "label", css: "contact_label"},
						{
							view: "list", localId: "list", scroll: false, template: "#Name# - #Email#  <span class='webix_icon wxi-close rmvicon'></span>"
						}
					]
				},
				{
					view: "form",
					elements: [
						{
							view: "text",	name: "user_name", label: "User Name"
						},
						{
							view: "text", name: "email", label: "Email"
						},
						{}
					]
				}
			]};
	}

	init() {
		const list = this.$$("list");
		list.parse(contacts);
	}
}
