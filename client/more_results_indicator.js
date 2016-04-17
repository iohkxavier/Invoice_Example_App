Template.more_results_indicator.onCreated(function() {
   this.showMoreVisible = function() {
     var target = $(".showMoreResults");
      if (!target.length) return;
       if (document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight )
       {
        $(".showMoreResults").trigger("becameVisible");
       }
     };
});

Template.more_results_indicator.onRendered(function() {
  $(window).on('scroll',_.debounce(this.showMoreVisible, this.data.timeDelay));
});

Template.more_results_indicator.onDestroyed(function() {
    $(window).off('scroll',_.debounce(this.showMoreVisible, this.data.timeDelay));
});
