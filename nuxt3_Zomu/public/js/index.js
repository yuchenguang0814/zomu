var tnav = new TabsNav(document.querySelector('nav.tabsnav'), {
  movable: 'all',
  extramovable: '.content',
  layout: 'vertical',
  animeduration: 700,
  animeeasing: 'easeInOutCubic',
  animedelay: 100,
  onOpenBarsUpdate: openTabCallback,
  onOpenTab: function () {
    // Show the back button after the tab is open.
    anime({
      targets: backCtrl,
      duration: 800,
      easing: 'easeOutExpo',
      scale: [0, 1],
      opacity: {
        value: 1,
        duration: 300,
        easing: 'linear'
      }
    });
  }
}),

// The content items and the back control.
contentItems = [].slice.call(document.querySelectorAll('.tabscontent > .tabscontent__item')),
backCtrl = document.querySelector('button.btn--back'),
// menu ctrl for smaller screens (the tabs are not initially shown and toggling this button will show/hide the tabs)
menuCtrl = document.querySelector('button.btn--menu'),
isContentShown = false,
current;

function openTabCallback(anim, idx, tab) {
if (anim.progress > 60 && !isContentShown) {
  isContentShown = true;
  current = idx;

  var contentItem = contentItems[idx],
    content = {
      // img: contentItem.querySelector('img.poster__img'),
      title: contentItem.querySelector('.poster__title'),
      deco: contentItem.querySelector('.poster__deco'),
      box: contentItem.querySelector('.poster__box'),
      // number: contentItem.querySelector('.poster__number')
    };

  // Hide the content elements.
  content.title.style.opacity = content.box.style.opacity = content.deco.style.opacity = 0;
  // Show content item.
  contentItem.style.opacity = 1;
  contentItem.classList.add('tabscontent__item--current');

  // Animate content elements in.
  anime.remove([content.title, content.box, content.deco]);
  anime({
    targets: [content.title, content.box, content.deco],
    easing: 'easeOutExpo',
    duration: function (t, i) {
      return 600 + i * 100;
    },
    scaleX: function (t, i) {
      return i === 0 ? [0, 1] : 1;
    },
    translateX: function (t, i) {
      return [-80 - i * 150, 0];
    },
    rotate: function (t, i) {
      return i === 2 ? [-40, 0] : 0;
    },
    opacity: {
      value: 1,
      duration: 300,
      easing: 'linear'
    }
  });
}
}

backCtrl.addEventListener('click', closeTabs);

function closeTabs() {
if (!tnav.isOpen) return;

var contentItem = contentItems[current],
  content = {
    // img: contentItem.querySelector('img.poster__img'),
    title: contentItem.querySelector('.poster__title'),
    deco: contentItem.querySelector('.poster__deco'),
    box: contentItem.querySelector('.poster__box'),
    // number: contentItem.querySelector('.poster__number')
  };

// Hide the content elements.
anime.remove([content.title, content.box, content.deco]);
// Animate content elements out.
anime({
  targets: [content.box, content.title, content.deco],
  easing: 'easeInOutCubic',
  duration: function (t, i) {
    return 600 + i * 100;
  },
  delay: function (t, i, c) {
    return (c - i - 1) * 35;
  },
  translateX: function (t, i) {
    return [0, -200 - i * 150];
  },
  rotate: function (t, i) {
    return i === 2 ? [0, -40] : 0;
  },
  opacity: {
    value: 0,
    duration: 450
  },
  update: function (anim) {
    if (anim.progress > 20 && isContentShown) {
      isContentShown = false;
      // Close tab.
      tnav.close();
    }
  },
  complete: function () {
    // Hide content item.
    contentItem.style.opacity = 0;
    contentItem.classList.remove('tabscontent__item--current');
  }
});

// Hide back ctrl
anime.remove(backCtrl);
anime({
  targets: backCtrl,
  duration: 800,
  easing: 'easeOutExpo',
  scale: [1, 0],
  opacity: {
    value: 0,
    duration: 200,
    easing: 'linear'
  }
});
}

// .addEventListener('click', toggleTabs);

function toggleTabs() {
var state = tnav.toggleVisibility();
if (state === 0) {
  menuCtrl.classList.remove('btn--menu-active');
} else if (state === 1) {
  menuCtrl.classList.add('btn--menu-active');
}
}
$('.tabsnav__item').hover(function(){
$(this).addClass('hover')
},function(){
$(this).removeClass('hover')
}
)

window.onload = () => {
const obj = document.querySelector("#gallery");
const time = 10000;

function animStart() {
  if (obj.classList.contains("active") == false) {
      obj.classList.add("active");
      setTimeout(() => {
          animEnd();
      }, time);
  }
}

function animEnd() {
  obj.classList.remove("active");
  obj.offsetWidth;
}
document.addEventListener("scroll", function() {
  // scroll or scrollend
  animStart();
});
window.addEventListener("resize", animStart);
animStart();
$('.tabs_cont').click(function(){
animStart();
})
};