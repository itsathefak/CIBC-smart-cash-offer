import { createRouter, createWebHistory } from "vue-router"
import IntroPage from "./components/Main/IntroPage.vue"
import HomePage from "./HomePage.vue"
import AboutPage from "./components/About/AboutPage.vue"

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
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

