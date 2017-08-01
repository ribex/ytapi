/*global ytapikey $*/
/*global config */

$(document).ready(function() {

    // var myKey = config.ytapikey;

    $('#searchYouTube').submit(function(event) {
        event.preventDefault();
        var query = $('#query').val();
        var url = 'https://www.googleapis.com/youtube/v3/search';
        var data = {
            key: ytapikey, 
            part: 'snippet',
            q: query
        };
        $.ajax({
            url: url,
            data: data,
            type: "GET",
            success: function(response) {
                console.log(response);
            }
        });
    });


});

