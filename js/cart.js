const cart = function () {
  const cartBtn = document.querySelector(".button-cart");
  console.log(cartBtn);
  const cart = document.getElementById("modal-cart");
  console.dir(cart);

  const cartBtnClose = cart.querySelector(".modal-close");
  console.dir(cartBtnClose);

  // cartBtn.onclick = function () {
  //   console.log("Click");
  // };
  // cartBtn.addEventListener("click", function () {
  //   console.log("click2");
  // });

  cartBtn.addEventListener("click", function () {
    console.log("click1");
  });

  cartBtn.addEventListener("click", function () {
    cart.style.display = "flex";
  });

  cartBtnClose.addEventListener("click", function () {
    cart.style.display = "";
  });
};

cart();
