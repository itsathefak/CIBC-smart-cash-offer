<template>
    <div class="quick-actions mb-4">
      <h2 class="section-title mb-3">Quick Actions</h2>
      <div class="row g-3">
        <div class="col-6 col-lg-12" v-for="(action, index) in quickActions" :key="index">
          <div class="action-card">
            <font-awesome-icon :icon="action.icon" class="action-icon" />
            <h5>{{ action.title }}</h5>
            <button class="btn btn-primary btn-sm mt-2">{{ action.buttonText }}</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faExchangeAlt, faFileInvoiceDollar, faMobileAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faExchangeAlt, faFileInvoiceDollar, faMobileAlt, faUniversity);
  
  const quickActions = ref([
    {
      title: 'e-Transfer',
      icon: ['fas', 'exchange-alt'],
      buttonText: 'Send Money'
    },
    {
      title: 'Bill Payment',
      icon: ['fas', 'file-invoice-dollar'],
      buttonText: 'Pay Bills'
    },
    {
      title: 'Mobile Deposit',
      icon: ['fas', 'mobile-alt'],
      buttonText: 'Deposit'
    },
    {
      title: 'Branch Locator',
      icon: ['fas', 'university'],
      buttonText: 'Find'
    }
  ]);
  </script>
  
  <style scoped>
  .quick-actions {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    color: #c41f3e;
    font-weight: bold;
  }
  
  .action-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
  }
  
  .action-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .action-icon {
    font-size: 2rem;
    color: #c41f3e;
    margin-bottom: 0.5rem;
  }
  
  .btn-primary {
    background-color: #c41f3e;
    border-color: #c41f3e;
  }
  
  .btn-primary:hover {
    background-color: #9e1832;
    border-color: #9e1832;
  }
  
  @media (min-width: 992px) {
    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 1rem;
    }
  }
  </style>
  
  