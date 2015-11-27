Template.cartShow.helpers({
	cart: function(){
		currentCart = Carts.getCart(userKey);
		return currentCart;
	}
});

Template.cartShow.events({
  	"click .remove-from-cart" : function(event){
    	event.preventDefault();
    	removeFromCart(this.sku, function(err,res){
      		if(err)
      		{
        		console.log(err);
      		}
      		else
      		{
        		//any items left?
        		if(currentCart.items.length === 0)
        		{
          			Router.go("homeIndex");
        		}
      		}
    	});
  	},

  	"change .item-qty" : function(event){
    	var rawValue = $(event.currentTarget).val();

      if(!isNaN(rawValue)){
        var newQty = parseInt(rawValue);
        var name = this.name;
        if(newQty === 0)
        {
          removeFromCart(this.sku);
        }
        else
        {
          this.quantity = parseInt(newQty);
          saveCart(currentCart, function (err, res){
            if (err) 
            {
              //console.log(err);
              sAlert.error(err);
            }
            else
            {
              //alert(name + " updated");
              sAlert.success(name + " updated");
            }
          });
        }
        //just to be sure
        $(event.currentTarget).val(newQty);
      }
      else
      {
        sAlert.error("That's not a number...");
      }
    } 
});