$(document).ready(function(){
	
	 // mobile menu

    $(".bar-btn").click(function(){
    	$('body').addClass("nav-open");
    })

    $(".close_nav").click(function(){
    	$('body').removeClass("nav-open");
    })

    //brand slider
    $('.brand-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        nav:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                nav:false,
                dots:true
            },
            600:{
                items:3

            },
            1000:{
                items:6
            }
        }
    })


    //testimonials slider
    $('.quote_slider .owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        responsiveClass:true,
        nav:true,
        dots:false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            1000:{
                items:2
            }
        }
    })

    // arrordion 

    $(function () {
        $('.collapse_box_title').click(function (j) {

            var areasAccordion = $(this).closest('.collapse-box').find('.collapse_body');
            $(this).closest('.Collpsrow').find('.collapse_body').not(areasAccordion).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.Collpsrow').find('.collapse_box_title.active').removeClass('active');
                $(this).addClass('active');
            }

            areasAccordion.stop(false, true).slideToggle();
            j.preventDefault();
        });
    });
})


let bg = document.getElementById("bg-1");
let bg2 = document.getElementById("bg-2");
window.addEventListener('scroll',function(){
  var value = window.scrollY;
  bg.style='background-position:50% '+value*-0.17+'px';
  bg2.style='background-position:50% '+value*0.03+'px';
});


let scrln2 = document.getElementById('n2');
let scrln3 = document.getElementById('n3');
let scrln4 = document.getElementById('n4');
let scrln5 = document.getElementById('n5');
let scrln6 = document.getElementById('n6');
let scrln7 = document.getElementById('n7');

function n1(){
  bg.scrollIntoView({block: "center", behavior: 'smooth'});
}
function n2(){
  scrln2.scrollIntoView({block: "center", behavior: 'smooth'});
}
function n3(){
  scrln3.scrollIntoView({block: "center", behavior: 'smooth'});
}
function n4(){
  scrln4.scrollIntoView({block: "center", behavior: 'smooth'});
}
function n5(){
  scrln5.scrollIntoView({block: "center", behavior: 'smooth'});
}
function n6(){
  scrln6.scrollIntoView({block: "center", behavior: 'smooth'});
}
function n7(){
  scrln7.scrollIntoView({block: "end", behavior: 'smooth'});
}


burger=document.getElementById('burger');
navLink=document.getElementById('nav-list');
let p=0;
function menubtn(){
  if(p){
    navLink.style="right:-50%";
    p=0;
  }
  else{
    navLink.style="right:0";
    p=1;
  }
  burger.classList.toggle('toggle');
}
