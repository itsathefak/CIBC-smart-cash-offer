<template>
    <div class="business-banking-page">
      <AppHeader />
      <HeroSection />
      <WelcomeSection />
      <BusinessAccountsSection />
      <BusinessCreditCardsSection />
      <BusinessLoanCalculator />
      <BusinessServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import AppHeader from '../Home/AppHeader.vue';
  import HeroSection from './HeroSection.vue';
  import WelcomeSection from './WelcomeSection.vue';
  import BusinessAccountsSection from './BusinessAccountsSection.vue';
  import BusinessCreditCardsSection from './BusinessCreditCardsSection.vue';
  import BusinessServicesSection from './BusinessServicesSection.vue';
  import BusinessLoanCalculator from './BusinessLoanCalculator.vue';
  import TestimonialsSection from './TestimonialsSection.vue';
  import ContactSection from './ContactSection.vue';
  import AppFooter from '../Home/AppFooter.vue';
  </script>
  
  <style scoped>
  .business-banking-page {
    background-color: #f5f7fa;
  }
  </style>
  
  