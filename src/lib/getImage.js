const getImage = function(activityName) {
  var params = {
    q: activityName,
    count: '1',
    offset: '0',
    mkt: 'en-us',
    safeSearch: 'Moderate',
  };
      
  $.ajax({
    url: 'https://api.cognitive.microsoft.com/bing/v5.0/images/search?' + $.param(params),
    beforeSend: function(xhrObj){
        // Request headers
        xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key','91f259f190b74befb353607298bb073f');
    },
    type: 'GET',
    // Request body
    // data: '{body}',
  })
  .done(function(data) {
      console.log(data);
  })
  .fail(function() {
      alert('error');
  });
};