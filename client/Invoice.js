TemplateController('invoices_template', {
  state: {
    elementsLimit: 30
  },
  private: {
    incrementInvoicesNumber: 30
  },
  onCreated() {
    this.autorun(() => {
      this.subscribe('invoices',
        FlowRouter.getParam("timeRange"),
        FlowRouter.getQueryParam('sortedBy'),
        FlowRouter.getQueryParam('sortOrder'),
        this.state.elementsLimit()
      );
    });
  },
  helpers: {
    invoices: () => {
      return Invoices.byTimeRange(
        FlowRouter.getParam("timeRange"),
        FlowRouter.getQueryParam('sortedBy'),
        FlowRouter.getQueryParam('sortOrder'),
        this.Template.instance().state.elementsLimit()
       )},
    hasMoreContent: () => {
      return ReactiveMethod.call('hasMoreInvoicesThan', this.Template.instance().state.elementsLimit());
    }
  },
  events: {
  'becameVisible .showMoreResults': function (event, template) {
      this.state.elementsLimit(this.state.elementsLimit() + this.incrementInvoicesNumber);
    }
  }
});
