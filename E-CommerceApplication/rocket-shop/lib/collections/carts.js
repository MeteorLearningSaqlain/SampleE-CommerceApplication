Carts = new Mongo.Collection("carts");

Carts.getCart = function(userKey){
	var cart = Carts.findOne({userKey: userKey});
  	if(!cart)
  	{
    	cart = {
      		userKey: userKey,
      		created_at: new Date(),
     		items: [],
    		notes: [{
        		note: "Cart created",
        		created_at: new Date()
      		}],
      		status: "open",
      		itemCount: 0,
      		total: 0
    	};
    Carts.insert(cart);
   }
  return cart;
};

Carts.allow({
  update: function(userid, product){
    return true;
  },
  insert: function(userid, product){
    return true;
  },
  remove: function(userid, product){
    return true;
  }
});
