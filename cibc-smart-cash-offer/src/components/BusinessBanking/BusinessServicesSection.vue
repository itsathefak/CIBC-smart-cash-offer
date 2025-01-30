<template>
    <section class="business-services-section">
      <div class="container">
        <h2 v-scroll-reveal>Business Services</h2>
        <p class="lead text-center mb-5" v-scroll-reveal="{ delay: 200 }">Optimize your business with our modern tools</p>
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
      icon: ['fas', 'laptop'],
      title: 'CIBC Online Banking® for Business',
      description: 'Manage your accounts, transfer funds, and pay bills conveniently online.',
      link: '#'
    },
    {
      icon: ['fas', 'chart-bar'],
      title: 'CIBC SmartBanking™ for Business',
      description: 'Access a range of payment solutions to optimize your cash flow.',
      link: '#'
    },
    {
      icon: ['fas', 'search-dollar'],
      title: 'GIC Finder',
      description: 'Discover which business GIC is right for you with our handy tool.',
      link: '#'
    }
  ]);
  </script>
  
  <style scoped>
  .business-services-section {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  h2 {
    text-align: center;
    color: #c41e3d;
    margin-bottom: 2rem;
  }
  
  .service-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
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
    color: #c41e3d;
  }
  
  p {
    flex-grow: 1;
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
  
  