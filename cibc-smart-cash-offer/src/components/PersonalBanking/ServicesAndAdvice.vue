<template>
    <section class="services-and-advice">
      <div class="container">
        <h2>Services and advice</h2>
        <div class="row">
          <div class="col-md-6 mb-4" v-for="service in services" :key="service.title">
            <div class="service-card">
              <font-awesome-icon :icon="service.icon" class="icon" />
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <a :href="service.link" class="btn btn-outline-primary">Learn more</a>
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
      icon: ['fas', 'mobile-alt'],
      title: 'Online and Mobile Banking',
      description: 'Learn how to register for Online and Mobile Banking and manage your accounts with ease.'
    },
    {
      icon: ['fas', 'check-square'],
      title: 'Mobile Check Deposit',
      description: 'Discover how to deposit your cheques using your mobile device for quick and convenient banking.'
    },
    {
      icon: ['fas', 'exchange-alt'],
      title: 'Interac e-Transfer',
      description: 'Explore what\'s new with Interac e-Transfer and how to send money securely to anyone.'
    },
    {
      icon: ['fas', 'video'],
      title: 'Virtual Advice Events',
      description: 'Access expert advice and tips on key financial topics like goal-setting, investing, retirement, and estate planning.'
    }
  ]);
  </script>
  
  <style scoped>
  .services-and-advice {
    padding: 4rem 0;
    background-color: white;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  
  .service-card {
    background-color: #f5f7fa;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-card:hover {
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
    margin-bottom: 1.5rem;
  }
  
  .btn-outline-primary {
    color: #c41e3d;
    border-color: #c41e3d;
    align-self: flex-start;
  }
  
  .btn-outline-primary:hover {
    background-color: #c41e3d;
    color: white;
  }
  </style>
  
  