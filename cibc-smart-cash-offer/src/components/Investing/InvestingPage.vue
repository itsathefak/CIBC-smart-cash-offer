<template>
    <div class="investing-page">
      <AppHeader />
      <HeroSection />
      <OfferSection />
      <CashBackTable />
      <ToolsAndResources />
      <AccountTypes />
      <InvestmentOptions />
      <PricingSection />
      <TradingTools />
      <InvestingActivity />
      <FAQSection />
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import AppHeader from '../Home/AppHeader.vue';
  import HeroSection from './HeroSection.vue';
  import OfferSection from './OfferSection.vue';
  import CashBackTable from './CashBackTable.vue';
  import FAQSection from './FAQSection.vue';
  import ToolsAndResources from './ToolsAndResources.vue';
  import AccountTypes from './AccountTypes.vue';
  import InvestmentOptions from './InvestmentOptions.vue';
  import PricingSection from './PricingSection.vue';
  import TradingTools from './TradingTools.vue';
  import InvestingActivity from './InvestingActivity.vue';
  import AppFooter from '../Home/AppFooter.vue';
  </script>
  
  <style scoped>
  .investing-page {
    background-color: #f5f7fa;
  }

  </style>
  
  