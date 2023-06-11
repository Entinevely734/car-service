$(function () {

// Здесь вся конструкция вне фигурных скобок является обязательной
// В ней и происходит основное написание кода


// Здесь обращение как в CSS, в данном случае к классу header__rating-stars
  Fancybox.bind("[data-fancybox]", {
  // Your custom options
  });
  var mixer = mixitup('.blog__list-content');
  $('.reviews__slider-prev').on('click', function (e) {
    e.preventDefault(
      $('.reviews__slider').slick('slickPrev')
    )
  })
  $('.reviews__slider-next').on('click', function (e) {
    e.preventDefault(
      $('.reviews__slider').slick('slickNext')
    )
  })


  $('.reviews__slider').slick({
    arrows: false,
    appendArrows: $('.reviews__slider-arrows'),
    dots: true,
    appendDots: $('.reviews__slider-bottom-bar'),
    infinite: true,
    slidesToShow: 2,
    // slidesToScroll: 2,
    draggable: false,
    // waitForAnimate: false,
    responsive:
    [
      {
        breakpoint: 900, 
        settings: {
          slidesToShow: 1,
          draggable: true,
        }
      },
    ]
  })


  $('.blog__button').on('click', function () {
    $('.blog__button').removeClass('blog__button--active')
    $(this).addClass('blog__button--active')
  })


  // $('.questions__acc-item').on('click', function(){
  //   $(this).toggleClass('questions__acc-item--active')
  //   $(this).children('.questions__acc-hidden-text').slideToggle()
  // })
  // Код выше для того чтобы каждый элемент мог жить смостоятельно, то есть открываться и закрываться когда он захочет

  $('.questions__acc-item').on('click', function(){
    // $(this).addClass('questions__acc-item--active')
    // $(this).children('.questions__acc-hidden-text').slideDown()
    // if ($(this).hasClass('questions__acc-item--active')) {
    //   $(this).removeClass('questions__acc-item--active')
    //   $(this).children('.questions__acc-hidden-text').slideUp()
    // } else {
    //   $('.questions__acc-item').removeClass('questions__acc-item--active')
    //   $('.questions__acc-item').children('.questions__acc-hidden-text').slideToggle()
    // }
      if ($(this).hasClass('questions__acc-item--active')) {
        $(this).removeClass('questions__acc-item--active')
        $(this).children('.questions__acc-hidden-text').slideUp()
      } else {
        $('.questions__acc-item').removeClass('questions__acc-item--active')
        $('.questions__acc-item').children('.questions__acc-hidden-text').slideUp()
        $(this).addClass('questions__acc-item--active')
        $(this).children('.questions__acc-hidden-text').slideDown()
      }


  })
  $(".smooth-scroll").on("click", function (event) {
      event.preventDefault()
      var id  = $(this).attr('href'),
      top = $(id).offset().top
      $('body,html').animate({scrollTop: top}, 800)
  });

  var traslateForBurger = `
  .burger {
    top: 30px;
    position: fixed;
  }
  `
  var styleSheet = document.createElement("style")
  styleSheet.innerText = traslateForBurger
  // $(window).on('scroll', function () {
  //   if ($(window).scrollTop() > 95 && $('.header__top').hasClass('header__top--open') === false) {
  //     $('.burger').addClass('burger--floating')
  //   } else {
  //     $('.burger').removeClass('burger--floating')
  //   }
  // })
  setInterval(() => {
    if ($(window).scrollTop() > 95 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--floating')
    } else {
      $('.burger').removeClass('burger--floating')
    }
  }, 0);
  $('.burger, .overlay, .header__nav-link').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--active')
    // $('#body').toggleClass('body-freeze')
    if ($('.header__top').hasClass('header__top--open')) {
      document.head.appendChild(styleSheet) 
    } else {
      document.head.removeChild(styleSheet)
    }
  })

  
  $('.footer__logo--slide').on('click', function (e) {
    e.preventDefault() 
    $('.footer__logo--slide').toggleClass('footer__logo--active')
    $('.footer__nav').slideToggle()
  })

  
  const mediaQuery = window.matchMedia('(min-width: 900px)')
  function handleTabletChange(e) {
    if (e.matches) {
      $('.footer__logo--slide').addClass('smooth-scroll')

    } else {
      $('.footer__logo--slide').removeClass('smooth-scroll')
    }
  }
  mediaQuery.addEventListener('change', handleTabletChange)
  handleTabletChange(mediaQuery)
  
  
  
  
});