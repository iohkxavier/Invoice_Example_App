// given a url like "/week?sortTotal=asc"
Router.route('/', function () {
  this.redirect('/today?sortedBy=createdAt&sortOrder=asc');
});

Router.route('/today', {
  waitOn: function () {
    // console.log("subscribe today");
    return Meteor.subscribe('invoices',"today",this.params.query.sortedBy, this.params.query.sortOrder);
  }
  , template: 'Invoices',
  data: function() {
    //console.log("route / ");
    return Invoices.byTimeRange("today",this.params.query.sortedBy, this.params.query.sortOrder);
    }
});

Router.route('/week', {
    waitOn: function () {
    //console.log("subscribe week");
    return Meteor.subscribe("invoices","week",this.params.query.sortedBy, this.params.query.sortOrder);
  }
  , template: 'Invoices',
  data: function() {
    return Invoices.byTimeRange("week", this.params.query.sortedBy,this.params.query.sortOrder);
  }
});

Router.route('/month', {
    waitOn: function () {
    //console.log("subscribe week");
    return Meteor.subscribe("invoices","month",this.params.query.sortedBy, this.params.query.sortOrder);
  }
  , template: 'Invoices',
  data: function() {
    return Invoices.byTimeRange("month", this.params.query.sortedBy,this.params.query.sortOrder);
  }
});

Router.route('/all', {
    waitOn: function () {
    //console.log("subscribe week");
    return Meteor.subscribe("invoices","all",this.params.query.sortedBy, this.params.query.sortOrder);
  }
  , template: 'Invoices',
  data: function() {
    return Invoices.byTimeRange("all", this.params.query.sortedBy,this.params.query.sortOrder);
  }
});