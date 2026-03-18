<?php
$servidor = "localhost";
$baseDatos = "ejemplo";
$usuario = "root";
$contrasena = "";
try {

    $conexion = new PDO(
        "mysql:host=$servidor;dbname=$baseDatos",
        $usuario,
        $contrasena
    );

    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    $sql = "INSERT INTO mensajes (nombre, correo, mensaje)
            VALUES (:nombre, :correo, :mensaje)";

    $consulta = $conexion->prepare($sql);

    $consulta->execute([
        ":nombre" => $nombre,
        ":correo" => $correo,
        ":mensaje" => $mensaje
    ]);
    echo "Mensaje guardado correctamente.";

} catch (PDOException $e) {

    echo "Error: " . $e->getMessage();
}
?>

