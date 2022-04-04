function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 150)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      if (t.total <= 0) {
        document.getElementById("clock").className = "hidden";
        document.getElementById("birthday-message").className = "visible";
        clearInterval(timeinterval);
        return true;
      }
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var birthday = '2022-04-05'; // for endless timer
  initializeClock('clock', birthday);


  const btn = document.querySelector(".theme-toggle");
  const theme = document.querySelector("#theme-switch");

  btn.addEventListener("click", function(){
    if (theme.getAttribute("href") == "light-theme.css"){
      theme.href = "dark-theme.css";
    } else {
      theme.href = "light-theme.css";
    }
  })
