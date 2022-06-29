<?php 

class Almacen extends Controller {

	function __construct(){
		parent::__construct(); // ejecutamos el contructor de Controller
		$this->view->data['id'] = 7;
		$this->view->data['title'] = 'Almacen';
		$this->view->data['js'] = '/js/modulos/almacen.js';
	}
	public function render(){
		$this->view->render('almacen/index');//hacemos referencia a la vista
	}	
    public function getData() {
        $datos = $this->model->get(); 
        $this->ResponseData($datos);
    }
    public function nuevoRegistro(){
        if(isset($_POST['nombre'])  && isset($_POST['direccion'])){
            $nombre = $_POST['nombre'];
            $descripcion = $_POST['descripcion'];
            $direccion = $_POST['direccion'];
            $res = $this->model->insert(['nombre' => $nombre, 'descripcion' => $descripcion, 'direccion' => $direccion]);
            if($res){
                $this->Response(true, 'Datos guardado correctamente');
            }else{
                $this->Response(false, '¡No se registranon lo datos!');
            }
        }else{
            $this->Response(false, '¡Nombre se enviaron los parametros requeridos!');
        }
    }

    public function editarRegistro(){
        if(isset($_POST['nombre'])  && isset($_POST['direccion']) && isset($_POST['idalmacen'])){
            $nombre = $_POST['nombre'];
            $descripcion = $_POST['descripcion'];
            $idalmacen = $_POST['idalmacen'];
            $direccion = $_POST['direccion'];
            $res = $this->model->edit(['nombre' => $nombre, 'descripcion' => $descripcion, 'idalmacen' => $idalmacen, 'direccion' => $direccion]);
            if($res){
                $this->Response(true, 'Datos editados correctamente');
            }else{
                $this->Response(false, '¡No se editaron lo datos!');
            }
        }else{
            $this->Response(false, '¡no se enviaron los parametros requerido!');
        }
    }
    public function eliminarRegistro(){
        if(isset($_POST['idalmacen'])){
            $idalmacen = $_POST['idalmacen'];
            $res = $this->model->delete(['idalmacen' => $idalmacen]);
            if($res){
                $this->Response(true, 'Datos eliminado correctamente');
            }else{
                $this->Response(false, '¡No se eliminaron lo datos!');
            }
        }else{
            $this->Response(false, '¡No se envio el ID del almacen a eliminar!');
        }
    }
}

?>