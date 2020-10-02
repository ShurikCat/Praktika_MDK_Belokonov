$(function() {
    
    var header = $("#header");
    var goTop = $("#go_top");
    
    /* Fixed Header */
    
    $(window).on("scroll", function() {
        
        if ($(this).scrollTop() > 50) {
            header.addClass("fixed");
            goTop.removeClass("invisible");
        } else {
            header.removeClass("fixed");
            goTop.addClass("invisible");
        }
        
    });
    
    
    /* Smooth Scroll */
    
    $(goTop).on("click", function() {
        
        $("html, body").animate({scrollTop: $("#intro").offset().top}, 500);
        
    })
    
});