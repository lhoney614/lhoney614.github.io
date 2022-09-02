function clockTimer() {
  var date = new Date();

  var time = [date.getHours(), date.getMinutes(), date.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|
  var dayOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  var days = date.getDay();

  if (time[0] < 10) {
    time[0] = "0" + time[0];
  }
  if (time[1] < 10) {
    time[1] = "0" + time[1];
  }
  if (time[2] < 10) {
    time[2] = "0" + time[2];
  }

  var current_time = [time[0], time[1], time[2]].join(":");
  var clock = document.getElementById("clock");
  var day = document.getElementById("dayOfWeek");

  clock.innerHTML = current_time;
  day.innerHTML = dayOfWeek[days];

  setTimeout("clockTimer()", 1000);
}

startdate = new Date();
clockStart = startdate.getTime();
function initStopwatch() {
  var thisTime = new Date();
  return (thisTime.getTime() - clockStart) / 1000;
}

function getSecs() {
  var tSecs = Math.round(initStopwatch());
  var iSecs = tSecs % 60;
  document.getElementById("timer-counter").innerHTML = iSecs;
  setTimeout("getSecs()", 1000);
}

function menu_onMouseOver(id) {
  document.getElementById(id).style.backgroundColor = "#fff9cf";
}

function menu_onMouseOut(id) {
  document.getElementById(id).style.backgroundColor = "#ffffe0";
}

function weeksToSeptember() {
  var currentDate = new Date();
  var september = 8;
  var targetDate = new Date(currentDate.getFullYear(), september);

  if (currentDate.getMonth() >= september) {
    targetDate.setFullYear(targetDate.getFullYear() + 1);
  }

  var dif = targetDate - currentDate;
  var inDays = dif / 1000 / 60 / 60 / 24;
  var inWeeks = inDays / 7;
  document.getElementById("weeksToSeptember").innerHTML = Math.ceil(inWeeks);
}

function clickRandom() {
  var a = new Array();
  var i = new Number();
  var count = parseInt(
    prompt("Количество элементов последовательности:", "10")
  );
  document.getElementById("ex1").innerHTML = "Последовательность: <br>";
  var avg = new Number();
  avg = 1;
  var stringPosl = "";
  for (i = 0; i < count; i++) {
    a.push(Math.round(Math.random() * 10) + 1);
    stringPosl = stringPosl + a[i] + " ";
    avg *= a[i];
  }
  document.getElementById("posl").innerHTML = stringPosl;
  document.getElementById("result").innerHTML =
    "Среднее геометрическое: " + Math.pow(avg, 1 / count).toString();
}



var MouseCoords = {

  // X-координата
  getX: function (e) {
    if (e.pageX) {
      return e.pageX;
    }
    else if (e.clientX) {
      return e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
    }

    return 0;
  },

  // Y-координата
  getY: function (e) {
    if (e.pageY) {
      return e.pageY;
    }
    else if (e.clientY) {
      return e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
    }

    return 0;
  }
}

function movePic(e){
  if (!e) e = window.event;

  document.getElementById('message').style.visibility = 'visible';
  var mouseCoordsLayer = document.getElementById('message');
  mouseCoordsLayer.style.left = MouseCoords.getX(e) + 10 + 'px';
  mouseCoordsLayer.style.top = MouseCoords.getY(e) + 10 + 'px';
}

function leavePic(){
  document.getElementById('message').style.visibility = 'hidden';
}


