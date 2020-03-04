<?php

$nom = $_REQUEST['nom'];
$taille = $_REQUEST['taille'];
$boisson =  $_REQUEST['boisson'];
$cafetiere =  $_REQUEST['cafetiere'];

for($i=0; $i <500000000; $i++){
    // Préparation environ 10 secondes
};

echo $cafetiere . $nom;

// $requete = ['nom' => $nom, 'taille' => $taille, 'boisson' => $boisson, 'cafetiere' => $cafetiere];
// $JSON = json_encode($requete);
// echo $JSON;

?>