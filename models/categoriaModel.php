<?php
//include_once 'models/categoria.php';

class CategoriaModel extends Model {
    
    public function __construct() {
        parent::__construct();
    }
    public function insert($datos){
        $query = $this->db->connect()->prepare('INSERT INTO categoria (nombre, descripcion, color) VALUES (:nombre, :descripcion, :color)');
        $res = $query->execute(['nombre' => $datos['nombre'], 'descripcion' => $datos['descripcion'], 'color' => $datos['color']]);
        return $res;
    }

    public function get(){
        $items = [];
        try{
            $result = $this->db->connect()->query('SELECT * FROM categoria');          
            $result->execute();
            $data = $result->fetchAll(PDO::FETCH_ASSOC);
            return $data;

        }catch(PDOException $e){
            return [];
        }
    }

    public function edit($datos){
        $query = $this->db->connect()->prepare('UPDATE categoria SET nombre = :nombre, descripcion = :descripcion, color = :color WHERE idcategoria = :idcategoria');
        $res = $query->execute(['nombre' => $datos['nombre'], 'descripcion' => $datos['descripcion'], 'idcategoria' => $datos['idcategoria'], 'color' => $datos['color']]);
        return $res;
    }

    public function delete($datos){
        $query = $this->db->connect()->prepare('DELETE FROM categoria WHERE idcategoria = :idcategoria');
        $res = $query->execute(['idcategoria' => $datos['idcategoria']]);
        return $res;
    }
}

?>