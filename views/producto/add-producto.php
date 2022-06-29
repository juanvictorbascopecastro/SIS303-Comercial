<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="modal-add-producto" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">REGISTRAR PRODUCTO</h4>
            </div>
            <form id="form-producto">
                <div class="modal-body">
                    <div class="form-group">
                        <label>Nombre*</label>
                        <input class="form-control" placeholder="Obligatorio" name="nombre">
                    </div>
                    <div class="row mt-6">
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group pr-2">
                                <label>Precio de venta</label>
                                <input class="form-control" placeholder="Obligatorio." name="precio">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group pl-2">
                                <label>Precio de compra</label>
                                <input class="form-control" placeholder="Obligatorio." name="precio_compra">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-6">
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label>Seleccionar Imagen</label>
                                <input type="file" class="form-control" id="selectImage">
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group pl-2">
                                <label>Stock</label>
                                <input class="form-control" placeholder="Obligatorio." name="stock">
                            </div>
                        </div>
                    </div>
                   
                    <div class="row mt-6">
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label>Categoria producto</label>
                                <select class="form-control" name="categoria" id="select-categoria">
                                    
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                            <div class="form-group">
                                <label>Seleccionar Almacen</label>
                                <select class="form-control" name="almacen" id="select-almacen">
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group mt-7">
                        <label>Descripción</label>
                        <textarea class="form-control" rows="2" name="descripcion" placeholder="Opcional."></textarea>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button data-dismiss="modal" class="btn btn-default" type="button">Cancelar</button>
                    <button class="btn btn-theme" type="submit"><i class="fa fa-save"></i> Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>