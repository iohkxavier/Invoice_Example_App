// given a url like "/week?sortTotal=asc"
FlowRouter.route('/', {
  triggersEnter: [function(context, redirect) {redirect('/today?sortedBy=createdAt&sortOrder=asc&invoiceNumber=&email=&total=&createdat=');}]
});

FlowRouter.route('/:timeRange', {
  action: function(params,queryParams) {
    FlowLayout.render('Invoices');
  }
});
