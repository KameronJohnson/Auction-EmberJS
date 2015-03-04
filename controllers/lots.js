Auction.LotsController = Ember.ArrayController.extend({


  actions: {
    addLots: function() {
      var id = (lots.length + 1).toString();
      lots.addObject({id: id, description: this.description, bidNumber: this.bidNumber})
    }

 }

});
