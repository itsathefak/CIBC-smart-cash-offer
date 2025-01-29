import { createRouter, createWebHistory } from "vue-router"
import IntroPage from "./components/Main/IntroPage.vue"
import HomePage from "./HomePage.vue"
import AboutPage from "./components/About/AboutPage.vue"
import SignOnPage from "./components/Signon/SignOnPage.vue"
import PersonalBankingPage from "./components/PersonalBanking/PersonalBankingPage.vue"

const routes = [
  {
    path: "/",
    name: "Intro",
    component: IntroPage,
  },
  {
    path: "/personal-banking",
    name: "PersonalBanking",
    component: PersonalBankingPage,
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
  {
    path: "/sign-on",
    name: "SignOn",
    component: SignOnPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

