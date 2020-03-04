<?php require_once ('include/head.php')?>
<?php require_once ('include/header.php')?>

<section class="container-fluid">
    <div class="row">
        <div class="col-12 text-center" id="Hola">Holà Gringo!</div>
    </div>
</section>

<section class="container d-flex justify-content-around">
    <div class="row">
        <div class="col-4">
            <h2 class="border-top border-dark text-center py-3"><strong>CAFETIERE N°1</strong></h2>
            <img src="images/caf1.jpg" width='100%' alt="">
            <p id="status-cafetiere1">Inactive</p>
        </div>

        <div class="col-4">
            <p class="text-center border-top border-dark"><strong>Commandez votre café ici:</strong></p>

            <form action="GET">
                <input type="text" class="form-control" placeholder="Nom" id="nom" name="nom" value="nom">
                <p class="text-center border-bottom border-dark mt-3">
                    <strong>Taille</strong>
                </p>
                
                <div class="form-check-row">
                    <input class="form-check-input" type="radio" name="taille" value="petit" checked="true">
                    <span>Petit</span>
                </div>

                <div class="form-check-row">
                    <input class="form-check-input" type="radio" name="taille" value="moyen">
                    <span>Moyen</span>
                </div>
                
                <div class="form-check-row">
                    <input class="form-check-input" type="radio" name="taille" value="grand">
                    <span>Grand</span>
                </div>

                <p class="text-center border-bottom border-dark mt-3">
                    <strong>Boisson</strong>
                </p>

                <div class="form-check-row">
                    <input class="form-check-input" type="radio" name="boisson" value="noir" checked="true">
                    <span>Noir</span>
                </div>

                <div class="form-check-row">
                    <input class="form-check-input" type="radio" name="boisson" value="creme">
                    <span>Crème</span>
                </div>

                <div class="form-check-row">
                    <input class="form-check-input" type="radio" name="boisson" value="cappuccino">
                    <span>Cappuccino</span>
                </div>

                <button class="btn btn-success btn-lg btn-block mt-3" type="button" onClick="commanderCafe()"><strong>Commander</strong></button>
            </form>
        </div>
        

        <div class="col-4">
        <h2 class="border-top border-dark text-center py-3"><strong>CAFETIERE N°2</strong></h2>
            <img src="images/caf2.jpg" width='100%' alt="">
            <p class="status-cafetiere2">Inactive</p>
        </div>
    </div>
</section>

<?php require_once ('include/footer.php')?>