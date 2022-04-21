const current = document.querySelector('#current');
const photos = document.querySelectorAll('.photos img');
const opacity = 0.4;

photos.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));

function imgClick(e) {
  //Reset the opacity
  photos.forEach(img => (img.style.opacity = 1));

  //change current image to src of clicked image
  current.src = e.target.src;

  //change the opacity to 0.5 opacity
  e.target.style.opacity = opacity;
}
