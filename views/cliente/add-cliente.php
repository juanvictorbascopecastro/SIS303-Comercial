<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="modal-add-cliente" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Nueva Cliente</h4>
            </div>
            <form id="form-cliente">
                <div class="modal-body">
                    <div class="form-group mb-0">
                        <label>Nombre*</label>
                        <input class="form-control" placeholder="Obligatorio." name="nombre">
                        <p class="help-block">Ingrese el nombre.</p>
                    </div>
                    <div class="form-group mb-0">
                        <label>Apellido*</label>
                        <input class="form-control" placeholder="Obligatorio." name="apellido">
                        <p class="help-block">Ingrese su apellido.</p>
                    </div>
                    <div class="form-group mb-0">
                        <label for="telephone">Telefono*</label>
                        <input class="form-control" placeholder="Obligatorio." name="telefono" type="tel" data-validate-length-range="8,20">
                        <p class="help-block">Ingrese su teléfono.</p>
                    </div>
                    <div class="form-group">
                        <label>DNI*</label>
                        <input class="form-control" placeholder="Obligatorio." name="dni">
                        <p class="help-block">Ingrese su dni o carnet de identidad.</p>
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