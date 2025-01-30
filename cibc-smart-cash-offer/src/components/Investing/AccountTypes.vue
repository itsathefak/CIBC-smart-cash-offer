<template>
    <section class="account-types">
      <div class="container">
        <h2 class="txt-color text-center mb-5">Explore Our Account Types</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(account, index) in accountTypes" :key="index">
            <div class="account-card">
              <img :src="account.image" :alt="account.title" class="account-image">
              <h3>{{ account.title }}</h3>
              <p>{{ account.description }}</p>
              <a href="#" class="btn btn-outline-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const accountTypes = ref([
    {
      title: 'Individual Account',
      description: 'Perfect for personal investing and managing your own portfolio.',
      image: 'https://www.investorsedge.cibc.com/content/dam/ie-public-assets/images/woman-sitting-on-ground-smiling-holding-tablet-horizontal-callout.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg'
    },
    {
      title: 'Joint Account',
      description: 'Ideal for couples or partners who want to invest together.',
      image: 'https://www.investorsedge.cibc.com/content/dam/ie-public-assets/special-offers/fhsa/images/couple-looking-at-laptop-banner-mobile.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg'
    },
    {
      title: 'Registered Account',
      description: 'Including RRSP, TFSA, and RESP for tax-efficient investing.',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/commercial/business-solutions/managing-employees/images/cb-managing-employees-banner-mobile.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg'
    }
  ]);
  </script>
  
  <style scoped>
  .account-types {
    padding: 80px 0;
    background-color: #ffffff;
  }
  
  .account-card {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .account-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .account-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #c41e3d;
    margin-bottom: 1rem;
  }
  
  p {
    flex-grow: 1;
    margin-bottom: 1rem;
  }
  
  .btn-outline-primary {
    color: #c41e3d;
    border-color: #c41e3d;
  }
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  .btn-outline-primary:hover {
    background-color: #c41e3d;
    color: white;
  }
  </style>
  
  