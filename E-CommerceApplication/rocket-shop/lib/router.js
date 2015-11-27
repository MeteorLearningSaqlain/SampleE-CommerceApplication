Router.configure({
	layoutTemplate : 'layout', // Base Template
	loadingTemplate : 'loading', // A custom loading page
	notFoundTemplate : 'notFound' // A custom 404 page
});

// Routing by specifying urls
Router.route("/", {
	name : "homeIndex", // Name of the template that must be rendered
	// The variables that are passed to the template.
	data : function(){
		return {
			message : "Welcome to the Rocket Shop"
		}
	}
});

Router.route("/about", {
	name : "homeAbout",
});

Router.route("/contact", {
	name : "homeContact",
});

// Route with a parameter sku
Router.route("/products/:sku", {
	name : "productsShow",
	data : function(){
		return Products.findOne({sku: this.params.sku})
		}
});
// Multiple parameters can be passed as /route/:param_1/:param_2

Router.route("/vendors/:slug", {
	name : "vendorsShow",
	data : function(){
		return Vendors.findOne({slug: this.params.slug})
		}
});

Router.route("/cart", {
	name : "cartShow"
});

Router.route("/checkout", {
	name : "checkoutShow"
});
