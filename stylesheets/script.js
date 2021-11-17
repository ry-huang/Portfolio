$(document).ready(function(){

    checkWidth();
    $(window).resize(function() { checkWidth(); })
    function checkWidth() {
        if ($(window).width() < 1200) {
            $("body").addClass("mobile");
        } else {
            $("body").removeClass("mobile");
            $(".mobileMenu").css({ "transition": "none" })
        }
    }

    $(".triplebar").click(function() {
        $(".mobileMenu").css({ 
            "transition": "all 0.5s cubic-bezier(0.5, 0, 0.5, 1)",
            "transition-timing-function":"cubic-bezier(0.5, 0, 0.5, 1)"
        })
        $(".mobileMenu").toggleClass("expanded");;
    });
    $(".mobile .mobileMenu a").click(function() {
        $(".mobileMenu").removeClass("expanded");;
    });

    $("#currentYear").html(new Date().getFullYear());


    // Hero Fix ----------------------------------------------------------------------
    var conHeight = $("#pullup .hero").height();
    var imgHeight = $("#pullup .hero img").height();
    var gap = (imgHeight - conHeight) / 2;
    $("#pullup .hero img").css("top", -gap);



    // Pullup ------------------------------------------------------------------------
    $(".projectContainer").click(function() { 
        /* Get Project ID */
        const PROJECTINDEX = $(this).index();
        const PROJECTID = $(".projectContainer:nth-child("+(PROJECTINDEX+1)+")").attr("id");

        /* Project Hero Image Setup */
        const PROJECTIMGURL = $("#"+(PROJECTID)+" img").attr("src")
        const PROJECTHERO = "url("+PROJECTIMGURL+")";
        $("#pullupContent .hero").css({ 
            "background":PROJECTHERO, 
            "background-position":"50% 50%",
            "background-size":"cover",
            "background-repeat":"no-repeat" 
        });

        /* Project Name Setup */
        const PNAME = "#"+(PROJECTID)+" p:first-of-type";
        const PROJECTNAME = $(PNAME).text();
        $("#pullupContent .hero h1").html(PROJECTNAME);
        const PSUB = "#"+(PROJECTID)+" p:nth-child(2)";
        const PSUBNAME = $(PSUB).text();
        $("#pullupContent .hero p").html(PSUBNAME);

        /* Project Content Setup */
        const PROJECTDESC = "pages/" + (PROJECTID) + ".html"
        $("#pullupContent .fullDescription").load(PROJECTDESC); 
        setPullup();
    });

    $("#about").click(function() { 
        $("#pullupContent .fullDescription").load("pages/about.html"); 
        $("#pullupContent .hero").css({ 
            "background": "url(images/about/banner-about.jpg)", 
            "background-position":"50% 50%",
            "background-size":"cover",
            "background-repeat":"no-repeat" 
        });
        $("#pullupContent .hero h1").html("About Yoon"); /* Project Name Setup */
        $("#pullupContent .hero p").html("");
        setPullup(); /* Project Content Setup */
    });

    $("#photography").click(function() {
        $("#pullupContent .fullDescription").load("pages/photography.html"); 
        $("#pullupContent .hero").css({ 
            "background":"url(images/photography/banner-photography.jpg)", 
            "background-position":"50% 50%",
            "background-size":"cover",
            "background-repeat":"no-repeat" 
        });
        $("#pullupContent .hero h1").html("Photography"); /* Project Name Setup */
        $("#pullupContent .hero p").html("");
        setPullup(); /* Project Content Setup */
    });

    function setPullup() {
        $("#pullupContent").addClass("show");
        $("#pullup").addClass("show"); 
    }

    $("#pullupToggle").click(function() { hidePullup() });
    $("#design").click(function() { hidePullup() });
    $("#logo").click(function() { hidePullup() });
    function hidePullup(){
        $("#pullup").removeClass("show");
    }
})
