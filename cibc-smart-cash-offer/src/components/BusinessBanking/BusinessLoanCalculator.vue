<template>
    <section class="business-loan-calculator">
      <div class="container">
        <h2 v-scroll-reveal>Business Loan Calculator</h2>
        <p class="lead text-center mb-5" v-scroll-reveal="{ delay: 200 }">Estimate your monthly payments and total interest</p>
        <div class="row">
          <div class="col-md-6" v-scroll-reveal="{ delay: 400 }">
            <div class="calculator-inputs">
              <div class="form-group">
                <label for="loanAmount">Loan Amount ($)</label>
                <input type="number" id="loanAmount" v-model="loanAmount" class="form-control" min="1000" max="1000000" step="1000">
              </div>
              <div class="form-group">
                <label for="interestRate">Interest Rate (%)</label>
                <input type="number" id="interestRate" v-model="interestRate" class="form-control" min="0.1" max="20" step="0.1">
              </div>
              <div class="form-group">
                <label for="loanTerm">Loan Term (years)</label>
                <input type="number" id="loanTerm" v-model="loanTerm" class="form-control" min="1" max="30" step="1">
              </div>
            </div>
          </div>
          <div class="col-md-6" v-scroll-reveal="{ delay: 600 }">
            <div class="calculator-results">
              <h3>Loan Summary</h3>
              <p><strong>Monthly Payment:</strong> ${{ isNaN(monthlyPayment) ? '0.00' : monthlyPayment.toFixed(2) }}</p>
              <p><strong>Total Interest:</strong> ${{ isNaN(totalInterest) ? '0.00' : totalInterest.toFixed(2) }}</p>
              <p><strong>Total Payment:</strong> ${{ isNaN(totalPayment) ? '0.00' : totalPayment.toFixed(2) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const loanAmount = ref(100000);
  const interestRate = ref(5);
  const loanTerm = ref(5);
  
  const monthlyPayment = computed(() => {
    const r = interestRate.value / 100 / 12;
    const n = loanTerm.value * 12;
    return (loanAmount.value * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  });
  
  const totalPayment = computed(() => monthlyPayment.value * loanTerm.value * 12);
  const totalInterest = computed(() => totalPayment.value - loanAmount.value);
  </script>
  
  <style scoped>
  .business-loan-calculator {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  h2 {
    text-align: center;
    color: #c41e3d;
    margin-bottom: 2rem;
  }
  
  .calculator-inputs,
  .calculator-results {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  .form-control {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  
  .calculator-results h3 {
    color: #c41e3d;
    margin-bottom: 1.5rem;
  }
  
  .calculator-results p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  </style>
  
  