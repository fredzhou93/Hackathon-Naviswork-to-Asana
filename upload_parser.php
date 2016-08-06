<?php

# Create a copy of the uploaded file
$dir = 'uploads/';
$filename = $dir . date('YmHis') . '.xml';
move_uploaded_file($_FILES['file']['tmp_name'], $filename);


# Begin data parse
$arr = chunk($filename); // Chunk data

function chunk($fpath){
	$xml = simplexml_load_file($fpath);
	$clashtests = $xml->batchtest->clashtests->clashtest;
	$data_chunks = array(
		'project_name' => (string)$clashtests[0]->attributes()['name'],
		'due_on' => date("Y-m-d", strtotime('+1 week')),
		'tasks' => getTasks($clashtests)
	);

	return $data_chunks;
}

function getTasks($clashes){
	$tasks = [];
	foreach($clashes->clashresults->clashgroup as $clash){
		$attr = $clash->attributes();
		$temp = array(
			'name' => (string)$attr['name'],
			'gridlocation' => (string)$clash->gridlocation,
			'photo' => (string)$attr['href'],
			'distance' => (string)$attr['distance'],
			'guid' => (string)$attr['guid']
		);

		array_push($tasks, $temp);
	}

	return $tasks;
}

echo json_encode($arr);

?>