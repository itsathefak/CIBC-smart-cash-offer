<template>
    <div class="special-offer">
      <h2>Special offer</h2>
      <div class="offer-content">
        <div class="offer-text">
          <h3>Get 5.00%† interest</h3>
          <p>Boost your savings with a special interest rate when you open your first CIBC eAdvantage® Savings Account. Limits apply.</p>
          <a href="#" class="btn-get-started">Get started</a>
        </div>
        <div class="offer-image">
          <img src="https://www.cibc.com/content/dam/global-assets/icons/illustrative/grey-circle/currency/payment-overview-256x256.svg" alt="Savings Piggy Bank">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .special-offer {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin-bottom: 2rem;
  }
  
  h2 {
    color: #c41f3e;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .offer-content {
    display: flex;
    align-items: center;
  }
  
  .offer-text {
    flex: 1;
    padding-right: 2rem;
  }
  
  h3 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 1.5rem;
  }
  
  .btn-get-started {
    display: inline-block;
    background-color: #c41f3e;
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .btn-get-started:hover {
    background-color: #9e1832;
  }
  
  .offer-image {
    flex: 0 0 200px;
  }
  
  .offer-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    .offer-content {
      flex-direction: column;
    }
    
    .offer-text {
      padding-right: 0;
      margin-bottom: 1.5rem;
    }
    
    .offer-image {
      flex: 0 0 auto;
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
  }
  </style>
  
  