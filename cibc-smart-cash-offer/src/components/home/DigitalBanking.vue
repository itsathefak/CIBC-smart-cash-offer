<template>
    <section class="digital-banking animate-on-scroll">
      <h2 class="section-title">Digital Banking Solutions</h2>
      <div class="digital-banking-content">
        <div class="feature-grid">
          <div class="feature" v-for="feature in features" :key="feature.title">
            <div class="feature-icon">
              <font-awesome-icon :icon="feature.icon" />
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faMobileAlt, faLock, faChartLine, faCreditCard } from '@fortawesome/free-solid-svg-icons';
  
  const features = ref([
    {
      icon: faMobileAlt,
      title: 'Mobile Banking',
      description: 'Access your accounts, make transfers, and pay bills from anywhere, anytime.'
    },
    {
      icon: faLock,
      title: 'Secure Online Banking',
      description: 'Bank with confidence knowing your information is protected by state-of-the-art security measures.'
    },
    {
      icon: faChartLine,
      title: 'Financial Insights',
      description: 'Get personalized insights and recommendations to help you manage your money better.'
    },
    {
      icon: faCreditCard,
      title: 'Digital Wallet',
      description: 'Make secure payments with your smartphone using our digital wallet solutions.'
    }
  ]);
  </script>
  
  <style scoped>
  .digital-banking {
    padding: 5rem 0;
    background-color: #ffffff;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    
  color: var(--theme-color);
  }
  
  .digital-banking-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .feature {
    text-align: center;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  
  .feature:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .feature-icon {
    font-size: 3rem;
    color: var(--theme-color);
    margin-bottom: 1rem;
  }
  
  .feature h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--theme-color);
  }
  
  .feature p {
    font-size: 1rem;
    color: #666;
  }
  
  @media screen and (max-width: 768px) {
    .feature-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
  
  