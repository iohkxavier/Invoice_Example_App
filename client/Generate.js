

//Event: generate all invoices by clicking on the "generate" button
Template.Generate.events({
  'click button': function () {

  var addInvoice = function(a_invoiceNumber,a_total, a_createdAt){
    Invoices.insert({ invoiceNumber: a_invoiceNumber,total: a_total, createdAt:a_createdAt});
  };

  var arr = [];
  for (var i = 0; i < 200; i++) {

    var total = Math.floor((Math.random() * 1000) + 1);
    var day = Math.floor(Math.random() * 30) + 1;
    var today = new Date();
    var generateDate = new Date(today.getFullYear(),(today.getMonth()),day);
    //unique invoice number
    invNumber = Math.floor(Math.random()*20000+1);

    while(arr.indexOf(invNumber) !== -1)
    {
      invNumber = Math.floor(Math.random()*20000+1);
    }
    arr[i] = invNumber;
       
    addInvoice(invNumber,total,generateDate);
  }
  }
});