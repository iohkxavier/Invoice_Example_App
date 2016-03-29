//Events: click on Time button filter invoices
Template.Today.events({
  'click button': function () {
  	Session.set('invoiceTimeRange','today');
  }});

Template.Week.events({
  'click button': function () {
  	var d = new Date();
  	Session.set('invoiceTimeRange','week');
  }});

Template.Month.events({
  'click button': function () {
  	var d = new Date();
  	Session.set('invoiceTimeRange','month');
  }});

Template.All.events({
  'click button': function () {
   Session.set('invoiceTimeRange','all');
  }});
