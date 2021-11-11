frappe.ui.form.on('Payment Entry', {
	refresh(frm) {
		frm.events.set_user_naming_series(frm);
	},
	
	payment_type: function(frm) {
	    frm.events.set_user_naming_series(frm);
	},
	
	
    set_user_naming_series: function(frm) {
        frappe.db.get_list('User Naming Series', {
				filters: {
					user_name: frappe.session.user,
					user_doctype: frm.doc.doctype,
					is_return: frm.doc.payment_type == 'Receive' ? 1 : 0
				},
				fields: ["*"]
			})
			.then((data) => {
			    if (data.length > 0) {
    				var naming_series = "";
					data.forEach(element => {
						naming_series += element.user_naming_series + "\n";
					})

    				cur_frm.set_df_property("naming_series", "options", naming_series);
					     
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