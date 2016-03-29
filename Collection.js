Invoices = new Mongo.Collection('invoices');


Invoices.byTimeRange = function(filter, sortBy, sortOrder){
  let sortQuery = {};
  sortQuery[sortBy] = sortOrder;

  let endDate = new Date();
  let startDate = new Date();
  switch (filter) {
    default:
    case "today":
      startDate.setDate(endDate.getDate()-1);
      break;
    case "week":
      startDate.setDate(endDate.getDate()-7);
      break;
    case "month":
      startDate.setMonth(endDate.getMonth()-1);
      break;
    case "all":
      return Invoices.find({}, {sort: sortQuery});
      break;
  }
  return Invoices.find(
    {createdAt: {$gt: startDate,$lte: endDate}},
    {sort: sortQuery}
  );
};