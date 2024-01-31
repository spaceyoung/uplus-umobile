// 서브07-01 페이지 fun 섹션 swiper
new Swiper(".funSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  resistance : true,
});