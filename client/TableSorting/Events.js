//Events: click on Time button filter invoices
Template.bTotal.events({
  'click button': function () {
    goURL("total");
  }});

Template.bCreatedAt.events({
  'click button': function () {
    goURL("createdAt");
  }});

function goURL(sortedBy) {
  let sortOrder = FlowRouter.getQueryParam('sortOrder') === "asc" ? "desc" : "asc";
  FlowRouter.setQueryParams({sortedBy: sortedBy});
  FlowRouter.setQueryParams({sortOrder: sortOrder});
}