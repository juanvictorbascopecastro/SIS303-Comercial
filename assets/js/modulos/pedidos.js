var pedidos = (function(window, document){
    var metodos = {
        list: [],
        table: {},
        inicio: function(){
            let this_ = this;
            this.loadPedidos();
            index.get('btnSearch').addEventListener('click', function(evt){
                let desde = index.get('fecha-desde').value;
                let hasta = index.get('fecha-hasta').value;
                if(desde != '' && hasta != ''){
                    this_.searchPedidos(desde, hasta);
                }else{
                    index.msjAdvertencia('¡Agregar entre que rangos de fecha a buscar!');
                }
            })
        },
        loadPedidos: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'pedidos/getData';
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    //console.log(request.responseText);
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        var objData = JSON.parse(request.responseText);
                        let html = '';
                        this_.list = objData;
                        for(let i = 0; i < objData.length; i++){
                            html = html + `<tr>
                            <td>${index.getFecha(objData[i].fecha)}</td>
                            <td> Bs. ${objData[i].total}</td>
                            <td>${objData[i].proveedor}</td>
                            <td>${objData[i].dni}</td>
                            <td>${objData[i].usuario}</td>
                            <td>${objData[i].rol}</td>
                            <td>
                                <button class="btn btn-defauld ml-1 btn-sm" ped="${objData[i].idpedido}" onclick="pedidos.anularPedido(this)"><i class="fa fa-times"></i> Anular</button>
                                <button class="btn btn-success ml-1 btn-sm" ped="${objData[i].idpedido}" onclick="pedidos.detalles(this)"><i class="fa fa-info"></i> Detalles</button>
                            </td>
                        </tr>`;
                        }
                        if(objData.length == 0) html = ` <tr>
                                                            <td class="text-center" colspan="5">¡No hay registros!</td>
                                                        </tr>`;
                        index.get('tabla-pedidos').innerHTML = html;
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        searchPedidos: function(desde, hasta){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/pedidos/searchData?desde='+desde+'&hasta='+hasta;
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    console.log(request.responseText);
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        var objData = JSON.parse(request.responseText);
                        let html = '';
                        this_.list = objData;
                        for(let i = 0; i < objData.length; i++){
                            html = html + `<tr>
                            <td>${index.getFecha(objData[i].fecha)}</td>
                            <td> Bs. ${objData[i].total}</td>
                            <td>${objData[i].usuario}</td>
                            <td>${objData[i].rol}</td>
                            <td>
                                <button class="btn btn-defauld ml-1 btn-sm" ped="${objData[i].idpedido}" onclick="pedidos.anularVenta(this)"><i class="fa fa-times"></i> Anular</button>
                                <button class="btn btn-success ml-1 btn-sm" ped="${objData[i].idpedido}" onclick="pedidos.detalles(this)"><i class="fa fa-info"></i> Detalles</button>
                            </td>
                        </tr>`;
                        }
                        if(objData.length == 0) html = ` <tr>
                                                            <td class="text-center" colspan="5">¡No hay registros!</td>
                                                        </tr>`;
                        index.get('tabla-pedidos').innerHTML = html;
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        pedido: null,
        anularPedido: function(item){
            var idpedido = $(item).attr('ped');
            let this_ = this;
            Swal.fire({
                title: '¿Seguro que desea anular el pedido?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#B3ABAB',
                confirmButtonText: 'SI',
                cancelButtonText: 'NO'
            }).then((result) => {
                if (result.value) {
                    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    var ajaxUrl = base_url+'/pedidos/anularPedido';
                    var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                    formData.append("idpedido", idpedido);
                    
                    request.open("POST", ajaxUrl, true);
                    request.send(formData);
                    request.onreadystatechange = function(){
                        if(request.readyState == 4 && request.status == 200){
                            var objData = JSON.parse(request.responseText);
                            if(objData.estado){
                                this_.loadPedidos();
                                index.msjCompletado(objData.msj);
                            }else{
                                index.msjError(objData.msj);
                            }
                        }
                    }
                }
            }); 
        },
        detalles: function(item){
            $('.modal-detalles').modal('toggle');
            var idpedido = $(item).attr('ped');
            this.pedido = this.list.find(function(element) {
                return element.idpedido == idpedido;
            });
            this.getProductosPedido(idpedido);
            index.get('factura-nro').innerHTML = 'Nro. '+idpedido;
            index.get('factura-fecha').innerHTML = 'Fecha: '+ index.fecha(this.pedido.fecha);
            index.get('factura-hora').innerHTML = 'Hora: '+ index.hora(this.pedido.fecha);
            index.get('factura-vendedor').innerHTML = 'Usuario: '+this.pedido.usuario;
            index.get('factura-dni').innerHTML = 'DNI: '+this.pedido.dni;
            index.get('factura-cliente').innerHTML = 'Nombre: '+this.pedido.proveedor;
            index.get('factura-total-pagar').innerHTML = 'Bs. '+parseFloat(this.pedido.total).toFixed(2);
        },
        getProductosPedido(idpedido){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/pedidos/getProductosPedido?idpedido='+idpedido;
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    //console.log(request.responseText);
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        let html = '';
                        let total = 0;
                        for(let i = 0; i < objData.length; i++){
                            html = html + `<tr>
                                    <td>${objData[i].nombre}</td>
                                    <td class="text-center p-0 m-0" style="padding: 0px; text-align: center">
                                        <img src="${objData[i].imagen}" alt="" width="50px" height="50px" class="m-0">
                                    </td>
                                    <td>Bs. ${parseFloat(objData[i].precio_compra).toFixed(2)}</td>
                                    <td>${objData[i].cantidad}</td>
                                    <td>Bs. ${(objData[i].precio_compra * objData[i].cantidad).toFixed(2)}</td>
                                </tr>`;
                            total = total + (objData[i].precio_compra * objData[i].cantidad);
                        }
                        
                        index.get('factura-total').innerHTML = 'Bs. '+total.toFixed(2);
                        index.get('factura-productos').innerHTML = html;
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
     };
     return metodos;
 })(window, document);
 pedidos.inicio();