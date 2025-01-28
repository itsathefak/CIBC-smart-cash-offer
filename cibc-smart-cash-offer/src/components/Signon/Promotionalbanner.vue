<template>
    <div class="promotional-banner">
      <div class="container">
        <div class="banner-content">
          <h3>{{ currentPromotion.title }}</h3>
          <p>{{ currentPromotion.description }}</p>
          <a :href="currentPromotion.link" @click.prevent="learnMore" class="btn-learn-more">Learn More</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const currentPromotion = ref({
    title: 'Limited Time Offer: Get a $300 Cash Bonus!',
    description: 'Open a new CIBC Smart Account and set up a recurring direct deposit.',
    link: '#'
  });
  
  const learnMore = () => {
    // Handle learn more action
    console.log('Learn more about promotion');
  };
  </script>
  
  <style scoped>
  .promotional-banner {
    background-color: #c41f3e;
    color: #ffffff;
    padding: 3rem 0;
    margin-top: 3rem;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .banner-content {
    text-align: center;
  }
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  .btn-learn-more {
    display: inline-block;
    background-color: #ffffff;
    color: #c41f3e;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
  }
  
  .btn-learn-more:hover {
    background-color: #f0f0f0;
    color: #9e1832;
    transform: translateY(-2px);
  }
  </style>
  
  