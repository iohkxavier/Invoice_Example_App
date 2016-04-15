Template.Invoices.onCreated(function() {
  this.incrementInvoicesNumber = 30;
  this.initInvoicesNumber = 30;
  this.elementsLimit = new ReactiveVar();
  this.elementsLimit.set(this.initInvoicesNumber);
   var self = this;
   self.autorun(function() {
      self.subscribe('invoices',
         FlowRouter.getParam("timeRange"),
         FlowRouter.getQueryParam('sortedBy'),
         FlowRouter.getQueryParam('sortOrder'),
         self.elementsLimit.get()
         );
   });
});

Template.Invoices.helpers({
  elementsLimit : function() {
    return Template.instance().elementsLimit.get();
  },
   invoices: () => {
      return Invoices.byTimeRange(
         FlowRouter.getParam("timeRange"),
         FlowRouter.getQueryParam('sortedBy'),
         FlowRouter.getQueryParam('sortOrder'),
         this.Template.instance().elementsLimit.get()
      )},
   hasMoreInvoices: () => {
      return Invoices.find().count() >= this.Template.instance().elementsLimit.get();
  }
});

Template.Invoices.events({
  'becameVisible .showMoreResults': function (event, template) {
      template.elementsLimit.set(template.elementsLimit.get() + template.incrementInvoicesNumber);
    }
})
