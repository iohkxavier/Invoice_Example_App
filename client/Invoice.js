//returns data for template
Template.Invoices.helpers({
   invoices: () => {
      console.log("helpers");
      return Invoices.byTimeRange(FlowRouter.getParam("timeRange"),FlowRouter.getQueryParam('sortedBy'), FlowRouter.getQueryParam('sortOrder'));
   }
});
