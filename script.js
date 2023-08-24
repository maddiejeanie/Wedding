const form = document.getElementById('rsvpform')
const itnro = document.getElementById('intro')
const success = document.getElementById('success')


form.addEventListener('submit', submitForm)

function submitForm(event){
    event.preventDefault()
    
    form.style.display = 'none'
    intro.style.display = 'none'
    success.style.display = 'block'

    const formData = {
        name: event.target.elements.name.value,
        email: event.target.elements.email.value,
        diet: event.target.elements.diet.value,
        attendYes: event.target.querySelector('input[name="attendance"]:checked').value === "yes",
        attendNo: event.target.querySelector('input[name="attendance"]:checked').value === "no",
    }

    updateSheet(formData)
}
async function updateSheet(formData) {
    const database_id = '0i2lf5f88yg09'
    const sheet_name = 'RSVPs'
    const requestBody = {
        data: [formData],
      };


    fetch(`https://sheetdb.io/api/v1/${database_id}?sheet=${sheet_name}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.log('Error:', error);
      });
  }

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

  let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });