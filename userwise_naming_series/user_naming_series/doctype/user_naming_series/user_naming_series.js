// Copyright (c) 2021, Laxman and contributors
// For license information, please see license.txt

frappe.ui.form.on('User Naming Series', {
	// refresh: function(frm) {

	// }

	user_doctype: function(frm) {
		// frappe.db.get_value('DocType', frm.doc.user_doctype, "naming_series").then(naming => {
		// 	cur_frm.set_value("user_naming_series", naming)
		// })
	}
});
