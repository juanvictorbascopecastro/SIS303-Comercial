<!DOCTYPE html>
<html lang="es">
<?php require 'views/template/header.php' ?>
<body>

    <section id="container" >
        <!-- **********************************************************************************************************************************************************
        TOP BAR CONTENT & NOTIFICATIONS
        *********************************************************************************************************************************************************** -->
        <?php require 'views/template/navbar.php' ?>
        <!-- **********************************************************************************************************************************************************
        MAIN SIDEBAR MENU
        *********************************************************************************************************************************************************** -->
        <?php require 'views/template/sidebar.php' ?>  
        <!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
        <!--main content start-->
        <section id="main-content">
            <section class="wrapper">
                <div class="row">
                    <div class="col-md-6">
                        <h3><i class="fa fa-desktop"></i> PRODUCTOS</h3>
                    </div>
                    <div class="col-md-6 text-right mt-5">
                        <button type="button" class="btn btn-primary" id="btnAdd">Nuevo Producto</button>
                    </div>
                </div>		
                <div class="row mt-0" id="productos-list" style="overflow-y: visible;">
                    <div class="col-md-12 text-center">
                        <b>¡No hay registros!</b>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <?php  require './views/producto/add-producto.php';  ?>
                    </div>
                </div>
            </section>
        </section>

        <!--main content end-->
        <!--footer start-->
        <footer class="site-footer">
            <div class="text-center">
                2022 - SIS303
                <a href="#" class="go-top">
                    <i class="fa fa-angle-up"></i>
                </a>
            </div>
        </footer>
        <!--footer end-->
    </section>
    
    <?php require 'views/template/footer.php' ?>

  </body>
</html>