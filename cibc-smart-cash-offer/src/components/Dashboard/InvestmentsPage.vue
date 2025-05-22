<template>
  <div class="investments-page">
    <h1>Investments</h1>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Portfolio Summary</h5>
            <canvas ref="portfolioChart"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Investment Accounts</h5>
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                TFSA
                <span class="badge bg-primary rounded-pill">$25,000</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                RRSP
                <span class="badge bg-primary rounded-pill">$75,000</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Non-Registered
                <span class="badge bg-primary rounded-pill">$50,000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Recent Market Activity</h5>
            <table class="table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AAPL</td>
                  <td>Apple Inc.</td>
                  <td>$150.25</td>
                  <td class="text-success">+2.5%</td>
                </tr>
                <tr>
                  <td>GOOGL</td>
                  <td>Alphabet Inc.</td>
                  <td>$2,750.00</td>
                  <td class="text-danger">-1.2%</td>
                </tr>
                <tr>
                  <td>MSFT</td>
                  <td>Microsoft Corporation</td>
                  <td>$300.50</td>
                  <td class="text-success">+1.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import Chart from 'chart.js/auto';
  
  const portfolioChart = ref(null);
  
  onMounted(() => {
    const ctx = portfolioChart.value.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Stocks', 'Bonds', 'Cash', 'Real Estate'],
        datasets: [{
          data: [50, 30, 10, 10],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Asset Allocation'
          }
        }
      }
    });
  });
  </script>
  
  <style scoped>
  .investments-page {
    padding: 20px;
  }
  </style>
  
  