Auction.Item = DS.Model.extend({
  description: DS.attr(),
  bidNumber: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
