<template>
    <section class="cash-back-table">
      <div class="container">
        <h2 class="text-center mb-5">How Much Cash Can You Get Back?</h2>
        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Cash Back Reward</th>
                <th>Transfer-in Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tier, index) in cashBackTiers" :key="index">
                <td>${{ tier.reward.toLocaleString() }}</td>
                <td>{{ tier.range }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-center mt-4">Transfer in more and become a Premium Edge client</p>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const cashBackTiers = ref([
    { reward: 200, range: '$5,000 to $14,999' },
    { reward: 300, range: '$15,000 to $49,999' },
    { reward: 500, range: '$50,000 to $99,999' },
    { reward: 700, range: '$100,000 to $249,999' },
    { reward: 1000, range: '$250,000 to $499,999' },
    { reward: 1500, range: '$500,000 to $999,999' },
    { reward: 2500, range: '$1,000,000 to $1,999,999' },
    { reward: 5000, range: '$2,000,000 to $2,999,999' },
    { reward: 10000, range: '$3,000,000 and over' },
  ]);
  </script>
  
  <style scoped>
  .cash-back-table {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  .table {
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .table thead th {
    background-color: #c41e3d;
    color: white;
  }
  
  .table-hover tbody tr:hover {
    background-color: #f1f3f5;
  }
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  </style>
  
  