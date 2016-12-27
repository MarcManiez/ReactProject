"use strict";

var ActivityResult = function ActivityResult(props) {
  return React.createElement(
    "div",
    { className: "col-xs-4 activity-result" },
    React.createElement(
      "p",
      null,
      props.area.name
    ),
    React.createElement(
      "p",
      null,
      props.area.activities[0].activity_type_name
    ),
    React.createElement(
      "p",
      null,
      "Rating: ",
      props.area.activities[0].rating
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5UmVzdWx0LmpzeCJdLCJuYW1lcyI6WyJBY3Rpdml0eVJlc3VsdCIsInByb3BzIiwiYXJlYSIsIm5hbWUiLCJhY3Rpdml0aWVzIiwiYWN0aXZpdHlfdHlwZV9uYW1lIiwicmF0aW5nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3JCO0FBQUE7QUFBQSxNQUFLLFdBQVUsMEJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBSUEsWUFBTUMsSUFBTixDQUFXQztBQUFmLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBSUYsWUFBTUMsSUFBTixDQUFXRSxVQUFYLENBQXNCLENBQXRCLEVBQXlCQztBQUE3QixLQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBWUosWUFBTUMsSUFBTixDQUFXRSxVQUFYLENBQXNCLENBQXRCLEVBQXlCRTtBQUFyQztBQUhGLEdBRHFCO0FBQUEsQ0FBdkIiLCJmaWxlIjoiQWN0aXZpdHlSZXN1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBY3Rpdml0eVJlc3VsdCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy00IGFjdGl2aXR5LXJlc3VsdFwiPlxuICAgIDxwPntwcm9wcy5hcmVhLm5hbWV9PC9wPlxuICAgIDxwPntwcm9wcy5hcmVhLmFjdGl2aXRpZXNbMF0uYWN0aXZpdHlfdHlwZV9uYW1lfTwvcD5cbiAgICA8cD5SYXRpbmc6IHtwcm9wcy5hcmVhLmFjdGl2aXRpZXNbMF0ucmF0aW5nfTwvcD5cbiAgPC9kaXY+XG4pOyJdfQ==