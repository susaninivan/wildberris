const search = function () {
  const input = document.querySelector(".search-block > input");
  const button = document.querySelector(".search-block > button");
  console.log(button);

  input.addEventListener("input", (event) => {
    console.log(event.target.value);
  });
};
search();
