import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import ProductListView from "@/views/ProductListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductListView,
  },
  {
    path: "/products/detail",
    name: "product-detail",
    component: ProductDetailView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
