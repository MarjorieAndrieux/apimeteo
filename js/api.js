
/*Mise en place de moment.js pour parametrer la date automatique*/

moment.locale("fr");
$("#date").text(moment().format("DD MMMM YYYY"));
$(document).ready(function () {

/*Mise en place de l'api openweathermap
Création de la variable "city" correspondant à l'input "ville" dans le html */

    $("#bouton").click(function () {
        var city = $('#ville').val();
        if (city != "") {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=08d07f48ff486a143c25d7296ed323f0",
                type: "GET",
                dataType: "jsonp",

/*Utilisation de la "function(data)" afin de stocker les valeurs récupéreés grace à l'API.
Connexion des valeurs récupérées avec la partie "donnees" du html avec la variable "widget".*/

                success: function (data) {
                    console.log(data);
                    var widget = show(data);
                    $("#donnees").html(widget);
                    $("#ville").val('');

/*Mise en place de l'API GoogleMap incluant la variable "city".
Affichage de la map dans la Div "map" du html.*/
                    $("#map").html("<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDAIjcuiQLcn3nyZNUzginUTz5hD2b-0Xw&q=" + city + "&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>");
                }
            })
        }
    })
})


/*Mise en place des correspondances entre les données récupérées dans la fonction "data" et les emplacements du html. */
function show(data) {
    console.log("testtemp", data.main.temp);
    $("#temperature").text(parseInt(data.main.temp) + "°");
    $("#tempmin").text("Température min: " + (parseInt(data.main.temp_min) + "°"));
    $("#tempmax").text("Température Max: " + (parseInt(data.main.temp_max) + "°"));
    $("#pression").text("Pression atmosphérique: " + data.main.pressure + "hPa");
    $("#vent").text("Vitesse du vent: " + data.wind.speed + "km/h");
    $("#humidite").text("Taux d'humidité: " + data.main.humidity + "%");
    $("#longitude").text("Longitude: " + data.coord.lon);
    $("#latitude").text("Latitude: " + data.coord.lat);

}
