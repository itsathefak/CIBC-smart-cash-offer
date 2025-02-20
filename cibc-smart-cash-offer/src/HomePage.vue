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
        <FinancialInsights />
        <DigitalBanking />
        <CustomerTestimonials />
        <FAQSection />
        <div class="text-center my-5">
          <h2 class="mb-4">Ready to Apply?</h2>
          <button @click="openApplicationModal" class="btn btn-apply-now btn-lg">Apply Now</button>
        </div>
      </div>
      <QuestionSearch />

    </main>
    <AppFooter />
    <ApplicationModal ref="applicationModal" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AppHeader from '@/components/Home/AppHeader.vue';
import HeroSection from '@/components/Home/HeroSection.vue';
import CardBenefits from '@/components/Home/CardBenefits.vue';
import CashbackCalculator from '@/components/Home/CashbackCalculator.vue';
import HowItWorks from '@/components/Home/HowItWorks.vue';
import CardComparison from '@/components/Home/CardComparison.vue';
import FAQSection from '@/components/Home/FAQSection.vue';
import AppFooter from '@/components/Home/AppFooter.vue';
import ApplicationModal from '@/components/Home/ApplicationModal.vue';
import FinancialInsights from '@/components/Home/FinancialInsights.vue';
import DigitalBanking from '@/components/Home/DigitalBanking.vue';
import CustomerTestimonials from '@/components/Home/CustomerTestimonial.vue';
import QuestionSearch from '@/components/Signon/QuestionSearch.vue'


const applicationModal = ref(null);

const openApplicationModal = () => {
  if (applicationModal.value) {
    applicationModal.value.show();
  }
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
</script>

<style scoped>
@import 'animate.css';

.btn-apply-now {
  background-color: white;
  color: var(--theme-color);
  border: 2px solid var(--theme-color);
  transition: all 0.3s ease;
}

.btn-apply-now:hover {
  background-color: var(--theme-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.animate-on-scroll {
  opacity: 0;
}

.animate__animated {
  opacity: 1;
}
</style>

