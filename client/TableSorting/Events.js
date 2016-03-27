//Events: click on Time button filter invoices
Template.bTotal.events({
  'click button': function () {
   SetSortParam("total");
  }});

Template.bCreatedAt.events({
  'click button': function () {
     SetSortParam("createdAt");
   
  }});

 function SetSortParam(name){
  var sortParam = Session.get("sortInvoices");
  var oldValue = sortParam.sort[name];
  var newValue =1;
  if (oldValue)
  {
    newValue = sortParam.sort[name] * (-1);
  }
   var tab = {};
   tab[""+name] = newValue;
  
  sortParam.sort = tab;
  Session.set("sortInvoices",sortParam);
 }


