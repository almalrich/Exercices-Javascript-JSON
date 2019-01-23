<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 21/01/2019
 * Time: 11:33
 */

// Création d'une nouvelle ressource cURL
$ch = curl_init();
$villes = $_GET['villes'];
// Configuration de l'URL et d'autres options
curl_setopt($ch, CURLOPT_URL, "http://api.openweathermap.org/data/2.5/weather?q=".$villes."&units=metric&APPID=d518046f174eb4057dad7f7b3b9969fa");
curl_setopt($ch, CURLOPT_HEADER, 0);

// Récupération de l'URL et affichage sur le navigateur
curl_exec($ch);

// Fermeture de la session cURL
curl_close($ch);



