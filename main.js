setInterval(displayTime, 1000);

function displayTime() {


    const timeNow = new Date();
    

    let hourOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", {month: "long"});
    let period = "AM"
    let year = timeNow.getFullYear();

    if(hourOfDay >12) {
        hourOfDay -=12;
        period = "PM"
    }

    if(hourOfDay == 0) {
        hourOfDay = 12;
        period = "AM"
    }

    
    hourOfDay = hourOfDay < 10 ? "0" + hourOfDay : hourOfDay;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hourOfDay + ":" + minutes + ":" + seconds + period;
    
    document.getElementById("clock").innerHTML = time;
    document.getElementById("dates").innerHTML = today + " " + months + " " + year;

}

displayTime();