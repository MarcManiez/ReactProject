'use strict';

var getData = function getData() {
  $.ajax({
    url: 'https://trailapi-trailapi.p.mashape.com/',
    type: 'GET',
    data: {
      'limit': 10,
      'q[state_cont]': 'California',
      'q[activities_activity_type_name_eq]': 'mountain biking'
    },
    dataType: 'json',
    success: function success(data) {
      console.log(data.places);
    },
    error: function error(err) {
      alert("ERROR!");
    },
    beforeSend: function beforeSend(xhr) {
      xhr.setRequestHeader(credentials.auth, credentials.key);
    }
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZ2V0RGF0YS5qcyJdLCJuYW1lcyI6WyJnZXREYXRhIiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsImRhdGFUeXBlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJwbGFjZXMiLCJlcnJvciIsImVyciIsImFsZXJ0IiwiYmVmb3JlU2VuZCIsInhociIsInNldFJlcXVlc3RIZWFkZXIiLCJjcmVkZW50aWFscyIsImF1dGgiLCJrZXkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVLEdBQVc7QUFDekJDLElBQUVDLElBQUYsQ0FBTztBQUNMQyxTQUFLLDBDQURBO0FBRUxDLFVBQU0sS0FGRDtBQUdMQyxVQUFNO0FBQ0osZUFBVSxFQUROO0FBRUosdUJBQWlCLFlBRmI7QUFHSiw2Q0FBdUM7QUFIbkMsS0FIRDtBQVFMQyxjQUFVLE1BUkw7QUFTTEMsYUFBUyxpQkFBU0YsSUFBVCxFQUFlO0FBQ3RCRyxjQUFRQyxHQUFSLENBQVlKLEtBQUtLLE1BQWpCO0FBQ0QsS0FYSTtBQVlMQyxXQUFPLGVBQVNDLEdBQVQsRUFBYztBQUFFQyxZQUFNLFFBQU47QUFBa0IsS0FacEM7QUFhTEMsZ0JBQVksb0JBQVNDLEdBQVQsRUFBYztBQUMxQkEsVUFBSUMsZ0JBQUosQ0FBcUJDLFlBQVlDLElBQWpDLEVBQXVDRCxZQUFZRSxHQUFuRDtBQUNDO0FBZkksR0FBUDtBQWlCRCxDQWxCRCIsImZpbGUiOiJnZXREYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICAkLmFqYXgoe1xuICAgIHVybDogJ2h0dHBzOi8vdHJhaWxhcGktdHJhaWxhcGkucC5tYXNoYXBlLmNvbS8nLFxuICAgIHR5cGU6ICdHRVQnLFxuICAgIGRhdGE6IHtcbiAgICAgICdsaW1pdCcgOiAxMCxcbiAgICAgICdxW3N0YXRlX2NvbnRdJzogJ0NhbGlmb3JuaWEnLFxuICAgICAgJ3FbYWN0aXZpdGllc19hY3Rpdml0eV90eXBlX25hbWVfZXFdJzogJ21vdW50YWluIGJpa2luZycsXG4gICAgfSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEucGxhY2VzKTtcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHsgYWxlcnQoXCJFUlJPUiFcIik7IH0sXG4gICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oeGhyKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoY3JlZGVudGlhbHMuYXV0aCwgY3JlZGVudGlhbHMua2V5KTtcbiAgICB9XG4gIH0pO1xufTsiXX0=