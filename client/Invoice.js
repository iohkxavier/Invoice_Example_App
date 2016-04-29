TemplateController('invoices_template', {
  state: {
    elementsLimit: 30
  },
  private: {
    incrementInvoicesNumber: 30
  },
  onCreated() {
    invoiceQueryState.LoadDefaultIfUrlNotCorrect();
    this.autorun(() => {
      this.subscribe('invoices',
        invoiceQueryState.props(),
        this.state.elementsLimit()
      );
    });
  },
  helpers: {
    invoices: () => {
      return Invoices.byTimeRange(
        invoiceQueryState.props(),
        this.Template.instance().state.elementsLimit()
       )},
    hasMoreContent: () => {
      return ReactiveMethod.call('hasMoreInvoicesThan', this.Template.instance().state.elementsLimit());
    },
    searchFields: () => {
      return [
                {name:"email",value:"",format:"string"},
                {name:"invoiceNumber",value:"",format:"integer"},
                {name:"total",value:"",format:"integer"}
             ];
    }
  },
  events: {
  'becameVisible .showMoreResults': function (event, template) {
    this.state.elementsLimit(this.state.elementsLimit() + this.incrementInvoicesNumber);
    },
  'enteredSearchQuery .row input': function (event, template, invoiceFieldSelected) {
    invoiceQueryState.setFilter(invoiceFieldSelected);
  }
  }
});
