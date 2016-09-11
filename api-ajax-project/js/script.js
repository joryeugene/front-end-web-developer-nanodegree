
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview image as background
    var $streetInput = $('#street').val();
    var $cityInput = $('#city').val();
    var address = $streetInput + ', ' + $cityInput;
    $greeting.text('So, you want to live at ' + address + '?');
    var imageURL = encodeURI('http://maps.googleapis.com/maps/api/streetview?size=600x400&key=AIzaSyC55MYbmRNlTSrVEZ__QlZplM2MpwWkyso&location=' + address);
    $('#bg').css('background-image', 'url(' + imageURL + ')');

    // NYT API Async request
    var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    nytURL += '?' + $.param({
      'api-key': "6a9fab28dfb04261b750f98f1cd27e00",
      'q': $cityInput,
      'fl': "web_url,snippet,headline"
    });
    $.ajax({
      url: nytURL,
      method: 'GET',
    }).done(function(result) {
      displayNYT(result);
    }).fail(function(err) {
      $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
      throw err;
    });

    function displayNYT(result) {
      $nytHeaderElem.text('New York Times Articles about ' + $cityInput);
      for (var i = 0; i < result.response.docs.length; i++) {
        var article = '<li class="article"><a href="';
        article += result.response.docs[i].web_url;
        article += '">' + result.response.docs[i].headline.main + '</a><p>';
        article += result.response.docs[i].snippet + '</p></li>';
        $nytElem.append(article);
      }
    }

    // JSON-P Error notification
    var wikiRequestTimeout = setTimeout(function(){
      $wikiElem.text('Failed to get Wikipedia resources');
    }, 4000);

    // Wikipedia API Async request
    var wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + $cityInput;
    $.ajax({
      url: wikiURL,
      dataType: 'jsonp',
      success: function(data) {
           for (var i = 0; i < data[1].length; i++) {
             var wiki = '<li><a href="';
             wiki += data[3][i];
             wiki += '">' + data[1][i] + '</a></li>';
             $wikiElem.append(wiki);
           }
           clearTimeout(wikiRequestTimeout);
        }
    });

    return false;
}

$('#form-container').submit(loadData);
