//Events: click on Time button filter invoices
Template.bTotal.events({
  'click button': function () {
    GoURL("createdAt");
  }});

Template.bCreatedAt.events({
  'click button': function () {
    GoURL("total");
  }});

function GoURL(sortedBy) {
  let sortOrder = FlowRouter.getQueryParam('sortOrder') === "asc" ? "desc" : "asc";
  FlowRouter.setQueryParams({sortedBy: sortedBy});
  FlowRouter.setQueryParams({sortOrder: sortOrder});
}