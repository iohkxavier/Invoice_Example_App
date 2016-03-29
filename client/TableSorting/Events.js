//Events: click on Time button filter invoices
Template.bTotal.events({
  'click button': function () {
  	Session.set('invoiceSortBy', 'total');
  	if (Session.get('invoiceSortOrder') == "asc")
  	{
  		Session.set('invoiceSortOrder','desc');
  	}
  	else if (Session.get('invoiceSortOrder') == "desc")
  	{
  		Session.set('invoiceSortOrder','asc');
  	}
  	Router.go("/"+Session.get("invoiceTimeRange")+"?sortedBy="+Session.get("invoiceSortBy")+"&sortOrder="+Session.get("invoiceSortOrder"));
  }});

Template.bCreatedAt.events({
  'click button': function () {
    Session.set('invoiceSortBy', 'createdAt');
    if (Session.get('invoiceSortOrder') == "asc")
  	{
  		Session.set('invoiceSortOrder','desc');
  	}
  	else if (Session.get('invoiceSortOrder') == "desc")
  	{
  		Session.set('invoiceSortOrder','asc');
  	}
    Router.go("/"+Session.get("invoiceTimeRange")+"?sortedBy="+Session.get("invoiceSortBy")+"&sortOrder="+Session.get("invoiceSortOrder"));
  }});

