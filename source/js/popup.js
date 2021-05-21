var buttonOrder = document.querySelector('.button-order');
var popup = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal__close-button');
/*var size = popup.querySelector('[checked=checked]');

//var form = popup.querySelector('form');

//var storage = localStorage.getItem("size");

//конструкция для проверки возможности работы с localStorage

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("size");
} catch (err) {
  isStorageSupport = false;
}
*/

buttonOrder.addEventListener("click", function (event) {
  event.preventDefault();

  popup.classList.add('modal-opened');
/*
  if(storage) {
    loginName.value = storage;
    email.focus();
  } else {
    loginName.focus();
  } */
});


close.addEventListener("click", function (event) {
  event.preventDefault();

  popup.classList.remove('modal-opened');
});

window.addEventListener("keydown", function(event){
  if(event.keyCode === 27) {

    if (popup.classList.contains('modal-opened')) {
      event.preventDefault();

      popup.classList.remove('modal-opened');
    }
  }
});
