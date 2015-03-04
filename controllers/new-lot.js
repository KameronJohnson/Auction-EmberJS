Auction.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        description: this.get('description'),
        bidNumber: this.get('bidNumber')
      });
      newLot.save();
      this.transitionToRoute('lots');
    }
  }
});
