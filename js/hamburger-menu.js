const menu = document.querySelector('#hamburger-menu');
const btn = document.querySelector('#burger-btn');
const close = document.querySelector('#close-menu');

function closePopup() {
  menu.classList.remove('active');
  document.body.style.overflow = 'auto';
}

btn.addEventListener('click', function () {
  menu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', closePopup);

menu.querySelectorAll('a[href]').forEach(function (link) {
  link.addEventListener('click', function () {
    closePopup();
  });
});
