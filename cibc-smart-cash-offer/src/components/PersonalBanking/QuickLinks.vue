<template>
    <section class="quick-links">
      <div class="container">
        <h2>Quick links</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="link in quickLinks" :key="link.title">
            <div class="quick-link-card">
              <font-awesome-icon :icon="link.icon" class="icon" />
              <h3>{{ link.title }}</h3>
              <p>{{ link.description }}</p>
              <a :href="link.url" class="btn btn-primary">{{ link.buttonText }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const quickLinks = ref([
    {
      icon: ['fas', 'calendar-alt'],
      title: 'Need to meet?',
      description: 'Schedule a meeting with one of our advisors.',
      buttonText: 'Meet with us',
      url: '#'
    },
    {
      icon: ['fas', 'percentage'],
      title: 'CIBC rates',
      description: 'Check our current rates for banking products and services.',
      buttonText: 'View rates',
      url: '#'
    },
    {
      icon: ['fas', 'shield-alt'],
      title: 'Fraud protection',
      description: 'Learn how to protect yourself from fraud and scams.',
      buttonText: 'Learn more',
      url: '#'
    }
  ]);
  </script>
  
  <style scoped>
  .quick-links {
    padding: 4rem 0;
    background-color: white;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  
  .quick-link-card {
    background-color: #f5f7fa;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .quick-link-card:hover {
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
  
  .btn-primary {
    background-color: #c41e3d;
    border-color: #c41e3d;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #8b1c41;
    border-color: #8b1c41;
  }
  </style>
  
  