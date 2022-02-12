
// ==== jQuery ====

let body = document.querySelector("body")
let nav_coll = document.querySelector(".navbar-collapse")
let menubar = document.querySelector(".menubar")

body.addEventListener("click",function(event){
    if(event.target.classList == "fal fa-bars menubar xsm_btn_fcs xsm_btn_fcs_border"){
        console.log("on")
    }else{
        nav_coll.classList.remove("show")
        menubar.classList.remove("xsm_btn_fcs", "xsm_btn_fcs_border")
    }
})

$(function () {

// ==== ==== Header: on-scroll class ==== ====
    
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".navbar").addClass("ext_hd");
            $(".navbar .container").addClass("cont_pd");
            $(".navbar").addClass("xsm_menu_bg");
            $(".navbar .navbar-collapse").css("margin-top", "0");
        } 
        else {
            $(".navbar").removeClass("ext_hd");
            $(".navbar .container").removeClass("cont_pd");
            $(".navbar").removeClass("xsm_menu_bg");
        }
    });

// ==== ==== Header: x-sm Fixed-Header ==== ====

    $('#menu_btn').click(function(){
        $(".navbar").addClass("xsm_menu_bg");
        $(".navbar-toggler i").toggleClass("xsm_btn_fcs");
        $(".menubar").toggleClass("xsm_btn_fcs_border");
    });

// ==== ==== FAQ: TextBox ==== ====

    $(document).ready(function () {
        $("#faq_btn4").click();
    });

    $('#faq_btn1').click(function(){
        $('#faq_ans1').slideToggle();
        $("#faq_box1").toggleClass("add_border");
        $("#faq_btn1 i").toggleClass("add_arr_hov");

        $('#faq_ans2').slideUp();
        $('#faq_ans3').slideUp();
        $('#faq_ans4').slideUp();
        $("#faq_box2").removeClass("add_border");
        $("#faq_box3").removeClass("add_border");
        $("#faq_box4").removeClass("add_border");
        $("#faq_btn2 i").removeClass("add_arr_hov");
        $("#faq_btn3 i").removeClass("add_arr_hov");
        $("#faq_btn4 i").removeClass("add_arr_hov");
    });

    $('#faq_btn2').click(function(){
        $('#faq_ans2').slideToggle();
        $("#faq_box2").toggleClass("add_border");
        $("#faq_btn2 i").toggleClass("add_arr_hov");

        $('#faq_ans1').slideUp();
        $('#faq_ans3').slideUp();
        $('#faq_ans4').slideUp();
        $("#faq_box1").removeClass("add_border");
        $("#faq_box3").removeClass("add_border");
        $("#faq_box4").removeClass("add_border");
        $("#faq_btn1 i").removeClass("add_arr_hov");
        $("#faq_btn3 i").removeClass("add_arr_hov");
        $("#faq_btn4 i").removeClass("add_arr_hov");
    });

    $('#faq_btn3').click(function(){
        $('#faq_ans3').slideToggle();
        $("#faq_box3").toggleClass("add_border");
        $("#faq_btn3 i").toggleClass("add_arr_hov");

        $('#faq_ans2').slideUp();
        $('#faq_ans1').slideUp();
        $('#faq_ans4').slideUp();
        $("#faq_box2").removeClass("add_border");
        $("#faq_box1").removeClass("add_border");
        $("#faq_box4").removeClass("add_border");
        $("#faq_btn2 i").removeClass("add_arr_hov");
        $("#faq_btn1 i").removeClass("add_arr_hov");
        $("#faq_btn4 i").removeClass("add_arr_hov");
    });

    $('#faq_btn4').click(function(){
        $('#faq_ans4').slideToggle();
        $("#faq_box4").toggleClass("add_border");
        $("#faq_btn4 i").toggleClass("add_arr_hov");

        $('#faq_ans2').slideUp();
        $('#faq_ans3').slideUp();
        $('#faq_ans1').slideUp();
        $("#faq_box2").removeClass("add_border");
        $("#faq_box3").removeClass("add_border");
        $("#faq_box1").removeClass("add_border");
        $("#faq_btn2 i").removeClass("add_arr_hov");
        $("#faq_btn3 i").removeClass("add_arr_hov");
        $("#faq_btn1 i").removeClass("add_arr_hov");
    });

// ==== ==== Rel_Games: rel_slider ==== ====

    $('#about_page .rel_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
        focusOnSelect:true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
        centerMode:true,
        centerPadding:"0px",
		
		responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
		
	});

// ==== ==== FAQ: Countdown ==== ====

    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let birthday = "Jan 1, 2030 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function() {    

    let now = new Date().getTime(),
        distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    // ---- .............................(Tariq-Edit) ###### ------

    if (distance < 0) {
        let countdown = document.getElementById("count_down"),
            photo = document.getElementById("count_down_photo");

    //   let headline = document.getElementById("headline"), 
    //   content = document.getElementById("content");

    //   headline.innerText = "It's my birthday!"; 
    //   content.style.display = "block";

    countdown.style.display = "none"; // .........Use style.display = none/block & innerText #####
    photo.style.display = "block"; 

    clearInterval(x);
    }
    //seconds
    }, 0)

// ==== ==== About: Venobox ==== ====

    $('.venobox').venobox();










});