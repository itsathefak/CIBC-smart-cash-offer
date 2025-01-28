import { createRouter, createWebHistory } from "vue-router"
import IntroPage from "./components/Main/IntroPage.vue"
import HomePage from "./HomePage.vue"

const routes = [
  {
    path: "/",
    name: "Intro",
    component: IntroPage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

