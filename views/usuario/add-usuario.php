<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="modal-add-usuario" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Nueva Usuario</h4>
            </div>
            <form id="form-usuario">
                <div class="modal-body">
                    <div class="form-group mb-7">
                        <label>Nombre*</label>
                        <input type="text" class="form-control" placeholder="Obligatorio" name="nombre">
                    </div>
                    <div class="form-group mb-7">
                        <label>Apellido*</label>
                        <input type="text" class="form-control" placeholder="Obligatorio." name="apellido">
                    </div>
                    <div class="form-group mb-7">
                        <label>Telefono*</label>
                        <input type="text" class="form-control" placeholder="Obligatorio." name="telefono">
                    </div>
                    <div class="form-group mb-7">
                        <label>Rol de Usuario</label>
                        <select class="form-control" name="rol">
                            <option value="admin">Administrador</option>
                            <option value="cajero">Cajero</option>
                            <option value="almacenero">Almacenero</option>>
                        </select>
                    </div>
                    <div class="form-group mb-7">
                        <label>Email*</label>
                        <input type="text" class="form-control" placeholder="Obligatorio." name="email">
                    </div>
                    <div class="form-group">
                        <label>Contraseña*</label>
                        <input type="password" class="form-control" placeholder="Obligatorio." name="password">
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