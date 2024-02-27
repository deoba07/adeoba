var countDownDate = new Date("Mar 2, 2024 00:00:00").getTime();
    var x = setInterval(function()
    {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance/(1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML= days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0){
            clearInterval(x);
            console.log("Timer Reset!");
            setTimeout(startTimer, 1000);
        }
    }, 1000);
            