<template>
  <div class="transfers-page">
    <h1>Transfers</h1>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Make a Transfer</h5>
            <form>
              <div class="mb-3">
                <label for="fromAccount" class="form-label">From Account</label>
                <select class="form-select" id="fromAccount">
                  <option>Checking Account (*1234)</option>
                  <option>Savings Account (*5678)</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="toAccount" class="form-label">To Account</label>
                <select class="form-select" id="toAccount">
                  <option>Savings Account (*5678)</option>
                  <option>Credit Card (*9012)</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="amount" class="form-label">Amount</label>
                <input type="number" class="form-control" id="amount" placeholder="Enter amount">
              </div>
              <button type="submit" class="btn btn-primary">Transfer</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Recent Transfers</h5>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                To Savings Account
                <span class="badge bg-primary rounded-pill">$500</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                To Credit Card
                <span class="badge bg-primary rounded-pill">$200</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                From Savings Account
                <span class="badge bg-primary rounded-pill">$1000</span>
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
  .transfers-page {
    padding: 20px;
  }
  </style>
  
  