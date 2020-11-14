<?php 
    $db_dsn = array( 
        'host' => 'localhost',
        'dbname' => 'profdata',
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'root';
    $db_pass = '';

    try{
        $pdo = new PDO($dsn, $db_user, $db_pass);
        var_dump($pdo);
        // echo (in this case) is almost like console.log
        // echo 'you in the matrix now hehehe';
    } catch (PDOException $exception){
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }