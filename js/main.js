function stickyHeader(){
 
    var scrollAmount = $(window).scrollTop();
    // var winHeight = $(window).innerHeight();
    var winHeight = $(window).innerHeight() - 95;
    if(scrollAmount > winHeight){
        $('.r-nav').addClass('sticky-header');
    }else{
        $('.r-nav').removeClass('sticky-header');
    }
    // console.log(scrollAmount);
 
}
 
function typingEffect(){
 
    var typed = new Typed(".typing",{
        strings:["Sam Hendrix","A Software Developer","A Tech Blogger"],
        smartBackspace:true,
        typeSpeed: 100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });
 
}
 
function progressBar(){
    // returns an array containing all of the matched elements from the existing DOM.
    var progressElement = document.querySelectorAll('.progress-bar');
    for(var i = 0; i<progressElement.length; i++){
        var curval;
        if(i == 0){
            curval = progressElement[i].innerHTML;
            // console.log(curval);
            progressElement[i].style.width = curval;
            progressElement[i].style.transition = 'all 1s';
        }else if(i == 1){
            curval = progressElement[i].innerHTML;
            // console.log(curval);
            progressElement[i].style.width = curval;
            progressElement[i].style.transition = 'all 1.5s';
        }else if(i == 2){
            curval = progressElement[i].innerHTML;
            progressElement[i].style.width = curval;
            progressElement[i].style.transition = 'all 2s';
        }else if(i == 3){
            curval = progressElement[i].innerHTML;
            progressElement[i].style.width = curval;
            progressElement[i].style.transition = 'all 2.5s';
        }else{
            curval = progressElement[i].innerHTML;
            progressElement[i].style.width = curval;
            progressElement[i].style.transition = 'all 3s';
        }
    }
}
 
function waypointInit(){
    var waypointExp = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            progressBar();
        },
        offset: 300
      });   
};
 
function hiremeModalInit(){
    $('#hire-me-btn').on('click', function(){
        $('#hireModal').modal();
    });
}
 
function testimonialCarouselInit(){
    $('#testimonial-carousel').owlCarousel({
        'items':1,
        'loop':true,
        'autoplay':true,
        'autoplayTimeout':2000
    });
}
 
function portfolioGalleryInit(){
    // Filter init
    $('.filter-container').filterizr({
        animationDuration: 0.5, // in seconds
        easing: 'ease-out',
        layout: 'sameSize', // See layouts
    });
    // popup init
    $('.popup').magnificPopup({
        type: 'image',
        gallery: {
            // options for gallery
            enabled: true
          },
        // other options
      });
 
}
 
function preloaderInit(){
 
    $('.preloader').addClass('complete');
    $('body').removeClass('not-scrollable');
} 
 
function scrolltoInnerSection(){
    $('.scrollTo').click(function(e){
        e.preventDefault();
        var getElem = $(this).attr('href');
        // console.log(getElem);
    
        // Checking for element existance
        if($(getElem).length){
            // get the top offset of the targeted element.
            // var stickyHeaderHeight = $('.sticky-header').outerHeight();
            if($('.sticky-header').length){
                var stickyHeaderHeight = $('.sticky-header').outerHeight();
            }else{
                var stickyHeaderHeight = 95;
            }
            
            // console.log(stickyHeaderHeight);
            var getOffset = $(getElem).offset().top;
            getOffset = Math.ceil(getOffset) - stickyHeaderHeight;
            // console.log(Math.ceil(getOffset));
            $('html').animate({
                scrollTop:getOffset
            }, 500);
        }
    
    });
}
 
function scrollBackToTop(){
    var winHeight = $(window).innerHeight();
    var amountScrolled = winHeight;
    $(window).scroll(function(){
        if($(window).scrollTop() > amountScrolled){
            $('a.back-to-top').fadeIn(500);
        }else{
            $('a.back-to-top').fadeOut(500);
        }
    });
    
    $('a.back-to-top').click(function(e){
        e.preventDefault();
        $('html').animate({
                scrollTop:0
            }, 500);
        return false;
    });
}
 
$(document).ready(function(){
 
    typingEffect();
    waypointInit();
    hiremeModalInit();
    testimonialCarouselInit();
    portfolioGalleryInit();
    // progressBar();
    scrolltoInnerSection();
    scrollBackToTop();
    $(window).on('scroll',function(){
        stickyHeader();
    });
});
$(window).on('load', function(){
    preloaderInit();
});
