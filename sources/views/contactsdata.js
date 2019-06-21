import {JetView} from "webix-jet";
import {contacts} from "../models/contacts";

export default class ContactsData extends JetView {
	config() {
		return {
			rows: [
				{view: "label", label: "Contacts", align: "center", localId: "label", css: "contact_label"},
				{
					view: "list",
					select: true,
					localId: "list",
					scroll: false,
					template: "#Name# - #Email#  <span class='webix_icon wxi-close rmvicon'></span>",
					on:{ 
						onAfterSelect: (id) => { 
							this.show(`../start?id=${id}`);
						 }
					}
					,
					onClick: {
						rmvicon: (e, id) => {
							this.webix.confirm({
								text: "Are you sure you want to remove the contact?"
							}).then(() => {
								this.$$("list").remove(id);
							});
						}
					}
				}
			]
		};
	}

	init() {
		const list = this.$$("list");
		list.parse(contacts);
		list.select(list.getFirstId());
	}
}
