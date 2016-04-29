invoiceQueryState = {
  get: function (queryParam) {
    let queryValue;
    if (queryParam === "timeRange")
    {
      queryValue = FlowRouter.getParam(queryParam);
    }
    else {
      queryValue = FlowRouter.getQueryParam(queryParam);
    }
    return queryValue;
  },
  setFilter: function (field) {
    let queryParam = {};
    queryParam["sortOrder"] = FlowRouter.current().queryParams.sortOrder;
    queryParam["sortedBy"] = FlowRouter.current().queryParams.sortedBy;
    queryParam[field.name] = field.value;
    let path = FlowRouter.path("/:timeRange",FlowRouter.current().params,queryParam);
    FlowRouter.go(path);
  },
  props: function(){
    return {
      ["timeRange"]     : this.get("timeRange"),
      ["sortedBy"]      : this.get("sortedBy"),
      ["sortOrder"]     : this.get("sortOrder") === "asc" ? 1 : -1,
      ["invoiceNumber"] : this.get("invoiceNumber"),
      ["email"]         : this.get("email"),
      ["total"]         : this.get("total"),
      ["createdat"]     : this.get("createdat")
    }
  }
};
