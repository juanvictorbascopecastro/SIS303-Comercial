<?php 

class Proveedor extends Controller {

	function __construct(){
		parent::__construct(); // ejecutamos el contructor de Controller
		$this->view->data['id'] = 8;
		$this->view->data['title'] = 'Proveedor';
		$this->view->data['js'] = '/js/modulos/proveedor.js';
	}
	public function render(){
		$this->view->render('proveedor/index');//hacemos referencia a la vista
	}	
    public function getData() {
        $datos = $this->model->get(); 
        $this->ResponseData($datos);
    }
	public function nuevoRegistro(){
        if(isset($_POST['nombre']) && isset($_POST['apellido']) && isset($_POST['telefono']) && isset($_POST['dni']) && isset($_POST['direccion'])){
            $nombre = $_POST['nombre'];
            $apellido = $_POST['apellido'];
            $telefono = $_POST['telefono'];
            $dni = $_POST['dni'];
            $direccion = $_POST['direccion'];
            $res = $this->model->insert(['nombre' => $nombre, 'apellido' => $apellido, 'telefono' => $telefono, 'dni' => $dni, 'direccion' => $direccion]);
            if($res){
                $this->Response(true, 'Datos guardado correctamente');
            }else{
                $this->Response(false, '¡No se registranon lo datos!');
            }
        }else{
            $this->Response(false, '¡Hay campos que no se enviaron correctamente!');
        }
    }
	public function editarRegistro(){
        if(isset($_POST['nombre']) && isset($_POST['apellido']) && isset($_POST['telefono']) && isset($_POST['dni'])  && isset($_POST['idpersona']) && isset($_POST['direccion'])){
            $idpersona = $_POST['idpersona'];
			$nombre = $_POST['nombre'];
            $apellido = $_POST['apellido'];
            $telefono = $_POST['telefono'];
            $dni = $_POST['dni'];
            $direccion = $_POST['direccion'];
            $res = $this->model->edit(['idpersona' => $idpersona, 'nombre' => $nombre, 'apellido' => $apellido, 'telefono' => $telefono, 'dni' => $dni, 'direccion' => $direccion]);
            if($res){
                $this->Response(true, 'Datos guardado correctamente');
            }else{
                $this->Response(false, '¡No se registranon lo datos!');
            }
        }else{
            $this->Response(false, '¡Hay campos que no se enviaron correctamente!');
        }
    }
	public function eliminarRegistro(){
        if(isset($_POST['idpersona'])){
            $idpersona = $_POST['idpersona'];
            $res = $this->model->delete(['idpersona' => $idpersona]);
            if($res){
                $this->Response(true, 'Datos eliminado correctamente');
            }else{
                $this->Response(false, '¡No se eliminaron lo datos!');
            }
        }else{
            $this->Response(false, '¡No se envio el ID de la categoria a eliminar!');
        }
    }
}

?>