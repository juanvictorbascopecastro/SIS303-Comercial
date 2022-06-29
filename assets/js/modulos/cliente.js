var clientes = (function(window, document){
    var metodos = {

        cliente: null,
        list: [],
        phone_number: null,
        dataTableCliente: {},
        inicio: function(){
            let this_ = this;
            this.getClientes();
            index.get('btnAdd').addEventListener('click', function(evt){
                index.get('form-cliente').reset();
                this_.cliente = null;
                $('#modal-add-cliente').modal('toggle');                    
            });
        	index.get('form-cliente').addEventListener('submit', function(evt){
                evt.preventDefault();
                this_.saveData();
            });
        },
        getClientes: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/cliente/getData';
            request.open("POST", ajaxUrl, true);
            request.send();
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    //console.log(request.responseText);
                    var objData = JSON.parse(request.responseText);
                    let html = '';
                    this_.list = objData;
                    for(let i = 0; i < objData.length; i++){
                        html = html + `<tr>
                        <td>${objData[i].nombre}</td>
                        <td>${objData[i].apellido}</td>
                        <td>${objData[i].telefono}</td>
                        <td>${objData[i].dni}</td>
                        <td>
                            <button class="btn btn-primary btn-xs" cli="${objData[i].idpersona}" onclick="clientes.editarCliente(this)"><i class="fa fa-pencil"></i></button>
                            <button class="btn btn-danger btn-xs" cli="${objData[i].idpersona}" onclick="clientes.eliminarCliente(this)"><i class="fa fa-trash-o "></i></button>
                        </td>
                    </tr>`;
                    }
                    if(objData.length == 0) html = ` <tr>
                                                        <td class="text-center" colspan="5">¡No hay registros!</td>
                                                    </tr>`;
                    index.get('tabla-cliente').innerHTML = html;
                }
            }
        },
        saveData: function(){
            let this_ = this;
            let formulario = index.get('form-cliente');
            if(formulario.nombre.value.trim() == ''){
                index.msjAdvertencia('¡Nombre de la cliente es requerido!');
                return;
            }
            if(formulario.apellido.value.trim() == ''){
                index.msjAdvertencia('Apellido de la cliente es requerido!');
                return;
            }
            if(formulario.telefono.value.trim() == ''){
                index.msjAdvertencia('Telefono de la cliente es requerido!');
                return;
            }
            if(formulario.dni.value.trim() == ''){
                index.msjAdvertencia('¡DNI de la cliente es requerido!');
                return;
            }
            var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                formData.append("nombre", formulario.nombre.value);
                formData.append("apellido", formulario.apellido.value);
                formData.append("telefono", formulario.telefono.value);
                formData.append("dni", formulario.dni.value);
                var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                var ajaxUrl;
                if(this.cliente){
                    formData.append("idpersona", this.cliente.idpersona);
                    ajaxUrl = base_url+'/cliente/editarRegistro';
                }else{
                    ajaxUrl = base_url+'/cliente/nuevoRegistro';
                }
                request.open("POST", ajaxUrl, true);
                //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(formData);
                request.onreadystatechange = function(){
                    if(request.readyState == 4 && request.status == 200){
                        //console.log(request.responseText);
                        var objData = JSON.parse(request.responseText);
                        if(objData.estado){
                            index.msjCompletado(objData.msj);
                            this_.getClientes();
                            $('#modal-add-cliente').modal('toggle');
                        }else{
                            index.msjError(objData.msj);
                        }
                    }
                }
        },
        editarCliente: function(item){
            this.cliente = {};
            var idpersona = $(item).attr('cli');
            this.cliente = this.list.find(function(element) {
                return element.idpersona == idpersona;
            });

            $('#modal-add-cliente').modal('toggle');
            let formulario = index.get('form-cliente');
            formulario.nombre.value = this.cliente.nombre;
            formulario.apellido.value = this.cliente.apellido;
            formulario.telefono.value = this.cliente.telefono;
            formulario.dni.value = this.cliente.dni;
        },
        eliminarCliente: function(item){
            var idpersona = $(item).attr('cli');
            let this_ = this;
            Swal.fire({
                title: '¿Seguro que desea eliminar el cliente?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#B3ABAB',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'No Eliminar'
            }).then((result) => {
                if (result.value) {
                    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    var ajaxUrl = base_url+'/cliente/eliminarRegistro';
                    var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                    formData.append("idpersona", idpersona);
                    
                    request.open("POST", ajaxUrl, true);
                    request.send(formData);
                    request.onreadystatechange = function(){
                        if(request.readyState == 4 && request.status == 200){
                            //console.log(request.responseText);
                            var objData = JSON.parse(request.responseText);
                            if(objData.estado){
                                this_.getClientes();
                                index.msjCompletado(objData.msj);
                            }else{
                                index.msjError(objData.msj);
                            }
                        }
                    }
                }
            }); 
        }
     };
     return metodos;
 })(window, document);
 clientes.inicio();