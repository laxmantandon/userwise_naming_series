frappe.ui.form.on('User Naming Series', {
	refresh(frm) {
		
	},
	
	user_doctype: function(frm) {
	    frappe.db.get_list('Property Setter', {
	        filters: {
	            doc_type: frm.doc.user_doctype,
	            field_name: 'naming_series',
				property: 'options'
	        },
	        fields: ["value"]
	    })
	    .then((x) => {
	        if (x.length > 0) {
    	        cur_frm.set_df_property("user_naming_series", "options", x[0].value);
    		    // cur_frm.set_value("user_naming_series", x[0].value);	            
	        } else {
				cur_frm.set_df_property("user_naming_series", "options", "");
	            frappe.msgprint({message: "Could not find property setter\n Update Naming Series first", title: "Error", indicator: "red"});
	        }

		}, err => {
			cur_frm.set_df_property("user_naming_series", "options", "");
		    frappe.msgprint({message: "Could not find property setter. Update Naming Series first", title: "Error", indicator: "red"});
		});
	}
});