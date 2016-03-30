//Events: click on Time button filter invoices
Template.Today.events({
  'click button': function () {
    goURL("today");
  }});

Template.Week.events({
  'click button': function () {
    goURL("week");
  }});

Template.Month.events({
  'click button': function () {
    goURL("month");
  }});

Template.All.events({
  'click button': function () {
   goURL("all");
  }});

function goURL(timeRange) {
  FlowRouter.setParams({timeRange: timeRange});
}