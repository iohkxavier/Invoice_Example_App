//Events: click on Time button filter invoices
Template.bTotal.events({
  'click button': function () {
    Session.set('invoiceSortBy', 'total');
    Session.set('invoiceSortOrder',Session.get('invoiceSortOrder')*(-1));
  }});

Template.bCreatedAt.events({
  'click button': function () {
     Session.set('invoiceSortBy', 'createdAt');
   Session.set('invoiceSortOrder',Session.get('invoiceSortOrder')*(-1));
  }});

 


