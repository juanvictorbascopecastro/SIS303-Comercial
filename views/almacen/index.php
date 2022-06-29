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
                <h3><i class="fa fa-archive"></i> Almacen</h3>
                <!-- COMPLEX TO DO LIST -->			
                <div class="row mt">
                    <div class="col-md-12">
                        <section class="task-panel tasks-widget">
                            <div class="panel-heading">
                                <div class="pull-left"><h5><i class="fa fa-tasks"></i> Lista de registros</h5></div>
                                <br>
                            </div>
                            <div class="panel-body">
                                <div class="task-content">
                                    <ul class="task-list" id="list-categorias">
                                        <li class="text-center">
                                            <b>¡No hay registros!</b>
                                        </li>                                    
                                    </ul>
                                </div>

                                <div class=" add-task-row">
                                    <button class="btn btn-success btn-sm pull-left" id="btnAdd">Registrar Almacen</button>
                                    <!--<a class="btn btn-default btn-sm pull-right" href="todo_list.html#">See All Tasks</a>-->
                                </div>
                            </div>
                        </section>
                    </div><!-- /col-md-12-->
                    <div class="col-md-12">
                        <?php  require './views/almacen/add-almacen.php';  ?>
                    </div>
                </div><!-- /row -->
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