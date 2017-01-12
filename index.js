  function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r + ", " + g + ", " + b +")";
  }


$('#get-another-quote-button').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'https://cors.now.sh/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  xhrFields: {
        withCredentials: false
      } 
    $("body,.btn").animate({backgroundColor:randomColor()})
    var tweetText = $("#quote-content").text();
  $("a").attr("href","https://twitter.com/intent/tweet?text="+  tweetText)
  });

$( document ).ready(function(e){
    $.ajax( {
      url: 'https://cors.now.sh/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-title').text(post.title);
        $('#quote-content').html(post.content);

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  $("body,.btn").animate({backgroundColor:randomColor()})
  });

$(".fa-twitter-square").on("mouseover",function(){
      var tweetText = $("#quote-content").text();
  $("a").attr("href","https://twitter.com/intent/tweet?text=" + tweetText)
})
