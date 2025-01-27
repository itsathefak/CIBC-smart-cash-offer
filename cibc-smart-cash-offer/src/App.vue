// app.vue
<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection @open-application="openApplicationModal" />
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
          <button type="button" class="btn btn-light btn-lg me-3 apply-now-btn" data-bs-toggle="modal" data-bs-target="#applicationModal">
  Apply Now
</button>        </div>
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
import ApplicationModal from './components/Home/ApplicationModal.vue';
import AppFooter from './components/Home/AppFooter.vue';

const openApplicationModal = () => {
  const modalElement = document.getElementById('applicationModal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

:root {
  --theme-color: #c41f3e;
  --theme-color-dark: #9e1832;
  --theme-color-light: #e63e5c;
}

body {
  font-family: 'Roboto', sans-serif;
}

.btn-theme {
  background-color: var(--theme-color);
  border-color: var(--theme-color);
  color: white;
  transition: all 0.3s ease;
}

.btn-theme:hover {
  background-color: var(--theme-color-dark);
  border-color: var(--theme-color-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.animate__animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate__fadeIn {
  animation-name: fadeIn;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate__fadeInLeft {
  animation-name: fadeInLeft;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate__fadeInRight {
  animation-name: fadeInRight;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate__fadeInUp {
  animation-name: fadeInUp;
}

.animate__delay-1s {
  animation-delay: 1s;
}

.animate__delay-2s {
  animation-delay: 2s;
}
</style>

