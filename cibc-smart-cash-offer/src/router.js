import { createRouter, createWebHistory } from "vue-router";
import IntroPage from "./components/Main/IntroPage.vue";
import HomePage from "./HomePage.vue";
import AboutPage from "./components/About/AboutPage.vue";
import SignOnPage from "./components/Signon/SignOnPage.vue";
import PersonalBankingPage from "./components/PersonalBanking/PersonalBankingPage.vue";
import BusinessBankingPage from "./components/BusinessBanking/BusinessBankingPage.vue";
import InvestingPage from "./components/Investing/InvestingPage.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";

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
    path: "/business-banking",
    name: "BusinessBanking",
    component: BusinessBankingPage,
  },
  {
    path: "/investing",
    name: "Investing",
    component: InvestingPage,
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
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
