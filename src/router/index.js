import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import ProductListView from "@/views/ProductListView.vue";
import VueMeta from "vue-meta";

Vue.use(VueRouter);
Vue.use(VueMeta);

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
