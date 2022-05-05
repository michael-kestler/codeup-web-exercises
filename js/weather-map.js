var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');


const OPEN_WEATHER_APPID = '3567515707a7e75d45fb9334c9856c89'

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log(data);
    var nameValue = data['name'];
    var tempValue = data['main']['temp'].toFixed(0);
    var descValue = data['weather'][0]['description'];

    name.innerHTML = nameValue;
    desc.innerHTML = descValue;
    temp.innerHTML = tempValue


});




// var button = document.querySelector('.button');
// var inputValue = document.querySelector('.inputValue');
// var name = document.querySelector('.name');
// var desc = document.querySelector('.desc');
// var temp = document.querySelector('.temp');
//
//
//
//
//
//
//
//
//
//
// button.addEventListener('click', function() {
//     fetch("api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=3567515707a7e75d45fb9334c9856c89")
//         .then(response => response.json())
//         .then(data => console.log(data))
//
//         .catch(err => alert("Wrong city name"))
//
//
//
// });









//

//
// });

    // var mapData = '';
    // $.each(data, function (key, value) {
    //     mapData += '<tr>';
    //     mapData += '<td>' + value.title + '</td>';
    //     mapData += '<td>' + value.quantity + '</td>';
    //     mapData += '<td>' + value.price + '</td>';
    //     mapData += '<td>' + value.categories + '</td>';
    //     mapData += '</tr>';
    // });
    // $('#forecast').append(mapData);









