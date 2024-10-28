

// トップページのスライド
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,　//スライド速度
  slidesPerView: 1.5, // 何枚のスライドを表示させるか
  spaceBetween: 16,
  // initialSlide: 1,
  effect:"slide",
  simulateTouch:true,
  centeredSlides:true,
  autoplay:{
         delay: 3000, //スライド保持時間
         disableOnInteraction: false, // ユーザーが操作しても自動再生を無効にしない
       },
  
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type:'bullets'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
});