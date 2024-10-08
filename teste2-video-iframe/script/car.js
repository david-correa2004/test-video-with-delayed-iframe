window.onload = () => {

    var swiper1 = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 25,
      slidesPerGroup: 1,
      rewind: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
      navigation: {
        prevEl: ".swiper-button-prev1",
        nextEl: ".swiper-button-next1",
      },
      breakpoints: {
        800: {
          slidesPerView: 2,
          spaceBetween: 20,
        }
      }
    });
  }
  
  /* 
    Importe este link no head no HTML:
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
  
    Importe este link no footer:
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
  
  
  */