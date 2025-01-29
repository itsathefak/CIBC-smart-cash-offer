<template>
    <div class="sign-on-page">
      <Header ref="headerRef" />
      <main>
        <div class="banner-container">
          <img src="https://www.cibc.com/content/dam/cibc-public-assets/about-cibc/corporate-responsibility/images/woman-looking-up-forest-desktop.jpg/_jcr_content/renditions/cq5dam.web.2000.2000.jpeg" alt="CIBC Banner" class="banner-image">
          <div class="container banner-content">
            <div class="row">
              <div class="col-md-6">
                <WelcomeMessage />
              </div>
              <div class="col-md-6">
                <SignOnForm @sign-on-success="handleSignOnSuccess" />
              </div>
            </div>
          </div>
        </div>
        <div class="container main-content">
          <SpecialOffer />
          <QuickLinks />
          <FinancialInsights />
          <SecurityInfo />
          <AdditionalContent />
        </div>
      </main>
      <PromotionalBanner />
      <QuestionSearch />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Header from '../Home/AppHeader.vue';
  import SignOnForm from './SingOnForm.vue';
  import QuickLinks from './QuickLinks.vue';
  import SecurityInfo from './SecurityInfo.vue';
  import PromotionalBanner from './Promotionalbanner.vue';
  import WelcomeMessage from './WelcomeMessage.vue';
  import FinancialInsights from './FinancialInsights.vue';
  import SpecialOffer from './SpecialOffer.vue';
  import Footer from '../Home/AppFooter.vue';
  import AdditionalContent from './AdditionalContent.vue';
  import QuestionSearch from './QuestionSearch.vue';
  
  const headerRef = ref(null);
  
  const handleSignOnSuccess = () => {
    if (headerRef.value) {
      headerRef.value.updateSignInStatus(true);
    }
  };
  
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  });
  </script>
  
  <style scoped>
  .sign-on-page {
    background-color: #f5f7fa;
  }
  
  .banner-container {
    position: relative;
    height: 600px;
    overflow: hidden;
  }
  
  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: zoomIn 20s infinite alternate;
  }
  
  @keyframes zoomIn {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
  }
  
  .banner-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .main-content {
    padding: 5rem 0;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }
  
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 15px;
  }
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Add animation delays for staggered effect */
  .main-content > * > :nth-child(1) { animation-delay: 0.2s; }
  .main-content > * > :nth-child(2) { animation-delay: 0.4s; }
  .main-content > * > :nth-child(3) { animation-delay: 0.6s; }
  .main-content > * > :nth-child(4) { animation-delay: 0.8s; }
  .main-content > * > :nth-child(5) { animation-delay: 1s; }
  
  @media (max-width: 767px) {
    .banner-container {
      height: auto;
    }
    .banner-content {
      position: relative;
      padding: 4rem 0;
    }
    .col-md-6 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  </style>
  
  