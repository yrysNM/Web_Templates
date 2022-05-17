$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: `
        <button  type="button" class="slick-prev">
          <img src = "icons/left.svg" >
        </button>
        `,
      nextArrow: `
        <button type="button" class="slick-next">
          <img src = "icons/right.svg" >
        </button>
      `,
      responsive: [
        {
          breakpoint: 992, 
          settings: {
            dots: true,
            arrows: false,
          }
        },
      ]
    }); 

    $("ul.catalog__tabs").on("click", 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass("catalog__tab_active").siblings().removeClass("catalog__tab_active")
        .closest("div.container").find("div.catalog__content").removeClass("catalog__content_active").eq($(this).index()).addClass("catalog__content_active");
    });


    toggleSlide(".catalog-item_link");
    toggleSlide(".catalog-item__back");

    function toggleSlide(item) {
      $(item).each(function(i)  {
        $(this).on("click", function(e) {
          e.preventDefault();
          $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
          $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
        });
      });
    }

    // modal window
    $("[data-modal=consultation]").on("click", function() {
      $(".overlay, #consultation").fadeIn("slow");
      
    });

    $(".modal__close").on("click", function() {
      $(".overlay, #consultation, #thanks, #order").fadeOut("slow");
    });

    $(".button_mini").each(function(i)  {
      $(this).on("click", function() {
        $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
        $(".overlay,  #order").fadeIn("slow");
      });
    });
});




// another slide method
// const slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   autoplay: false,
//   controls: false,
//   nav: false
// });

// document.querySelector(".prev").addEventListener("click", function() {
//   slider.goTo("prev");
// });

// document.querySelector(".next").addEventListener("click", function() {
//   slider.goTo("next");
// });