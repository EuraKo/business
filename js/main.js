const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

btnCall.onclick = function(e) {
  e.preventDefault();

  // btnCall.classList.toggle("on");
  // menuMo.classList.toggle("on");
  let isOn = btnCall.classList.contains('on');
  //   isOn ? btnCall.classList.remove('on') : btnCall.classList.add('on');
  if (isOn) {
    btnCall.classList.remove('on');
    menuMo.classList.remove('on');
  } else {
    btnCall.classList.add('on');
    menuMo.classList.add('on');
  }
}