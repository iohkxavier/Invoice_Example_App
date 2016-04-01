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

  let curDate = new Date();
  let startDate = new Date();
  switch (filter) {
    default:
    case "today":
      startDate.setDate(curDate.getDate()-1);
      break;
    case "week":
      startDate.setDate(curDate.getDate()-7);
      break;
    case "month":
      startDate.setMonth(curDate.getMonth()-1);
      break;
    case "all":
      return Invoices.find({}, {sort: sortQuery,limit:limit});
      break;
  }
  return Invoices.find(
    {createdAt: {$gte: startDate}},
    { sort: sortQuery,limit:limit }
  );
};

