<template>
  <div class="container">
    <div class="MB-Pro">
      <div class="MB-Pro-small">MacBook Pro 14" 2021</div>
    </div>

    <div class="Image">
      <!-- Slideshow container -->
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 5</div>
          <img
            src="https://giaicanh.com/wp-content/uploads/macbook-pro-2022-gia-bao-nhieu.jpg"
            alt="Macbook Pro 14' 2021 model"
            style="width: 100%"
          />
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 5</div>
          <img
            src="https://macone.vn/wp-content/uploads/2021/10/Flat-2021-MacBook-Pro-Mockup-Feature-1.jpeg"
            style="width: 100%"
            alt="Macbook Pro 14' 2021 model"
          />
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 5</div>
          <img
            src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/csm_FBlmFlnX0AIbDre_b05127ba75.jpg"
            alt="Macbook Pro 14' 2021 model"
          />
        </div>

        <div class="mySlides fade">
          <div class="numbertext">4 / 5</div>
          <img
            src="./..\assets\Screenshot (70).png"
            alt="Macbook Pro 14' 2021 specs"
          />
        </div>

        <div class="mySlides fade">
          <div class="numbertext">5 / 5</div>
          <img
            src="./..\assets\Screenshot (71).png"
            alt="Macbook Pro 14' 2021 spec"
          />
        </div>

        <!-- Next and previous buttons -->
        <span class="prev" @click="plusSlides(-1)">&#10094;</span>
        <span class="next" @click="plusSlides(1)">&#10095;</span>
      </div>
      <br />

      <!-- The dots/circles -->
      <div style="text-align: center">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
        <span class="dot" @click="currentSlide(4)"></span>
        <span class="dot" @click="currentSlide(5)"></span>
      </div>
    </div>

    <div class="last">
      <button @click="purchase" class="button">Purchase</button>
    </div>
  </div>
</template>

<script>
import { store } from "./store.js";
export default {
  name: "ProductDetailViews",

  mounted() {
    this.showSlides(store.slideIndex), this.moveSlides(), this.noscroll();
  },

  methods: {
    noscroll() {
      window.addEventListener(
        "keydown",
        function (e) {
          if (["ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
          }
        },
        false
      );
    },
    moveSlides() {
      document.addEventListener("keyup", (event) => {
        const name = event.key;
        if (name === "ArrowRight") {
          this.plusSlides(1);
        }
        if (name === "ArrowLeft") {
          this.plusSlides(-1);
        }
      });
    },
    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        store.slideIndex = 1;
      }
      if (n < 1) {
        store.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[store.slideIndex - 1].style.display = "block";
      dots[store.slideIndex - 1].className += " active";
    },
    plusSlides(n) {
      (store.slideIndex += n), this.showSlides(store.slideIndex);
    },
    currentSlide(n) {
      (store.slideIndex = n), this.showSlides(store.slideIndex);
    },
    purchase() {
      window.location.href = "https://www.apple.com/ca/";
    },
  },
};
</script>

<style>
body {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0cm;
  margin: 0cm;
  /* background-color: rgba(95, 59, 59, 0.382); */
  background-color: rgba(189, 215, 238, 0.354);
}

.container {
  padding-top: 20%;
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  row-gap: 5%;
  grid-template-columns: 200vh 1fr 1fr;
  text-align: center;
}

.MB-Pro {
  position: absolute;
  background-color: transparent;
  width: 100%;
  margin-left: 40%;
}

.MB-Pro-small {
  position: absolute;
  margin-top: 5%;
  font-size: xx-large;
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
}

.Image {
  background-color: rgba(201, 201, 201, 0.512);
  padding: 0%;
  width: 350%;
}

.last {
  /* background-color: rgba(116, 113, 109, 0.353); */
  background-color: transparent;
  margin-bottom: 30%;
}

* {
  box-sizing: border-box;
}

/* Slideshow container */
.slideshow-container {
  margin-top: 5%;
  display: block;
  max-width: 100%;
  position: relative;
}

.button {
  position: absolute;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 1.5%;
  margin-left: -3.5%;
  font-family: "Courier New", Courier, monospace;
  background-color: transparent;
  box-shadow: 0.05px 0.05px 0.1px rgba(128, 128, 128, 0.347);
  transition: 1s;
}

.button:hover {
  box-shadow: 0.05px 0.05px 1px 10px rgba(128, 128, 128, 0.347);
}
/* Hide the images by default */
.mySlides {
  display: none;
  object-fit: cover;
  height: 60vh;
  max-width: 100%;
  overflow: scroll;
  transform: scale(0.8);
}
img {
  max-width: 100%;
}
/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  margin-right: 10%;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.prev {
  margin-left: -40%;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: -120%;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(111, 111, 111);
  border-radius: 10px;
}

@keyframes appear {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
.MB-Pro {
  animation: 1.5s ease-out 1 appear;
}
</style>
