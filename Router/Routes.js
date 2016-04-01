// given a url like "/week?sortTotal=asc"
FlowRouter.route('/', {
  triggersEnter: [function(context, redirect) {redirect('/today?sortedBy=createdAt&sortOrder=asc');}]
});

FlowRouter.route('/:timeRange', {
  subscriptions: function(params,queryParams) {
    this.register('Invoices', Meteor.subscribe('invoices',params.timeRange,queryParams.sortedBy, queryParams.sortOrder));
  },
  action: function(params,queryParams) {
    FlowLayout.render('Invoices');
  }
});