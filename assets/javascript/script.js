
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";



url += '?' + $.param({
  'api-key': "769f2ad0d52b43bbb9836c132e41d884",
  'q' : "michael+jackson"
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






//IDs:
//#search
//#number
//#start
//#end
//#searchBtn
//#clearBtn
//#results
