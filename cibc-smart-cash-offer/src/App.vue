<template>
  <div id="app">
    <PageTransition>
      <router-view></router-view>
    </PageTransition>
  </div>
</template>

<script setup>
import PageTransition from '@/components/PageTransition.vue';
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

