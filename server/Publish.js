Meteor.publish("invoices", function (filter,sortBy,sortOrder) {
  return Invoices.byTimeRange (filter,sortBy,sortOrder);
});