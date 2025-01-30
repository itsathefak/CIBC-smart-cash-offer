<template>
    <section class="investment-options">
      <div class="container">
        <h2 class="text-center mb-5">Diverse Investment Options</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(option, index) in investmentOptions" :key="index">
            <div class="option-card">
              <font-awesome-icon :icon="option.icon" class="icon" />
              <h3>{{ option.title }}</h3>
              <p>{{ option.description }}</p>
              <a href="#" class="btn btn-outline-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faChartLine, faExchangeAlt, faCoins, faFileAlt, faBuilding, faLock } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faChartLine, faExchangeAlt, faCoins, faFileAlt, faBuilding, faLock);
  
  const investmentOptions = ref([
    {
      icon: ['fas', 'chart-line'],
      title: 'Stocks',
      description: 'Invest in individual companies and potentially benefit from their growth.'
    },
    {
      icon: ['fas', 'exchange-alt'],
      title: 'ETFs',
      description: 'Diversify your portfolio with exchange-traded funds tracking various indices.'
    },
    {
      icon: ['fas', 'coins'],
      title: 'Mutual Funds',
      description: 'Access professionally managed portfolios of stocks, bonds, and other securities.'
    },
    {
      icon: ['fas', 'file-alt'],
      title: 'Options',
      description: 'Engage in more advanced trading strategies with stock options.'
    },
    {
      icon: ['fas', 'building'],
      title: 'Fixed Income',
      description: 'Invest in bonds and other debt securities for steady income streams.'
    },
    {
      icon: ['fas', 'lock'],
      title: 'GICs',
      description: 'Secure your investment with Guaranteed Investment Certificates.'
    }
  ]);
  </script>
  
  <style scoped>
    h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  .investment-options {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  .option-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .option-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 3rem;
    color: #c41e3d;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #333;
    margin-bottom: 1rem;
  }
  
  p {
    flex-grow: 1;
    margin-bottom: 1rem;
  }
  
  .btn-link {
    color: #c41e3d;
    text-decoration: none;
  }
  
  .btn-link:hover {
    text-decoration: underline;
  }
  
  .btn-outline-primary {
    color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-outline-primary:hover {
    background-color: #c41e3d;
    color: white;
  }
  </style>
  
  