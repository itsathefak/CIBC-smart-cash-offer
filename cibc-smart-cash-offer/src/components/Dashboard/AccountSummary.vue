<template>
    <div class="account-summary mb-4">
      <h2 class="section-title mb-3">Account Summary</h2>
      <div class="row">
        <div class="col-md-4 mb-3" v-for="(account, index) in accounts" :key="index">
          <div class="card h-100 account-card">
            <div class="card-body">
              <h5 class="card-title">{{ account.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ account.number }}</h6>
              <p class="card-text balance" :class="{ 'text-danger': account.balance < 0 }">
                {{ formatCurrency(account.balance) }}
              </p>
              <div class="d-flex justify-content-between mt-3">
                <button @click="viewDetails(account)" class="btn btn-outline-primary btn-sm">View Details</button>
                <button @click="transfer(account)" class="btn btn-primary btn-sm">Transfer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const accounts = ref([
    {
      name: 'Smart Checking Account',
      number: '**** 1234',
      balance: 5280.50
    },
    {
      name: 'High Interest Savings',
      number: '**** 5678',
      balance: 12750.75
    },
    {
      name: 'CIBC Dividend Visa',
      number: '**** 9012',
      balance: -1520.30
    }
  ]);
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);
  };
  
  const viewDetails = (account) => {
    console.log('View details for', account.name);
    // Implement view details functionality
  };
  
  const transfer = (account) => {
    console.log('Transfer for', account.name);
    // Implement transfer functionality
  };
  </script>
  
  <style scoped>
  .account-summary {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    color: #c41f3e;
    font-weight: bold;
  }
  
  .account-card {
    transition: transform 0.2s ease-in-out;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .account-card:hover {
    transform: translateY(-5px);
  }
  
  .balance {
    font-size: 1.5rem;
    font-weight: bold;
    color: #28a745;
  }
  
  .btn-primary {
    background-color: #c41f3e;
    border-color: #c41f3e;
  }
  
  .btn-primary:hover {
    background-color: #9e1832;
    border-color: #9e1832;
  }
  
  .btn-outline-primary {
    color: #c41f3e;
    border-color: #c41f3e;
  }
  
  .btn-outline-primary:hover {
    background-color: #c41f3e;
    color: #ffffff;
  }
  </style>
  
  