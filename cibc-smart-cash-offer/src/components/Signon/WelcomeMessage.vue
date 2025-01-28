<template>
    <div class="welcome-message">
      <h1>Welcome to CIBC Online Banking</h1>
      <p>Manage your finances securely and conveniently, anytime and anywhere.</p>
      <ul class="feature-list">
        <li><i class="fas fa-check-circle"></i> 24/7 account access</li>
        <li><i class="fas fa-check-circle"></i> Bill payments and transfers</li>
        <li><i class="fas fa-check-circle"></i> Mobile and tablet friendly</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .welcome-message {
    color: #ffffff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    background-color: rgba(196, 31, 62, 0.8);
    padding: 2rem;
    border-radius: 8px;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  .feature-list {
    list-style-type: none;
    padding: 0;
  }
  
  .feature-list li {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  .feature-list i {
    color: #ffffff;
    margin-right: 0.5rem;
  }
  </style>
  
  