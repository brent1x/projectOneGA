$(document).ready(function() {

    // fullpage.js code
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        anchors: ['Home', 'Data', 'Report', 'About'],
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
        easingcss3: 'ease-out',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#scrolla',
        scrollOverflow: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: false,
        resize : false,
        sectionsColor : ['#FFF', '#FFF', "#FFF", '#FFF'],
        paddingTop: '100px',
        paddingBottom: '10px',
        fixedElements: '#footer',
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
});
