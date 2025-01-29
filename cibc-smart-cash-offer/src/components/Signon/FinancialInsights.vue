<template>
    <div class="financial-insights">
      <h3>Financial Insights</h3>
      <div class="insights-container">
        <div v-for="insight in insights" :key="insight.id" class="insight-card">
          <div class="image-container">
            <img :src="insight.image" :alt="insight.title">
            <div class="icon-overlay">
              <font-awesome-icon :icon="insight.icon" />
            </div>
          </div>
          <h4>{{ insight.title }}</h4>
          <p>{{ insight.description }}</p>
          <a href="#" @click.prevent="learnMore(insight.id)" class="btn-learn-more">Learn More</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  const insights = ref([
    {
      id: 1,
      icon: ['fas', 'chart-line'],
      title: 'Investment Strategies',
      description: 'Discover personalized investment strategies to help grow your wealth.',
      image: 'https://us.cibc.com/content/dam/global-assets/icons/illustrative/grey-circle/charts-graphs/market-performance-256x256.svg'
    },
    {
      id: 2,
      icon: ['fas', 'home'],
      title: 'Mortgage Solutions',
      description: 'Explore our range of mortgage options to find the perfect fit for your home.',
      image: 'https://us.cibc.com/content/dam/global-assets/icons/illustrative/grey-circle/mortgage/mortgage-equity-256x256.svg'
    },
    {
      id: 3,
      icon: ['fas', 'piggy-bank'],
      title: 'Savings Tips',
      description: 'Learn effective ways to save money and reach your financial goals faster.',
      image: 'https://us.cibc.com/content/dam/global-assets/icons/illustrative/grey-circle/currency/money-jar-bill-256x256.svg'
    }
  ]);
  
  const learnMore = (insightId) => {
    // Handle learn more action
    console.log('Learn more about insight:', insightId);
  };
  </script>
  
  <style scoped>
  .financial-insights {
    background-color: #ffffff;
    padding: 4rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #c41f3e;
    margin-bottom: 2.5rem;
    font-size: 2.5rem;
    text-align: center;
  }
  
  .insights-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  
  .insight-card {
    background-color: #f5f7fa;
    border-radius: 15px;
    padding: 2rem;
    flex: 1 1 calc(33.333% - 2rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease;
    max-width: 350px;
  }
  
  .insight-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .image-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .insight-card:hover .image-container img {
    transform: scale(1.1);
  }

  h4 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: #666;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  
  .btn-learn-more {
    background-color: #c41f3e;
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: bold;
  }
  
  .btn-learn-more:hover {
    background-color: #9e1832;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(196, 31, 62, 0.3);
  }
  
  @media (max-width: 1024px) {
    .insight-card {
      flex: 1 1 calc(50% - 2rem);
    }
  }
  
  @media (max-width: 768px) {
    .insight-card {
      flex: 1 1 100%;
    }
  }
  </style>
  
  