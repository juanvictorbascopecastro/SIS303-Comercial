var almacen = (function(window, document){
    var metodos = {
        almacen: null,
        list: [],
        inicio: function(){
            let this_ = this;
            index.get('btnAdd').addEventListener('click', function(evt){
                index.get('form-almacen').reset();
                this_.almacen = null;
                $('#modal-add-almacen').modal('toggle');                    
            });
        	index.get('form-almacen').addEventListener('submit', function(evt){
                evt.preventDefault();
                this_.saveData();                    
            });
            this.getAlmacen();
        },
        getAlmacen: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/almacen/getData';
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    //console.log(request.responseText);
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        let html = '';
                        this_.list = objData;
                        for(let i = 0; i < objData.length; i++){
                            html = html + `<li>
                                        <div class="task-title">
                                            <span class="task-title-sp">${objData[i].nombre}</span>
                                            <small>${objData[i].direccion}</small>
                                            <div class="pull-right hidden-phone">
                                                <button class="btn btn-primary btn-xs" alm="${objData[i].idalmacen}" onclick="almacen.editarAlmacen(this)"><i class="fa fa-pencil"></i></button>
                                                <button class="btn btn-danger btn-xs" alm="${objData[i].idalmacen}" onclick="almacen.eliminarAlmacen(this)"><i class="fa fa-trash-o "></i></button>
                                            </div>
                                        </div>
                                    </li> `;
                        }
                        if(objData.length == 0) html = `<li class="text-center">
                                                            <b>¡No hay registros!</b>
                                                        </li>`;
                        index.get('list-categorias').innerHTML = html;
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        
        saveData: function(){
            let this_ = this;
            let formulario = index.get('form-almacen');
            if(formulario.nombre.value.trim() == ''){
                index.msjAdvertencia('¡Nombre del almacen es requerido!');
                return;
            }
            if(formulario.direccion.value.trim() == ''){
                index.msjAdvertencia('Dirección del almacen es requerido!');
                return;
            }
            var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                formData.append("nombre", formulario.nombre.value);
                formData.append("descripcion", formulario.descripcion.value);
                formData.append("direccion", formulario.direccion.value);
                var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                var ajaxUrl;
                if(this.almacen){
                    formData.append("idalmacen", this.almacen.idalmacen);
                    ajaxUrl = base_url+'/almacen/editarRegistro';
                }else{
                    ajaxUrl = base_url+'/almacen/nuevoRegistro';
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
                            this_.getAlmacen();
                            $('#modal-add-almacen').modal('toggle');
                        }else{
                            index.msjError(objData.msj);
                        }
                    }
                }
        },
        editarAlmacen: function(elm){
            this.almacen = {};
            var idalmacen = $(elm).attr('alm');
            this.almacen = this.list.find(function(element) {
                return element.idalmacen == idalmacen;
            });
            $('#modal-add-almacen').modal('toggle');
            let formulario = index.get('form-almacen');
            formulario.nombre.value = this.almacen.nombre;
            formulario.descripcion.value = this.almacen.descripcion;
            formulario.direccion.value = this.almacen.direccion;
        },
        eliminarAlmacen: function(elm){
            this.almacen = {};
            var idalmacen = $(elm).attr('alm');
            let data = this.list.find(function(element) {
                return element.idalmacen == idalmacen;
            });
            let this_ = this;
            Swal.fire({
                title: '¿Seguro que desea eliminar el almacen '+data.nombre+'?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#B3ABAB',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'No Eliminar'
            }).then((result) => {
                if (result.value) {
                    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    var ajaxUrl = base_url+'/almacen/eliminarRegistro';
                    var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                    formData.append("idalmacen", idalmacen);
                    
                    request.open("POST", ajaxUrl, true);
                    request.send(formData);
                    request.onreadystatechange = function(){
                        if(request.readyState == 4 && request.status == 200){
                            //console.log(request.responseText);
                            var objData = JSON.parse(request.responseText);
                            if(objData.estado){
                                this_.getAlmacen();
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
 almacen.inicio();