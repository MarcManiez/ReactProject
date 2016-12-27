"use strict";

var MainView = function MainView(_ref) {
  var currentActivity = _ref.currentActivity;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "row main-view" },
      React.createElement(
        "div",
        { className: "col-md-8" },
        React.createElement(ActivityDisplay, { currentActivity: currentActivity })
      ),
      React.createElement(
        "div",
        { className: "col-md-4 map-weather-col" },
        React.createElement(Map, null),
        React.createElement(Weather, null)
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL01haW5WaWV3LmpzeCJdLCJuYW1lcyI6WyJNYWluVmlldyIsImN1cnJlbnRBY3Rpdml0eSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxNQUFFQyxlQUFGLFFBQUVBLGVBQUY7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFLDRCQUFDLGVBQUQsSUFBaUIsaUJBQWlCQSxlQUFsQztBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBSyxXQUFVLDBCQUFmO0FBQ0UsNEJBQUMsR0FBRCxPQURGO0FBRUUsNEJBQUMsT0FBRDtBQUZGO0FBSkY7QUFERixHQURlO0FBQUEsQ0FBakIiLCJmaWxlIjoiTWFpblZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNYWluVmlldyA9ICh7Y3VycmVudEFjdGl2aXR5fSkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgbWFpbi12aWV3Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgPEFjdGl2aXR5RGlzcGxheSBjdXJyZW50QWN0aXZpdHk9e2N1cnJlbnRBY3Rpdml0eX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1hcC13ZWF0aGVyLWNvbFwiPlxuICAgICAgICA8TWFwIC8+XG4gICAgICAgIDxXZWF0aGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pOyJdfQ==