({
  doInit: function (component, event, helper) {
    if ("v.parameter" != null) {
      //get the field name passed to the component
      var field = component.get("v.parameter");

      //set key to lookup the field value (the simple Record component holds the object information)
      var key = "v.simpleRecord." + field;

      //use the key to lookup value returned in LDS
      var value = component.get(key);

      //set the value to and attribute to be used in your component
      component.set("v.passThroughValue", value);
    }
  }
});
