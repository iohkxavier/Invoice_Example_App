TemplateController('search_box', {
  private: {
    currentSearchFieldIndex: 0 // email by default
  },
  onCreated(){
    this.formatOK = function (fieldName, format,value) {
      let hasError = true;
      let errMssg = "";
      switch (format) {
        case "string":
          if (value.length === 0 || //accept empty
              isNaN(value) )
          {
            hasError = false;
          }
          break;
        case "integer":
          if (!isNaN(value))
          {
            hasError = false;
          }
          break;
        default:
          errMssg = "incorrect format";

      }
      if (hasError)
      {
        errMssg = "not a valid "+fieldName;
      }
      return errMssg;
    },

    this.goSearch =  function(event) {
      let targetElement =  $(event.target);
      let currentField = this.data.criteria[this.currentSearchFieldIndex];
      if (!targetElement.length) return;
      let errorFormatMssg = this.formatOK(currentField.name, currentField.format,targetElement.val());
      if (!errorFormatMssg)
      {
        currentField.value = targetElement.val();
        targetElement.trigger(this.data.eventName, [this.data.criteria]);
      }
      else
      {
        alert(errorFormatMssg);
      }
    }
  },
  onRendered(){
    $(".form-group input").on( "keyup", event => {
      if(event.which === 13)
      {
        this.goSearch(event);
      }
  });

  $(".form-control").on( "change", event => {
    var target = $(event.currentTarget);
    this.currentSearchFieldIndex = target.find(":selected").val();
  });

  },
  onDestroyed(){
  $(".form-group input").off( "keyup", event => {
    //if(event.which === 13)
      this.goSearch(event);
  });
  $(".form-control").off( "change", event => {});
  }
})
