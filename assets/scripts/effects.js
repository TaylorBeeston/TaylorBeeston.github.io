var header  = document.querySelector('header');
var content = document.querySelector('#big-screen');
var footer  = document.querySelector('footer');
var links   = document.querySelectorAll('.footer-links a');
var divtent = document.querySelector('.content');

closeDown();

function openUp() {
  header.style.flex  = '0';
  content.style.flex = '1';
  footer.style.flex  = '0';
  if (divtent) {
    divtent.style.width = '80%';
    divtent.style.fontSize = '1.2em';
  }
}

function closeDown() {
  header.style.flex = '1';
  content.style.flex = '0';
  footer.style.flex = '1';
  if (divtent) {
    divtent.style.width = '0';
    divtent.style.fontSize = '0';
  }
}

document.querySelector('body').onload = function () {
  setTimeout(openUp, 300);
}

for (let i in links) {
  links[i].onclick = function(ev) {
    setTimeout(function() { window.location=ev.target.href; }, 1000);
    closeDown();
    return false;
  }
}
