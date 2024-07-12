const stars = document.querySelectorAll(".favorites__stars");
const drinks = document.querySelectorAll(".favorites__details");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    removeStarActive();
    star.classList.add("active");
    const activeDrinks = document.querySelector(`#${star.id}-content`);
    removeDrinksActive();
    activeDrinks.classList.add("active");
  });
});

removeStarActive = () => {
  stars.forEach((star) => {
    star.classList.remove("active");
  });
};

removeDrinksActive = () => {
  drinks.forEach((drink) => {
    drink.classList.remove("active");
  });
};
