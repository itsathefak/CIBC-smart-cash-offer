<template>
    <div class="quick-links">
      <h3>Quick Links</h3>
      <div class="links-container">
        <a v-for="link in links" :key="link.id" :href="link.url" @click.prevent="navigateTo(link.url)" class="quick-link">
          <i :class="link.icon"></i>
          <span>{{ link.text }}</span>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const links = ref([
    { id: 1, text: 'Find a Banking Location', url: '#', icon: 'fas fa-map-marker-alt' },
    { id: 2, text: 'Contact Us', url: '#', icon: 'fas fa-phone' },
    { id: 3, text: 'Book an Appointment', url: '#', icon: 'fas fa-calendar-alt' },
    { id: 4, text: 'CIBC Mobile Banking App', url: '#', icon: 'fas fa-mobile-alt' },
    { id: 5, text: 'Digital Security Guarantee', url: '#', icon: 'fas fa-shield-alt' },
  ]);
  
  const navigateTo = (url) => {
    // Handle navigation or open in new tab
    console.log('Navigating to:', url);
  };
  </script>
  
  <style scoped>
  .quick-links {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }
  
  h3 {
    color: #c41f3e;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  
  .links-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .quick-link {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
    padding: 0.75rem 1rem;
    background-color: #f5f7fa;
    border-radius: 4px;
    transition: all 0.3s ease;
    flex: 1 1 calc(50% - 0.5rem);
  }
  
  .quick-link:hover {
    color: #c41f3e;
    background-color: #e9ecef;
    transform: translateY(-2px);
  }
  
  i {
    margin-right: 0.75rem;
    font-size: 1.2rem;
    color: #c41f3e;
  }
  
  @media (max-width: 768px) {
    .quick-link {
      flex: 1 1 100%;
    }
  }
  </style>
  
  