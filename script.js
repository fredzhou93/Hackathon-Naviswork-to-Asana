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