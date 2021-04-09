var buttons = document.getElementsByClassName("btn");

[].forEach.call(buttons, (btn) => {
  btn.addEventListener("click", () => {
    var developers = document.getElementsByClassName("developer");

    [].forEach.call(developers, (developer) => {
      developer.classList.toggle("display-toggle");
    });
  });
});
