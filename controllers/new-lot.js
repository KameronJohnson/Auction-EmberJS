Auction.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        title: this.get('title'),
      });
      newLot.save();
      this.transitionToRoute('lots');
    }
  }
});
