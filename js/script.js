let myCarousel = document.querySelector('#myCarousel');
let carousel = new bootstrap.Carousel(myCarousel);

// content modal
function contentModal(id){
    let divs = document.getElementsByClassName('content_modal');
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("hiddenModal");
    }
    document.getElementById('content' + id).classList.remove("hiddenModal");
    document.getElementById('content' + id).classList.add("showModal");
}

//
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// scroll menu
let $menu = $(".header_menu");
let $menuOffsetTop = $menu.offset().top;
let $menuHeight = $menu.outerHeight();
let $menuParent = $menu.parent();
let $menuParentPaddingTop = parseFloat($menuParent.css("padding-top"));

checkWidth();

function checkWidth() {
    // for mobile - you need change 1920 to 992
    if (window.matchMedia("(max-width: 1920px)").matches) {
        if ($menu.length !== 0) {
            $(window).scroll(onScroll);
        }
    }
}

function onScroll() {
    if ($(window).scrollTop() > $menuOffsetTop) {
        $menu.addClass("fixed");
        $menuParent.css({ "padding-top": $menuParentPaddingTop + $menuHeight });
    } else {
        $menu.removeClass("fixed");
        $menuParent.css({ "padding-top": $menuParentPaddingTop });
    }
}

// animation headline

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('animation_headline_show');
        }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation_headline');

for (let elm of elements) {
    observer.observe(elm);
}