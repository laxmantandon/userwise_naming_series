frappe.ui.form.on('Sales Order', {
	refresh(frm) {
		frm.events.set_user_naming_series(frm);
	},
	
	is_return: function(frm) {
	    frm.events.set_user_naming_series(frm);
	},
	
	
    set_user_naming_series: function(frm) {
        frappe.db.get_list('User Naming Series', {
				filters: {
					user_name: frappe.session.user,
					user_doctype: frm.doc.doctype,
					is_return: frm.doc.is_return
				},
				fields: ["*"]
			})
			.then((data) => {
			    if (data.length > 0) {
    				cur_frm.set_df_property("naming_series", "options", data[0].user_naming_series);
    				frm.set_value("naming_series", data[0].user_naming_series);		        
			    } else {
			        frappe.msgprint({
			            title: "Error",
			            message: "Could not set naming series, create a User Naming Series"
			        });
			    }

			}, err => {
				frappe.msgprint(JSON.stringify(err));
			});
    }
	
})