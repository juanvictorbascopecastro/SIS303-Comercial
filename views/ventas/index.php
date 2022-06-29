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
                        <h3><i class="fa fa-shopping-cart"></i> VENTAS</h3>
                    </div>
                    <div class="col-md-6 text-right mt-5">
                        <a type="button" class="btn btn-primary" href="<?php BASE_URL;?>ventas/nuevaventa">Nueva Venta</a>
                    </div>
                </div>		
                <div class="row mt-0">
                    <div class="col-lg-12">
                        <div class="content-panel">
                            <div class="row">
                                <div class="col-lg-5">
                                    <h4> Registros de Ventas</h4>
                                </div>
                                <div class="col-lg-7 right">
                                    <div class="row">
                                        <div class="col-lg-5 right p-0">
                                            <label for="fecha-desde" class="col-sm-3 col-form-label mt-4">Desde</label>
                                            <div class="col-sm-9">
                                                <input type="date" class="form-control" id="fecha-desde">
                                            </div>
                                        </div>
                                        <div class="col-lg-5 right p-0">
                                            <label for="fecha-hasta" class="col-sm-3 col-form-label mt-4">Hasta</label>
                                            <div class="col-sm-9">
                                                <input type="date" class="form-control" id="fecha-hasta">
                                            </div>
                                        </div>
                                        <div class="col-lg-2 left">
                                            <button class="btn btn-success" id="btnSearch"><i class="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section id="unseen">
                                <table class="table table-bordered table-striped table-condensed">
                                    <thead>
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Detalles</th>
                                            <th>Cliente</th>
                                            <th>DNI</th>
                                            <th>Usuario</th>
                                            <th>Rol</th>
                                            <th>Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tabla-ventas">
                                        <tr>
                                            <td class="text-center" colspan="7">¡No hay registros!</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <?php require './views/ventas/factura.php' ?>
                </div>
            </section>
        </section>

        <!--main content end-->
        <!--footer start-->
        <footer class="site-footer">
            <div class="text-center">
                2022 - Mauricio Felix Delgado Roca
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