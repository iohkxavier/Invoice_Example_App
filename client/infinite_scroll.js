Template.infinite_scroll.onCreated(function() {
   this.showMoreVisible = function() {
     var target = $(".showMoreResults");
      if (!target.length) return;
       if (document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight )
       {
        $(".showMoreResults").trigger("becameVisible");
       }
     };
});

Template.infinite_scroll.onRendered(function() {
  $(window).on('scroll',_.debounce(this.showMoreVisible, this.data.timeDelay));
});

Template.infinite_scroll.onDestroyed(function() {
    $(window).off('scroll',_.debounce(this.showMoreVisible, this.data.timeDelay));
});
