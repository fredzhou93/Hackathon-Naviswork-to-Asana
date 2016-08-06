'use strict';
// Personal Access Token: 0/4889edcf9d1ecb03894b075d8e8cbef4

$('#xml-upload').submit(function(e){
	e.preventDefault();
	let file_data = $('#xml-file').prop('files')[0];
	let xml = new FormData();
	xml.append('file', file_data);
	alert(xml);

	$.ajax({
		url: 'upload_parser.php',
		type: 'post',
		data: xml,
		dataType: 'text',
		cache: false,
		processData: false,
		contentType: false
	})
	.done(function(d) {
		console.log(d);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
});

function execute() {
	//Get Data from XML
	let project;
	let projectInfo = createProject(project);
	
	//Use the Data from projectInfo e.g. projectId and feed into the tasks
	
	//Check if it's update
	let tasks;
	tasks.forEach(function(task) {
		createTask(task);
	})
}

//Create Project
function createProject(project) {
	$.ajax({
		url: 'https://app.asana.com/api/1.0/projects',
		type: 'post',
		data: project
	})
	.done(function(data) {
		return data;
	})
	.fail(function() {
		console.log("error");
	});
}

//Create Individual Tasks
function createTask(task) {
	$.ajax({
		url: 'https://app.asana.com/api/1.0/tasks',
		type: 'post',
		data: task
	})
	.done(function(data) {
		return data;
	})
	.fail(function() {
		console.log("error");
	});
}

//Update Attachment
function updateAttachment(file, id) {
	let urlForAttachment = 'https://app.asana.com/api/1.0/tasks/' + id + '/attachments';
	$.ajax({
		url: urlForAttachment,
		type: 'post',
		data: file
	})
	.done(function(data) {
		return data;
	})
	.fail(function() {
		console.log("error");
	});
}

//Get taskObject
function getTaskObject(id) {
	let urlForTasks = 'https://app.asana.com/api/1.0/projects/' + id + '/tasks';
	$.ajax({
		url: urlForTasks,
		type: 'get',
	})
	.done(function(data) {
		return data;
	})
	.fail(function() {
		console.log("error");
	});
}


//taskObject will be returned by GET https://app.asana.com/api/1.0/projects/project-id/tasks
function turnTaskObjectToList(taskObject) {
	let taskList = [];
	taskObject = taskObject.data;
	taskObject.forEach(function(element) {
		taskList.push(element.id);
	})
	return taskList;
}

//Check whether a task already exist
//oldTaskList will be returned by function turnTaskObjectToList
function checkUpdateOrCreate(taskName, oldTaskList) {
	if (oldTaskList.indexOf(taskName) === -1) {
		return false;
	}
	else {
		return true;
	}
	}
}
}
