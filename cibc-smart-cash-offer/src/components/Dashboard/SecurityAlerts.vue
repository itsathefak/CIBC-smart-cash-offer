<template>
    <div class="security-alert" v-if="showAlert">
      <div class="container-fluid">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Security Alert:</strong> {{ alertMessage }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="dismissAlert"></button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showAlert = ref(true);
  const alertMessage = ref('We have noticed some unusual activity on your account. Please review your recent transactions and contact us if you see anything suspicious.');
  
  const dismissAlert = () => {
    showAlert.value = false;
  };
  </script>
  
  <style scoped>
  .security-alert {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  
  .alert {
    margin-bottom: 0;
    border-radius: 0;
  }
  </style>
  
  