 $( document ).ready(function() {





 $("#searchBtn").on("click", function() {
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

var search = $("#search").val();
console.log(search); 

var startYear = $("#start").val();
console.log(start);



url += '?' + $.param({
  'api-key': "769f2ad0d52b43bbb9836c132e41d884",
  'q' : search 
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  console.log(result.response.docs[0]);







  

}).fail(function(err) {
  throw err;
});



//end of on click
});

    console.log( "ready!" );
});



//IDs:
//#search
//#number
//#start
//#end
//#searchBtn
//#clearBtn
//#results
