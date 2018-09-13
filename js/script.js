// 'use strict';
var windowHeight;
var isAboutMeHidden;
var distanceToTop;
var elementHeight;
var isSideMenuActive;
var aboutBlockHeight;
var idArray = ["goodAtBlock", "doneBlock", "likeBlock", "reachBlock"];

$(document).ready(function () {
    ScrollReveal().reveal('.about-me', {
        origin: 'top',
        duration: 1500,
        distance:'200px'
    });

    ScrollReveal().reveal('.heading', {
        origin: 'top',
        duration: 1500,
        distance:'75px'
    });

    ScrollReveal().reveal('.competencies', {
        origin: 'right',
        duration: 1000,
        distance:'300px',
        viewFactor: 0.2
    });

    ScrollReveal().reveal('.project-from-left', {
        origin: 'left',
        duration: 1000,
        distance:'300px',
        viewFactor: 0.2
    });

    ScrollReveal().reveal('.project-from-right', {
        origin: 'right',
        duration: 1000,
        distance:'300px',
        viewFactor: 0.2
    });

    ScrollReveal().reveal('.likes', {
        origin: 'left',
        duration: 1500,
        distance:'300px'
    });

    ScrollReveal().reveal('.like-1', {
        origin: 'left',
        duration: 1500,
        distance:'300px',
        delay: 60
    });

    ScrollReveal().reveal('.like-2', {
        origin: 'left',
        duration: 1500,
        distance:'300px',
        delay: 120
    });

    ScrollReveal().reveal('.like-3', {
        origin: 'left',
        duration: 1500,
        distance:'300px',
        delay: 180
    });

    ScrollReveal().reveal('.like-4', {
        origin: 'left',
        duration: 1500,
        distance:'300px',
        delay: 240
    });

    ScrollReveal().reveal('.like-5', {
        origin: 'left',
        duration: 1500,
        distance:'300px',
        delay: 300
    });

    ScrollReveal().reveal('.like-6', {
        origin: 'left',
        duration: 1500,
        distance:'300px',
        delay: 360
    });

    ScrollReveal().reveal('.like-7', {
        origin: 'left',
        duration: 1500,
        distance:'300px',
        delay: 420
    });

    ScrollReveal().reveal('.dislikes', {
        origin: 'right',
        duration: 1500,
        distance:'300px'
    });

    ScrollReveal().reveal('.dislike-1', {
        origin: 'right',
        duration: 1500,
        distance:'300px',
        delay: 60
    });

    ScrollReveal().reveal('.dislike-2', {
        origin: 'right',
        duration: 1500,
        distance:'300px',
        delay: 120
    });

    ScrollReveal().reveal('.dislike-3', {
        origin: 'right',
        duration: 1500,
        distance:'300px',
        delay: 180
    });

    ScrollReveal().reveal('.reach-me-reveal', {
        origin: 'bottom',
        duration: 1500,
        distance:'200px'
    });

});

$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
        window.location.hash = hash;
        });
    }
});

window.onscroll = function (e) {
  aboutBlockHeight = document.getElementById('aboutBlock').offsetHeight - 5;
  windowHeight = window.scrollY;
  if (!isAboutMeHidden) {
    if(windowHeight >= aboutBlockHeight) {
      isAboutMeHidden = true;
      addHeader();
    }
  }
  var maxScrollX = Math.max( document.body.scrollHeight, document.body.offsetHeight,
    document.documentElement.clientHeight, document.documentElement.scrollHeight,
    document.documentElement.offsetHeight) - window.innerHeight;
  if (windowHeight <= aboutBlockHeight) {
    isAboutMeHidden = false;
    removeHeader();
  } else if (maxScrollX == windowHeight) {
    removeActive();
    var selectedElem = document.getElementById("navigator").children[4];
    selectedElem.classList.add("active");
  } else {
      var selectedId;
      var selectedIndex;
      idArray.forEach(function (id, index){
        var elem = document.getElementById(id);
        distanceToTop = getDistanceToTop(elem);
        elementHeight = getElementHeight(elem);

        if (distanceToTop <= 65 && distanceToTop + elementHeight > 65) {
          var selectedElem = document.getElementById("navigator").children[index + 1];
          selectedElem.classList.add("active");
        } else {
          var selectedElem = document.getElementById("navigator").children[index + 1];
          selectedElem.classList.remove("active");
        }

      });
  }

};
function addHeader () {
  document.getElementById("aboutBlock").classList.add("margin--bottom--60");
  document.getElementById("navigator").classList.add("fixed-header");
  document.getElementById("mobileHeader").classList.add("fixed-header");
  document.getElementById("navigator").classList.add("bg-flat-grey");
  document.getElementById("headerText").innerHTML = "Amir Suhail";
  var selectedElem = document.getElementById("navigator").children[0];
  selectedElem.classList.remove("active-about");
  //bg-flat-dark-blue
}

function removeHeader () {
  document.getElementById("mobileHeader").classList.remove("fixed-header");
  document.getElementById("navigator").classList.remove("fixed-header");
  document.getElementById("aboutBlock").classList.remove("margin--bottom--60");
  document.getElementById("navigator").classList.remove("bg-flat-grey");

  document.getElementById("headerText").innerHTML = "";
  removeActive();
  var selectedElem = document.getElementById("navigator").children[0];
  selectedElem.classList.add("active-about");
}

function getDistanceToTop (elem) {
  return elem.getBoundingClientRect().top;
}

function getElementHeight (elem) {
  return elem.offsetHeight;
}

function removeActive () {
  idArray.forEach(function (id, index){
      var selectedElem = document.getElementById("navigator").children[index + 1];
      selectedElem.classList.remove("active");
  });
}

function navigateTo(toHref) {
  window.location.href = toHref || '#mobileHeader';
  var mobileHeaderClasslist = document.getElementById('mobileHeader').classList;
  var bodyClasslist = document.getElementsByTagName('body')[0].classList;
  var navigatorItemsClasslist = document.getElementById('navigatorItems').classList;
  isSideMenuActive = !isSideMenuActive;
  if (isSideMenuActive) {
    mobileHeaderClasslist.add('full-height-header');
    bodyClasslist.add('overflow-hidden');
    navigatorItemsClasslist.remove('hide');
  } else {
    navigatorItemsClasslist.add('hide');
    mobileHeaderClasslist.remove('full-height-header');
    bodyClasslist.remove('overflow-hidden');
  }
}
