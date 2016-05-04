Meteor.publish("invoices", function (invoiceQueryState, limit) {
  return Invoices.byTimeRange (invoiceQueryState, limit);
});
