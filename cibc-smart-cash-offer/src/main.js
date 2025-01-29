import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
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
} from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons"

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
)

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)
app.mount("#app")

