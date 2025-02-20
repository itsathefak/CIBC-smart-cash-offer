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
  import HeroSection from '../BusinessBanking/HeroSection.vue';
  import WelcomeSection from '../BusinessBanking/WelcomeSection.vue';
  import BusinessAccountsSection from '../BusinessBanking/BusinessAccountsSection.vue';
  import BusinessCreditCardsSection from '../BusinessBanking/BusinessCreditCardsSection.vue';
  import BusinessServicesSection from '../BusinessBanking/BusinessServicesSection.vue';
  import BusinessLoanCalculator from '../BusinessBanking/BusinessLoanCalculator.vue';
  import TestimonialsSection from '../BusinessBanking/TestimonialsSection.vue';
  import ContactSection from '../BusinessBanking/ContactSection.vue';
  import AppFooter from '../Home/AppFooter.vue';
  </script>
  
  
  <style scoped>
  .business-banking-page {
    background-color: #f5f7fa;
  }
  </style>
  
  