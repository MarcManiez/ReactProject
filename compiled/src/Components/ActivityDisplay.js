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
      currentActivity.activities[0].name + ', ' + currentActivity.state
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5RGlzcGxheS5qc3giXSwibmFtZXMiOlsiQWN0aXZpdHlEaXNwbGF5IiwiY3VycmVudEFjdGl2aXR5IiwiYWN0aXZpdGllcyIsIm5hbWUiLCJzdGF0ZSIsImFjdGl2aXR5X3R5cGVfbmFtZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxNQUFFQyxlQUFGLFFBQUVBLGVBQUY7QUFBQSxTQUN0QixDQUFDQSxlQUFELEdBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBbkIsR0FDQTtBQUFBO0FBQUEsTUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUksV0FBVSxnQkFBZDtBQUFnQ0Esc0JBQWdCQyxVQUFoQixDQUEyQixDQUEzQixFQUE4QkMsSUFBOUIsR0FBcUMsSUFBckMsR0FBMkNGLGdCQUFnQkc7QUFBM0YsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFHLFdBQVUsZUFBYjtBQUE4Qkgsc0JBQWdCQyxVQUFoQixDQUEyQixDQUEzQixFQUE4Qkc7QUFBNUQsS0FGRjtBQUdFO0FBQUE7QUFBQSxRQUFHLFdBQVUsZUFBYjtBQUE4Qkosc0JBQWdCQyxVQUFoQixDQUEyQixDQUEzQixFQUE4Qkk7QUFBNUQ7QUFIRixHQUZzQjtBQUFBLENBQXhCIiwiZmlsZSI6IkFjdGl2aXR5RGlzcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFjdGl2aXR5RGlzcGxheSA9ICh7Y3VycmVudEFjdGl2aXR5fSkgPT4gKFxuICAhY3VycmVudEFjdGl2aXR5ID8gPGRpdj5BcmVhIGxvYWRpbmcuLi48L2Rpdj4gOlxuICA8ZGl2IGNsYXNzTmFtZT0nYWN0aXZpdHktZGlzcGxheSc+XG4gICAgPGgxIGNsYXNzTmFtZT0nYWN0aXZpdHktdGl0bGUnPntjdXJyZW50QWN0aXZpdHkuYWN0aXZpdGllc1swXS5uYW1lICsgJywgJyArY3VycmVudEFjdGl2aXR5LnN0YXRlfTwvaDE+XG4gICAgPHAgY2xhc3NOYW1lPSdhY3Rpdml0eS10eXBlJz57Y3VycmVudEFjdGl2aXR5LmFjdGl2aXRpZXNbMF0uYWN0aXZpdHlfdHlwZV9uYW1lfTwvcD5cbiAgICA8cCBjbGFzc05hbWU9J2FjdGl2aXR5LXR5cGUnPntjdXJyZW50QWN0aXZpdHkuYWN0aXZpdGllc1swXS5kZXNjcmlwdGlvbn08L3A+XG4gIDwvZGl2PlxuKTsiXX0=