FlowRouter.route('/', {
  action: function(params,queryParams) {
    FlowLayout.render('Invoices');
  }
});

FlowRouter.route('/:timeRange', {
  action: function(params,queryParams) {
    FlowLayout.render('Invoices');
  }
});
