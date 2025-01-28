<template>
    <div class="about-page">
      <Header />
      <AboutHero />
      <OurHistory />
      <OurValues />
      <Leadership />
      <CommunityImpact />
      <InnovationHub />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '../Home/AppHeader.vue';
  import AboutHero from './AboutHero.vue';
  import OurHistory from './OurHistory.vue';
  import OurValues from './OurValues.vue';
  import Leadership from './Leadership.vue';
  import CommunityImpact from './CommunityImpact.vue';
  import InnovationHub from './InnovationHub.vue';
  import Footer from '../Home/AppFooter.vue';
  </script>
  
  <style scoped>
  .about-page {
    overflow-x: hidden;
  }
  </style>
  