var reportes = (function(window, document){
    var metodos = {
        list: [],
        inicio: function(){
            this.getGraficaVentas();
            //this.getGraficaClientes();
            this.getGraficaProductos();
        },
        getGraficaVentas: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/reportes/getGraficaGanacias';
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    //console.log(request.responseText);
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        let mes = [], totals = [];
                        html = '';
                        for(let i = 0; i < objData.length; i++){
                            mes.push(objData[i].date);
                            if(objData[i].total != null) totals.push(parseFloat(objData[i].total).toFixed(2));
                            else totals.push(0.0);                        
                        }
                        
                        this_.mostrarGrafica(mes, totals);
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        mostrarGrafica(meses, totals){
            var ctx = document.getElementById('bar').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: meses,
                    datasets: [{ 
                        data: totals,
                        label: "Total Bs.",
                        borderColor: "rgb(62,149,205)",
                        backgroundColor: "rgb(62,149,205,0.1)",
                        borderWidth:2
                    },
                    ]
                },
                });
        },
        getGraficaClientes: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/reportes/getClientesFrecuentes';
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    //console.log(request.responseText);
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        let lista = [], item = [];
                        for(let i = 0; i < objData.length; i++){
                            //item = [objData[i].cliente, parseFloat(objData[i].cantidad)]
                            lista.push({
                                name: objData[i].cliente+' Bs.'+parseFloat(objData[i].total),
                                cantidad: parseFloat(objData[i].cantidad),
                                y: parseFloat(objData[i].total)
                            });
                        }
                        this_.viewGrafica(lista);
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        viewGrafica(lista){
            Highcharts.chart('grafica-clientes', {
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45
                    }
                },
                title: {
                    text: 'Clientes mas frecuentes de los ultimos 6 meses'
                },
                plotOptions: {
                    pie: {
                        innerSize: 100,
                        depth: 45
                    }
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.cantidad:.0f} compras <br> {point.y:.1f} Bs.</b>'
                },
                series: [{
                    name: 'Detalles',
                    colorByPoint: true,
                    data: lista
                  }]
            });
        },
        getGraficaProductos: function(){
            let this_ = this;
            var request = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var ajaxUrl = base_url+'/reportes/getProductosMasSolicitados';
            request.open("GET", ajaxUrl, true);
            //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send();
            request.onreadystatechange = function(){
                if(request.readyState == 4 && request.status == 200){
                    //console.log(request.responseText);
                    var objData = JSON.parse(request.responseText);
                    if(objData){
                        let productos = [], cantidades = [];
                        for(let i = 0; i < objData.length; i++){
                            //parseFloat(objData[i].total)
                            productos.push(objData[i].producto);
                            cantidades.push(parseFloat(objData[i].cantidad));
                        }
                        this_.viewGrafica2(productos, cantidades);
                    }else{
                        index.msjError('¡Ocurrio un error al cargar los datos!');
                    }
                }
            }
        },
        viewGrafica2(productos, cantidades){
            var ctx = document.getElementById('pie').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                  labels: productos,
                  datasets: [{ 
                      data: cantidades,
                      borderColor:[
                        "#3cba9f",
                        "#ffa500",
                        "#c45850",
                      ],
                      backgroundColor: [
                        "rgb(60,186,159,0.1)",
                        "rgb(255,165,0,0.1)",
                        "rgb(196,88,80,0.1)",
                      ],
                      borderWidth:2,
                    }]
                },
              options: {
                scales: {
                  xAxes: [{ 
                     display: false,
                  }],
                  yAxes: [{
                     display: false,
                  }],
                }
              },
            });
        }
     };
     return metodos;
 })(window, document);
 reportes.inicio();