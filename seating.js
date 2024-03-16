document.addEventListener("DOMContentLoaded", function() {
  const SeatingData = [
    {
      table: 4,
      pax: 14,
      names: [
        'Christine',
        'Paul',
        'Marion',
        'Hassan',
        'Joey',
        'Tina',
        'Tey',
        'Ogie',
        'Janice',
        'John',
        'Eileen',
        'Angela',
        'Stephen',
        'Hugh'
      ]
    },
    {
      table: 5,
      pax: 14,
      names: [
        'Francesca',
        'Marga',
        'Deborah',
        'Matt',
        'Eloisa',
        'Bree',
        'Brad',
        'Jacki',
        'Gary',
        'Jake',
        'Zarina',
        'Alfonso',
        'Carmen'
      ]
    },
    {
      table: 6,
      pax: 14,
      names: [
        'Kathy',
        'Charles',
        'Zeyd',
        'John-Henry',
        'Kirsty',
        'Megan',
        'Tom',
        'Alexandra',
        'Lucy',
        'Nadia'
      ]
    },
    {
      table: 7,
      pax: 14,
      names: [
        'Jan',
        'Richard',
        'Hilary',
        'Liana',
        'Paul',
        'Laurie',
        'Laima',
        'Susan',
        'Paula',
        'Peter'
      ]
    },
    {
      table: 8,
      pax: 14,
      names: [
        'Jess',
        'Nick',
        'Dean',
        'Luke',
        'Alex',
        'Will',
        'Anna',
        'Gotham',
        'Andrew',
        'Mel',
        'Julia',
        'Dan'
      ]
    }
  ];
  

  // Function to generate chair divs
  function generateChairDivs(tableData) {
    const tableElement = document.getElementById(tableData.table);
    const firstHalfChairContainer = tableElement.querySelector(`#${tableData.table}-first-half-chairs`);
    const secondHalfChairContainer = tableElement.querySelector(`#${tableData.table}-second-half-chairs`);
    

    const middleIndex = Math.ceil(tableData.names.length / 2);

    // Iterate over names array and create a chair div for each guest
    tableData.names.forEach((guest, index) => {
        const chairDiv = document.createElement("div");
        chairDiv.className = "chair";
        chairDiv.setAttribute("data-name", guest);
        chairDiv.textContent = guest;

        // Insert chair div into appropriate container
        if (index < middleIndex) {
            firstHalfChairContainer.appendChild(chairDiv);
        } else if (index === middleIndex) {
            const tableDiv = document.createElement("div");
            tableDiv.className = tableData.table;
            tableDiv.textContent = tableData.table;
            tableElement.querySelector('.table-container').appendChild(tableDiv);
            secondHalfChairContainer.appendChild(chairDiv)
        } else {
            secondHalfChairContainer.appendChild(chairDiv);
        }
    });
}

// Call the function for each table in SeatingData
SeatingData.forEach(table => generateChairDivs(table));
})

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const chairContainers = document.querySelectorAll(".chair-container");

  // Function to create the paragraph element
  function createParagraph(text) {
      const pElement = document.createElement("p");
      pElement.textContent = text;
      return pElement;
  }

  searchInput.addEventListener("input", function() {
      const searchText = searchInput.value.toLowerCase().trim();
      const seatsDiv = document.getElementById("seats");

      // Check if the paragraph already exists with the same content
      const existingParagraph = seatsDiv.querySelector(`p[data-name="${searchText}"]`);
      
      if (existingParagraph) {
          // If the paragraph already exists, do nothing
          return;
      }

      // Otherwise, remove all existing paragraphs
      seatsDiv.innerHTML = "";

      chairContainers.forEach(chairContainer => {
          const chairs = chairContainer.querySelectorAll(".chair");

          chairs.forEach(chair => {
              const name = chair.getAttribute("data-name");
              const startsWithSearch = name.toLowerCase().startsWith(searchText);
              const tableContainer = chair.parentElement.id.split("-").splice(0,2).join(" ");

              if (startsWithSearch && searchText.length >= 2) {
                  chair.classList.add("highlight");
                  chair.classList.add("animate");
                  const pElement = createParagraph(`Hello ${name}, you are seated at ${tableContainer}`);
                  pElement.setAttribute("data-name", searchText);
                  seatsDiv.appendChild(pElement);
              } else {
                  chair.classList.remove("highlight");
                  chair.classList.remove("animate");
              }
          });
      });
  });
});
