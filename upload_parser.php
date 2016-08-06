<?php

# Create a copy of the uploaded file
$dir = 'uploads/';
$filename = $dir . date('YmHis') . '.xml';
move_uploaded_file($_FILES['file']['tmp_name'], $filename);


# Begin data parse
$arr = chunk($filename); // Chunk data





function chunk($path_to_file){
	$coll = new stdClass(); // Collection obj to return
	$coll->tasks = []; // Tasks array of individual entries
	
	$xml = simplexml_load_file($filename);
	$data_chunks = array(
		'project_name' => $xml
	);


	return $data_chunks;
}

echo var_dump($arr);

?>