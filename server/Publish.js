Meteor.publish("invoices", function (filter,sortBy,sortOrder,limit) {
  return Invoices.byTimeRange (filter,sortBy,sortOrder,limit);
});