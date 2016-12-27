const getData = function(criteria, callback) {
  $.ajax({
    url: 'https://trailapi-trailapi.p.mashape.com/',
    type: 'GET',
    data: {
      'limit' : 10,
      'q[state_cont]': 'California',
      'q[activities_activity_type_name_eq]': 'mountain biking',
    },
    dataType: 'json',
    success: callback,
    error: function(err) { alert("ERROR!"); },
    beforeSend: function(xhr) {
      xhr.setRequestHeader(credentials.auth, credentials.key);
    }
  });
};