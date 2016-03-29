//session values by default
Session.set('invoiceSortOrder', 'asc');
Session.set('invoiceSortBy', 'createdAt');
Session.set('invoiceTimeRange', 'today');

//returns data for template
Template.Invoices.helpers({
    invoices: () => {
     //console.log("helpers");
     return Template.instance().data; //fetch data from router
   }
});
