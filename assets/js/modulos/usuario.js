var usuarios = (function(window, document){
    var metodos = {
        usuario: null,
        list: [],
        inicio: function(){
            let this_ = this;
            index.get('btnAdd').addEventListener('click', function(evt){
                this_.usuario = null;
                let formulario = index.get('form-usuario');
                formulario.reset();
                formulario.password.disabled = false;
                formulario.email.disabled = false;
                $('#modal-add-usuario').modal('toggle');                    
            });
        	index.get('form-usuario').addEventListener('submit', function(evt){
                evt.preventDefault();
                this_.saveData();                    
            });
            this.getUsuarios();
        },
        getUsuarios: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/usuario/getData';
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
                        <td>${objData[i].email}</td>
                        <td>${objData[i].rol.toUpperCase()}</td>
                        <td>
                            <button class="btn btn-primary btn-xs" user="${objData[i].idpersona}" onclick="usuarios.editarUsuario(this)"><i class="fa fa-pencil"></i></button>
                            <button class="btn btn-danger btn-xs" user="${objData[i].idpersona}" onclick="usuarios.eliminarUsuario(this)"><i class="fa fa-trash-o "></i></button>
                        </td>
                    </tr>`;
                    }
                    if(objData.length == 0) html = ` <tr>
                                                        <td class="text-center" colspan="6">¡No hay registros!</td>
                                                    </tr>`;
                    index.get('tabla-usuario').innerHTML = html;
                }
            }
        },  
        saveData: function(){
            let this_ = this;
            let formulario = index.get('form-usuario');
            if(formulario.nombre.value.trim() == ''){
                index.msjAdvertencia('¡Nombre de la usuario es requerido!');
                return;
            }
            if(formulario.apellido.value.trim() == ''){
                index.msjAdvertencia('Apellido de la usuario es requerido!');
                return;
            }
            if(formulario.telefono.value.trim() == ''){
                index.msjAdvertencia('Telefono de la usuario es requerido!');
                return;
            }
            if(formulario.rol.value.trim() == ''){
                index.msjAdvertencia('¡Asignar un rol de usuario!');
                return;
            }
            if(this.usuario == null){
                const resValid = index.validarEmail(formulario.email.value.trim())
                if(!resValid.isValid){
                    index.msjAdvertencia(resValid.msg);
                    return;
                }
                if(formulario.password.value.trim() == ''){
                    index.msjAdvertencia('¡La contraseña es requerido!');
                    return;
                }
                if(formulario.password.value.trim().length <= 5){
                    index.msjAdvertencia('¡La contraseña debe ser mayor a seis dígitos!');
                    return;
                }
            }
            var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                formData.append("nombre", formulario.nombre.value);
                formData.append("apellido", formulario.apellido.value);
                formData.append("telefono", formulario.telefono.value);
                formData.append("rol", formulario.rol.value);
                formData.append("email", formulario.email.value);
                formData.append("password", formulario.password.value);
                var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                var ajaxUrl;
                if(this.usuario){
                    formData.append("idpersona", this.usuario.idpersona);
                    ajaxUrl = base_url+'/usuario/editarRegistro';
                }else{
                    ajaxUrl = base_url+'/usuario/nuevoRegistro';
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
                            this_.getUsuarios();
                            $('#modal-add-usuario').modal('toggle');
                        }else{
                            index.msjError(objData.msj);
                        }
                    }
            }
        },
        editarUsuario: function(item){
            this.usuario = {};
            var idpersona = $(item).attr('user');
            this.usuario = this.list.find(function(element) {
                return element.idpersona == idpersona;
            });
            let formulario = index.get('form-usuario');
            formulario.password.disabled = true;
            formulario.email.disabled = true;
            formulario.nombre.value = this.usuario.nombre;
            formulario.apellido.value = this.usuario.apellido;
            formulario.telefono.value = this.usuario.telefono;
            formulario.email.value = this.usuario.email;
            formulario.rol.value = this.usuario.rol;
            $('#modal-add-usuario').modal('toggle');  
        },
        eliminarUsuario: function(elm){
            this.usuario = {};
            var idpersona = $(elm).attr('user');
            let this_ = this;
            Swal.fire({
                title: '¿Seguro que desea eliminar este usuario?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#B3ABAB',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'No Eliminar'
            }).then((result) => {
                if (result.value) {
                    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    var ajaxUrl = base_url+'/usuario/eliminarRegistro';
                    var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                    formData.append("idpersona", idpersona);
                    
                    request.open("POST", ajaxUrl, true);
                    request.send(formData);
                    request.onreadystatechange = function(){
                        if(request.readyState == 4 && request.status == 200){
                            //console.log(request.responseText);
                            var objData = JSON.parse(request.responseText);
                            if(objData.estado){
                                this_.getUsuarios();
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
 usuarios.inicio();