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
					on: {
						onAfterSelect: (id) => {
							this.show(`../start?id=${id}`);
						}
					},
					onClick: {
						rmvicon: (e, id) => {
							this.webix.confirm({
								text: "Are you sure you want to remove the contact?"
							}).then(() => {
								contacts.remove(id);
							});
							return false;
						}
					}
				},
				{
					view: "button",
					value: "Add",
					css: "webix_primary",
					click: () => {
						this.addContact();
					}
				}
			]
		};
	}

	init() {
		contacts.waitData.then(() => {
			const list = this.$$("list");
			list.sync(contacts);

			let id = this.getParam("id");

			if (!id || !contacts.exists(id)) { id = contacts.getFirstId(); }

			if (id) { list.select(id); }
		});
	}

	addContact() {
		contacts.add({ });
		webix.message({type: "success", text: "The contact is added!"});
	}
}
