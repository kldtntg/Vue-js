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
