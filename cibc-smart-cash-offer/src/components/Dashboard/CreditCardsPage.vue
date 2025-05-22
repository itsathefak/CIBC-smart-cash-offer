<template>
  <div class="credit-cards-page">
    <h1>Credit Cards</h1>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">CIBC Dividend Visa Infinite Card</h5>
            <p class="card-text">Card ending in 9012</p>
            <p class="card-text">Available Credit: $5,000</p>
            <p class="card-text">Current Balance: $1,520.30</p>
            <p class="card-text">Payment Due Date: May 15, 2023</p>
            <button class="btn btn-primary">Make a Payment</button>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Recent Transactions</h5>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Grocery Store
                <span class="badge bg-primary rounded-pill">$85.50</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Gas Station
                <span class="badge bg-primary rounded-pill">$50.00</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Restaurant
                <span class="badge bg-primary rounded-pill">$75.25</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  // Add any necessary imports and logic here
  </script>
  
  <style scoped>
  .credit-cards-page {
    padding: 20px;
  }
  </style>
  
  