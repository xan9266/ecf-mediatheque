document.getElementById("showForm").addEventListener("click", function(){
    document.getElementById("newEntry").style.display = "block";
    document.getElementById("showForm").style.display = "none";
  });

document.getElementById("validateEntry").addEventListener("click", function(){
    document.getElementById("newEntry").style.display = "none";
    document.getElementById("showForm").style.display = "unset";
});

const deleteBtns = document.querySelectorAll(".deleteBtn");

deleteBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    this.parentElement.parentElement.remove();
  });
});



  document.getElementById("newEntry").addEventListener("submit", function(event){
    event.preventDefault();
    
    let title = document.getElementById("newMovie").value;
    let year = document.getElementById("movieYear").value;
    let author = document.getElementById("movieProducer").value;
    let errors = [];
    
    if (title.length < 2) {
      errors.push("Title must have at least 2 characters.");
    }
    
    if (year.length !== 4 || year < 1900 || year > new Date().getFullYear()) {
      errors.push("Year must be a 4-digit number between 1900 and the current year.");
    }
    
    if (author.length < 5) {
      errors.push("Author must have at least 5 characters.");
    }
    
    if (errors.length === 0) {
      // Add the film to the array
      title = title.charAt(0).toUpperCase() + title.slice(1);
      author = author.charAt(0).toUpperCase() + author.slice(1);

      films.push({
        title: title,
        year: year,
        author: author
      });

      let table = document.getElementById("filmsTable");
      let row = table.insertRow();
      let titleCell = row.insertCell(0);
      let yearCell = row.insertCell(1);
      let authorCell = row.insertCell(2);
      let actionCell = row.insertCell(3);
      titleCell.innerHTML = title;
      yearCell.innerHTML = year;
      authorCell.innerHTML = author;
      actionCell.innerHTML = `<button class="btn btn-danger deleteBtn">Delete</button>`;
      
    
      alert("Film added successfully.");
      setTimeout(function() {
        // Hide the alert after 3 seconds
      }, 3000);
    } else {
      alert("Error in the form: " + errors.join(", "));
           setTimeout(function() {
      }, 5000);
      console.log(alert);
    };

    const deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach(btn => {
    btn.addEventListener("click", function() {
    this.parentElement.parentElement.remove();
  });
  
});

});
  
let films = [
  {    name: "Deadpool",      years: 2016,    authors : "Tim Miller" },
  {    name: "Spiderman",     years: 2002,    authors : "Sam Raimi" },
  {    name: "Scream",        years: 1996,    authors : "Wes Craven" },
  {    name: "It: chapter 1", years: 2019,    authors : "Andy Muschietti" }
];

const filterButton = document.getElementById("filterButton");
const filterSelect = document.getElementById("filterSelect");
const filmList = document.getElementById("filmList");

function displayFilms() {
  filmList.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    const film = films[i];
    filmList.innerHTML += `
      <tr>
        <td>${film.name}</td>
        <td>${film.years}</td>
        <td>${film.authors}</td>
        <td><button class="btn btn-danger deleteBtn">Delete</button></td>
      </tr>
    `;
  }
}

filterButton.addEventListener("click", function() {
  const selectedOption = filterSelect.value;
  if (selectedOption === "title") {
    films.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (selectedOption === "year") {
    films.sort(function(a, b) {
      return b.years - a.years;
    });
  }
  displayFilms();
});

displayFilms();