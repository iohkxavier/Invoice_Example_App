//Event: generate all invoices by clicking on the "generate" button
Template.generate.events({
  'click button': function () {
    Meteor.call('generateInvoices');
    }
  });
