<template>
    <section class="welcome-section">
      <div class="container">
        <h2 v-scroll-reveal>Welcome to CIBC Business Banking</h2>
        <p class="lead text-center mb-5" v-scroll-reveal="{ delay: 200 }">How can we help you today?</p>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(service, index) in services" :key="service.title" v-scroll-reveal="{ delay: 200 * index }">
            <div class="service-card">
              <font-awesome-icon :icon="service.icon" class="icon" />
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <a :href="service.link" class="btn btn-outline-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  const services = ref([
    {
      icon: ['fas', 'university'],
      title: 'Business Accounts',
      description: 'Choose from a range of accounts tailored to your business needs.',
      link: '#'
    },
    {
      icon: ['fas', 'credit-card'],
      title: 'Business Credit Cards',
      description: 'Power up your business with the right card and extra savings.',
      link: '#'
    },
    {
      icon: ['fas', 'chart-line'],
      title: 'Cash Management',
      description: 'Optimize your cash flow with our advanced tools and services.',
      link: '#'
    },
    {
      icon: ['fas', 'store'],
      title: 'Merchant Services',
      description: 'Accept payments easily and securely with our merchant solutions.',
      link: '#'
    },
    {
      icon: ['fas', 'piggy-bank'],
      title: 'Business GICs',
      description: 'Invest your business funds with guaranteed returns.',
      link: '#'
    },
    {
      icon: ['fas', 'rocket'],
      title: 'Starting Your Business',
      description: 'Get the support you need to launch and grow your business.',
      link: '#'
    }
  ]);
  </script>
  
  <style scoped>
  .welcome-section {
    padding: 80px 0;
    background-color: white;
  }
  
  h2 {
    text-align: center;
    color: #c41e3d;
    margin-bottom: 2rem;
  }
  
  .service-card {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-10px);
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
  
  .btn-outline-primary {
    color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-outline-primary:hover {
    background-color: #c41e3d;
    color: white;
  }
  </style>
  
  