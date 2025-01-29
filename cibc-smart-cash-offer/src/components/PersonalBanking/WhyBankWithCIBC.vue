<template>
    <section class="why-bank-with-cibc">
      <div class="container">
        <h2>Why bank with CIBC?</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="reason in reasons" :key="reason.title">
            <div class="reason-card">
              <font-awesome-icon :icon="reason.icon" class="icon" />
              <h3>{{ reason.title }}</h3>
              <p>{{ reason.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  const reasons = ref([
    {
      icon: ['fas', 'map-marker-alt'],
      title: 'Extensive Network',
      description: 'With one of Canada\'s largest banking centre networks, we\'re easy to find.'
    },
    {
      icon: ['fas', 'comments'],
      title: 'Expert Advice',
      description: 'Meet with us for advice on selecting the right account, building savings, managing debt, or investing in your future.'
    },
    {
      icon: ['fas', 'mobile-alt'],
      title: 'Mobile Banking',
      description: 'Our mobile banking app has earned top scores for its convenience and ease of use.'
    },
    {
      icon: ['fas', 'globe-americas'],
      title: 'Global Money Transfer',
      description: 'Send money to over 120 countries using CIBC Global Money Transfer™ and pay no transfer fee.'
    },
    {
      icon: ['fas', 'chart-line'],
      title: 'Free Credit Score',
      description: 'Get a free credit score instantly with our CIBC Mobile Banking® App.'
    },
    {
      icon: ['fas', 'dollar-sign'],
      title: 'Foreign Cash Delivery',
      description: 'Have foreign cash delivered for free to your home, a CIBC Banking Centre or Pearson airport.'
    }
  ]);
  </script>
  
  <style scoped>
  .why-bank-with-cibc {
    padding: 4rem 0;
    background-color: #f5f7fa;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  
  .reason-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .reason-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 3rem;
    color: #c41e3d;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1rem;
    color: #666;
  }
  </style>
  
  