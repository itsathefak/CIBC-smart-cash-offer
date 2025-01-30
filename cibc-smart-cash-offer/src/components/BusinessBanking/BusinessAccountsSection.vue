<template>
    <section class="business-accounts-section">
      <div class="container">
        <h2 v-scroll-reveal>Business Accounts</h2>
        <p class="lead text-center mb-5" v-scroll-reveal="{ delay: 200 }">Choose the right account for your business needs</p>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(account, index) in accounts" :key="account.title" v-scroll-reveal="{ delay: 200 * index }">
            <div class="account-card">
              <img :src="account.image" :alt="account.title" class="account-image">
              <h3>{{ account.title }}</h3>
              <p class="account-description">{{ account.description }}</p>
              <ul class="account-features">
                <li v-for="feature in account.features" :key="feature">{{ feature }}</li>
              </ul>
              <div class="account-price">
                <span class="price">{{ account.price }}</span>
                <span class="period">/month</span>
              </div>
              <a href="#" class="btn btn-primary btn-block">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const accounts = ref([
    {
      title: 'CIBC Basic Business Operating Account®',
      description: 'A value account that lets you pay only for what you use.',
      features: [
        'Pay-per-use transactions',
        'No minimum balance required',
        'Online and mobile banking access'
      ],
      price: '$6.00',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/small-business/business_accounts/man-on-phone-smiling-sitting-in-chair-callout.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg'
    },
    {
      title: 'CIBC Everyday Business Operating Account®',
      description: 'A cost-effective account with 30 transactions included.',
      features: [
        '30 transactions included',
        'Interac e-Transfer® transactions',
        'Monthly fee waiver available'
      ],
      price: '$20.00',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/small-business/business_accounts/banking-for-healthcare-workers-callout.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg'
    },
    {
      title: 'CIBC Unlimited Business Operating Account®',
      description: 'A premium account with unlimited transactions.',
      features: [
        'Unlimited transactions',
        'Interac e-Transfer® transactions included',
        'Cash and coin deposit package'
      ],
      price: '$65.00',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/personal-banking/credit-cards/all-credit-cards/images/aventura-earn-points-video-thumbnail-callout.jpg'
    }
  ]);
  </script>
  
  <style scoped>
  .business-accounts-section {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  h2 {
    text-align: center;
    color: #c41e3d;
    margin-bottom: 2rem;
  }
  
  .account-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .account-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #c41e3d;
  }
  
  .account-description {
    margin-bottom: 1rem;
  }
  
  .account-features {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 1rem;
  }
  
  .account-features li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
  }
  
  .account-features li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #c41e3d;
  }
  
  .account-price {
    margin-top: auto;
    margin-bottom: 1rem;
  }
  
  .price {
    font-size: 2rem;
    font-weight: bold;
    color: #c41e3d;
  }
  
  .period {
    font-size: 1rem;
    color: #6c757d;
  }
  
  .btn-primary {
    background-color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-primary:hover {
    background-color: #9e1832;
    border-color: #9e1832;
  }
  
  .account-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    margin-bottom: 1rem;
  }
  </style>
  
  