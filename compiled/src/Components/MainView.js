"use strict";

var MainView = function MainView() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "row main-view" },
      React.createElement(
        "div",
        { className: "col-md-8" },
        React.createElement(ActivityDisplay, null)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL01haW5WaWV3LmpzeCJdLCJuYW1lcyI6WyJNYWluVmlldyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUNmO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFLDRCQUFDLGVBQUQ7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQUssV0FBVSwwQkFBZjtBQUNFLDRCQUFDLEdBQUQsT0FERjtBQUVFLDRCQUFDLE9BQUQ7QUFGRjtBQUpGO0FBREYsR0FEZTtBQUFBLENBQWpCIiwiZmlsZSI6Ik1haW5WaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTWFpblZpZXcgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdyBtYWluLXZpZXcnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICA8QWN0aXZpdHlEaXNwbGF5IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgbWFwLXdlYXRoZXItY29sXCI+XG4gICAgICAgIDxNYXAgLz5cbiAgICAgICAgPFdlYXRoZXIgLz5cbiAgICAgIDwvZGl2PiAgXG4gICAgPC9kaXY+ICBcbiAgPC9kaXY+XG4pOyJdfQ==