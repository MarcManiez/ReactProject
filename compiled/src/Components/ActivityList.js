"use strict";

var ActivityList = function ActivityList(props) {
  return !props.areas ? React.createElement(
    "div",
    null,
    "Area loading..."
  ) : React.createElement(
    "div",
    { className: "container activity-list" },
    React.createElement(
      "div",
      { className: "row text-center" },
      props.areas.map(function (area) {
        return React.createElement(ActivityResult, { area: area });
      })
    )
  );
};

// var VideoList = (props) => (
//   <div className="video-list media">
//     {props.videos.map( (video)=>{
//       return <VideoListEntry onVideoClick= {props.onVideoClick} video={video}/>;
//     })}
//   </div>
// );
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5TGlzdC5qc3giXSwibmFtZXMiOlsiQWN0aXZpdHlMaXN0IiwicHJvcHMiLCJhcmVhcyIsIm1hcCIsImFyZWEiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxTQUNwQixDQUFDQSxNQUFNQyxLQUFQLEdBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFmLEdBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSx5QkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsaUJBQWY7QUFDR0QsWUFBTUMsS0FBTixDQUFZQyxHQUFaLENBQWlCLFVBQUNDLElBQUQsRUFBUTtBQUN2QixlQUFPLG9CQUFDLGNBQUQsSUFBZ0IsTUFBTUEsSUFBdEIsR0FBUDtBQUNGLE9BRkE7QUFESDtBQURGLEdBRm1CO0FBQUEsQ0FBckI7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQWN0aXZpdHlMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQWN0aXZpdHlMaXN0ID0gKHByb3BzKSA9PiAoXG4gIXByb3BzLmFyZWFzID8gPGRpdj5BcmVhIGxvYWRpbmcuLi48L2Rpdj4gOlxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBhY3Rpdml0eS1saXN0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj5cbiAgICAgIHtwcm9wcy5hcmVhcy5tYXAoIChhcmVhKT0+e1xuICAgICAgICAgcmV0dXJuIDxBY3Rpdml0eVJlc3VsdCBhcmVhPXthcmVhfS8+XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5cbi8vIHZhciBWaWRlb0xpc3QgPSAocHJvcHMpID0+IChcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0IG1lZGlhXCI+XG4vLyAgICAge3Byb3BzLnZpZGVvcy5tYXAoICh2aWRlbyk9Pntcbi8vICAgICAgIHJldHVybiA8VmlkZW9MaXN0RW50cnkgb25WaWRlb0NsaWNrPSB7cHJvcHMub25WaWRlb0NsaWNrfSB2aWRlbz17dmlkZW99Lz47XG4vLyAgICAgfSl9XG4vLyAgIDwvZGl2PlxuLy8gKTsiXX0=