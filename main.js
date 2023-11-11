document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".stars-rating div");
  const selectedRate = document.querySelector(".selected-rate");
  const card = document.querySelector(".card");
  const thanksCard = document.querySelector(".thanks-card");
  let selectedRating = null;

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const rating = this.innerText;
      selectedRating = rating;
      selectedRate.innerText = rating;

      stars.forEach((star) => star.classList.remove("active"));

      this.classList.add("active");
    });
  });

  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", function () {
    if (selectedRating !== null) {
      card.style.display = "none";
      thanksCard.style.display = "block";
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});
