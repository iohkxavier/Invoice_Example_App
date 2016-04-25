//Events: click on Time button filter invoices
Template.today.events({
  'click button': function () {
    goURL("today");
  }});

Template.week.events({
  'click button': function () {
    goURL("week");
  }});

Template.month.events({
  'click button': function () {
    goURL("month");
  }});

Template.all.events({
  'click button': function () {
   goURL("all");
  }});

function goURL(timeRange) {
  FlowRouter.setParams({timeRange: timeRange});
}
