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
  import Header from '@/components/Home/AppHeader.vue';
  import AboutHero from '@/components/About/AboutHero.vue';
  import OurHistory from '@/components/About/OurHistory.vue';
  import OurValues from '@/components/About/OurValues.vue';
  import Leadership from '@/components/About/Leadership.vue';
  import CommunityImpact from '@/components/About/CommunityImpact.vue';
  import InnovationHub from '@/components/About/InnovationHub.vue';
  import Footer from '@/components/Home/AppFooter.vue';
  </script>
  
  <style scoped>
  .about-page {
    overflow-x: hidden;
  }
  </style>
  