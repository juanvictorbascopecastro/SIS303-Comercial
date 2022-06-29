<?php
class ProveedorModel extends Model {
    
    public function __construct() {
        parent::__construct();
    }
    public function insert($datos){
        $query = $this->db->connect()->prepare('CALL pa_insert_proveedor (:nombre, :apellido, :telefono, :direccion, :dni)');
        $res = $query->execute([
            'nombre' => $datos['nombre'], 
            'apellido' => $datos['apellido'],
            'telefono' => $datos['telefono'],
            'dni' => $datos['dni'],
            'direccion' => $datos['direccion']
        ]);
        //var_dump($res);
        return $res;
    }

    public function get(){
        $items = [];
        try{
            $result = $this->db->connect()->query('SELECT * FROM view_proveedor');          
            $result->execute();
            $data = $result->fetchAll(PDO::FETCH_ASSOC);
            return $data;

        }catch(PDOException $e){
            return [];
        }
    }

    public function edit($datos){
        $query = $this->db->connect()->prepare('CALL pa_update_proveedor (:nombre, :apellido, :telefono, :dni, :direccion, :idpersona)');
        $res = $query->execute([
            'idpersona' => $datos['idpersona'], 
            'nombre' => $datos['nombre'], 
            'apellido' => $datos['apellido'],
            'telefono' => $datos['telefono'],
            'dni' => $datos['dni'],
            'direccion' => $datos['direccion']
        ]);
        //var_dump($res);
        return $res;
    }

    public function delete($datos){
        $query = $this->db->connect()->prepare('CALL pa_delete_proveedor(:idpersona)');
        $res = $query->execute(['idpersona' => $datos['idpersona']]);
        return $res;
    }
}

?>