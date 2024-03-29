const initCategorySlider = () => {
  const swiper = new Swiper('.swiper', {
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
      type: 'fraction',
      formatFractionCurrent: formatFraction,
      formatFractionTotal: formatFraction,

      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' ' + '<span class="' + totalClass + '"></span>';
      }
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      1000: {
        direction: 'vertical',
      },
      0: {
        // direction: 'horzontal',
      }
    }
  })
}

const formatFraction = (number) => number < 10 ? `0${number}` : number
const initSliders = () => {
  initCategorySlider()
}

document.addEventListener('DOMContentLoaded', () => {
  initSliders()
})