// Get the form elements
const form = document.querySelector("#search");
const movieNameInput = document.querySelector("#searchMovie");
const movieYearInput = document.querySelector("#searchYear");
const movieTypeSelect = document.querySelector("#formSelect");

// Listen for form submit
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the values from the form
  const movieName = movieNameInput.value;
  const movieYear = movieYearInput.value;
  const movieType = movieTypeSelect.value;

  // Build the URL for the API request
  const apiKey = "f3a60b30";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}&y=${movieYear}&type=${movieType}`;

  // Make the API request
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
      let img = data.Poster;
      console.log(img);
      const title = data.Title;
      const plot = data.Plot;

      if (img === "N/A") {
        img = "../../img/defaultImg.jpg";
      }

      const card = document.querySelector('.card');
      card.querySelector('.card-img-top').src = img;
      card.querySelector('.card-title').innerHTML = title;
      card.querySelector('.card-text').innerHTML = plot;
    });
});
