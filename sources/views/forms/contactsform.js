import {JetView} from "webix-jet";
import {countries} from "../../models/backenddata/countries";
import {statuses} from "../../models/backenddata/statuses";
import {contacts} from "../../models/backenddata/contacts";

export default class ContactsForm extends JetView {
	config() {
		const _ = this.app.getService("locale")._;
		return {
			view: "form",
			localId: "form",
			elements: [
				{
					view: "text",	name: "Name", label: _("User Name"), invalidMessage: "Please entry your name"
				},
				{
					view: "text", name: "Email", label: _("Email"), invalidMessage: "Please entry a valid email"
				},
				{
					view: "combo",
					name: "Country",
					label: _("Country"),
					options: {
						body: {
							data: countries, template: "#Name#"
						}
					}
				},
				{
					view: "combo",
					name: "Status",
					label: _("Status"),
					options: {body: {
						data: statuses, template: "#Name#"}}
				},
				{
					view: "button",
					value: _("Save"),
					css: "webix_primary",
					click: () => {
						this.updateContact();
					}
				},
				{}
			],
			rules: {
				Name: webix.rules.isNotEmpty,
				Email: webix.rules.isEmail
			}
		};
	}

	urlChange(view) {
		contacts.waitData.then(() => {
			view.select(view.getFirstId());
		});
		const id = this.getParam("id");
		const values = contacts.getItem(id);
		let form = this.$$("form");
		form.clearValidation();
		if (values) { view.setValues(values); }
	}

	updateContact() {
		let form = this.$$("form");
		const values = form.getValues();
		const id = this.getParam("id");
		if (contacts.exists(id)) {
			if (this.$$("form").validate()) {
				contacts.updateItem(id, values);
				webix.message({type: "success", text: "The contact is updated!"});
			}
		}
		else {
			webix.message({type: "debug", text: "Sorry, you cann't update a non-existen contact. Please, choose another contact"});
			form.clear();
			form.clearValidation();
		}
	}
}
