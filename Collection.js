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

  let endDate = new Date();
  let startDate = new Date();
  let daywrapper = moment(startDate);
  switch (filter) {
    default:
    case "today":
     daywrapper.startOf('day'); 
      break;
    case "week":
      daywrapper.startOf('week');
      daywrapper.add(1, 'days');//begin on mondays
      break;
    case "month":
      daywrapper.startOf('month'); 
      break;
    case "all":
      return Invoices.find({}, 
        {sort: sortQuery,limit:limit});
      break;
  }
  return Invoices.find(
    {createdAt: {$gte: daywrapper.toDate(),$lte:  endDate}},
    {sort: sortQuery,limit:limit}
  );
};

