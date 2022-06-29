var ventas = (function(window, document){
    var metodos = {
        list_ventas: [],
        table: {},
        inicio: function(){
            let this_ = this;
            this.loadVetas();
            index.get('btnImprimir').addEventListener('click', function(evt){
                this_.imprimir();    
            });
            index.get('btnSearch').addEventListener('click', function(evt){
                let desde = index.get('fecha-desde').value;
                let hasta = index.get('fecha-hasta').value;
                if(desde != '' && hasta != ''){
                    this_.searchVetas(desde, hasta);
                }else{
                    index.msjAdvertencia('¡Agregar entre que rangos de fecha a buscar!');
                }
            })
        },
        loadVetas: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/ventas/getData';
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        var objData = JSON.parse(request.responseText);
                        let html = '';
                        this_.list_ventas = objData;
                        for(let i = 0; i < objData.length; i++){
                            html = html + `<tr>
                            <td>${index.getFecha(objData[i].fecha)}</td>
                            <td>${objData[i].detalles}</td>
                            <td>${objData[i].cliente}</td>
                            <td>${objData[i].dni}</td>
                            <td>${objData[i].usuario}</td>
                            <td>${objData[i].rol}</td>
                            <td>
                                <button class="btn btn-defauld ml-1 btn-sm" venta="${objData[i].idventa}" onclick="ventas.anularVenta(this)"><i class="fa fa-times"></i> Anular</button>
                                <button class="btn btn-success ml-1 btn-sm" venta="${objData[i].idventa}" onclick="ventas.factura(this)"><i class="fa fa-print"></i> Factura</button>
                            </td>
                        </tr>`;
                        }
                        if(objData.length == 0) html = ` <tr>
                                                            <td class="text-center" colspan="7">¡No hay registros!</td>
                                                        </tr>`;
                        index.get('tabla-ventas').innerHTML = html;
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        searchVetas: function(desde, hasta){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/ventas/searchData?desde='+desde+'&hasta='+hasta;
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        var objData = JSON.parse(request.responseText);
                        let html = '';
                        this_.list_ventas = objData;
                        for(let i = 0; i < objData.length; i++){
                            html = html + `<tr>
                            <td>${index.getFecha(objData[i].fecha)}</td>
                            <td>${objData[i].detalles}</td>
                            <td>${objData[i].cliente}</td>
                            <td>${objData[i].dni}</td>
                            <td>${objData[i].usuario}</td>
                            <td>${objData[i].rol}</td>
                            <td>
                                <button class="btn btn-defauld ml-1 btn-sm" venta="${objData[i].idventas}" onclick="ventas.anularVenta(this)"><i class="fa fa-times"></i> Anular</button>
                                <button class="btn btn-success ml-1 btn-sm" venta="${objData[i].idventas}" onclick="ventas.factura(this)"><i class="fa fa-print"></i> Factura</button>
                            </td>
                        </tr>`;
                        }
                        if(objData.length == 0) html = ` <tr>
                                                            <td class="text-center" colspan="7">¡No hay registros!</td>
                                                        </tr>`;
                        index.get('tabla-ventas').innerHTML = html;
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        venta: null,
        factura: function(item){
            $('.modal-factura').modal('toggle');
            var idventa = $(item).attr('venta');
            this.venta = this.list_ventas.find(function(element) {
                return element.idventa == idventa;
            });
            this.getProductosVenta(idventa);
            index.get('factura-nro').innerHTML = 'Nro. 1100'+idventa;
            index.get('factura-serie').innerHTML = 'Serie. 10'+idventa;
            index.get('factura-fecha').innerHTML = 'Fecha: '+ index.fecha(this.venta.fecha);
            index.get('factura-hora').innerHTML = 'Hora: '+ index.hora(this.venta.fecha);
            index.get('factura-vendedor').innerHTML = 'Vendedor: '+this.venta.usuario;
            index.get('factura-dni').innerHTML = 'DNI: '+this.venta.dni;
            index.get('factura-cliente').innerHTML = 'Nombre: '+this.venta.cliente;
            index.get('factura-total-pagar').innerHTML = 'Bs. '+parseFloat(this.venta.total).toFixed(2);
        },
        getProductosVenta(idventa){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/ventas/getProductosVenta?idventa='+idventa;
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
                                    <td>Bs. ${parseFloat(objData[i].precio).toFixed(2)}</td>
                                    <td>${objData[i].cantidad}</td>
                                    <td>Bs. ${(objData[i].precio * objData[i].cantidad).toFixed(2)}</td>
                                </tr>`;
                            total = total + (objData[i].precio * objData[i].cantidad);
                        }
                        
                        index.get('factura-total').innerHTML = 'Bs. '+total.toFixed(2);
                        index.get('factura-descuento').innerHTML = 'Bs. '+(total - this_.venta.total).toFixed(2);
                        index.get('factura-productos').innerHTML = html;
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        imprimir: function(){
            var resto_pagina = document.body.innerHTML;
            var imprimir_div = document.getElementById('factura').innerHTML;
            document.body.innerHTML = imprimir_div;
            window.print();
            document.body.innerHTML = resto_pagina;
        },
        anularVenta: function(item){
            var idventa = $(item).attr('venta');
            let this_ = this;
            Swal.fire({
                title: '¿Seguro que desea anular la venta?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#B3ABAB',
                confirmButtonText: 'SI',
                cancelButtonText: 'NO'
            }).then((result) => {
                if (result.value) {
                    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    var ajaxUrl = base_url+'/ventas/anularVenta';
                    var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                    formData.append("idventa", idventa);
                    
                    request.open("POST", ajaxUrl, true);
                    request.send(formData);
                    request.onreadystatechange = function(){
                        if(request.readyState == 4 && request.status == 200){
                            var objData = JSON.parse(request.responseText);
                            if(objData.estado){
                                this_.loadVetas();
                                index.msjCompletado(objData.msj);
                            }else{
                                index.msjError(objData.msj);
                            }
                        }
                    }
                }
            }); 
        },
     };
     return metodos;
 })(window, document);
 ventas.inicio();