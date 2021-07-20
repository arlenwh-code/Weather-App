

var apiKey = "96a0ff78ff2dec3213e0cdbd76e85223";
var city = "New York";
var lat = " ";
var lon = " ";
var date = moment().format("(MM/DD/YYYY)");

var cityNameUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;


$(".searchBtn").on("click", function (){
    city = $(".searchBar").text();
    cityNameUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    
    localStorage.setItem("City", city);
    
    if($(".btn1").data('city') === "City 1"){
        $(".btn1").data('city', localStorage.getItem("City"));
        $(".btn1").text(localStorage.getItem("City"));
    }else if ($(".btn2").data('city') === "City 2"){
        $(".btn2").data('city', 'done');
        $(".btn2").text(localStorage.getItem("City"));
    }else if($(".btn3").data('city') === "City 3"){
        $(".btn3").data('city', 'done');
        $(".btn3").text(localStorage.getItem("City"));
    }else if($(".btn4").data('city') === "City 4"){
        $(".btn4").data('city', 'done');
        $(".btn4").text(localStorage.getItem("City"));
    }else if($(".btn5").data('city') === "City 5"){
        $(".btn5").data('city', 'done');
        $(".btn5").text(localStorage.getItem("City"));
    }else if($(".btn6").data('city') === "City 6"){
        $(".btn6").data('city', 'done');
        $(".btn6").text(localStorage.getItem("City"));
    }else if($(".btn7").data('city') === "City 7"){
        $(".btn7").data('city', 'done');
        $(".btn7").text(localStorage.getItem("City"));
    }else if($(".btn8").data('city') === "City 8"){
        $(".btn8").data('city', 'done');
        $(".btn8").text(localStorage.getItem("City"));
    }
    
    


    fetch(cityNameUrl).then(function (response){
        return response.json();
    }).then(function(data){
        console.log(data);
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        var cityName = data.name;
        
        
        var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";

        $(".cityName").text(cityName);
        $(".date").text(" " + date);
        $(".card-title").text(date);

        return fetch(oneCall);
    }).then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data);
       
        var temp = data.current.temp;
        var wind = data.current.wind_speed;
        var humidity = data.current.humidity;
        var uvi = data.current.uvi;
        var day1Date = moment().add(1, 'days').format("MM/DD/YYYY");
        var day2Date = moment().add(2, 'days').format("MM/DD/YYYY");
        var day3Date = moment().add(3, 'days').format("MM/DD/YYYY");
        var day4Date = moment().add(4, 'days').format("MM/DD/YYYY");
        var day5Date = moment().add(5, 'days').format("MM/DD/YYYY");
        var day1 = data.daily[1];
        var day2 = data.daily[2];
        var day3 = data.daily[3];
        var day4 = data.daily[4];
        var day5 = data.daily[5];
        var icon1 = day1.weather[0].icon;
        var icon2 = day2.weather[0].icon;
        var icon3 = day3.weather[0].icon;
        var icon4 = day4.weather[0].icon;
        var icon5 = day5.weather[0].icon;
        console.log(icon1);

        $(".card-img1").attr("src", "http://openweathermap.org/img/wn/" + icon1 + "@2x.png");
        $(".card-img2").attr("src", "http://openweathermap.org/img/wn/" + icon2 + "@2x.png");
        $(".card-img3").attr("src", "http://openweathermap.org/img/wn/" + icon3 + "@2x.png");
        $(".card-img4").attr("src", "http://openweathermap.org/img/wn/" + icon4 + "@2x.png");
        $(".card-img5").attr("src", "http://openweathermap.org/img/wn/" + icon5 + "@2x.png");

        $(".temp").text(temp + "°F");
        $(".card-title-1").text(day1Date);
        $(".card-title-2").text(day2Date);
        $(".card-title-3").text(day3Date);
        $(".card-title-4").text(day4Date);
        $(".card-title-5").text(day5Date);


        $(".c-temp1").text(day1.temp.day);
        $(".c-temp2").text(day2.temp.day);
        $(".c-temp3").text(day3.temp.day);
        $(".c-temp4").text(day4.temp.day);
        $(".c-temp5").text(day5.temp.day);

        $(".c-wind1").text(day1.wind_speed);
        $(".c-wind2").text(day2.wind_speed);
        $(".c-wind3").text(day3.wind_speed);
        $(".c-wind4").text(day4.wind_speed);
        $(".c-wind5").text(day5.wind_speed);

        $(".c-humidity1").text(day1.humidity);
        $(".c-humidity2").text(day2.humidity);
        $(".c-humidity3").text(day3.humidity);
        $(".c-humidity4").text(day4.humidity);
        $(".c-humidity5").text(day5.humidity);

        $(".wind").text(wind + " MPH");
        $(".humidity").text(humidity + " %");
        $(".uvi").text(uvi);
    });

});

