
function ajaxRequest() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            document.getElementById('meteo').innerHTML = this.responseText;

            console.log(this.responseText);

            var meteo = this.responseText;

        }
        let temps = JSON.parse(meteo);
        document.getElementById('ville').innerHTML = temps.name;
        document.getElementById('meteo').innerHTML = temps.main.temp;
        document.getElementById('tempmin').innerHTML = temps.main.temp_min;
        document.getElementById('tempmax').innerHTML = temps.main.temp_max;
        function dateFr()
        {



            var jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

            var mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];


            var date = new Date();



            var message = jours[date.getDay()] + " ";

            message += date.getDate() + " ";

            message += mois[date.getMonth()] + " ";

            message += date.getFullYear();

            return message;

        }
        document.getElementById("horloge").innerHTML = dateFr();


        }

    var valeur = document.getElementById('villes').value;

    xhttp.open("GET", "exo.php?villes="+valeur, true);

    xhttp.send();
};

//ajaxRequest();

document.getElementById("test").addEventListener("click", function () {
    ajaxRequest()

});
