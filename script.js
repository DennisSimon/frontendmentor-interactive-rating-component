function sendRating() {
  var ratingCard = document.getElementById("rating-card");
  var thankYouCard = document.getElementById("thank-you-card");
  var selectedRate = document.getElementById("selected-rate");

  var rating = document.querySelector('input[name="rating"]:checked').value;

  selectedRate.innerHTML = " " + rating + " ";
  ratingCard.classList.remove("shown");
  thankYouCard.classList.add("shown");
}
