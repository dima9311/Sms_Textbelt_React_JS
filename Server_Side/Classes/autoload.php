<?php
//uses autoload instead of manual includin each class. PSR-4
spl_autoload_register ('autoload');

function autoload($class)
{
    $parts = explode('\\', $class);
    require end($parts) . '.php';
}
?>