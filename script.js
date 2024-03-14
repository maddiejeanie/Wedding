


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    var elements = document.querySelectorAll('.run-time, .run-event');
    elements.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.classList.add('animate');
      }
  })
  

      var storyimg = document.getElementById("story-img")
      var story = document.getElementById("story")
      var storytext = document.getElementById("story-text")

      if (isElementInViewport(story)) {
        storyimg.classList.add('rotate-animation')
        storytext.classList.add('animate')
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  window.addEventListener('DOMContentLoaded', handleScroll);

  let swiper = new Swiper(".MySlider", {
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
      perSlideOffset: 5, // Space between cards in px
      perSlideRotate: 1, // Rotation of cards in degrees
      setWrapperSize: true,
    }
  });