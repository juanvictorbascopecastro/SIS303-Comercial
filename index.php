<?php
require_once 'config/conexion.php';

require_once 'libs/controller.php';
require_once 'libs/model.php';
require_once 'config/session.php';
require_once 'libs/view.php';
require_once 'libs/app.php';

const BASE_URL = "http://localhost/juguetes/";
date_default_timezone_set("America/La_Paz");

const DB_HOST = "localhost:3306";
const DB_NAME = "juguetes";
const DB_USER = "root";
const DB_PASSWORD = "";
const DB_CHARSET = "charset=utf8";

const SPD = ",";
const SPM = ".";

const SMONEY = "BS";

$app = new App();
?>