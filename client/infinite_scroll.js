TemplateController('infinite_scroll', {
  onCreated() {
    let instance = this;
    this.showMoreVisible = function() {
    instance.target = $(".showMoreResults");
    if (!instance.target.length) return;
    if (document.documentElement.clientHeight + $(document).scrollTop() >= document.body.offsetHeight)
    {
      instance.target.trigger("becameVisible");
    }
    };
  },
  onRendered() {
    $(window).on('scroll',_.debounce(this.showMoreVisible, this.data.timeDelay));
  },
  onDestroyed() {
    $(window).off('scroll',_.debounce(this.showMoreVisible, this.data.timeDelay));
  }
});
