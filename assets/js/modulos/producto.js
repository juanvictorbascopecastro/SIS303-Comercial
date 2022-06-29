var productos = (function(window, document){
    var metodos = {

        list_categorias: [],
        list_almacen: [],
        list_productos: [],
        inicio: function(){
            let this_ = this;
            index.get('btnAdd').addEventListener('click', function(evt){
                index.get('form-producto').reset();
                this_.producto = null;
                $('#modal-add-producto').modal('toggle');
                if(this_.list_categorias.length <= 0) this_.getCategorias();              
            });
        	index.get('form-producto').addEventListener('submit', function(evt){
                evt.preventDefault();
                this_.guardarDatos();                    
            });
            this.getProductos();
            this.getAlmacen();
            index.get('selectImage').onchange = function(e){
                this_.selectArchivo(e);
            }
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
                        this_.list_categorias = objData;
                        for(let i = 0; i < objData.length; i++){
                            html = html + `<option value="${objData[i].idcategoria}">${objData[i].nombre}</option>`;
                        }
                        index.get('select-categoria').innerHTML = html;
                        if(this_.producto != null){
                            //index.get('add-producto').idcategoria.value = this_.producto.idcategoria;
                            let formulario = index.get('form-producto');
                            formulario.categoria.value = this_.producto.idcategoria;
                        }
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
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
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        let html = '';
                        this_.list_almacen = objData;
                        for(let i = 0; i < objData.length; i++){
                            html = html + `<option value="${objData[i].idalmacen}">${objData[i].nombre}</option>`;
                        }
                        index.get('select-almacen').innerHTML = html;
                        if(this_.producto != null){
                            let formulario = index.get('form-producto');
                            formulario.almacen.value = this_.almacen.idalmacen;
                        }
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        getProductos: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/producto/getData';
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    //console.log(request.responseText);
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        let html = '';
                        this_.list_productos = objData;
                        for(let i = 0; i < objData.length; i++){
                            html = html+`<div class="col-lg-4 col-md-4 col-sm-4 mb">
                                            <div class="content-panel pn">
                                                <div id="spotify" style="background: url(${objData[i].imagen}) no-repeat center top;">
                                                    <div class="col-xs-3 col-xs-offset-8">
                                                        <span class="badge mt-5" style="background: ${objData[i].color}">${objData[i].categoria}</span>
                                                    </div>
                                                    <div class="sp-title">
                                                        <b>${objData[i].nombre}</b>
                                                    </div>
                                                    <div class="play">
                                                        <button class="btn btn-sm btn-info" prod="${objData[i].idproducto}" onclick="productos.editarProducto(this)"><i class="fa fa-pencil"></i></button>
                                                        <button class="btn btn-sm btn-danger" prod="${objData[i].idproducto}" onclick="productos.eliminarProducto(this)"><i class="fa fa-trash-o"></i></button>
                                                    </div>
                                                </div>
                                                <p class="followers"><i class="fa fa-money"></i> ${objData[i].precio} Bs</p>
                                            </div>
                                        </div>`;
                        }
                        if(objData.length <= 0) html = `<div class="col-md-12 text-center">
                                                            <b>¡No hay registros!</b>
                                                        </div>`;
                        index.get('productos-list').innerHTML = html;
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        imagen: null,
        selectArchivo: function(event){
            if (event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'image/jpg' || event.target.files[0].type === 'image/png') {
                //this.showImage(this.file);
                this.imagen = event.target.files[0];
                //var nav = window.URL || window.webkitURL;
                //const img = nav.createObjectURL(this.file);
                //this.showImage(img);
            }else{
                index.msjAdvertencia('!El archivo debe ser una imagen formato png, jpg, jpeg¡');
            }
        },
        guardarDatos: function(){
            let formulario = index.get('form-producto');
            let this_ = this;
            if(formulario.nombre.value.trim() == ''){
                index.msjAdvertencia('¡Nombre del producto es requerido!');
                return;
            }
            if(formulario.precio.value.trim() == ''){
                index.msjAdvertencia('Precio de venta del producto es requerido!');
                return;
            }
            if(formulario.precio_compra.value.trim() == ''){
                index.msjAdvertencia('Precio de para la compra del producto es requerido!');
                return;
            }
            if(!index.isFloat(formulario.precio.value)){
                index.msjAdvertencia('Precio del producto debe ser un entero!');
                return;
            }
            if(formulario.categoria.value.trim() == ''){
                index.msjAdvertencia('¡Las categorias deben estar registradas por categorias, si no cuenta con categorias debe registrar algunas!');
                return;
            }
            if(formulario.stock.value.trim() == ''){
                index.msjAdvertencia('El stock debe iniciar en un número entero!');
                return;
            }
            if(!index.isInt(formulario.stock.value)){
                index.msjAdvertencia('El stock debe ser un número entero!');
                return;
            }
            if(this.producto == null){
                if(this.imagen == null) {
                    index.msjAdvertencia('¡Es necesario seleccionar una imegen!');
                    return;
                }
            }
            var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                formData.append("nombre", formulario.nombre.value);
                formData.append("precio", formulario.precio.value);
                formData.append("precio_compra", formulario.precio_compra.value);
                formData.append("stock", formulario.stock.value);
                formData.append("idcategoria", formulario.categoria.value);
                formData.append("nombre", formulario.nombre.value);
                formData.append("idalmacen", formulario.almacen.value);
                formData.append("imagen", this.imagen);
                formData.append("descripcion", formulario.descripcion.value);
                var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                var ajaxUrl;
                if(this.producto){
                    formData.append("idproducto", this.producto.idproducto);
                    ajaxUrl = base_url+'/producto/editarRegistro';
                }else{
                    ajaxUrl = base_url+'/producto/nuevoRegistro';
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
                            this_.getProductos();
                            $('#modal-add-producto').modal('toggle');
                        }else{
                            index.msjError(objData.msj);
                        }
                    }
                }
        },
        producto: null,
        editarProducto(elm){
            this.producto = {};
            var idproducto = $(elm).attr('prod');
            this.producto = this.list_productos.find(function(element) {
                return element.idproducto == idproducto;
            });
            $('#modal-add-producto').modal('toggle');
            let formulario = index.get('form-producto');
            formulario.nombre.value = this.producto.nombre;
            formulario.precio.value = this.producto.precio;
            formulario.stock.value = this.producto.stock;
            formulario.precio_compra.value = this.producto.precio_compra;
            if(this.list_categorias.length != 0) formulario.categoria.value = this.producto.idcategoria;
            else this.getCategorias();   
            formulario.descripcion.value = this.producto.descripcion;
        },
        eliminarProducto(elm){
            this.categoria = {};
            var idproducto = $(elm).attr('prod');
            let data = this.list_productos.find(function(element) {
                return element.idproducto == idproducto;
            });
            let this_ = this;
            Swal.fire({
                title: '¿Seguro que desea eliminar el producto '+data.nombre+'?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#B3ABAB',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'No Eliminar'
            }).then((result) => {
                if (result.value) {
                    var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    var ajaxUrl = base_url+'/producto/eliminarRegistro';
                    var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                    formData.append("idproducto", idproducto);
                    
                    request.open("POST", ajaxUrl, true);
                    request.send(formData);
                    request.onreadystatechange = function(){
                        if(request.readyState == 4 && request.status == 200){
                            //console.log(request.responseText);
                            var objData = JSON.parse(request.responseText);
                            if(objData.estado){
                                this_.getProductos();
                                index.msjCompletado(objData.msj);
                            }else{
                                index.msjError(objData.msj);
                            }
                        }
                    }
                }
            }); 
        },
        actualizarStock: async function(elm){
            var idproducto = $(elm).attr('prod');
            let data = this.list_productos.find(function(element) {
                return element.idproducto == idproducto;
            });

            let { value: cantidad } = await Swal.fire({
                title: 'Actualizar Stock de '+data.nombre,
                input: 'number',
                inputLabel: 'Ingresar un número',
                inputPlaceholder: 'ej, 1...',
                inputValue: data.stock,
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#0d6efd",
                cancelButtonColor: "#bdbdbd",
                confirmButtonText: "Agregar",
                cancelButtonText: "Cancelar",
            });
            if (!cantidad) {
                return;
            }
            if(!index.isInt(cantidad)){
                index.msjAdvertencia('¡El stock debe ser un número entero mayor a cero!');
                return;
            }
            cantidad = parseInt(cantidad);
            if(cantidad <= 0){
                index.msjAdvertencia('¡El stock a agregar debe ser mayor a cero!');
                return;  
            }
            let this_ = this;
            var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
                formData.append("stock", cantidad);
                formData.append("idproducto", idproducto);
                var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                var ajaxUrl = base_url+'/productos/actualizarStock';
                request.open("POST", ajaxUrl, true);
                //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(formData);
                request.onreadystatechange = function(){
                    if(request.readyState == 4 && request.status == 200){
                        //console.log(request.responseText);
                        var objData = JSON.parse(request.responseText);
                        if(objData.estado){
                            this_.getProductos();
                            index.Toast(objData.msj);
                        }else{
                            index.msjError(objData.msj);
                        }
                    }
                }
        }
     };
     return metodos;
 })(window, document);
 productos.inicio();