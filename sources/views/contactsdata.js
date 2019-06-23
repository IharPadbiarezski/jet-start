import {JetView} from "webix-jet";
import {contacts} from "../models/backenddata/contacts";
import {statuses} from "../models/backenddata/statuses";
import {countries} from "../models/backenddata/countries";

export default class ContactsData extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		return {
			rows: [
				{view: "label", label: _("Contacts"), align: "center", localId: "label", css: "contact_label"},
				{
					view: "list",
					select: true,
					localId: "list",
					scroll: "y",
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
					value: _("Add"),
					css: "webix_primary",
					click: () => {
						this.addContact();
					}
				}
			]
		};
	}

	init() {
		const list = this.$$("list");
		list.sync(contacts);

		webix.promise.all([
			contacts.waitData,
			countries.waitData,
			statuses.waitData
		]).then(() => {
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
