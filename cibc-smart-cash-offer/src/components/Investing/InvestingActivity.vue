<template>
    <section class="investing-activity">
      <div class="container">
        <h2 class="text-center mb-5">Test Your Investment Knowledge</h2>
        <div class="activity-container">
          <h3>Stock Market Simulation</h3>
          <p>Try your hand at investing with our virtual stock market simulator. Make investment decisions and see how your portfolio performs over time.</p>
          <div class="simulation-area">
            <div class="form-group">
              <label for="stockSymbol">Stock Symbol:</label>
              <select id="stockSymbol" v-model="selectedStock" class="form-control">
                <option v-for="stock in availableStocks" :key="stock.symbol" :value="stock">
                  {{ stock.symbol }} - {{ stock.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="investmentAmount">Investment Amount ($):</label>
              <input type="number" id="investmentAmount" v-model="investmentAmount" class="form-control" min="1">
            </div>
            <button @click="makeInvestment" class="btn btn-primary">Invest</button>
          </div>
          <div v-if="portfolio.length > 0" class="portfolio-summary mt-4">
            <h4>Your Portfolio</h4>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Shares</th>
                  <th>Current Price</th>
                  <th>Total Value</th>
                  <th>Profit/Loss</th>
                  <th>Action</th> <!-- New column for the Remove button -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="investment in portfolio" :key="investment.symbol">
                  <td>{{ investment.symbol }}</td>
                  <td>{{ investment.shares.toFixed(2) }}</td>
                  <td>${{ investment.currentPrice.toFixed(2) }}</td>
                  <td>${{ (investment.shares * investment.currentPrice).toFixed(2) }}</td>
                  <td :class="investment.profitLoss >= 0 ? 'text-success' : 'text-danger'">
                    ${{ investment.profitLoss.toFixed(2) }}
                  </td>
                  <td>
                    <button @click="removeInvestment(investment.symbol)" class="btn btn-danger btn-sm">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p><strong>Total Portfolio Value:</strong> ${{ totalPortfolioValue.toFixed(2) }}</p>
            <p><strong>Total Profit/Loss:</strong> 
              <span :class="totalProfitLoss >= 0 ? 'text-success' : 'text-danger'">
                ${{ totalProfitLoss.toFixed(2) }}
              </span>
            </p>
          </div>
          <button @click="simulateMarketChanges" class="btn btn-secondary mt-3">Simulate Market Changes</button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const availableStocks = ref([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 300 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3300 },
    { symbol: 'FB', name: 'Meta Platforms Inc.', price: 330 },
  ]);
  
  const selectedStock = ref(availableStocks.value[0]);
  const investmentAmount = ref(1000);
  const portfolio = ref([]);
  
  const makeInvestment = () => {
    if (selectedStock.value && investmentAmount.value > 0) {
      const shares = investmentAmount.value / selectedStock.value.price;
      const existingInvestment = portfolio.value.find(inv => inv.symbol === selectedStock.value.symbol);
      
      if (existingInvestment) {
        existingInvestment.shares += shares;
        existingInvestment.totalInvested += investmentAmount.value;
      } else {
        portfolio.value.push({
          symbol: selectedStock.value.symbol,
          shares: shares,
          purchasePrice: selectedStock.value.price,
          currentPrice: selectedStock.value.price,
          totalInvested: investmentAmount.value,
        });
      }
      
      investmentAmount.value = 1000; // Reset to default value
    }
  };
  
  const removeInvestment = (symbol) => {
    portfolio.value = portfolio.value.filter(investment => investment.symbol !== symbol);
  };
  
  const totalPortfolioValue = computed(() => {
    return portfolio.value.reduce((total, investment) => total + (investment.shares * investment.currentPrice), 0);
  });
  
  const totalProfitLoss = computed(() => {
    return portfolio.value.reduce((total, investment) => {
      return total + (investment.shares * investment.currentPrice) - investment.totalInvested;
    }, 0);
  });
  
  const simulateMarketChanges = () => {
    availableStocks.value.forEach(stock => {
      const change = (Math.random() - 0.5) * 0.1; // -5% to +5% change
      stock.price *= (1 + change);
    });
    
    portfolio.value.forEach(investment => {
      const stock = availableStocks.value.find(s => s.symbol === investment.symbol);
      investment.currentPrice = stock.price;
      investment.profitLoss = (investment.currentPrice * investment.shares) - investment.totalInvested;
    });
  };
  </script>

  <style scoped>
h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #c41e3d;
}

.investing-activity {
  padding: 80px 0;
  background-color: #ffffff;
}

.activity-container {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.simulation-area {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.btn-primary {
  background-color: #c41e3d;
  border-color: #c41e3d;
}

.btn-primary:hover {
  background-color: #9e1832;
  border-color: #9e1832;
}

.btn-primary, .btn-secondary {
  margin-top: 1rem;
}

.portfolio-summary {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.portfolio-summary h4 {
  color: #c41e3d;
  margin-bottom: 1rem;
}

.table {
  margin-top: 1rem;
}

.text-success {
  color: #28a745;
}

.text-danger {
  color: #dc3545;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>