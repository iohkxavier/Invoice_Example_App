//returns data for template
Template.Invoices.helpers({
   invoices: () => {
      return Invoices.byTimeRange(FlowRouter.getParam("timeRange"),FlowRouter.getQueryParam('sortedBy'), FlowRouter.getQueryParam('sortOrder'));
   }
});
