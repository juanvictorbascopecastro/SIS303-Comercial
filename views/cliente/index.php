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
                        <h3><i class="fa fa-users"></i> CLIENTES</h3>
                    </div>
                    <div class="col-md-6 text-right mt-5">
                        <button type="button" class="btn btn-primary" id="btnAdd">Nuevo Cliente</button>
                    </div>
                </div>
                <!-- COMPLEX TO DO LIST -->			
                <div class="row mt-0">
                    <div class="col-lg-12">
                        <div class="content-panel">
                            <h4> Registros de Clientes</h4>
                            <section id="unseen">
                                <table class="table table-bordered table-striped table-condensed" id="dataTables-cliente">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Apellido</th>
                                            <th>Tel??fono</th>
                                            <th>DNI</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tabla-cliente">
                                        <tr>
                                            <td class="text-center" colspan="5">??No hay registros!</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <?php  require './views/cliente/add-cliente.php';  ?>
                    </div>
                </div><!-- /row -->
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