"use strict";

var MainView = function MainView() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "row mainView" },
      React.createElement(
        "div",
        { className: "col-md-8" },
        React.createElement(ActivityDisplay, null)
      ),
      React.createElement(
        "div",
        { className: "col-md-4" },
        React.createElement(Map, null),
        React.createElement(Weather, null)
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL01haW5WaWV3LmpzeCJdLCJuYW1lcyI6WyJNYWluVmlldyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFLDRCQUFDLGVBQUQ7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0UsNEJBQUMsR0FBRCxPQURGO0FBRUUsNEJBQUMsT0FBRDtBQUZGO0FBSkY7QUFERixHQURlO0FBQUEsQ0FBakIiLCJmaWxlIjoiTWFpblZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNYWluVmlldyA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IG1haW5WaWV3Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgPEFjdGl2aXR5RGlzcGxheSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgIDxNYXAgLz5cbiAgICAgICAgPFdlYXRoZXIgLz5cbiAgICAgIDwvZGl2PiAgXG4gICAgPC9kaXY+ICBcbiAgPC9kaXY+XG4pOyJdfQ==