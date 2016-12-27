'use strict';

var getData = function getData(criteria, callback) {
  $.ajax({
    url: 'https://trailapi-trailapi.p.mashape.com/',
    type: 'GET',
    data: {
      'limit': 10,
      'q[state_cont]': 'California',
      'q[activities_activity_type_name_eq]': 'mountain biking'
    },
    dataType: 'json',
    success: callback,
    error: function error(err) {
      alert("ERROR!");
    },
    beforeSend: function beforeSend(xhr) {
      xhr.setRequestHeader(credentials.auth, credentials.key);
    }
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZ2V0RGF0YS5qcyJdLCJuYW1lcyI6WyJnZXREYXRhIiwiY3JpdGVyaWEiLCJjYWxsYmFjayIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsImVyciIsImFsZXJ0IiwiYmVmb3JlU2VuZCIsInhociIsInNldFJlcXVlc3RIZWFkZXIiLCJjcmVkZW50aWFscyIsImF1dGgiLCJrZXkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVLENBQVNDLFFBQVQsRUFBbUJDLFFBQW5CLEVBQTZCO0FBQzNDQyxJQUFFQyxJQUFGLENBQU87QUFDTEMsU0FBSywwQ0FEQTtBQUVMQyxVQUFNLEtBRkQ7QUFHTEMsVUFBTTtBQUNKLGVBQVUsRUFETjtBQUVKLHVCQUFpQixZQUZiO0FBR0osNkNBQXVDO0FBSG5DLEtBSEQ7QUFRTEMsY0FBVSxNQVJMO0FBU0xDLGFBQVNQLFFBVEo7QUFVTFEsV0FBTyxlQUFTQyxHQUFULEVBQWM7QUFBRUMsWUFBTSxRQUFOO0FBQWtCLEtBVnBDO0FBV0xDLGdCQUFZLG9CQUFTQyxHQUFULEVBQWM7QUFDeEJBLFVBQUlDLGdCQUFKLENBQXFCQyxZQUFZQyxJQUFqQyxFQUF1Q0QsWUFBWUUsR0FBbkQ7QUFDRDtBQWJJLEdBQVA7QUFlRCxDQWhCRCIsImZpbGUiOiJnZXREYXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0RGF0YSA9IGZ1bmN0aW9uKGNyaXRlcmlhLCBjYWxsYmFjaykge1xuICAkLmFqYXgoe1xuICAgIHVybDogJ2h0dHBzOi8vdHJhaWxhcGktdHJhaWxhcGkucC5tYXNoYXBlLmNvbS8nLFxuICAgIHR5cGU6ICdHRVQnLFxuICAgIGRhdGE6IHtcbiAgICAgICdsaW1pdCcgOiAxMCxcbiAgICAgICdxW3N0YXRlX2NvbnRdJzogJ0NhbGlmb3JuaWEnLFxuICAgICAgJ3FbYWN0aXZpdGllc19hY3Rpdml0eV90eXBlX25hbWVfZXFdJzogJ21vdW50YWluIGJpa2luZycsXG4gICAgfSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIHN1Y2Nlc3M6IGNhbGxiYWNrLFxuICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHsgYWxlcnQoXCJFUlJPUiFcIik7IH0sXG4gICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oeGhyKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihjcmVkZW50aWFscy5hdXRoLCBjcmVkZW50aWFscy5rZXkpO1xuICAgIH1cbiAgfSk7XG59OyJdfQ==