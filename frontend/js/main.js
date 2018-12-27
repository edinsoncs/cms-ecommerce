$('#hero-slider').slick({
    arrows: false,
    dots: true,
    speed: 800,
});

$('.category-slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
        breakpoint: 991.98,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 767.98,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 575.98,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
  ]
});

$('.similar-products-slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 5,
    responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      }
    },
    {
        breakpoint: 991.98,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 767.98,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 575.98,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
  ]
});

$('#product-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '#product-imgage-thumbnails'
});
$('#product-imgage-thumbnails').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '#product-image',
    centerMode: true,
    focusOnSelect: true,
});

// initialize bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// quantity input group
$(document).ready(function(){
    var quantitiy=1;
    $('#input-number-add').click(function(e){
        // Stop acting like a button
        e.preventDefault();

        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

            if(quantity < 100) {
                $('#quantity').val(quantity + 1);
            }

            // Increment

    });

    $('#input-number-sub').click(function(e){
        // Stop acting like a button
        e.preventDefault();

        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined
            // Increment
            if(quantity>1){
            $('#quantity').val(quantity - 1);
            }
    });
});
