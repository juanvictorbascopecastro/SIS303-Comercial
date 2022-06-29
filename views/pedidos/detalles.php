<div class="modal fade modal-detalles" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Detalles de Pedido</h4>
            </div>
            <div class="modal-body">
                <div class="row mt-0">
                    <div class="col-md-6">
                        <p style="margin-bottom: 4px">Avenida German Mendoza, Sucre-Bolivia</p>
                        <p style="margin-bottom: 4px">Telefono: 75773433</p>
                        <p style="margin-bottom: 4px">email: juguete_feliz@gmail.com</p>
                    </div>
                    <div class="col-md-6 text-right datos-factura">
                        <p style="margin-bottom: 4px" id="factura-nro">Nro. 0000043</p>
                        <p style="margin-bottom: 4px" id="factura-fecha">Fecha {{getFecha(data.fecha)}}</p>
                        <p style="margin-bottom: 4px" id="factura-hora">Hora {{getHora(data.fecha)}}</p>
                        <p style="margin-bottom: 4px" id="factura-vendedor">Usuario. {{data.usuario}}</p>
                    </div>
                    <div class="col-md-12 mt-0">
                        <h4 class="mt-0">Cliente</h4>
                        <div class="message-body">
                            <table class="table table-bordered">
                                <tr>
                                    <th id="factura-dni">
                                        DNI. {{data.cliente.dni}}
                                    </th>
                                </tr>
                                <tr>
                                    <th id="factura-cliente">
                                        Nombre. {{data.cliente.name}} {{data.cliente.lastname}}
                                    </th>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <h4>Productos</h4>
                        <div class="message-body">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Imagen</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody id="factura-productos">
                                    <tr>
                                        <td colspan="5" class="text-center"> Cargando...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-12 text-right">
                        <table class="table table-bordered totales">
                            <tr>
                                <th>
                                    Total
                                </th>
                                <th id="factura-total">
                                    0.0
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Descuento
                                </th>
                                <th id="factura-descuento">
                                    0.0
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    Total a pagar
                                </th>
                                <th id="factura-total-pagar">
                                    0.0
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" class="close" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>