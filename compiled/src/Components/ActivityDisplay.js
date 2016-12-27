'use strict';

var ActivityDisplay = function ActivityDisplay(_ref) {
  var currentActivity = _ref.currentActivity;
  return !currentActivity ? React.createElement(
    'div',
    null,
    'Area loading...'
  ) : React.createElement(
    'div',
    { className: 'activity-display' },
    React.createElement(
      'h1',
      { className: 'activity-title' },
      currentActivity.activities[0].name
    ),
    React.createElement(
      'p',
      { className: 'activity-type' },
      currentActivity.activities[0].activity_type_name
    ),
    React.createElement(
      'p',
      { className: 'activity-type' },
      currentActivity.activities[0].description
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5RGlzcGxheS5qc3giXSwibmFtZXMiOlsiQWN0aXZpdHlEaXNwbGF5IiwiY3VycmVudEFjdGl2aXR5IiwiYWN0aXZpdGllcyIsIm5hbWUiLCJhY3Rpdml0eV90eXBlX25hbWUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsTUFBRUMsZUFBRixRQUFFQSxlQUFGO0FBQUEsU0FDdEIsQ0FBQ0EsZUFBRCxHQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW5CLEdBQ0E7QUFBQTtBQUFBLE1BQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFJLFdBQVUsZ0JBQWQ7QUFBZ0NBLHNCQUFnQkMsVUFBaEIsQ0FBMkIsQ0FBM0IsRUFBOEJDO0FBQTlELEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBRyxXQUFVLGVBQWI7QUFBOEJGLHNCQUFnQkMsVUFBaEIsQ0FBMkIsQ0FBM0IsRUFBOEJFO0FBQTVELEtBRkY7QUFHRTtBQUFBO0FBQUEsUUFBRyxXQUFVLGVBQWI7QUFBOEJILHNCQUFnQkMsVUFBaEIsQ0FBMkIsQ0FBM0IsRUFBOEJHO0FBQTVEO0FBSEYsR0FGc0I7QUFBQSxDQUF4QiIsImZpbGUiOiJBY3Rpdml0eURpc3BsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBY3Rpdml0eURpc3BsYXkgPSAoe2N1cnJlbnRBY3Rpdml0eX0pID0+IChcbiAgIWN1cnJlbnRBY3Rpdml0eSA/IDxkaXY+QXJlYSBsb2FkaW5nLi4uPC9kaXY+IDpcbiAgPGRpdiBjbGFzc05hbWU9J2FjdGl2aXR5LWRpc3BsYXknPlxuICAgIDxoMSBjbGFzc05hbWU9J2FjdGl2aXR5LXRpdGxlJz57Y3VycmVudEFjdGl2aXR5LmFjdGl2aXRpZXNbMF0ubmFtZX08L2gxPlxuICAgIDxwIGNsYXNzTmFtZT0nYWN0aXZpdHktdHlwZSc+e2N1cnJlbnRBY3Rpdml0eS5hY3Rpdml0aWVzWzBdLmFjdGl2aXR5X3R5cGVfbmFtZX08L3A+XG4gICAgPHAgY2xhc3NOYW1lPSdhY3Rpdml0eS10eXBlJz57Y3VycmVudEFjdGl2aXR5LmFjdGl2aXRpZXNbMF0uZGVzY3JpcHRpb259PC9wPlxuICA8L2Rpdj5cbik7Il19