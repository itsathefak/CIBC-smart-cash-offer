<template>
  <div id="app">
    <PageTransition>
      <router-view></router-view>
    </PageTransition>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import PageTransition from '@/components/PageTransition.vue';

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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

:root {
  --theme-color: #c41f3e;
  --theme-color-dark: #9e1832;
  --theme-color-light: #e63e5c;
}

body {
  font-family: 'Roboto', sans-serif;
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
</style>
