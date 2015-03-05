Auction.NewItemController = Ember.ObjectController.extend({
  // needs : ['lot'],
  actions: {
    save: function() {
      var item = this.get('model');
      item.save();

      var controller = this;
      item.get('lot').then(function(lot) {
        lot.save();
        controller.transitionToRoute('lot', lot);
      });
    }
  }
});
