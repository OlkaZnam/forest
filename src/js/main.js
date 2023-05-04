const initCategorySlider = () => {
  const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    // loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    pagination: {
      el: '.swiper-pagination',
      // type: 'progressbar',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' ' + '<span class="' + totalClass + '"></span>';
      }
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  })
}

const initSliders = () => {
  initCategorySlider()
}

document.addEventListener('DOMContentLoaded', () => {
  initSliders()
})