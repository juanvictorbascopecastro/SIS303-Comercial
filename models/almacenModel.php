<?php

class AlmacenModel extends Model {
    
    public function __construct() {
        parent::__construct();
    }
    public function get(){
        $items = [];
        try{
            $result = $this->db->connect()->query('SELECT * FROM almacen');          
            $result->execute();
            $data = $result->fetchAll(PDO::FETCH_ASSOC);
            return $data;

        }catch(PDOException $e){
            return [];
        }
    }
    public function insert($datos){
        $query = $this->db->connect()->prepare('INSERT INTO almacen (nombre, descripcion, direccion) VALUES (:nombre, :descripcion, :direccion)');
        $res = $query->execute(['nombre' => $datos['nombre'], 'descripcion' => $datos['descripcion'], 'direccion' => $datos['direccion']]);
        return $res;
    }
    public function edit($datos){
        $query = $this->db->connect()->prepare('UPDATE almacen SET nombre = :nombre, descripcion = :descripcion, direccion = :direccion WHERE idalmacen = :idalmacen');
        $res = $query->execute(['nombre' => $datos['nombre'], 'descripcion' => $datos['descripcion'], 'idalmacen' => $datos['idalmacen'], 'direccion' => $datos['direccion']]);
        return $res;
    }

    public function delete($datos){
        $query = $this->db->connect()->prepare('DELETE FROM almacen WHERE idalmacen = :idalmacen');
        $res = $query->execute(['idalmacen' => $datos['idalmacen']]);
        return $res;
    }
}

?>