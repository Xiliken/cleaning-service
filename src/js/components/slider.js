import Swiper from "swiper";


const swiper = new Swiper('.about__slider', {
  autoplay: {
    delay: 2000
  },

  navigation: {
    prevEl: `<button class"slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.21839 1L1 9L9.21839 17"/>
    </svg></button>`,
    nextEl: `<button class"slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.78161 17L9 9L0.78161 1" />
    </svg>
    </button>`
  },
  wrapperClass: 'about__slider-wrapper',
  loop: true,
  lazy: true
});

