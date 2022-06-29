var categorias = (function(window, document){
    var metodos = {
        categoria: null,
        list: [],
        inicio: function(){
            let this_ = this;
            index.get('btnAdd').addEventListener('click', function(evt){
                index.get('form-categoria').reset();
                this_.categoria = null;
                $('#modal-add-categoria').modal('toggle');                    
            });
        	index.get('form-categoria').addEventListener('submit', function(evt){
                evt.preventDefault();
                this_.saveData();                    
            });
            this.getCategorias();
        },
        getCategorias: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/categoria/getData';
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        let html = '';
                        this_.list = objData;
                        for(let i = 0; i < objData.length; i++){
                            html = html + `<li>
                                        <div class="task-title">
                                            <span class="task-title-sp">${objData[i].nombre}</span>
                                            <span class="badge" style="background: ${objData[i].color}">Color</span>
                                            <div class="pull-right hidden-phone">
                                                <button class="btn btn-primary btn-xs" ctg="${objData[i].idcategoria}" onclick="categorias.editarCategoria(this)"><i class="fa fa-pencil"></i></button>
                                                <button class="btn btn-danger btn-xs" ctg="${objData[i].idcategoria}" onclick="categorias.eliminarCategoria(this)"><i class="fa fa-trash-o "></i></button>
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
            let formulario = index.get('form-categoria');
            //this.categoria.nombre = formulario.nombre.value;
            //this.categoria.descripcion = formulario.descripcion.value;
            if(formulario.nombre.value.trim() != ''){
                var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                formData.append("nombre", formulario.nombre.value);
                formData.append("descripcion", formulario.descripcion.value);
                formData.append("color", formulario.color.value);
                var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                var ajaxUrl;
                if(this.categoria){
                    formData.append("idcategoria", this.categoria.idcategoria);
                    ajaxUrl = base_url+'/categoria/editarRegistro';
                }else{
                    ajaxUrl = base_url+'/categoria/nuevoRegistro';
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
                            this_.getCategorias();
                            $('#modal-add-categoria').modal('toggle');
                        }else{
                            index.msjError(objData.msj);
                        }
                    }
                }
            }else{
                index.msjAdvertencia('¡Nombre de la categoria es requerido!');
            }
        },
        editarCategoria: function(elm){
            this.categoria = {};
            var idcategoria = $(elm).attr('ctg');
            this.categoria = this.list.find(function(element) {
                return element.idcategoria == idcategoria;
            });
            $('#modal-add-categoria').modal('toggle');
            let formulario = index.get('form-categoria');
            formulario.nombre.value = this.categoria.nombre;
            formulario.descripcion.value = this.categoria.descripcion;
            formulario.color.value = this.categoria.color;
        },
        eliminarCategoria: function(elm){
            this.categoria = {};
            var idcategoria = $(elm).attr('ctg');
            let data = this.list.find(function(element) {
                return element.idcategoria == idcategoria;
            });
            let this_ = this;
            Swal.fire({
                title: '¿Seguro que desea eliminar la categoria '+data.nombre+'?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#B3ABAB',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'No Eliminar'
            }).then((result) => {
                if (result.value) {
                    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    var ajaxUrl = base_url+'/categoria/eliminarRegistro';
                    var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                    formData.append("idcategoria", idcategoria);
                    
                    request.open("POST", ajaxUrl, true);
                    request.send(formData);
                    request.onreadystatechange = function(){
                        if(request.readyState == 4 && request.status == 200){
                            //console.log(request.responseText);
                            var objData = JSON.parse(request.responseText);
                            if(objData.estado){
                                this_.getCategorias();
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
 categorias.inicio();