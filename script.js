$(document).ready(function() {

    var myKey = config.ytapikey;



    $("#source").submit(function(event) {
        event.preventDefault();
        var id = $('#sourceId').val();
        var url = "https://newsapi.org/v1/articles";
        var data = {source: id, apiKey: myKey, sortBy: "top"};
        $.ajax({
            url: url,
            data: data,
            type: "GET",
            success: function(response) {
;
            }
        })
    });


});

