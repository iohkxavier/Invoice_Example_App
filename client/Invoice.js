//returns data for template
const LIMIT_INVOICES = 40
Session.set("invoicesLimit",LIMIT_INVOICES);

Template.Invoices.onCreated(function() {
   var self = this;
   self.autorun(function() {
      self.subscribe('invoices',
         FlowRouter.getParam("timeRange"),
         FlowRouter.getQueryParam('sortedBy'),
         FlowRouter.getQueryParam('sortOrder'),
         Session.get("invoicesLimit")
         );
   });
});

Template.Invoices.helpers({
   invoices: () => {
      return Invoices.byTimeRange(
         FlowRouter.getParam("timeRange"),
         FlowRouter.getQueryParam('sortedBy'),
         FlowRouter.getQueryParam('sortOrder'),
         Session.get("invoicesLimit")
      )},
   hasMoreInvoices: () => {
      return Invoices.find().count() >= Session.get("invoicesLimit");
  }
});

Template.Invoices.events({
  'becameVisible .showMoreResults': function (event, template) {
      Session.set("invoicesLimit", Session.get("invoicesLimit") + LIMIT_INVOICES);
    }
})
