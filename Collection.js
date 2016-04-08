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

  let endDate = moment();
  let startDate = new Date();
  let daywrapper = moment(startDate);
  switch (filter) {
    default:
    case "today":
     daywrapper.startOf('day');
     endDate.endOf('day');
      break;
    case "week":
      daywrapper.startOf('isoweek');
      endDate.endOf('isoweek');
      break;
    case "month":
      daywrapper.startOf('month');
      endDate.endOf('month');
      break;
    case "all":
      return Invoices.find({},
        {sort: sortQuery,limit:limit});
      break;
  }
  return Invoices.find(
    {createdAt: {$gte: daywrapper.toDate(),$lte:  endDate.toDate()}},
    {sort: sortQuery,limit:limit}
  );
};
