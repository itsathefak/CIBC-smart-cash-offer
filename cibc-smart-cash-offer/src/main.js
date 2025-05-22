import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faChartLine,
  faHome,
  faPiggyBank,
  faLock,
  faShieldAlt,
  faUserSecret,
  faHandshake,
  faUsers,
  faLightbulb,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faComments,
  faMobileAlt,
  faGlobeAmericas,
  faDollarSign,
  faCalendarAlt,
  faPercentage,
  faCreditCard,
  faPlaneArrival,
  faUserGraduate,
  faCheckSquare,
  faExchangeAlt,
  faVideo,
  faUniversity,
  faStore,
  faRocket,
  faLaptop,
  faSearchDollar,
  faPhone,
  faChevronLeft,
  faChevronRight,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "scrollreveal";

library.add(
  faChartLine,
  faHome,
  faPiggyBank,
  faLock,
  faShieldAlt,
  faUserSecret,
  faHandshake,
  faUsers,
  faLightbulb,
  faHeart,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faMapMarkerAlt,
  faComments,
  faMobileAlt,
  faGlobeAmericas,
  faDollarSign,
  faCalendarAlt,
  faPercentage,
  faCreditCard,
  faPlaneArrival,
  faUserGraduate,
  faCheckSquare,
  faExchangeAlt,
  faVideo,
  faUniversity,
  faStore,
  faRocket,
  faLaptop,
  faSearchDollar,
  faPhone,
  faChevronLeft,
  faChevronRight,
  faChartBar
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

app.directive("scroll-reveal", {
  mounted: (el, binding) => {
    ScrollReveal().reveal(el, binding.value || {});
  },
});

app.mount("#app");
