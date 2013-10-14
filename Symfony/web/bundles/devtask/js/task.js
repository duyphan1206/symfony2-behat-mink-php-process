$(function(){ //incase you missed the doc.ready
	"use strict;"

	$("#myTable").tablesorter();

   	$('#createNewEntry').on('click', function () {
   		console.log("create new entry");
   	});
});