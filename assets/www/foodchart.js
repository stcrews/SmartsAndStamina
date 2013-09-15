	var food = $('chart1');
	var mood = $('chart2');
	

var foodbutton = function(){
	food.Class="viewable";
	mood.Class="hidden";
	alert(food.Class);
	alert(mood.Class);
}

var moodbutton = function(){
	food.Class="hidden";
	mood.Class="viewable";
	alert(food.Class);
	alert(mood.Class);
}

var blah = function(){
	alert("hello");
}

