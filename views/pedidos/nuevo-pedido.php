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
                <h3><i class="fa fa-truck"></i> HACER PEDIDO</h3>	
                <div class="row mt-0">
                    <div class="col-md-12">
                    <section class="task-panel tasks-widget">
                        <div class="panel-body">
                            <div class="task-content">
                                <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label>Asignar un proveedor</label>
                                    <select class="form-control" name="proveedor" id="select-proveedor">
                                        
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group pl-2">
                                    <label>Total</label>
                                    <input class="form-control" disabled placeholder="Obligatorio." name="total" id="total">
                                </div>
                            </div>
                                <table class="table table-striped table-advance table-hover">
                                    <thead>
                                        <tr>
                                            <th> Producto</th>
                                            <th><i class="fa fa-picture-o"></i>  Imagen</th>
                                            <th class="hidden-phone"> Categoria</th>
                                            <th><i class="fa fa-money"></i> Precio Venta</th>
                                            <th><i class="fa fa-money"></i> Precio Compra</th>
                                            <th>Stock en Almacen</th>
                                            <th>Cantidad</th>
                                        </tr>
                                    </thead>
                                    <tbody id="productos-list">
                                        <tr>
                                            <td class="text-center" colspan="7"><b>¡No hay registros!</b></td>
                                        </tr>
                                    </tbody>
                                
                                </table>
                            </div>

                            <div class=" add-task-row">
                                <!--<a class="btn btn-default btn-sm pull-left" href="<?php BASE_URL;?>"><i class="fa fa-times"></i> Cancelar</a>-->
                                <button class="btn btn-primary btn-sm pull-right" id="btnSave"><i class="fa fa-save"></i> Registrar Pedido</button>
                            </div>
                          </div>
                      </section>
                       
                    </div>
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
    <script type="text/javascript">
    const idusuario = "<?= $_SESSION['usuario']['idusuario']; ?>";
    </script>
    <?php require 'views/template/footer.php' ?>

  </body>
</html>