$(document).ready(function(){
    // Click Handler for links in navbar
    $('nav a').on('click', function(){
        // Removes the class 'current' from every li in the navbar
        $('nav li.current').removeClass('current');
        // Adding the class 'current' to the parent of the clicked link
        $(this).parent().addClass('current');

        // Set heading text
        $('h1#heading').text($(this).text());


        // Get &fFilter link text
        var category = $(this).text().toLowerCase().replace(' ', '-');

        // Remove hidden class if 'all projects' is selected
        if(category == 'all-projects'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function(){
                if(!$(this).hasClass(category)) {
                    $(this).hide().addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }

        //Stop link behaviour
        return false;
    });

    // Show info of the project when hovering the project
    $('ul#gallery li').on('mouseenter', function(){
        // Get the data attribute values
        var title = $(this).data('title');
        var desc = $(this).data('desc');

        // Validation
        if (desc == null) {
            desc = 'Click to enlarge';
        }

        if (title == null) {
            title = '';
        }

        // Create overlay div
        $(this).append('<div class="overlay"></div>');

        // Get the overlay div
        var overlay = $(this).children('.overlay');

        // Add html to overlay div
        overlay.html('<h3> '+title+' </h3><p> '+desc+' </p>');

        //Fade in overlay
        overlay.fadeIn(300);
    });

    // Mouse leave event
    $('ul#gallery li').on('mouseleave', function(){

        // Create overlay div
        $(this).append('<div class="overlay"></div>');

        // Get the overlay div
        var overlay = $(this).children('.overlay');

        //Fade out overlay
        overlay.fadeOut(300);
    });

});