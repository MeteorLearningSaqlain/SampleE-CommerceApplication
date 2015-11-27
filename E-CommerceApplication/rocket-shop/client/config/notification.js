Meteor.startup(function(){

	sAlert.config({
		effect:'',
		position:'bottom',
		timeout: 2000,
		html: false,
		onRouteClose:true,
		stack: true,
		offset: 0
	});
	
});