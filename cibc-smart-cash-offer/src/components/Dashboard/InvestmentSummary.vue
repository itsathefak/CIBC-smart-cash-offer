<template>
    <div class="investment-summary mb-4">
      <h2 class="section-title mb-3">Investment Summary</h2>
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Portfolio Value</h5>
              <h3 class="card-text portfolio-value">{{ formatCurrency(totalPortfolioValue) }}</h3>
              <p :class="['mt-2', 'profit-loss', profitLossClass]">
                {{ profitLossPercentage }} ({{ formatCurrency(profitLossValue) }})
              </p>
              <div class="d-flex justify-content-between mt-3">
                <button @click="viewPortfolio" class="btn btn-outline-primary btn-sm">View Portfolio</button>
                <button @click="trade" class="btn btn-primary btn-sm">Trade</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Asset Allocation</h5>
              <div class="chart-container">
                <canvas ref="chartCanvas"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import Chart from 'chart.js/auto';
  
  const totalPortfolioValue = ref(125000);
  const profitLossValue = ref(3750);
  const profitLossPercentage = computed(() => {
    const percentage = (profitLossValue.value / totalPortfolioValue.value) * 100;
    return `${percentage > 0 ? '+' : ''}${percentage.toFixed(2)}%`;
  });
  const profitLossClass = computed(() => {
    return profitLossValue.value >= 0 ? 'text-success' : 'text-danger';
  });
  
  const chartCanvas = ref(null);
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);
  };
  
  const viewPortfolio = () => {
    console.log('View portfolio');
    // Implement view portfolio functionality
  };
  
  const trade = () => {
    console.log('Trade');
    // Implement trade functionality
  };
  
  onMounted(() => {
    const ctx = chartCanvas.value.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Stocks', 'Bonds', 'Real Estate', 'Cash'],
        datasets: [{
          data: [50, 30, 15, 5],
          backgroundColor: ['#c41f3e', '#0077be', '#ffa500', '#4caf50'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
          }
        },
        cutout: '70%',
      }
    });
  });
  </script>
  
  <style scoped>
  .investment-summary {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    color: #c41f3e;
    font-weight: bold;
  }
  
  .card {
    height: 100%;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .card-title {
    color: #495057;
    font-weight: 600;
  }
  
  .portfolio-value {
    font-size: 2rem;
    font-weight: bold;
    color: #c41f3e;
  }
  
  .profit-loss {
    font-weight: bold;
  }
  
  .chart-container {
    height: 200px;
    position: relative;
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
  
  