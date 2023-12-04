product = {
  id: 1,
  title: "Fall Limited Edition Sneakers",
  originalPrice: 250,
  actualPrice: 125,
  discount: 50,
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  category: "Sneaker Company",
};

document.addEventListener("DOMContentLoaded", function () {
  const cartButtonHook = document.getElementById("cartLogo");
  const cartElementHook = document.querySelector(".cart");
  function toggleCart() {
    cartElementHook.classList.toggle("non-visible");
  }

  if (cartButtonHook) {
    cartButtonHook.addEventListener("click", toggleCart);
  } else {
    console.error("Element with id 'cart' not found.");
  }

  let amount = 0;

  const amountDisplayHook = document.getElementById("amount");
  const plusButtonHook = document.getElementById("plusButton");
  const minusButtonHook = document.getElementById("minusButton");

  function changeAmountDisplay() {
    amountDisplayHook.innerText = amount;
  }

  plusButtonHook.addEventListener("click", (event) => {
    amount += 1;
    changeAmountDisplay();
  });

  minusButtonHook.addEventListener("click", (event) => {
    if (amount > 0) amount -= 1;
    changeAmountDisplay();
  });

  const addToCartButtonHook = document.getElementById("addToCartButton");
  const cartContentHook = document.getElementById("cartContent");

  addToCartButtonHook.addEventListener("click", (event) => {
    if (amount != 0) {
      const totalPrice = amount * product.actualPrice;
      cartContentHook.innerHTML = `
            <div class="product-card--cart">
              <div class="product-card--cart__img">
                <img src="images/image-product-1.jpg" alt="">
              </div>
              <div class="product-card--cart__content">
                  <p>${product.title}</p>
                  <p>${amount} x ${product.actualPrice}$ <span class="product-card--cart__total-price fw-bold">${totalPrice}$</span></p>
              </div>
              <div class="product-card--cart__remove-icon">
                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
              </div>
            </div>
            <button class="cart__button">Checkout</button>
        `;
      const removeFromCartButton = document.getElementsByClassName(
        "product-card--cart__remove-icon"
      );
      for (button of removeFromCartButton) {
        button.addEventListener("click", (event) => {
          cartContentHook.innerHTML = `
            <p class="fw-bold">Your cart is empty</p>
            <button class="cart__button">Checkout</button>
            `;
        });
      }
    } else {
      cartContentHook.innerHTML = `
        <p class="fw-bold">Your cart is empty</p>
        <button class="cart__button">Checkout</button>
        `;
    }
  });

  const thumbs = document.getElementsByClassName("wrapper__thumbImg");
  mainImgHook = document.getElementsByClassName("mainIMG");
  for (thumb of thumbs) {
    thumb.addEventListener("click", (event) => {
      getImg = event.currentTarget.getAttribute("src");
      for (thumbJ of thumbs) {
        thumbJ.parentNode.classList.remove("actualThumb");
      }
      event.currentTarget.parentNode.classList.add("actualThumb");
      for (i of mainImgHook) {
        i.src = getImg;
      }
    });
  }

  const lightboxHook = document.getElementById("lightboxHook");
  for (mainImg of mainImgHook) {
    mainImg.addEventListener("click", (event) => {
      lightboxHook.classList.toggle("non-visible");
    });
  }

  let currentImg = 0;
  const lightboxImgThumbHooks =
    document.getElementsByClassName("lightboxThumb");
  prevBtnHook = document.getElementsByClassName("prev");
  nextBtnHook = document.getElementsByClassName("next");
  const imgArray = document.getElementsByClassName("lightboxThumb");
  for (BtnHook of nextBtnHook) {
    BtnHook.addEventListener("click", (event) => {
      if (currentImg == imgArray.length - 1) currentImg = 0;
      else currentImg += 1;

      for (mainImg of mainImgHook) {
        mainImg.src = imgArray[currentImg].getAttribute("src");
        for (img of imgArray) img.parentNode.classList.remove("actualThumb");
        imgArray[currentImg].parentNode.classList.add("actualThumb");
      }
    });
  }
  for (BtnHook of prevBtnHook) {
    BtnHook.addEventListener("click", (event) => {
      if (currentImg == 0) currentImg = imgArray.length - 1;
      else currentImg -= 1;

      for (mainImg of mainImgHook) {
        mainImg.src = imgArray[currentImg].getAttribute("src");
        for (img of imgArray) img.parentNode.classList.remove("actualThumb");
        imgArray[currentImg].parentNode.classList.add("actualThumb");
      }
    });
  }


  navHook = document.getElementById("nav");
  navMenuHook = document.getElementById("nav__close-button");
  navCloseMenuHook = document.getElementById("navIcon");
  navCloseMenuHook.addEventListener("click", (event)=>{
    navHook.classList.toggle("non-visible");
  });
  navMenuHook.addEventListener("click", (event)=>{
    navHook.classList.toggle("non-visible");
  });
});
