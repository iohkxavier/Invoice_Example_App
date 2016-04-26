TemplateController('search_box', {
  private: {
    currentSearchFieldIndex: 0, // email by default
    formatOK: function (fieldName, format,value) {
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
    goSearch: function(event) {
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
  events: {
  'keyup .form-group input': function (event, template) {
    if(event.which === 13)
      {
        this.goSearch(event);
      }
    },
    'change .form-control': function (event, template) {
      var target = $(event.currentTarget);
      this.currentSearchFieldIndex = target.find(":selected").index();
    }
  }
})
