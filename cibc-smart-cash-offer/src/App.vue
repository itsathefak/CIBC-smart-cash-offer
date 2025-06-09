<template>
  <div id="app">
    <div v-if="showBanner" class="warning-banner">
      ⚠️ Warning! This is not an actual CIBC site. This is a demo clone for
      project purposes.
      <button class="close-btn" @click="showBanner = false">×</button>
    </div>
    <PageTransition>
      <router-view></router-view>
    </PageTransition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PageTransition from "@/components/PageTransition.vue";

const showBanner = ref(true);

onMounted(() => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "db52d0b0-bc37-4e9e-be5e-c405d9e7fdfb";

  const script = document.createElement("script");
  script.src = "https://client.crisp.chat/l.js";
  script.async = true;
  document.head.appendChild(script);
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

:root {
  --theme-color: #c41f3e;
  --theme-color-dark: #9e1832;
  --theme-color-light: #e63e5c;
}

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}

.btn-outline-primary:hover {
  border-color: transparent !important;
}

.intro-fade-enter-active,
.intro-fade-leave-active {
  transition: opacity 0.5s ease;
}

.intro-fade-enter-from,
.intro-fade-leave-to {
  opacity: 0;
}

/* Flash banner styles */
.warning-banner {
  background-color: #ffc107;
  color: #000;
  padding: 10px 40px 10px 15px;
  position: relative;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  border-bottom: 1px solid #d39e00;
  z-index: 9999;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 5px;
  background: none;
  border: none;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
  color: #000;
}
</style>
