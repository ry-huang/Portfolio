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
        $(".mobileMenu").css({ "transition": "all 1s ease-out" })
        $(".mobileMenu").toggleClass("expanded");;
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
        $("#pullupProject .hero").css({ "background":PROJECTHERO, "background-position":"50% 50%" });

        /* Project Name Setup */
        const PNAME = "#"+(PROJECTID)+" p:first-of-type";
        const PROJECTNAME = $(PNAME).text();
        $("#pullupProject .hero h1").html(PROJECTNAME);
        const PSUB = "#"+(PROJECTID)+" p:nth-child(2)";
        const PSUBNAME = $(PSUB).text();
        $("#pullupProject .hero p").html(PSUBNAME);

        /* Project Content Setup */
        const PROJECTDESC = "projectfiles/" + (PROJECTID) + ".html"
        $("#pullupProject .fullDescription").load(PROJECTDESC); 

        setPullup("project");
    });

    $("#about").click(function() { 
        $("#pullupAbout .hero").css({ "background": "url(images/about/banner-about.jpg)"});
        setPullup("about");
    });

    $("#photography").click(function() {
        $("#pullupProject .fullDescription").load("projectfiles/photography.html"); 
        $("#pullupProject .hero").css({ "background": "url(images/about/banner-about.jpg)"});

        /* Project Name Setup */
        $("#pullupProject .hero h1").html("Photography");
        $("#pullupProject .hero p").html("");

        /* Project Content Setup */
        setPullup("photography");
    });

    function setPullup(type) {
        if(type === "project" || type === "photography") {
            $("#pullupProject").addClass("show");
            $("#pullupAbout").removeClass("show");
        } else { //about
            $("#pullupAbout").addClass("show");
            $("#pullupProject").removeClass("show");
        } 
        $("#pullup").addClass("show"); 
    }

    $("#pullupToggle").click(function() { hidePullup() });
    $("#design").click(function() { hidePullup() });
    $("#logo").click(function() { hidePullup() });
    function hidePullup(){
        $("#pullup").removeClass("show");
    }
})
