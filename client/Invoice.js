//InvoiceCollection = new Mongo.Collection("invoices");
/*Template.Invoices.helpers({
	invoices: ()=> {
		return Invoices.find({});
	}
});
*/

Template.Invoices.helpers({
    invoices: [
      { invoiceNumber: "1","total":"1" , "createdAt":"2016-02-12"},
      { invoiceNumber: "2","total":"2", "createdAt":"2016-02-12"},
      { invoiceNumber: "3", "total":"3", "createdAt":"2016-02-12"}
    ]
  });


