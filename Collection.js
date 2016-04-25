Invoices = new Mongo.Collection('invoices');

Invoices.byTimeRange = function(invoiceQueryState, limit){
  let sortQuery = {};
  sortQuery[invoiceQueryState.sortedBy] = invoiceQueryState.sortOrder;
  let createdAtFilters = getCreatedAtFilters("createdAt",invoiceQueryState.timeRange);
  let invoiceNumberFilter = getExactIntegerMatchFilter("invoiceNumber",invoiceQueryState.invoiceNumber);
  let emailFilter = getSearchStartOfStringFilter("email",invoiceQueryState.email);
  let totalFilter = getExactIntegerMatchFilter("total",invoiceQueryState.total);

  return Invoices.find(
    {"$and":[invoiceNumberFilter,createdAtFilters,emailFilter, totalFilter]}
    ,
    {sort: sortQuery, limit:limit}
  );
};

getCreatedAtFilters = function(param,timeRangeFilter){
  let createdAt = {};
  let endDate = moment();
  let startDate = moment();
  switch (timeRangeFilter) {
    case "today":
      startDate.startOf('day');
      endDate.endOf('day');
      break;
    case "week":
      startDate.startOf('isoweek');
      endDate.endOf('isoweek');
      break;
    case "month":
      startDate.startOf('month');
      endDate.endOf('month');
      break;
    case "all":
      return createdAt;
  }
  createdAt[param] = { "$gte": startDate.toDate(),"$lte": endDate.toDate()};
  return createdAt;
}

getExactIntegerMatchFilter = function(param,numberValue){
  let numberFilter = {};
  if (numberValue)
  {
    numberFilter[param] = parseInt(numberValue);
  }
  return numberFilter;
}

getSearchStartOfStringFilter = function (param, stringValue) {
  let stringFilter = {};
  if (stringValue)
  {
    let regex = {};
    regex["$regex"] = '^'+stringValue;
    stringFilter[param] = regex;
  }
  return stringFilter;
}
