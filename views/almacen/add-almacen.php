<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="modal-add-almacen" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Nueva Almacen</h4>
            </div>
            <form id="form-almacen">
                <div class="modal-body">
                    <p class="mb-0">Nombre</p>
                    <input type="text" name="nombre" placeholder="Nombre..." autocomplete="off" class="form-control placeholder-no-fix">
                    <p class="mt-7 mb-0">Dirección</p>
                    <textarea class="form-control placeholder-no-fix" rows="2" name="direccion" placeholder="Dirección..."></textarea>
                    <p class="mt-7 mb-0">Descripción</p>
                    <textarea class="form-control placeholder-no-fix" rows="3" name="descripcion" placeholder="Descripción..."></textarea>
                </div>
                <div class="modal-footer">
                    <button data-dismiss="modal" class="btn btn-default" type="button">Cancelar</button>
                    <button class="btn btn-theme" type="submit"><i class="fa fa-save"></i> Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>