moment.locale("fr");
$("#date").text(moment().format("DD MMMM YYYY"));
$(document).ready(function () {

    $("#bouton").click(function () {
        var city = $('#ville').val();
        if (city != "") {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=08d07f48ff486a143c25d7296ed323f0",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    console.log(data);
                    var widget = show(data);
                    $("#donnees").html(widget);
                    $("#ville").val('');

                    $("#map").html("<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDAIjcuiQLcn3nyZNUzginUTz5hD2b-0Xw&q=" + city + "&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>");
                }
            })
        }
    })
})

function show(data) {
    console.log("testtemp", data.main.temp);
    $("#temperature").text("Température: " + data.main.temp + "°C");
    $("#tempmin").text("Température min: " + data.main.temp_min + "°C");
    $("#tempmax").text("Température Max: " + data.main.temp_max + "°C");
    $("#pression").text("Pression atmosphérique: " + data.main.pressure + "hPa");
    $("#vent").text("Vitesse du vent: " + data.wind.speed + "km/h");
    $("#humidite").text("Taux d'humidité: " + data.main.humidity + "%");
    $("#longitude").text("Longitude: " + data.coord.lon);
    $("#latitude").text("Latitude: " + data.coord.lat);

}
