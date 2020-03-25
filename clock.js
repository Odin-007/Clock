var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;
var night = 19;

var showCurrentTime = function ()
{
        var clock = document.getElementById('clock');
var currentTime = new Date();

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM";

if(hours >= noon)
{
    meridian = "PM";
}
if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
  // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

//Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
var time = new Date().getHours();
var messageText;

var timeEventJS = document.getElementById("timeEvent");
//var lolcatImageJS = document.getElementById('lolcatImage');

if (time == partytime)
{
image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
messageText = "Let's party!";
}
else if (time == wakeuptime)
{
image = "wakeup.jpg";
messageText = "Wake up!";
}
else if (time == lunchtime)
{
image = "lunch";
messageText = "Let's have some lunch!";
}
else if (time == naptime ||  (time <= night  ) )
{
image = "night.jpg";
messageText = "Sleep tight!";
}
else if (time < noon)
{
image = "morning.jpg";
messageText = "Good morning!";
}
else if (time >= evening)
{
image  = "https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1866&q=80.jpg";
messageText = "Let's Have some Tea!";
}
else
{
image = "afternoon.jpg";
messageText = "Good afternoon!";
}

//console.log(messageText); 
timeEventJS.innerText = messageText;
lolcatImage.src = image;

showCurrentTime();
};
updateClock();

//Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// // Getting the Party Time Button To Work
// var partyButton = document.getElementById("partyTimeButton");

// var partyEvent = function()
// {
//     if (partytime < 0) 
//     {
//         partytime = new Date().getHours();
//         partyTimeButton.innerText = "Party Over!";
//         partyTimeButton.style.backgroundColor = "#0A8DAB";
//     }
//     else
//     {
//         partytime = -1;
//         partyTimeButton.innerText = "Party Time!";
//         partyTimeButton.style.backgroundColor = "#222";
//     }
// };

// partyButton.addEventListener("click", partyEvent);
// partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
