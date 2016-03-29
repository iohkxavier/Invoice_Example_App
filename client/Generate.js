//Event: generate all invoices by clicking on the "generate" button
Template.Generate.events({
  'click button': function () {
      Meteor.call('generateInvoices');
    }
  });