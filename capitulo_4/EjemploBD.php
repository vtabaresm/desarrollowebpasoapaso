<?php
$servidor = "localhost"; //Dirección para acceder al servidor
$baseDatos = "ejemplo"; //Nombre de la base de datos
$usuario = "root"; //Usuario de MySQL (por defecto)
$contrasena = ""; //Clave del usuario (por defecto)

try {
    $conexion = new PDO(
        "mysql:host=$servidor;dbname=$baseDatos",
        $usuario,
        $contrasena
    );
    echo "Conexión establecida correctamente.";
} catch (PDOException $e) {

    echo "Error de conexión: " . $e->getMessage();
}
?>



