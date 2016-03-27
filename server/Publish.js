Meteor.publish("invoices", function (filterParam,sortParam) {
  return Invoices.find(filterParam,sortParam); 
});