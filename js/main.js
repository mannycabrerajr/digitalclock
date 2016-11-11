function getClock(){
	var date = new Date()
	var hour = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()
	var ampm

	if(hour == 0){
		ampm = " AM"
		hour = 12
	} else if (hour < 12){
		ampm = " AM"
	} else if (hour == 12){
		ampm = " PM"
	} else if (hour > 12){
		ampm = " PM"
		hour -= 12
	}

	if(minutes <=9)
		minutes = "0" + minutes


	if(seconds <= 9)
		seconds = "0" + seconds



	document.getElementById("clock").innerHTML = "" + hour + ":" + minutes + ":" + seconds + ampm
}

window.onload=function(){
	getClock()
	setInterval(getClock, 1000)
}


// if ampm = " AM"....class with bright background
// else if ampm = " PM"....class with darker (gray) background)
