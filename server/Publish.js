Meteor.publish("invoices", function (filter,sortBy,sortOrder) {
	console.log("publish filter:"+filter+ " sortBy:"+sortBy+" sortOrder:"+sortOrder);

  return Invoices.byTimeRange (filter,sortBy,sortOrder);
});