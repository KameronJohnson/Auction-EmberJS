Auction.Item = DS.Model.extend({
  info: DS.attr(),
  bidNumber: DS.attr(),
  image: DS.attr(),
  year: DS.attr(),
  type: DS.attr(),
  price: DS.attr(),
  miles: DS.attr(),
  color: DS.attr(),

  lot: DS.belongsTo('lot', {async: true})
});
