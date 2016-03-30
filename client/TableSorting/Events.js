//Events: click on Time button filter invoices
Template.bTotal.events({
  'click button': function () {
    Session.set('invoiceSortBy', 'total');
    Session.set('invoiceSortOrder', Session.get('invoiceSortOrder') === "asc" ? "desc" : "asc");
    Router.go("/"+Session.get("invoiceTimeRange")+"?sortedBy="+Session.get("invoiceSortBy")+"&sortOrder="+Session.get("invoiceSortOrder"));
  }});

Template.bCreatedAt.events({
  'click button': function () {
    Session.set('invoiceSortBy', 'createdAt');
    Session.set('invoiceSortOrder', Session.get('invoiceSortOrder') === "asc" ? "desc" : "asc");
    Router.go("/"+Session.get("invoiceTimeRange")+"?sortedBy="+Session.get("invoiceSortBy")+"&sortOrder="+Session.get("invoiceSortOrder"));
  }});

