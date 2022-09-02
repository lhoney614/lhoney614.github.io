var boolNickname = false;
var boolPsw = false;
var boolRepeatPsw = false;
var boolSurname = false;
var boolName = false;
var boolPatronymic = false;
var boolNumber = false;
var boolEmail = false;

//Никнейм
function checkNickname() {
  var s = /[^A-Za-z0-9_]/; //только латинские буквы, цифры и знак нижнего подчеркивания
  s.lastIndex = 0;
  var validateValue = document.getElementById("nickname");
  if (validateValue.value == "") {
    var exception = "Введите никнейм";
    incorrectValue("nickname", "nicknameErr", exception);
    boolNickname = false;
    return;
  }

  if (s.test(validateValue.value)) {
    var exception =
      "Недопустимые символы. В никнейме можно использовать только латинские буквы, цифры и знак нижнего подчеркивания (_)";
    incorrectValue("nickname", "nicknameErr", exception);
    boolNickname = false;
    return;
  }
  correctValue("nickname", "nicknameErr");
  boolNickname = true;
}

//Пароль
function checkPsw() {
  var s = /[^A-Za-z0-9]/; //латинские буквы, цифры и знак нижнего подчеркивания
  s.lastIndex = 0;
  var validateValue = document.getElementById("psw");
  if (validateValue.value == "") {
    var exception = "Введите пароль";
    incorrectValue("psw", "pswErr", exception);
    boolPsw = false;
    returnl;
  }
  if (s.test(validateValue.value)) {
    var exception = "Пароль должен содержать только латинские буквы и цифры";
    incorrectValue("psw", "pswErr", exception);
    boolPsw = false;
    return;
  }
  correctValue("psw", "pswErr");
  boolPsw = true;
}

//Повторите пароль
function checkRepeatPsw() {
  var validateValue = document.getElementById("psw").value;
  var checkValue = document.getElementById("repeatpsw").value;

  if (validateValue === checkValue) {
    correctValue("repeatpsw", "repeatpswErr");
    boolRepeatPsw = true;
    return;
  } else {
    var exception = "Пароли не совпадают";
    incorrectValue("repeatpsw", "repeatpswErr", exception);
    boolRepeatPsw = false;
  }
}

//Фамилия
function checkSurname() {
  var s = /[^А-Яа-яЁё]/;
  s.lastIndex = 0;
  var validateValue = document.getElementById("surname");
  if (validateValue.value == "") {
    var exception = "Введите фамилию";
    incorrectValue("surname", "surnameErr", exception);
    boolSurname = false;
    return;
  }
  if (s.test(validateValue.value)) {
    var exception = "Фамилия может содержать только русские буквы";
    incorrectValue("surname", "surnameErr", exception);
    boolSurname = false;
    return;
  }
  correctValue("surname", "surnameErr");
  boolSurname = true;
}

//Имя
function checkName() {
  var s = /[^А-Яа-яЁё]/;
  s.lastIndex = 0;
  var validateValue = document.getElementById("name");
  if (validateValue.value == "") {
    var exception = "Введите имя";
    incorrectValue("name", "nameErr", exception);
    boolName = false;
    return;
  }
  if (s.test(validateValue.value)) {
    var exception = "Имя может содержать только русские буквы";
    incorrectValue("name", "nameErr", exception);
    boolName = false;
    return;
  }
  correctValue("name", "nameErr");
  boolName = true;
}

//Отчество
function checkPatronymic() {
  var s = /[^А-Яа-яЁё]/;
  s.lastIndex = 0;
  var validateValue = document.getElementById("patronymic");
  if ((validateValue == "")) {
    correctValue("patronymic", "patronymicErr");
    boolPatronymic = true;
    return;
  }
  if (s.test(validateValue.value)) {
    var exception = "Отчество может содержать только русские буквы";
    incorrectValue("patronymic", "patronymicErr", exception);
    boolPatronymic = false;
    return;
  }
  correctValue("patronymic", "patronymicErr");
  boolPatronymic = true;
}

//Номер телефона
function checkNumber() {
  var s = /[^0-9]/;
  s.lastIndex = 0;
  var validateValue = document.getElementById("number");
  if (s.test(validateValue.value)) {
    var exception = "Номер телефона должен содержать только цифры";
    incorrectValue("number", "numberErr", exception);
    boolNumber = false;
    return;
  }

  if (validateValue.value[0] != 8) {
    var exception = "Номер должен начинаться с цифры 8";
    incorrectValue("number", "numberErr", exception);
    boolNumber = false;
    return;
  }

  if (validateValue.value.length != 11) {
    var exception = "Номер телефона должен содержать 11 цифр";
    incorrectValue("number", "numberErr", exception);
    boolNumber = false;
    return;
  }
  correctValue("number", "numberErr");
  boolNumber = true;
}

//Электронный адрес
function checkEmail() {
  var s = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  s.lastIndex = 0;
  var validateValue = document.getElementById("email");
  if (s.test(validateValue.value) == false) {
    var exception = "Неверный электронный адрес";
    incorrectValue("email", "emailErr", exception);
    boolEmail = false;
    return;
  }
  correctValue("email", "emailErr");
  boolEmail = true;
}

//Изменение полей при правильном значении
function correctValue(idInput, idError) {
  document.getElementById(idError).style.visibility = "hidden";
  document.getElementById(idInput).style.border = "1px solid #990e00";
}

//Изменение полей при неправильном значении
function incorrectValue(idInput, idError, exp) {
  document.getElementById(idError).style.visibility = "visible";
  document.getElementById(idError).innerHTML = exp + "<br>";
  document.getElementById(idInput).style.border = "1px solid red";
}

//Кнопка отправка формы
function btnRegister() {
  var btnReg = document.getElementById("btnreg");
  if (
    boolNickname == true &&
    boolPsw == true &&
    boolRepeatPsw == true &&
    boolSurname == true &&
    boolName == true &&
    boolPatronymic == true &&
    boolNumber == true &&
    boolEmail == true
  ) {
    btnReg.disabled = false;
    btnReg.style.backgroundColor = "#990e00";
  } else {
    btnReg.disabled = true;
    btnReg.disabled.pointerEvents = "none";
    btnReg.style.backgroundColor = "#ad706a";
  }
  setTimeout("btnRegister()", 10);
}
