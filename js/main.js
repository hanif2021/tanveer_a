// Header Search
$(document).ready(function(){
    $(".do_search").click(function(){
        $(".search_box").toggle();
        $(".search input[type='text']").focus();
    });
    
    // Banner Carousel
    $('#banner_carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Mixit Up
    var mixer = mixitup('.mixitup_gallery');
    
    // Story Carousel
    $('#story_carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

    // Client Carousel
    $('#client_carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
});