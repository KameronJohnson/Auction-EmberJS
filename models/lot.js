Auction.Lot = DS.Model.extend({
  era: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
