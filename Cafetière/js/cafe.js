function envoyerRequete(requete, url) {
    // Envoyer une requête à la cafetière
    requete.onreadystatechange = servirCafe;
    requete.open('GET', url, true);
    requete.send(null);
}

function commanderCafe() {
    // Prendre une commande dans le formulaire web
    var nom = document.getElementById("nom").value;
    // console.log(nom);

    
    var taille = document.querySelector('input[name="taille"]:checked').value;
    // Alternative
    // function getTaille() {
    //     // Savoir quelle taille a été sélectionnée
    //     var groupeTaille = document.forms[0].taille;
    //     for (i = 0; i < groupeTaille.length; i++) {
    //         if (groupeTaille[i].checked == true) {
    //             return groupeTaille[i].value;
    //         }
    //     }
    // }

    var boisson = document.querySelector('input[name="boisson"]:checked').value;
    // Alternative
    // function getBoisson() {
    //     // Savoir quelle boisson a été sélectionnée
    //     var groupeBoisson = document.forms[0].boisson;
    //     for (i = 0; i < groupeBoisson.length; i++) {
    //         if (groupeBoisson[i].checked == true) {
    //             return groupeBoisson[i].value;
    //         }
    //     }
    // }


    var divStatutCafetiere1 = document.getElementById("status-cafetiere1");
    var statut = getTexte(divStatutCafetiere1);

    if (statut == "Inactive") {
        remplacerTexte(divStatutCafetiere1, "Préparation du " + taille + " " + boisson + " de " + nom);
        document.forms[0].reset();

        var url= "cafetiere.php?nom" + escape(nom) + "&taille=" + escape(taille) + "&boisson=" + escape(boisson) + "&cafetiere=1";
        envoyerRequete(requete1, url);
    } else {
        var divStatutCafetiere2 = document.getElementById("status-cafetiere2");
        statut = getTexte(divStatutCafetiere2);
        if (statut == "Inactive") {
            remplacerTexte(divStatutCafetiere2, "Préparation du" + taille + " "+ boisson + " de " + nom);
        } else {
            alert("Désolé! Les deux cafetières sont occupées." + " Réessayez plus tard.");
        }
    }
}

function servirCafe() {
    // Quand la cafetière a fini, servir la boisson.
    if (requete1.readyState == 4) {
        if (requete1.status == 200) {
            var reponse = requete1.responseText;
            var convert = JSON.parse(reponse);

            // Déterminer qui a passé la commande et quelle cafetière l'a préparée
            // var cafetiere = convert['cafetiere'];
            // var nom = convert['nom'];
            // var taille = convert['taille'];
            // var boisson = convert['boisson'];
            var quellecafetiere = reponse.substring(0, 1);
            var nom = reponse.substring(1, reponse.length);
            
            // if (cafetiere == 1) {
            if (quellecafetiere == "1") {
                var divStatutCafetiere1 = document.getElementById("statut-cafetiere1");
                remplacerTexte(divStatutCafetiere1, "Inactive");
            } else {
                var divStatutCafetiere2 = document.getElementById("statut-cafetiere2");
                remplacerTexte(divStatutCafetiere2, "Inactive");
            }
            // alert(nom + ", votre " + taille + boisson + " est prêt !");
            alert(nom + ", votre café est prêt !");
            requete1 = creerRequete();
        } else
            // alert("Erreur! Statut de la requête =" + requete1.status);
            alert("Erreur! Statut de la requête = " + requete1.status);
    } else if (requete2.readyState == 4) {
        if (requete2.status == 200) {
            var reponse = requete2.responseText;

            // Déterminer qui a passé la commande et quelle cafetière l'a préparée
            // var cafetiere = convert['cafetiere'];
            // var nom = convert['nom'];
            // var taille = convert['taille'];
            // var boisson = convert['boisson'];
            var quellecafetiere = reponse.substring(0, 1);
            var nom = reponse.substring(1, reponse.length);

            // if (cafetiere == 2) {
                if (quellecafetiere == "1") {
                var divStatutCafetiere2 = document.getElementById("statut-cafetiere1");
                remplacerTexte(divStatutCafetiere2, "Inactive");
            } else {
                var divStatutCafetiere2 = document.getElementById("statut-cafetiere2");
                remplacerTexte(divStatutCafetiere2, "Inactive");
            }
            // alert(nom + ", votre " + taille + boisson + " est prêt !");
            alert(nom + ", votre café est prêt !");
            requete2 = creerRequete();
        } else {
            alert("Erreur! Statut de la requête =" + requete2.status);
        }
    }
}