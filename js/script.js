// 'use strict';
var windowHeight;
var isAboutMeHidden;
var distanceToTop;
var elementHeight;
var isSideMenuActive;
var aboutBlockHeight;
var idArray = ["goodAtBlock", "doneBlock", "likeBlock", "reachBlock"];

$(window).on('load', function() {
    $('#t').t();
  $(this).impulse();
});

$('#t').t({
  speed:50,
  speed_vary:true
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
  document.getElementById("headerText").innerHTML = "Amir Suhail";
  var selectedElem = document.getElementById("navigator").children[0];
  selectedElem.classList.remove("active-about");
}

function removeHeader () {
  document.getElementById("mobileHeader").classList.remove("fixed-header");
  document.getElementById("navigator").classList.remove("fixed-header");
  document.getElementById("aboutBlock").classList.remove("margin--bottom--60");
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
