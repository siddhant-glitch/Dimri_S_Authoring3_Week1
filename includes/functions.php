<?php
    // include the file we just wrote -connect.php
    include("connect.php"); //lika a JS import statement

    $query = "SELECT * FROM profs";
    
    $runQuery = $pdo->query($query);

    $result = array();

    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    }

 //return $result;
 echo(json_encode($result));


    // for api   localhost/Dimri_S_Authoring3_Week1/includes/functions.php