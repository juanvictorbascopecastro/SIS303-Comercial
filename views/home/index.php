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
                <div class="row text-center p-3 m-7">
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-shopping-cart fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge"><?= $this->data['ventas']?></div>
                                        <div>Ventas!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer">
                                    <a class="pull-left" href="<?php echo BASE_URL?>ventas">Ver Detalles</a>
                                    <a class="pull-right" href="<?php echo BASE_URL?>ventas"><i class="fa fa-arrow-circle-right"></i></a>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-success">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-desktop fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge"><?= $this->data['productos']?></div>
                                        <div>Productos!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer">
                                    <a class="pull-left" href="<?php echo BASE_URL?>productos">Ver Detalles</a>
                                    <a class="pull-right" href="<?php echo BASE_URL?>productos"><i class="fa fa-arrow-circle-right"></i></a>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-users fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge"><?= $this->data['clientes']?></div>
                                        <div>Clientes!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer">
                                    <a class="pull-left" href="<?php echo BASE_URL?>clientes">Ver Detalles</a>
                                    <a class="pull-right" href="<?php echo BASE_URL?>clientes"><i class="fa fa-arrow-circle-right"></i></a>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <?php if($_SESSION['usuario']['rol'] == 'admin'){?>
                        <div class="col-lg-3 col-md-6">
                            <div class="panel panel-danger">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xs-3">
                                            <i class="fa fa-user fa-5x"></i>
                                        </div>
                                        <div class="col-xs-9 text-right">
                                            <div class="huge"><?= $this->data['usuarios']?></div>
                                            <div>Usuarios!</div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#">
                                    <div class="panel-footer">
                                        <a class="pull-left" href="<?php echo BASE_URL?>usuarios">Ver Detalles</a>
                                        <a class="pull-right" href="<?php echo BASE_URL?>usuarios"><i class="fa fa-arrow-circle-right"></i></a>
                                        <div class="clearfix"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    <?php } ?>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel bg-theme text-white">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-list fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge"><?= $this->data['categorias']?></div>
                                        <div>Categorias</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer">
                                    <a class="pull-left" href="<?php echo BASE_URL?>categoria">Ver Detalles</a>
                                    <a class="pull-right" href="<?php echo BASE_URL?>categoria"><i class="fa fa-arrow-circle-right"></i></a>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel bg-theme02 text-white">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-archive fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge"><?= $this->data['almacens']?></div>
                                        <div>Almacen!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer">
                                    <a class="pull-left" href="<?php echo BASE_URL?>almacen">Ver Detalles</a>
                                    <a class="pull-right" href="<?php echo BASE_URL?>almacen"><i class="fa fa-arrow-circle-right"></i></a>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel bg-theme03 text-white">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-truck fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        <div class="huge"><?= $this->data['proveedores']?></div>
                                        <div>Proveedores!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer">
                                    <a class="pull-left" href="<?php echo BASE_URL?>proveedor">Ver Detalles</a>
                                    <a class="pull-right" href="<?php echo BASE_URL?>proveedor"><i class="fa fa-arrow-circle-right"></i></a>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="panel bg-theme04 text-white">
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col-xs-3">
                                        <i class="fa fa-bar-chart-o fa-5x"></i>
                                    </div>
                                    <div class="col-xs-9 text-right">
                                        
                                        <div>Reportes!</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">
                                <div class="panel-footer">
                                    <a class="pull-left" href="<?php echo BASE_URL?>reportes">Ver Detalles</a>
                                    <a class="pull-right" href="<?php echo BASE_URL?>reportes"><i class="fa fa-arrow-circle-right"></i></a>
                                    <div class="clearfix"></div>
                                </div>
                            </a>
                        </div>
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