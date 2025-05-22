<template>
  <div class="bill-payments-page">
    <h1>Bill Payments</h1>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Pay a Bill</h5>
            <form>
              <div class="mb-3">
                <label for="payee" class="form-label">Payee</label>
                <select class="form-select" id="payee">
                  <option>Hydro Company</option>
                  <option>Internet Provider</option>
                  <option>Credit Card Company</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="amount" class="form-label">Amount</label>
                <input type="number" class="form-control" id="amount" placeholder="Enter amount">
              </div>
              <div class="mb-3">
                <label for="paymentDate" class="form-label">Payment Date</label>
                <input type="date" class="form-control" id="paymentDate">
              </div>
              <button type="submit" class="btn btn-primary">Pay Bill</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Upcoming Bill Payments</h5>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Hydro Company
                <span class="badge bg-primary rounded-pill">$85.50</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Internet Provider
                <span class="badge bg-primary rounded-pill">$79.99</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Credit Card Company
                <span class="badge bg-primary rounded-pill">$500.00</span>
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
  .bill-payments-page {
    padding: 20px;
  }
  </style>
  
  