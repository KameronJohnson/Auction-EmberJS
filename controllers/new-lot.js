Auction.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        era: this.get('era'),
      });
      newLot.save();
      this.transitionToRoute('lots');
    }
  }
});
