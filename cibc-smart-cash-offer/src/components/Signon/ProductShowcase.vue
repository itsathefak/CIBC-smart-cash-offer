<template>
    <div class="products-showcase">
      <h3>Explore Our Products</h3>
      <div class="product-cards">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name">
          <h4>{{ product.name }}</h4>
          <p>{{ product.description }}</p>
          <a href="#" @click.prevent="learnMore(product.id)" class="btn-learn-more">Learn More</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const products = ref([
    {
      id: 1,
      name: 'CIBC Dividend® Visa Infinite* Card',
      description: 'Earn cash back on all your purchases',
      image: '/images/credit-card-1.png'
    },
    {
      id: 2,
      name: 'CIBC Smart™ Account',
      description: 'Bank smart with unlimited transactions',
      image: '/images/bank-account.png'
    },
    {
      id: 3,
      name: 'CIBC eAdvantage® Savings Account',
      description: 'High interest savings with no monthly fees',
      image: '/images/savings-account.png'
    }
  ]);
  
  const learnMore = (productId) => {
    // Handle learn more action
    console.log('Learn more about product:', productId);
  };
  </script>
  
  <style scoped>
  .products-showcase {
    margin-top: 2rem;
  }
  
  h3 {
    color: #c41f3e;
    margin-bottom: 1rem;
  }
  
  .product-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .product-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    width: calc(33.333% - 1rem);
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
  }
  
  .product-card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  h4 {
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    margin-bottom: 1rem;
  }
  
  .btn-learn-more {
    display: inline-block;
    background-color: #c41f3e;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .btn-learn-more:hover {
    background-color: #9e1832;
  }
  
  @media (max-width: 768px) {
    .product-card {
      width: 100%;
    }
  }
  </style>
  
  