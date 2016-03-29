//Events: click on Time button filter invoices
Template.Today.events({
  'click button': function () {
    Session.set('invoiceTimeRange','today');
    Router.go("/"+Session.get("invoiceTimeRange")+"?sortedBy="+Session.get("invoiceSortBy")+"&sortOrder="+Session.get("invoiceSortOrder"));
  	
  }});

Template.Week.events({
  'click button': function () {
  	Session.set('invoiceTimeRange','week');
    Router.go("/"+Session.get("invoiceTimeRange")+"?sortedBy="+Session.get("invoiceSortBy")+"&sortOrder="+Session.get("invoiceSortOrder"));
  }});

Template.Month.events({
  'click button': function () {
  	Session.set('invoiceTimeRange','month');
    Router.go("/"+Session.get("invoiceTimeRange")+"?sortedBy="+Session.get("invoiceSortBy")+"&sortOrder="+Session.get("invoiceSortOrder"));
  }});

Template.All.events({
  'click button': function () {
    Session.set('invoiceTimeRange','all');
    Router.go("/"+Session.get("invoiceTimeRange")+"?sortedBy="+Session.get("invoiceSortBy")+"&sortOrder="+Session.get("invoiceSortOrder"));
  }});
