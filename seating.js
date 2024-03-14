document.addEventListener("DOMContentLoaded", function() {
  // Define your SeatingData array
  const SeatingData = [
    {
        table: "Table-21",
        pax: 12,
        names: ["Maja", "Noah", "Chuck", "Kath", "Matt", "Deb", "Natalie", "Jawad", "Eddie", "Olivia", "Jacki", "Brad"]
    },
    {
      table: "Table-31",
      pax: 12,
      names: ["Dean", "Mel", "Crosbie", "Matt", "Kirsty", "JH", "Dan", "Julia", "Panda", "Charles", "Ben", "Pip"]
  },
    {
        table: "Table-22",
        pax: 14,
        names: [
            "Tayla", "Ash", "Maddie", "DNovak", "Derek", "Cat", "Catherine", "Kaylie", "Michael", "Kim", "Mitch", "Jae-Do", "Zeyd", "Jason"
        ]
    },
    {
        table: "Table-32",
        pax: 14,
        names: [
            "Hugh", "Hussy", "Marion", "Janice", "Gary", "Ogie", "Tey", "Paul", "Steve", "Angela", "Eileen", "John", "Joey", "Tina"
        ]
    },
    {
      table: "Table-23",
      pax: 10,
      names: [
          "Candice", "Jesse", "Jenny", "Hannah", "Jasmine", "Ed", "Nabil", "Claud", "Bianca", "Kayla"
      ]
  },
  {
      table: "Table-33",
      pax: 10,
      names: [
          "Oli", "Kelsey", "Megan", "Tom", "Alf", "Alex", "Luke", "Tayjia", "Marga", "Carmen"
      ]
  },
  {
      table: "Table-54",
      pax: 14,
      names: [
          "Nadia", "Lucy", "Wade", "Amy", "Zarina", "Jake", "Bree", "Eloisa", "Gotham", "Dani", "Francesca", "Spare", "Spare", "Spare"
      ]
  },
  {
      table: "Table-14",
      pax: 10,
      names: [
          "Susan", "Hilary", "Laima", "Paul", "Liana", "Laurie", "Peter", "Jan", "Richard", "Paula"
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
