<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection @open-application-modal="openApplicationModal" />
      <div class="container">
        <div class="row my-5">
          <div class="col-lg-8">
            <CardBenefits />
          </div>
          <div class="col-lg-4">
            <CashbackCalculator />
          </div>
        </div>
        <HowItWorks />
        <CardComparison class="my-5" />
        <FAQSection />
        <div class="text-center my-5">
          <h2 class="mb-4">Ready to Apply?</h2>
          <button @click="openApplicationModal" class="btn btn-apply-now btn-lg">Apply Now</button>
        </div>
      </div>
    </main>
    <AppFooter />
    <ApplicationModal ref="applicationModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppHeader from './components/Home/AppHeader.vue';
import HeroSection from './components/Home/HeroSection.vue';
import CardBenefits from './components/Home/CardBenefits.vue';
import CashbackCalculator from './components/Home/CashbackCalculator.vue';
import HowItWorks from './components/Home/HowItWorks.vue';
import CardComparison from './components/Home/CardComparison.vue';
import FAQSection from './components/Home/FAQSection.vue';
import AppFooter from './components/Home/AppFooter.vue';
import ApplicationModal from './components/Home/ApplicationModal.vue';

const applicationModal = ref(null);

const openApplicationModal = () => {
  if (applicationModal.value) {
    applicationModal.value.show();
  }
};
</script>
  
  <style scoped>
  .btn-theme {
    background-color: #c41f3e;
    border-color: #c41f3e;
    color: white;
    transition: all 0.3s ease;
  }
  
  .btn-theme:hover {
    background-color: linear-gradient(135deg, #c41e3d, #8b1c41);
    border-color: linear-gradient(135deg, #c41e3d, #8b1c41);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .btn-apply-now {
    background-color: white;
    color: #c41f3e;
    border: 2px solid #c41f3e;
    transition: all 0.3s ease;
  }
  
  .btn-apply-now:hover {
    background-color: #c41f3e;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  
  