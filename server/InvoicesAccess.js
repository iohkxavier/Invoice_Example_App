Meteor.methods({

  'generateInvoices': function(){
    var arr = [];
    for (var i = 0; i < 200; i++) {
      var total = Math.floor((Math.random() * 1000) + 1);
      var day = Math.floor(Math.random() * 30) + 1;
      var today = new Date();
      var generateDate = new Date(today.getFullYear(),(today.getMonth()),day);
      //unique invoice number
      invNumber = Math.floor(Math.random()*20000+1);
      var email = "test"+(Math.floor(Math.random() * 50) + 1)+"@gmail.com";

      while(arr.indexOf(invNumber) !== -1)
      {
        invNumber = Math.floor(Math.random()*20000+1);
      }
      arr[i] = invNumber;

      Invoices.insert({ invoiceNumber: invNumber, email: email, total: total, createdAt:generateDate});
    }
  },

  'hasMoreInvoicesThan':function(limit, filter){
    return false;
  }
});
