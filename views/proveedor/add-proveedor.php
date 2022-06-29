<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="modal-add-proveedor" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">REGISTRAR PROVEEDOR</h4>
            </div>
            <form id="form-proveedor">
                <div class="modal-body">
                    <div class="form-group">
                        <label>Nombre*</label>
                        <input class="form-control" placeholder="Obligatorio." name="nombre">
                    </div>
                    <div class="form-group">
                        <label>Apellido*</label>
                        <input class="form-control" placeholder="Obligatorio." name="apellido">
                    </div>
                    <div class="form-group">
                        <label for="telephone">Telefono*</label>
                        <input class="form-control" placeholder="Obligatorio." name="telefono" type="tel" data-validate-length-range="8,20">
                    </div>
                    <div class="form-group">
                        <label>DNI*</label>
                        <input class="form-control" placeholder="Obligatorio." name="dni">
                    </div>
                    <p class="mt-7 mb-0">Dirección</p>
                    <textarea class="form-control placeholder-no-fix" rows="2" name="direccion" placeholder="Dirección..."></textarea>
                </div>
                <div class="modal-footer">
                    <button data-dismiss="modal" class="btn btn-default" type="button">Cancelar</button>
                    <button class="btn btn-theme" type="submit"><i class="fa fa-save"></i> Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>