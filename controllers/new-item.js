Auction.NewItemController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var item = this.get('model');
      item.save();

      var controller = this;
      comment.get('lot').then(function(lot) {
        lot.save();
        controller.transitionToRoute('lot', lot);
      });
    }
  }
});
