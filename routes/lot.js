Auction.LotRoute = Ember.Route.extend({
  model: function(params) {
    return lots.findBy('id', params.lot_id);
  }

});
