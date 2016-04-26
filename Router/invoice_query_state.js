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
  set: function (queryParam, queryValue) {
    if (queryParam === "timeRange")
    {
      FlowRouter.setParams({queryParam: queryValue});
    }
    else {
      let queryString = {};
      queryString[queryParam] = queryValue;
      FlowRouter.setQueryParams(queryString);
    }
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
