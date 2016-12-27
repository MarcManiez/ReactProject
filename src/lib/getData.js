const getData = function(callback, criteria) {
  if (criteria === undefined) {
    criteria = {
      location: 'California',
      activity: 'mountain biking'
    };
  }
  $.ajax({
    url: 'https://trailapi-trailapi.p.mashape.com/',
    type: 'GET',
    data: {
      'limit' : 10,
      'q[state_cont]': criteria.location,
      'q[activities_activity_type_name_eq]': criteria.activity,
    },
    dataType: 'json',
    success: callback,
    error: function(err) { alert('error fetching data'); },
    beforeSend: function(xhr) {
      xhr.setRequestHeader(credentials.auth, credentials.key);
    }
  });
};