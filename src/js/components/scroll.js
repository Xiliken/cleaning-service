const fullpage = require('fullpage.js');


new fullpage('.main', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  sectionSelector: '.page-section',
  licenseKey: 'gplv3-license',
  scrollOverflow: true,
  menu: '#header__nav',
  anchors: ['about', 'gallery', 'contacts']
});

const menu = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__list-link');

menu.addEventListener('click', () => {
  menu.classList.toggle('menu__btn--active');
  menuList.classList.toggle('menu__list--active');

});


menuLink.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('menu__btn--active');
    menuList.classList.remove('menu__list--active');
  })
})
