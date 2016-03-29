//by default, load all invoices by creation date order by asc
Session.set('invoiceSortOrder', 1);
Session.set('invoiceSortBy', 'createdAt');
Session.set('invoiceTimeRange', 'all');


//returns data for template
Template.Invoices.helpers({
    invoices: () => {
       return Invoices.byTimeRange(Session.get('invoiceTimeRange'), Session.get('invoiceSortBy'), Session.get('invoiceSortOrder'));
   }
});

Template.Invoices.onCreated(function () {
var self = this;
self.autorun(function() {//autorun() => rerun everytime Session values change
   self.subscribe('invoices', 
      Session.get('invoiceTimeRange'), 
      Session.get('invoiceSortBy'), 
      Session.get('invoiceSortOrder'));
  });
});
