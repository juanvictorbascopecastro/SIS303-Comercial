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
        <section id="main-content">
            <section class="wrapper">
                <h3><i class="fa fa-desktop"></i> NUEVA VENTA</h3>	
                <div class="row mt">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="showback">
                            <h4><i class="fa fa-angle-right"></i> Detalles de la venta</h4>
                            <form role="form" id="form-venta">
                                <label><i class="fa fa-user"></i> Cliente*</label>
                                <div class="form-group input-group">
                                    <input type="text" class="form-control" placeholder="Ingresar su DNI..." id="dni">
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button" id="btnBuscar"><i class="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                                <div class="form-group mb-6">
                                    <input type="text" class="form-control" placeholder="Nombre del cliente..." id="nombre-cliente" disabled>
                                </div>
                                <table class="table table-striped table-bordered table-hover" >
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Imagen</th>
                                            <th>Costo</th>
                                            <th>Cantidad</th>
                                            <th>Total</th>
                                            <th class="text-center">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody id="productos-agregado">
                                        <tr class="odd gradeX">
                                            <td colspan="6" class="text-center">¡No hay registros!</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                                <div class="row">
                                    <div class="col-sm-12 col-md-4">
                                    <label for="">Total*</label>
                                        <div class="form-group input-group">
                                            <input type="text" class="form-control" placeholder="Total..." id="input-total" name="total" disabled>
                                            <span class="input-group-addon">Bs.</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4">
                                        <label for="">Descuento</label>
                                        <div class="form-group input-group">
                                            <input type="text" class="form-control" placeholder="Descuento..." id="input-descuento" name="descuento">
                                            <span class="input-group-addon">Bs.</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4">
                                        <label for="">Total a Pagar*</label>
                                        <div class="form-group input-group">
                                            <input type="text" class="form-control" placeholder="Total a pagar..." id="input-total-pagar" name="total_pagar" disabled>
                                            <span class="input-group-addon">Bs.</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Detalles*</label>
                                    <input type="text" class="form-control" placeholder="Algun detalle..." name="detalle">
                                </div>
                                <div class="text-right">
                                    <button class="btn btn-primary" type="submit">
                                        <i class="fa fa-save"></i> Registrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="showback">
                            <h4><i class="fa fa-angle-right"></i> Seleccionar Productos</h4>
                            <div class="form-group mb-2">
                                <select class="form-control form-sm" name="categoria" id="select-categoria">
                                    <option value="todos">Todo</option>
                                </select>
                            </div>
                            <hr class="mt-4 mb-2">
                            <table class="table table-striped table-bordered table-hover" >
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Imagen</th>
                                        <th>Costo</th>
                                        <th>Stock</th>
                                        <th class="text-center">Acción</th>
                                    </tr>
                                </thead>
                                <tbody id="productos-tabla">
                                    
                                    <tr class="odd gradeX">
                                        <td colspan="5" class="text-center">¡No hay registros!</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </section>
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