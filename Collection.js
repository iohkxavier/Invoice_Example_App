Invoices = new Mongo.Collection('invoices');

Invoices.byTimeRange = function(filter, sortBy, sortOrder,limit){
  let sortQuery = {};
  if (sortOrder === "asc")
  {
    sortOrder = 1;
  }
  else if (sortOrder === "desc")
  {
    sortOrder = -1;
  }
  sortQuery[sortBy] = sortOrder;

  let createdAtFilters = getCreatedAtFilters(filter);
  return Invoices.find(
    createdAtFilters,
    {sort: sortQuery,limit:limit}
  );
};

getCreatedAtFilters = function(filter){
  let createdAt = {};
  let endDate = moment();
  let startDate = moment();
  switch (filter) {
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
  createdAt = { "createdAt" : { "$gte": startDate.toDate(),"$lte": endDate.toDate()}};
  return createdAt;
}
