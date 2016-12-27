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
      alert('error fetching data');
    },
    beforeSend: function beforeSend(xhr) {
      xhr.setRequestHeader(credentials.auth, credentials.key);
    }
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZ2V0RGF0YS5qcyJdLCJuYW1lcyI6WyJnZXREYXRhIiwiY3JpdGVyaWEiLCJjYWxsYmFjayIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsImVyciIsImFsZXJ0IiwiYmVmb3JlU2VuZCIsInhociIsInNldFJlcXVlc3RIZWFkZXIiLCJjcmVkZW50aWFscyIsImF1dGgiLCJrZXkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsVUFBVSxTQUFWQSxPQUFVLENBQVNDLFFBQVQsRUFBbUJDLFFBQW5CLEVBQTZCO0FBQzNDQyxJQUFFQyxJQUFGLENBQU87QUFDTEMsU0FBSywwQ0FEQTtBQUVMQyxVQUFNLEtBRkQ7QUFHTEMsVUFBTTtBQUNKLGVBQVUsRUFETjtBQUVKLHVCQUFpQixZQUZiO0FBR0osNkNBQXVDO0FBSG5DLEtBSEQ7QUFRTEMsY0FBVSxNQVJMO0FBU0xDLGFBQVNQLFFBVEo7QUFVTFEsV0FBTyxlQUFTQyxHQUFULEVBQWM7QUFBRUMsWUFBTSxxQkFBTjtBQUErQixLQVZqRDtBQVdMQyxnQkFBWSxvQkFBU0MsR0FBVCxFQUFjO0FBQ3hCQSxVQUFJQyxnQkFBSixDQUFxQkMsWUFBWUMsSUFBakMsRUFBdUNELFlBQVlFLEdBQW5EO0FBQ0Q7QUFiSSxHQUFQO0FBZUQsQ0FoQkQiLCJmaWxlIjoiZ2V0RGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldERhdGEgPSBmdW5jdGlvbihjcml0ZXJpYSwgY2FsbGJhY2spIHtcbiAgJC5hamF4KHtcbiAgICB1cmw6ICdodHRwczovL3RyYWlsYXBpLXRyYWlsYXBpLnAubWFzaGFwZS5jb20vJyxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBkYXRhOiB7XG4gICAgICAnbGltaXQnIDogMTAsXG4gICAgICAncVtzdGF0ZV9jb250XSc6ICdDYWxpZm9ybmlhJyxcbiAgICAgICdxW2FjdGl2aXRpZXNfYWN0aXZpdHlfdHlwZV9uYW1lX2VxXSc6ICdtb3VudGFpbiBiaWtpbmcnLFxuICAgIH0sXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBzdWNjZXNzOiBjYWxsYmFjayxcbiAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7IGFsZXJ0KCdlcnJvciBmZXRjaGluZyBkYXRhJyk7IH0sXG4gICAgYmVmb3JlU2VuZDogZnVuY3Rpb24oeGhyKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihjcmVkZW50aWFscy5hdXRoLCBjcmVkZW50aWFscy5rZXkpO1xuICAgIH1cbiAgfSk7XG59OyJdfQ==