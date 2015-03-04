Auction.LotsRoute = Ember.Route.extend({
  controllerName: 'lots',
  renderTemplate: function() {
    //lots.hbs
    this.render('lots');
  },
  model: function() {
    //return the lots array in store.js
    return lots;
  }
});
