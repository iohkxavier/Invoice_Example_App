var defaultsort = {sort : {createdAt:1,total:1}};
Session.set('sortInvoices', defaultsort);
var defaultFilter = {};
Session.set('filterInvoices', defaultFilter);


//returns data for template
Template.Invoices.helpers({
   	invoices: ()=> {
   			cur = Invoices.find(Session.get('filterInvoices'),Session.get('sortInvoices'));
            //console.log(cur.count());
		return cur;
	}
  });

Template.Invoices.onCreated(function () {
  this.subscribe('invoices');
});
