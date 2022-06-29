var nuevo_pedido = (function(window, document){
    var metodos = {
        list_productos: [],
        list_proveedor: [],
        inicio: function(){
            let this_ = this;
            this.getProveedores();
            this.getProductos();
            index.get('btnSave').addEventListener('click', function(evt){
                this_.validarDatos();
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
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        let html = '';
                        this_.list_proveedor = objData;
                        for(let i = 0; i < objData.length; i++){
                            html = html + `<option value="${objData[i].idproveedor}">${objData[i].nombre}</option>`;
                        }
                        index.get('select-proveedor').innerHTML = html;
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
                        for(let i = 0; i < this_.list_productos.length; i++){
                            let stock = parseFloat(this_.list_productos[i].stock) == 0 ? `<span class="label label-danger label-mini">${this_.list_productos[i].stock}</span>` :
                            parseFloat(this_.list_productos[i].stock) <= 5 ? `<span class="label label-warning label-mini">${this_.list_productos[i].stock}</span>` :
                            `<span class="label label-primary label-mini">${this_.list_productos[i].stock}</span>`;

                            html = html+`<tr>
                                            <td><a href="#">${this_.list_productos[i].nombre}</a></td>
                                            <td class="text-center p-0 m-0" style="padding: 0px; text-align: center">
                                                <img src="${this_.list_productos[i].imagen}" alt="" width="50px" height="50px" class="m-0">
                                            </td>
                                            <td>${this_.list_productos[i].categoria}</td>
                                            <td>Bs. ${this_.list_productos[i].precio}</td>
                                            <td>Bs. ${this_.list_productos[i].precio_compra}</td>
                                            <td class="text-center">${stock}</td>
                                            <td>
                                                <input type="number" class="form-control form-control-sm" value="0" id="${this_.list_productos[i].idproducto}" onchange="nuevo_pedido.calcularTotal(event)">
                                            </td>
                                        </tr>`;
                        }
                        if(objData.length <= 0) html = `<tr>
                                                            <td class="text-center" colspan="7"><b>¡No hay registros!</b></td>
                                                        </tr>`;
                        index.get('productos-list').innerHTML = html;
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        total: 0,
        calcularTotal: function(event){
            console.log(event.target.value);
            console.log(event.target.id);
            this.total = 0;
            if(!index.isInt(event.target.value)){
                event.target.value = '0';
                index.Toast('¡No es un número entero!', 'warning');
                return;
            }
            let position = this.list_agregados.map(x => x.idproducto).indexOf(event.target.id); 
            console.log(position);
            if(position == -1){
                let i = this.list_productos.map(x => x.idproducto).indexOf(event.target.id);
                let producto = this.list_productos[i];
                this.list_agregados.push({
                    idproducto: producto.idproducto,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    precio_compra: producto.precio_compra,
                    stock: producto.stock,
                    agregar: parseInt(event.target.value)
                });
            }else{
                this.list_agregados[position].agregar = event.target.value;
            }
            for(let i = 0; i < this.list_agregados.length; i++){
                this.total = this.total + (parseFloat(this.list_agregados[i].precio_compra) * parseInt(event.target.value));
            }
            index.get('total').value = this.total.toFixed(2);
        },
        list_agregados: [],
        validarDatos: function(){
            /*var table = document.getElementById('productos-list'); 
            for (var r = 0, n = table.rows.length; r < n; r++) {
                for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
                    //posicion_components = table.rows[r].cells[c].innerHTML;
                    if(c == 6){
                        let input = table.rows[r].cells[c].querySelector('input').value;
                        if(isInt(input)){
                            this.list_agregados.push({
                                idproducto: this.list_productos[r].idproducto,
                                nombre: this.list_productos[r].nombre,
                                precio: this.list_productos[r].precio,
                                precio_compra: this.list_productos[r].precio_compra,
                                stock: this.list_productos[r].stock,
                                agregar: parseInt(input)
                            });
                        }
                    }         
                }
            }*/
            if(this.list_agregados.length == 0){
                index.msjAdvertencia('¡Agregar cantidad diferente de cero de los productos que decea solicitar!');
                return;
            }

            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/pedidos/agregarPedido';
            var formData = new FormData(); // objeto ya declarado para ajax sentencia creada por
            formData.append("idproveedor", index.get('select-proveedor').value);
            formData.append("productos", JSON.stringify(this.list_agregados));
            formData.append("total", this.total);
            formData.append("idusuario", idusuario);
            
            request.open("POST", ajaxUrl, true);
            request.send(formData);
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    //console.log(request.responseText);
                    var objData = JSON.parse(request.responseText);
                    if(objData.estado){
                        window.location.href = base_url+'pedidos';
                    }else{
                        index.msjError(objData.msj);
                    }
                }
            }
        },
     };
     return metodos;
 })(window, document);
 nuevo_pedido.inicio();