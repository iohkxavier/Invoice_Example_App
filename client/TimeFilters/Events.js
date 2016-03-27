//Events: click on Time button filter invoices
Template.Today.events({
  'click button': function () {
  	var d = new Date();
  	d.setDate(d.getDate()-1);//minus 1 day
    SetSelector(d); 
  }});

Template.Week.events({
  'click button': function () {
  	var d = new Date();
  	d.setDate(d.getDate()-7);//minus 7 days
  	 SetSelector(d); 
  }});

Template.Month.events({
  'click button': function () {
  	var d = new Date();
  	d.setMonth(d.getMonth()-1);//minus 1 month
  	 SetSelector(d); 
  }});

Template.All.events({
  'click button': function () {
   SetSelector(null); 
  }});


function SetSelector(gt) {
  var selector = {};
  if (gt)
  {
    var subselector = {};
    subselector['$gt'] = gt;
    subselector['$lte'] = new Date();
    selector['createdAt'] = subselector;
  }
   Session.set('filterInvoices', selector);
}

