$(function() {
    // Nav Tab complete status
    $('.nav-tabs > li').click(function() {
         $('.active').removeClass('active').addClass('completed');
    });
    $('#process-completed').click(function() {
        $('.nav-tabs > li').removeClass('active').addClass('completed');
    });
  
    $('.nav-tabs > li > a').click(function() {
        if($(this).hasClass('disabled')) {
            return false;
        } else {
            var linkIndex = $(this).parent().index() - 1;
            $('.nav-tabs > li').each(function(index, item) {
                $(this).attr('rel-index', index - linkIndex);
            });
        }
    });
    $('#step-1-next').click(function() {
        // Check values here
        var isValid = true;
        
        if(isValid) {
            $('.nav-tabs > li:nth-of-type(2) > a').removeClass('disabled').click();
        }
    });
    $('#step-2-next').click(function() {
        // Check values here
        var isValid = true;
        
        if(isValid) {
            $('.nav-tabs > li:nth-of-type(3) > a').removeClass('disabled').click();
        }
    });
    $('#step-3-next').click(function() {
        // Check values here
        var isValid = true;
        
        if(isValid) {
            $('.nav-tabs > li:nth-of-type(4) > a').removeClass('disabled').click();
        }
    });
    $('#step-4-next').click(function() {
        // Check values here
        var isValid = true;
        
        if(isValid) {
            $('.nav-tabs > li:nth-of-type(5) > a').removeClass('disabled').click();
        }
    });
    $('#step-5-next').click(function() {
        // Check values here
        var isValid = true;
        
        if(isValid) {
            $('.nav-tabs > li:nth-of-type(6) > a').removeClass('disabled').click();
        }
    });
    $('#step-6-next').click(function() {
        // Check values here
        var isValid = true;
        
        if(isValid) {
            $('.nav-tabs > li:nth-of-type(7) > a').removeClass('disabled').click();
        }
    });
    $('#step-7-next').click(function() {
        // Check values here
        var isValid = true;
        
        if(isValid) {
            $('.nav-tabs > li:nth-of-type(8) > a').removeClass('disabled').click();
        }
    });
});