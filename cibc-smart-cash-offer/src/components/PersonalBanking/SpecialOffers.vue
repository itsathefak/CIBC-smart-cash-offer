<template>
    <section class="special-offers">
      <div class="container">
        <h2>Find an offer that's made just for you</h2>
        <p class="lead">Take advantage of our special offers for our chequing and savings accounts.</p>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="offer in specialOffers" :key="offer.title">
            <div class="offer-card">
              <img :src="offer.image" :alt="offer.title" class="offer-image">
              <h3>{{ offer.title }}</h3>
              <p>{{ offer.description }}</p>
              <a :href="offer.url" class="btn btn-outline-primary">Learn more</a>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a href="#" class="btn btn-primary btn-lg">Explore all offers</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const specialOffers = ref([
    {
      title: 'CIBC Smart™ Account',
      description: 'Get up to $600 when you open a new account.',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/personal-banking/ways-to-bank/mobile-services/insights/images/mmi-insights-callout-girl-on-phone.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg',
      url: '#'
    },
    {
      title: 'CIBC eAdvantage® Savings Account',
      description: 'Earn 5.00% interest on your savings.',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/personal-banking/bank-accounts/savings-accounts/eadvantage-high-interest-savings-account/images/Woman-Smiling-with-Phone-Desktop.png/_jcr_content/renditions/cq5dam.web.2000.2000.png',
      url: '#'
    },
    {
      title: 'CIBC Dividend® Visa Infinite* Card',
      description: 'Earn up to 4% cash back on eligible purchases.',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/personal-banking/partnerships/skip/images/two-females-holding-ice-cream-horizontal-callout.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
      url: '#'
    }
  ]);
  </script>
  
  <style scoped>
  .special-offers {
    padding: 4rem 0;
    background-color: #f5f7fa;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #c41e3d;
  }
  
  .lead {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .offer-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .offer-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .offer-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  .btn-outline-primary {
    color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-outline-primary:hover {
    background-color: #c41e3d;
    color: white;
  }
  
  .btn-primary {
    background-color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-primary:hover {
    background-color: #8b1c41;
    border-color: #8b1c41;
  }
  </style>
  
  