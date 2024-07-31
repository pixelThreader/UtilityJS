/* 
* JavaScript code for the UtilityJS project - a cloud storage platform
* This code is part of a portfolio project
* Version: 1.0.0
* Creator: Piyush Rana
*/

utsReady(function() {

    let htmlConstrudtor = new HtmlUtility();
    uts('.utjs-rip').eachone('click', function(e) {
        
        // Get the bounding rect of the element
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        // Set the size and position of the ripple
        const $ripple = htmlConstrudtor.createSpan('',{
            'style': `width: ${size}px'; height: ${size}px; left: ${e.clientX - rect.left - size / 2}px; top: ${e.clientY - rect.top - size / 2}px;`
        });

        uts(this).appendTo($ripple);

        // Remove the ripple element after animation
        $ripple.eachone('animationend', function() {
            $(this).remove();
        });
    });
});



$(document).ready(function () {
    // initially check the user theme and update it...

    // Profile Dropdown...
    const button = document.querySelector('#profile-dropdown-toggle');
    const tooltip = document.querySelector('#profile-dropdown');
    const popperInstance = Popper.createPopper(button, tooltip, {
        placement: 'bottom-start',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [10, 20],
                },
            }
        ],
    });

    // Function to close the profile dropdown...
    function closeProfileDropdown() {
        $('#profile-dropdown').attr('isOpen', 'closed').stop(true, true).slideUp(300).fadeOut(300);
    }

    // Click event to close dropdown when profile link is clicked...
    $('.link-profile-nav').click(function () {
        closeProfileDropdown();
    });

    // Click event to toggle profile dropdown...
    $('#profile-dropdown-toggle').click(function () {
        popperInstance.update(); // Update Popper position...
        const isOpen = $('#profile-dropdown').attr('isOpen');
        if (isOpen === "closed") {
            $('#profile-dropdown').attr('isOpen', 'opened').stop(true, true).slideDown(300).fadeIn(300);
        } else if (isOpen === "opened") {
            closeProfileDropdown();
        }
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('#profile-dropdown-toggle, #profile-dropdown').length) {
            closeProfileDropdown();
        }
    });

    $('#profile-dropdown-toggle').blur(() => { closeProfileDropdown() });

    // Toggle Menu...
    $('#main-menu-toggler').click(function () {
        const openMenu = $('#main-menu-toggler .open-menu');
        if (openMenu.attr('isOpen') === "closed") {
            // Open menu animations...
            openMenu.addClass('active').attr('isOpen', "opened");
            $('body').addClass('ovh'); // Add class to prevent scrolling...
            $('#main-navigation-body').fadeIn(300).css('display', 'flex'); // Fade in navigation wrapper and display it as flex...
            $('header').addClass('active'); // Add class to header for styling purposes...
            $('#main-navigation-body .nav-main-container').animate({ opacity: 1, transform: 'scale(1)' }, 500); // Animate scaling and opacity...

        } else if (openMenu.attr('isOpen') === "opened") {
            // Close menu animations...
            openMenu.removeClass('active').attr('isOpen', "closed");
            $('body').removeClass('ovh'); // Remove class to enable scrolling...
            $('#main-navigation-body').fadeOut(300); // Fade out navigation wrapper...
            $('header').removeClass('active'); // Remove class from header...
            $('#main-navigation-body .nav-main-container').animate({ opacity: 0, transform: 'scale(0.7)' }, 500); // Animate scaling and opacity...

        }
    });

    // Menu items hover effects...
    $(".nav-item").on('mousemove', function (e) {
        var element = $(this);
        var offset = element.offset();
        var left = e.pageX - offset.left;
        var top = e.pageY - offset.top;
        element.css({
            '--x': left + 'px',
            '--y': top + 'px'
        });
    });

    // Search Function...
    // Add event listener for form submission...
    $('#search-form').submit(function (event) {
        // Prevent default form submission...
        event.preventDefault();
        const searchContent = $('#search-content').val(); // Get the search query from the input field...
        window.location.href = searchUrl + "?query=" + encodeURIComponent(searchContent); // Redirect to the search URL with the search query...
    });
    // Add event listener for pressing enter in the input field...
    $('#search-content').keypress(function (event) {
        if (event.key === 'Enter') {
            $('#search-form').submit(); // Trigger form submission when enter key is pressed...
        }
    });

    // Keyboard Shortcuts...
    $(document).keydown(function (e) {
        // Focus on search input when Ctrl+/ or Ctrl+k is pressed...
        if (e.ctrlKey && e.key === '/') {
            $("#search-content").focus();
            e.preventDefault();
        }
        else if (e.ctrlKey && e.key === 'k') {
            $("#search-content").focus();
            e.preventDefault();
        }
        // Blur search input when Escape key is pressed...
        if (e.key === 'Escape') {
            $("#search-content").blur();
            e.preventDefault();
        }
    });

    // Focus Class Handling...
    $("#search-content").focus(function () { // Add focus class when search input is focused...
        $(".shortcut").addClass("focus");
    });
    $("#search-content").blur(function () { // Remove focus class when search input is blurred...
        if ($(this).val() === '') {
            $(".shortcut").removeClass("focus");
        } else {
            $(".shortcut").addClass("focus");
        }
    });
});
