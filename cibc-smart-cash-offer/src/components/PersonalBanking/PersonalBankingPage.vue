<template>
    <div class="personal-banking-page">
      <AppHeader />
      <HeroSection />
      <QuickLinks />
      <SpecialOffers />
      <WaysToPay />
      <WhyBankWithCIBC />
      <AccessibilitySection />
      <LookingForSection />
      <InvestingSection />
      <FraudProtection />
      <ServicesAndAdvice />
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import AppHeader from '../Home/AppHeader.vue';
  import HeroSection from './HeroSection.vue';
  import QuickLinks from './QuickLinks.vue';
  import SpecialOffers from './SpecialOffers.vue';
  import WaysToPay from './WaysToPay.vue';
  import WhyBankWithCIBC from './WhyBankWithCIBC.vue';
  import AccessibilitySection from './AccessibilitySection.vue';
  import LookingForSection from './LookingForSection.vue';
  import FraudProtection from './FraudProtection.vue';
  import InvestingSection from './InvestingSection.vue';
  import ServicesAndAdvice from './ServicesAndAdvice.vue';
  import AppFooter from '../Home/AppFooter.vue';
  </script>
  
  <style scoped>
  .personal-banking-page {
    background-color: #f5f7fa;
  }
  </style>
  
  