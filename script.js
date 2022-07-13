window.onload = (event) => {
  animation(2000, "hi_1");
  animation(2500, "hi_2");
  animation(3200, "hi_3");
  animation(3200, "hi_4");
  animation(1500, "hi_5");
  animation(0, "top-img");
};

function animation(delay, id) {
  function haha() {
    document.getElementById(`${id}`).style.opacity = "100%";
  }
  setTimeout(haha, delay);
}

// document.getElementById(`${id}`).classList.remove("hidden")
