<template>
  <div class="big-container">
    <div class="bigMac">
      <div class="smallMac">MAC</div>
    </div>

    <div class="container">
      <div @click="redirect" class="box odd" id="first">
        <!--Link qua page 3 ở script2.js-->

        <!-- 3 ô ngang bên trong mỗi ô dọc/ không xài grid-->

        <div class="product-name">MacBook Pro 14” 2021</div>
        <div class="product-price">$1300 USD</div>
        <div class="image-background">
          <img
            class="image"
            src="https://achaumobile.com/wp-content/uploads/2022/06/mbp-silver-select-202206.jpg"
            alt="macbook-pro-14-2021"
          />
        </div>
      </div>

      <div @click="redirect" class="box even" id="second">
        <div class="product-name">MacBook Pro 16” 2021</div>
        <div class="product-price">$1300 USD</div>
        <div class="image-background">
          <img
            class="image"
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/116/615/products/mbp16-spacegray-select-202110-jpeg.jpg"
            alt="macbook-pro-16-2021"
          />
        </div>
      </div>

      <div @click="redirect" class="box odd" id="third">
        <div class="product-name">MacBook Pro 13” 2020</div>
        <div class="product-price">$1300 USD</div>
        <div class="image-background">
          <img
            class="image"
            src="https://didongmoi.com.vn/upload/images/product/macbook-pro-m1-2020-512gb-bac.jpg"
            alt="macbook-pro-13-2020"
          />
        </div>
      </div>

      <div @click="redirect" class="box even" id="fourth">
        <div class="product-name">MacBook Pro 16” 2020</div>
        <div class="product-price">$1300 USD</div>
        <div class="image-background">
          <img
            class="image"
            src="https://mac24h.vn/images/detailed/47/sp809-mbp16touch-silver-2019_7z7l-la.jpeg?t=1629384155"
            alt="macbook-pro-16-2020"
          />
        </div>
      </div>

      <div @click="redirect" class="box odd" id="fifth">
        <div class="product-name">MacBook Air 13” 2020</div>
        <div class="product-price">$1300 USD</div>
        <div class="image-background">
          <img
            class="image"
            src="https://didongmoi.com.vn/upload/images/product/macbook-pro-m1-2020-256gb-xam.jpg"
            alt="macbook-air-13-2020"
          />
        </div>
      </div>

      <div @click="redirect" class="box even" id="sixth">
        <div class="product-name">MacBook Air 13” 2021</div>
        <div class="product-price">$1300 USD</div>
        <div class="image-background">
          <img
            class="image"
            src="https://didongmoi.com.vn/upload/images/product/macbook-air-m1-2020-256gb-vang.jpg"
            alt="macbook-air-13-2021"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductListViews",
  metaInfo: {
    title: "Product Listing Page",
  },
  data() {
    return {
      message: "ok",
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "product-detail" });
    },
  },
  mounted() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((el) =>
      el.addEventListener("click", function () {
        // this.redirect();
        console.log("click");
      })
    );
  },
};
</script>

<style>
html {
  background-color: rgba(84, 81, 81, 0.135);
}

body {
  position: relative;
}
#app {
  position: absolute;
}

.bigMac {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: transparent;
  font-size: xxx-large;
  font-family: "Open Sans", sans-serif;
  font-weight: 350;
  padding-top: 1%;
}

.smallMac {
  text-align: center;
  position: absolute;
  padding-left: 46%;
  padding-top: 2.3%;
  font-family: "Open Sans", sans-serif;
}

.container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5%;
  row-gap: 2%;
  width: 100%;
  padding: 10%;
  padding-bottom: 10%;
}

.box {
  position: relative;
  padding: 10%;
  padding-bottom: 0%;
  border-style: dotted;
  border-width: 0.01cm;
  transition: 1s;
}
.box:hover {
  background-color: rgba(162, 161, 161, 0.104);
  border-style: groove;
  border-width: 0.01cm;
}
/* .box{
    background-color: rgb(238, 217, 185); */

.image {
  transition: 1s;
  position: relative;
  object-fit: cover;
  width: 100%;
  height: auto;
  padding-top: 12%;
  padding-bottom: 12%;
  box-shadow: 2px 2px 2px rgba(154, 149, 144, 0.49);
}

.image:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: 4px 2px 2px rgba(128, 128, 128, 0.438);
  transform: scale(1.02);
}

.product-name {
  text-align: center;
  width: 100%;
  padding-bottom: 2%;
  font-family: "Open Sans", sans-serif;
  font-weight: 5;
  letter-spacing: 0.015cm;
  transition: 1s;
}

.product-name:hover {
  box-shadow: 1px 1px 10px 0.5px;
}

.product-price {
  text-align: center;
  padding-bottom: 10%;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  letter-spacing: 0.015cm;
}

.big-container {
  position: relative;
  display: grid;
  grid-template-rows: 2vh 1fr;
}

.image-background {
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 3px 5px 1.5px rgba(128, 128, 128, 0.375);
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
  background: rgba(111, 111, 111, 0.447);
  border-radius: 10px;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes appear {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}

.bigMac {
  /* This section calls the slideInFromLeft animation we defined above */
  animation: 1.2s ease-out 0s 1 slideInFromLeft;
}
.box {
  animation: 1.5s ease-out 1 appear;
}
</style>
