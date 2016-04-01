//returns data for template
const LIMIT_INVOICES = 40
Session.set("invoicesLimit",LIMIT_INVOICES);

Template.Invoices.helpers({
   invoices: () => {
      return Invoices.byTimeRange(
         FlowRouter.getParam("timeRange"),
         FlowRouter.getQueryParam('sortedBy'), 
         FlowRouter.getQueryParam('sortOrder'),
         Session.get("invoicesLimit")
      )},
   hasMoreInvoices: () => {
      return Invoices.find().count() >= Session.get("invoicesLimit");
  }
});

Template.Invoices.onCreated(function() {
   var self = this;
   self.autorun(function() {
      self.subscribe('invoices',
         FlowRouter.getParam("timeRange"),
         FlowRouter.getQueryParam('sortedBy'), 
         FlowRouter.getQueryParam('sortOrder'),
         Session.get("invoicesLimit")
         );
   });
});

// whenever #showMoreResults becomes visible, retrieve more results
function showMoreVisible() {
    var target = $("#showMoreResults");
    if (!target.length) return;
 
     if (document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight )
        { 
        if (!target.data("visible")) {
            target.data("visible", true);
            Session.set("invoicesLimit", Session.get("invoicesLimit") + LIMIT_INVOICES);
        }
    } else {
        if (target.data("visible")) {
            target.data("visible", false);
        }
    }        
}
 
// run the above func every time the user scrolls
$(window).scroll(showMoreVisible);
