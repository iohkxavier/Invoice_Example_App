var defaultsort = {sort : {createdAt:1,total:1}};
Session.set('sortInvoices', defaultsort);
var defaultFilter = {};
Session.set('filterInvoices', defaultFilter);


//returns data for template
Template.Invoices.helpers({
   	invoices: ()=> {
   			cur = Invoices.find(Session.get('filterInvoices'),Session.get('sortInvoices'));
            console.log(cur.count());
   		// }
		return cur;
	}
  });

function GoSubscribe()
{
   console.log("I subscribe");
  Meteor.subscribe('invoices',Session.get('filterInvoices'),Session.get('sortInvoices'));
}
GoSubscribe();
