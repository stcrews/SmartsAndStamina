var db; 
var shortName = 'SaSUserData'; 
var version = '1.0'; 
var displayName = 'Smarts and Stamina User Data'; 
var maxSize = 65535; 

var sleepScore;
var foodScore;
var moodScore;
var exerciseScore;

function createDB() {
	if(!window.openDatabase) {
		alert('Databases are not supported by this browser.');
		return;
	}
	
	db = window.openDatabase(shortName, version, displayName,maxSize);
	alert('Database created.');
	
	db.transaction(function(tx){ 
		
		// you can uncomment this next line if you want the User table to be empty each time the application runs 
		// tx.executeSql( 'DROP TABLE User',nullHandler,nullHandler); 
		
		// this line actually creates the table User if it does not exist and sets up the three columns and their types 
		// note the UserId column is an auto incrementing column which is useful if you want to pull back distinct rows 
		// easily from the table. 
		tx.executeSql( 'CREATE TABLE IF NOT EXISTS UserData(Data DATE NOT NULL PRIMARY KEY, SleepScore INTEGER NOT NULL PRIMARY KEY, FoodScore INTEGER NOT NULL PRIMARY KEY, MoodScore INTEGER NOT NULL PRIMARY KEY, ExerciseScore INTEGER NOT NULL PRIMARY KEY)', 
							[],nullHandler,errorHandler); 
		}, errorHandler, successCallBack);
}

function successCallBack() {
	alert('Success!');
	// This is just a comment for committing purposes.
}

function errorHandler() {}

function addToDB(sleepScore, foodScore, moodScore, exerciseScore) {
	
	db.transaction { function(transaction) {
				('INSERT INTO UserData(SleepScore, FoodScore, MoodScore, ExerciseScore), VALUES(?, ?, ?, ?)', [sleepScore, foodScore, moodScore, exerciseScore]);
		
			}
		
	}
	
	return;
	
}

var submitdata = function() {
	var data = null;
	var len = 5;
	for (i=0; i<len; i++){
		if (document.getElementsByName('day')[i].checked){
			data = document.getElementsByName('day')[i].value;
			moodScore = parseInt(data);
		}
	}
	var day = data;
	data = null;
	for (i=0; i<len; i++){
		if (document.getElementsByName('move')[i].checked){
			data = document.getElementsByName('move')[i].value;
			exerciseScore = parseInt(data);
		}
	}
	var move = data;
	data = null;
	for (i=0; i<len; i++){
		if (document.getElementsByName('fruits')[i].checked){
			data = document.getElementsByName('fruits')[i].value;
			foodScore = parseInt(data);
		}
	}
	var fruits = data;
	data = null;
	for (i=0; i<len; i++){
		if (document.getElementsByName('sleep')[i].checked){
			data = document.getElementsByName('sleep')[i].value;
			sleepScore = parseInt(data);
		}
	}
	var sleep = data;
	if (day == null || move == null || fruits == null || sleep == null){
		alert("Please select an option for all data fields");
	}
	else{
		
		addToDB(sleepScore, foodScore, moodScore, exerciseScore);
		home();
		//window.location.href="SASHomescreen.html";
		
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
	var RQ_row = new Element('tr');
	RQ_row.insert('<td>' + questions[randomnumber] + '<td>');
	RQ_div.insert(RQ_row);
}



var init = function () {
	var amortize_button = $('calc');
	amortize_button.observe('click', submitdata);
}

document.observe('dom:loaded', init);