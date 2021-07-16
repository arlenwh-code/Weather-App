alert("Working");

var apiKey = "96a0ff78ff2dec3213e0cdbd76e85223";
var city = "New York";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

fetch(queryURL).then(function (response){
    console.log(response);
    return response.json();
}).then(function(data){
    console.log(data);
});