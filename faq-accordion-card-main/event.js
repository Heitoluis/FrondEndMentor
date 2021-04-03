var element = document.getElementsByClassName("card__faq");

[].forEach.call(element, (card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("card__faq--toggle");
    //card.opacity = 0;
  });
});

// document.querySelector(".card__faq").addEventListener("click", (e) => {
//   document.body.classList.toggle("card__faq--toggle");
// });
