document.addEventListener('DOMContentLoaded', function() {
    let accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function(item) {
      let header = item.querySelector('.accordion-header')
      let content = item.querySelector('.accordion-content')

      header.addEventListener('click', function() {
        content.classList.toggle('active');

      })

  })
})

