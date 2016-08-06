<?php

$dir = 'uploads/';

$filename = $dir . date('YmHis') . '.xml';

move_uploaded_file($_FILES['file']['tmp_name'], $filename);

$xml = simplexml_load_file($filename);

?>