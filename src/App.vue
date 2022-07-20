<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'products' }"> Product List</router-link>
      <router-link :to="{ name: 'product-detail' }">
        Product Details</router-link
      >
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo() {
    return {
      title: "Apple Product Reseller Page",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Reselling Apple products. Connects users to official Apple website for further research.",
        },
        {
          property: "og:title",
          content: "Apple Product Reseller Page",
        },
        { property: "og:site_name", content: "Apple Products" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
};
</script>

<style>
#app {
  position: relative;
}

nav {
  position: absolute;
  padding-top: 1%;
  padding-left: 40.5%;
  padding-right: 0%;
  z-index: 1;
  margin-left: 2%;
}

nav a {
  font-weight: bold;
  color: #14141564;
  padding: 0%;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
