$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },

  });

  var reviewsSlider = new Swiper('.reviews-slider', {


    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    ;
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    // event.preventDefault() сбрасывает скачек вверх
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // Обработка формы
  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          minlength: 2,
        },
        phone: {
          minlength: 18,
          maxlength: 18,
        },
      },
      messages: {
        name: {

          required: "Please specify your name",
          minlength: "At least two letters",
        },
        mail: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Required phone number",
          minlength: "Please enter at least 10 number"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        }
      },
    });
  });

  AOS.init();

  $('.modal__input_phone').mask('+7 (000) 000 00 00', { placeholder: "+7 (999) 999 99 99" });
  $('.footer__input_phone').mask('+7 (000) 000 00 00', { placeholder: "+7 (999) 999 99 99*" });
});