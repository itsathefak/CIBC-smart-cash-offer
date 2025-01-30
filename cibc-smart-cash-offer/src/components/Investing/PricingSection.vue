<template>
    <section class="pricing-section">
      <div class="container">
        <h2 class="text-center mb-5">Our Low Pricing Helps Your Money Go Further</h2>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="pricing-card">
              <h3>Stocks and ETFs</h3>
              <p class="price">$6.95</p>
              <p>per online stock or ETF trade</p>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="pricing-card">
              <h3>Options</h3>
              <p class="price">$6.95 + $1.25</p>
              <p>per contract</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a href="#" class="btn btn-primary btn-lg">View Full Pricing Details</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
    h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  .pricing-section {
    padding: 80px 0;
    background-color: #ffffff;
  }
  
  .pricing-card {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .pricing-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #c41e3d;
    margin-bottom: 1rem;
  }
  
  .price {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .btn-primary {
    background-color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-primary:hover {
    background-color: #9e1832;
    border-color: #9e1832;
  }
  </style>
  
  