var submitdata = function() {
	var data = null;
	var len = 5;
	for (i=0; i<len; i++){
		if (document.getElementsByName('day')[i].checked){
			data = document.getElementsByName('day')[i].value;
		}
	}
	var day = data;
	data = null;
	for (i=0; i<len; i++){
		if (document.getElementsByName('move')[i].checked){
			data = document.getElementsByName('move')[i].value;
		}
	}
	var move = data;
	data = null;
	for (i=0; i<len; i++){
		if (document.getElementsByName('fruits')[i].checked){
			data = document.getElementsByName('fruits')[i].value;
		}
	}
	var fruits = data;
	data = null;
	for (i=0; i<len; i++){
		if (document.getElementsByName('sleep')[i].checked){
			data = document.getElementsByName('sleep')[i].value;
		}
	}
	var sleep = data;
	if (day == null || move == null || fruits == null || sleep == null){
		alert("Please select an option for all data fields");
	}
	else{
		alert("all fields entered successfully");
		
	}

	
}
var randomquestion = function(){
	var randomnumber = Math.floor(Math.random()*10);
	var questions = [];
	questions[0] = "What are you grateful for today?";
	questions[1] = "What was the best part of your day?";
	questions[2] = "What are you proud of today?";
	questions[3] = "What brought meaning to your day?";
	questions[4] = "What are you looking forward to tomorrow?";
	questions[5] = "Who did you enjoy being with today? ";
	questions[6] = "What did you learn today?";
	questions[7] = "What challenges did you overcome today?";
	questions[8] = "Who did you help today?";
	questions[9] = "What did you do today to make someone else happy?";
	var RQ_div = $('RQ');
	var RQ_table = new Element('table');
	var RQ_row = new Element('tr');
	RQ_row.insert('<td>' + questions[randomnumber] + '<td>');
	RQ_table.insert(RQ_row);
	RQ_div.insert(RQ_table);
}



var init = function () {
	var amortize_button = $('calc');
	amortize_button.observe('click', submitdata);
}

document.observe('dom:loaded', init);