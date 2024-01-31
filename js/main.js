// 메인 페이지 visual swiper
new Swiper(".visual", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 메인 페이지 service 섹션 swiper
new Swiper(".serviceSwiper", {
  slidesPerView: 3,
  spaceBetween: 22,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 메인 페이지 review 섹션 swiper
new Swiper(".reviewSwiper", {
  slidesPerView: 4,
  spaceBetween: 12,
});