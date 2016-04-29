TemplateController('search_box', {
  private: {
    currentSearchFieldIndex: 0, // email by default
    resetSearchFilter: function () {
      let inputElement = $(".row input");
      inputElement.val("");
      inputElement.focus();
    },
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
          if (!isNaN(value))  hasError = false;
          break;
        default:
          errMssg = "incorrect format";

      }
      if (hasError) errMssg = "not a valid "+fieldName;
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
        targetElement.trigger(this.data.eventName, [currentField]);
      }
      else
      {
        alert(errorFormatMssg);
      }
    }
  },
  events: {
  'keyup .row input': function (event, template) {
    if(event.which === 13) this.goSearch(event);
    },
  'change .invoice_dropdown': function (event, template) {
    var target = $(event.currentTarget);
    this.currentSearchFieldIndex = target.find(":selected").index();
    this.resetSearchFilter();
    }
  }
})
