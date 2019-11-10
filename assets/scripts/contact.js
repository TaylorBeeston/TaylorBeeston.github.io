var icons = document.querySelectorAll('.contact-links > a');
var preview = document.querySelector('.preview-photo');

for (let i in icons) {
  icons[i].onmouseover  = show;
  icons[i].onmouseleave = hide;
}

function show(e) {
  var id = e.target.id || e.target.parentElement.id;
  document.getElementById(id.replace('-icon', '')).style.display = 'block';
  preview.style.display = 'block';
}

function hide(e) {
  var id = e.target.id || e.target.parentElement.id;
  document.getElementById(id.replace('-icon', '')).style.display = 'none';
  preview.style.display = 'none';
}
