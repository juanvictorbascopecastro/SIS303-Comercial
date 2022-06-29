<?php 

class Pedidos extends Controller {

	function __construct(){
		parent::__construct(); // ejecutamos el contructor de Controller
		$this->view->data['id'] = 11;
		$this->view->data['title'] = 'Pedidos';
		$this->view->data['js'] = '/js/modulos/pedidos.js';
	}
	public function render(){
		$this->view->render('pedidos/index');//hacemos referencia a la vista
	}	
    public function nuevopedido(){
		$this->view->data['id'] = 12;
		$this->view->data['title'] = 'Hacer Pedido';
		$this->view->data['js'] = '/js/modulos/nuevopedido.js';
        $this->view->render('pedidos/nuevo-pedido');
    }
    public function getData() {
        $datos = $this->model->get(); 
        $this->ResponseData($datos);
    }
    public function agregarPedido(){
        if(isset($_POST['total']) && isset($_POST['idproveedor']) && isset($_POST['productos']) && isset($_POST['idusuario'])){
            $total = $_POST['total'];
            $productos = json_decode($_POST['productos'], true);
            $idusuario = $_POST['idusuario'];
            $idproveedor = $_POST['idproveedor'];

            $res = $this->model->insert([
				'total' => $total, 
				'productos' => $productos, 
				'idusuario' => $idusuario, 
				'idproveedor' => $idproveedor
			]);

            if($res){
                $this->Response(true, 'Venta registrada correctamente');
            }else{
                $this->Response(false, '¡No se registro la venta!');
            }
        }else{
            $this->Response(false, '¡Hay campos que no se enviaron correctamente!');
        }
    }
    public function searchData(){
        if(isset($_GET['desde']) && isset($_GET['hasta'])){
            $desde = $_GET['desde'];
            $hasta = $_GET['hasta'];

            $res = $this->model->search([
				'desde' => $desde, 
				'hasta' => $hasta
			]);
            $this->ResponseData($res);
        }else{
            $this->Response(false, '¡No se enviaron los rangos de fecha!');
        }
    }

    public function getProductosPedido(){
        if(isset($_GET['idpedido'])){
            $idpedido = $_GET['idpedido'];

            $datos = $this->model->id($idpedido);
            $lista = [];
            foreach ($datos as $i => $value) {
                $url_img = '';
                if($value['imagen']){
                    $url_img = "data:image/jpeg;base64,".base64_encode($value['imagen']);
                }
                $prod = array(
                    'idproducto' => $value['idproducto'],
                    'nombre' => $value['nombre'],
                    'precio_compra' => $value['precio_compra'],
                    'cantidad' => $value['cantidad'],
                    'imagen' => $url_img,
                    'idpedido_producto' => $value['idpedido_producto'],
                    'descripcion' => $value['descripcion'],
                    'idcategoria' => $value['idcategoria'],
                );
                array_push ($lista , $prod);
            }
            $this->ResponseData($lista);
        }else{
            $this->Response(false, '¡No se envio el ID de la venta!');
        }
    }
    public function anularPedido(){
        if(isset($_POST['idpedido'])){
            $idpedido = $_POST['idpedido'];
            $res = $this->model->delete($idpedido);
            if($res){
                $this->Response(true, 'Pedido anulado correctamente');
            }else{
                $this->Response(false, '¡No se anulo el pedido, volver a intentar!');
            }
        }else{
            $this->Response(false, '¡No se envio el ID del pedido a anular!');
        }
    }
}

?>