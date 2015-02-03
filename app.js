$(document).ready(function() {

    // fullpage.js code
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        anchors:['Home', 'Data', 'Report', 'About'],
        navigation: false,
        navigationPosition: 'right',
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        scrollBar: true,
        easing: 'easeInQuart',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#inner-content-div',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        resize : true,
        sectionsColor : ['#fff', '#fff', "#fff", '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });

    // slimscroll code
    $('#inner-content-div').slimScroll({
        height: '480px',
        width: '75%',
        size: '8px',
        railVisible: true,
        alwaysVisible: true,
        color: '#00f',
        railColor: '#222',
        railOpacity: 0.3,
        allowPageScroll: false
    });

});
