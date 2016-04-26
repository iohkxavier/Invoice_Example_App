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
    this.showMoreVisibleDebounced = () => {
     return (event) => {
       _.debounce(this.showMoreVisible, this.data.timeDelay);
     }
   };
  },
  onRendered() {
    $(window).on('scroll',this.showMoreVisibleDebounced());
  },
  onDestroyed() {
    $(window).off('scroll',this.showMoreVisibleDebounced());
  }
});
