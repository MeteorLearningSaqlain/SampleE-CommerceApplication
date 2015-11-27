// featured is a helper function that returns a set of featured Products.
// In other words a set of Product objects. The method featured() is defined
// in /lib/collections/products.js

// Syntax for template helpers: 
// Template.template_name.helpers({
//	   data dictionary(can be variables or functions)
// });
Template.homeIndex.helpers({
	featured: function(){
		return Products.featured();
	}
});