//Events: click on Time button filter invoices
Template.Today.events({
  'click button': function () {
    GoURL("today");
  }});

Template.Week.events({
  'click button': function () {
    GoURL("week");
  }});

Template.Month.events({
  'click button': function () {
    GoURL("month");
  }});

Template.All.events({
  'click button': function () {
   GoURL("all");
  }});

function GoURL(timeRange) {
  FlowRouter.setParams({timeRange: timeRange});
}