function buttonHandler(e){
var btn = e.target.getAttribute("data-city");

if (btn === "City 1"){
    city = $(".btn1").text();
    console.log(city);
} else if (btn === "City 2"){
    city = $(".btn2").text();
} else if (btn === "City 3"){
    city = $(".btn3").text();
} else if (btn === "City 4"){
    city = $(".btn4").text();
} else if (btn === "City 5"){
    city = $(".btn5").text();
}else if (btn === "City 6"){
    city = $(".btn6").text();
}else if (btn === "City 7"){
    city = $(".btn7").text();
}else if (btn === "City 8"){
    city = $(".btn8").text();
}

cityNameUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;


fetch(cityNameUrl).then(function (response){
    
    return response.json();
}).then(function(data){
    
    var lat = data.coord.lat;
    var lon = data.coord.lon;
    var cityName = data.name;
    
    
    var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";

    $(".cityName").text(cityName);
    $(".date").text(" " + date);
    $(".card-title").text(date);

    return fetch(oneCall);
}).then(function (response){
    return response.json();
}).then(function (data){


    var temp = data.current.temp;
    var wind = data.current.wind_speed;
    var humidity = data.current.humidity;
    var uvi = data.current.uvi;
    var day1Date = moment().add(1, 'days').format("MM/DD/YYYY");
    var day2Date = moment().add(2, 'days').format("MM/DD/YYYY");
    var day3Date = moment().add(3, 'days').format("MM/DD/YYYY");
    var day4Date = moment().add(4, 'days').format("MM/DD/YYYY");
    var day5Date = moment().add(5, 'days').format("MM/DD/YYYY");
    var day1 = data.daily[1];
    var day2 = data.daily[2];
    var day3 = data.daily[3];
    var day4 = data.daily[4];
    var day5 = data.daily[5];


    $(".temp").text(temp + "°F");
    $(".card-title-1").text(day1Date);
    $(".card-title-2").text(day2Date);
    $(".card-title-3").text(day3Date);
    $(".card-title-4").text(day4Date);
    $(".card-title-5").text(day5Date);


    $(".c-temp1").text(day1.temp.day);
    $(".c-temp2").text(day2.temp.day);
    $(".c-temp3").text(day3.temp.day);
    $(".c-temp4").text(day4.temp.day);
    $(".c-temp5").text(day5.temp.day);

    $(".c-wind1").text(day1.wind_speed);
    $(".c-wind2").text(day2.wind_speed);
    $(".c-wind3").text(day3.wind_speed);
    $(".c-wind4").text(day4.wind_speed);
    $(".c-wind5").text(day5.wind_speed);

    $(".c-humidity1").text(day1.humidity);
    $(".c-humidity2").text(day2.humidity);
    $(".c-humidity3").text(day3.humidity);
    $(".c-humidity4").text(day4.humidity);
    $(".c-humidity5").text(day5.humidity);

    $(".wind").text(wind + " MPH");
    $(".humidity").text(humidity + " %");
    $(".uvi").text(uvi);
});
};

$(".search").on("click", buttonHandler);