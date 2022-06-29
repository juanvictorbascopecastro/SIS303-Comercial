<?php

class PedidosModel extends Model {
    public function __construct() {
        parent::__construct();
    }
    
    public function get(){
        try{
            $result = $this->db->connect()->query("SELECT p.idpedido, p.idusuario, p.fecha, p.total, CONCAT(u.nombre, ' ', u.apellido) AS usuario, u.rol,
            CONCAT(pr.nombre, ' ', pr.apellido) AS proveedor, pr.dni
            FROM pedidos p INNER JOIN view_usuarios u ON u.idusuario = p.idusuario 
            INNER JOIN view_proveedor pr ON pr.idproveedor = p.idproveedor ORDER BY p.fecha LIMIT 100");          
            $result->execute();
            $data = $result->fetchAll(PDO::FETCH_ASSOC);
            return $data;

        }catch(PDOException $e){
            return [];
        }
    }
    public function insert($datos){
        $query = $this->db->connect()->prepare('INSERT INTO pedidos (idproveedor, idusuario, fecha, total) VALUES (:idproveedor, :idusuario, NOW(), :total)');
        $res = $query->execute(['idproveedor' => $datos['idproveedor'], 'idusuario' => $datos['idusuario'], 'total' => $datos['total']]);

        if($res){
			$id = $this->db->connect()->lastInsertId(); // ultimo id que se inserto
            $query2 = $this->db->connect()->prepare('CALL pa_insert_productopedido (:idpedido, :idproducto, :cantidad)');
			for($i = 0; $i < count($datos['productos']); $i++) {
			 	$arrOption = array(
					':idpedido'=> $id,
					':idproducto'=> $datos['productos'][$i]['idproducto'],
					':cantidad'=> $datos['productos'][$i]['agregar'],
				);
				$res = $query2->execute($arrOption);
			}
            return $res;
		}
        return $res;
    }

    public function search($data){
        try{
            $statement = $this->db->connect()->prepare("SELECT p.idpedido, p.idusuario, p.fecha, p.total, CONCAT(u.nombre, ' ', u.apellido) AS usuario, u.rol,
            CONCAT(pr.nombre, ' ', pr.apellido) AS proveedor, pr.dni
            FROM pedidos p INNER JOIN view_usuarios u ON u.idusuario = p.idusuario 
            INNER JOIN view_proveedor pr ON pr.idproveedor = p.idproveedor
            WHERE p.fecha >= :desde AND p.fecha <= :hasta ORDER BY p.fecha DESC");          
            $statement->execute(array(':desde' => $data['desde'], ':hasta' => $data['hasta']));
            $data = $statement->fetchAll(PDO::FETCH_ASSOC);
		    return $data;

        }catch(PDOException $e){
            return [];
        }
    }
    public function id($idpedido){
        try{
            $statement = $this->db->connect()->prepare('SELECT p.idproducto, p.idcategoria, p.nombre, p.descripcion, p.imagen, p.precio_compra, pp.idpedido_producto, pp.cantidad FROM producto p INNER JOIN pedido_producto pp ON p.idproducto = pp.idproducto WHERE pp.idpedido = :idpedido');  
            $statement->bindParam(":idpedido", $idpedido, PDO::PARAM_INT);
            $statement->execute();
            $data = $statement->fetchAll(PDO::FETCH_ASSOC);
            //var_dump($data);
		    return $data;
        }catch(PDOException $e){
            var_dump($e);
            return [];
        }
    }
    public function delete($idpedido){
        $query = $this->db->connect()->prepare('CALL pa_delete_pedido(:idpedido)');
        $res = $query->execute(['idpedido' => $idpedido]);
        return $res;
    }
}

?>