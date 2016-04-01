// given a url like "/week?sortTotal=asc"
FlowRouter.route('/', {
  triggersEnter: [function(context, redirect) {redirect('/today?sortedBy=createdAt&sortOrder=asc');}]
});

FlowRouter.route('/:timeRange', {
  action: function(params,queryParams) {
    FlowLayout.render('Invoices');
  }
});