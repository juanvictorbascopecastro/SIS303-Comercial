var proveedor = (function(window, document){
    var metodos = {

        proveedor: null,
        list: [],
        phone_number: null,
        inicio: function(){
            let this_ = this;
            this.getProveedores();
            index.get('btnAdd').addEventListener('click', function(evt){
                index.get('form-proveedor').reset();
                this_.proveedor = null;
                $('#modal-add-proveedor').modal('toggle');                    
            });
        	index.get('form-proveedor').addEventListener('submit', function(evt){
                evt.preventDefault();
                this_.saveData();
            });
        },
        getProveedores: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/proveedor/getData';
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
                        <td>${objData[i].direccion}</td>
                        <td>${objData[i].dni}</td>
                        <td>
                            <button class="btn btn-primary btn-xs" prov="${objData[i].idpersona}" onclick="proveedor.editarProveedor(this)"><i class="fa fa-pencil"></i></button>
                            <button class="btn btn-danger btn-xs" prov="${objData[i].idpersona}" onclick="proveedor.eliminarProveedor(this)"><i class="fa fa-trash-o "></i></button>
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
            let formulario = index.get('form-proveedor');
            if(formulario.nombre.value.trim() == ''){
                index.msjAdvertencia('¡Nombre del proveedor es requerido!');
                return;
            }
            if(formulario.apellido.value.trim() == ''){
                index.msjAdvertencia('Apellido del proveedor es requerido!');
                return;
            }
            if(formulario.telefono.value.trim() == ''){
                index.msjAdvertencia('Telefono del proveedor es requerido!');
                return;
            }
            if(formulario.dni.value.trim() == ''){
                index.msjAdvertencia('¡DNI del proveedor es requerido!');
                return;
            }
            if(formulario.direccion.value.trim() == ''){
                index.msjAdvertencia('¡Direccion del proveedor es requerido!');
                return;
            }
            var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                formData.append("nombre", formulario.nombre.value);
                formData.append("apellido", formulario.apellido.value);
                formData.append("telefono", formulario.telefono.value);
                formData.append("dni", formulario.dni.value);
                formData.append("direccion", formulario.direccion.value);
                var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                var ajaxUrl;
                if(this.proveedor){
                    formData.append("idpersona", this.proveedor.idpersona);
                    ajaxUrl = base_url+'/proveedor/editarRegistro';
                }else{
                    ajaxUrl = base_url+'/proveedor/nuevoRegistro';
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
                            this_.getProveedores();
                            $('#modal-add-proveedor').modal('toggle');
                        }else{
                            index.msjError(objData.msj);
                        }
                    }
                }
        },
        editarProveedor: function(item){
            this.proveedor = {};
            var idpersona = $(item).attr('prov');
            this.proveedor = this.list.find(function(element) {
                return element.idpersona == idpersona;
            });

            $('#modal-add-proveedor').modal('toggle');
            let formulario = index.get('form-proveedor');
            formulario.nombre.value = this.proveedor.nombre;
            formulario.apellido.value = this.proveedor.apellido;
            formulario.telefono.value = this.proveedor.telefono;
            formulario.dni.value = this.proveedor.dni;
            formulario.direccion.value = this.proveedor.direccion;
        },
        eliminarProveedor: function(item){
            var idpersona = $(item).attr('prov');
            let this_ = this;
            Swal.fire({
                title: '¿Seguro que desea eliminar al proveedor?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#B3ABAB',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'No Eliminar'
            }).then((result) => {
                if (result.value) {
                    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    var ajaxUrl = base_url+'/proveedor/eliminarRegistro';
                    var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                    formData.append("idpersona", idpersona);
                    
                    request.open("POST", ajaxUrl, true);
                    request.send(formData);
                    request.onreadystatechange = function(){
                        if(request.readyState == 4 && request.status == 200){
                            //console.log(request.responseText);
                            var objData = JSON.parse(request.responseText);
                            if(objData.estado){
                                this_.getProveedores();
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
 proveedor.inicio();