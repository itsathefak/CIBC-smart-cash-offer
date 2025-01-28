<template>
    <div class="security-info">
      <h3>Your Security is Our Priority</h3>
      <div class="security-features">
        <div v-for="feature in securityFeatures" :key="feature.id" class="feature">
          <font-awesome-icon :icon="feature.icon" />
          <div>
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  
  const securityFeatures = ref([
    {
      id: 1,
      icon: 'lock',
      title: 'Enhanced Login Security',
      description: 'Multi-factor authentication to protect your account'
    },
    {
      id: 2,
      icon: 'shield-alt',
      title: 'Digital Security Guarantee',
      description: '100% reimbursement for any unauthorized transactions'
    },
    {
      id: 3,
      icon: 'user-secret',
      title: 'Fraud Detection',
      description: 'Advanced systems to monitor and prevent fraudulent activities'
    }
  ]);
  </script>
  
  <style scoped>
  .security-info {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #c41f3e;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
  }
  
  .security-features {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .feature {
    display: flex;
    align-items: flex-start;
    background-color: #f5f7fa;
    padding: 1rem;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .feature:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .feature svg {
    font-size: 2rem;
    color: #c41f3e;
    margin-right: 1rem;
    flex-shrink: 0;
  }
  
  .feature div {
    flex-grow: 1;
  }
  
  h4 {
    color: #333;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  p {
    color: #666;
    font-size: 0.9rem;
    margin: 0;
  }
  </style>
  
  