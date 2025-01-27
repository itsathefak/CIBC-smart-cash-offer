<template>
  <div class="card cashback-calculator animate__animated animate__fadeIn">
    <div class="card-body">
      <h3 class="card-title mb-4">Cashback Calculator</h3>
      <div class="mb-3">
        <label for="monthlySpending" class="form-label">Monthly Spending</label>
        <input type="number" class="form-control" id="monthlySpending" v-model="monthlySpending" @input="calculateCashback">
      </div>
      <div class="mb-3">
        <label class="form-label">Spending Categories</label>
        <div class="form-check" v-for="(category, index) in categories" :key="index">
          <input class="form-check-input" type="checkbox" :id="'category' + index" v-model="category.selected" @change="calculateCashback">
          <label class="form-check-label" :for="'category' + index">
            {{ category.name }} ({{ category.rate }}% cashback)
          </label>
        </div>
      </div>
      <div class="result mt-4">
        <h4>Estimated Annual Cashback</h4>
        <p class="display-4 text-theme">${{ annualCashback.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const monthlySpending = ref(1000); // Initial monthly spending
const categories = ref([
  { name: 'Groceries', rate: 4, selected: true },
  { name: 'Gas', rate: 4, selected: true },
  { name: 'Dining', rate: 2, selected: false },
  { name: 'Other Purchases', rate: 1, selected: true },
]);

const annualCashback = ref(0);

// Calculate cashback for selected categories
const calculateCashback = () => {
  let totalCashback = 0;

  categories.value.forEach(category => {
    if (category.selected) {
      // Calculate cashback for each selected category
      const categoryCashback = (monthlySpending.value * category.rate) / 100;
      totalCashback += categoryCashback * 12; // Multiply by 12 for annual cashback
    }
  });

  annualCashback.value = totalCashback;
};

// Watch monthly spending to recalculate the cashback
watch(monthlySpending, calculateCashback);

// Initial calculation to populate the annual cashback
calculateCashback();
</script>

<style scoped>
.cashback-calculator {
  border-left: 5px solid var(--theme-color);
  transition: all 0.3s ease;
}

.cashback-calculator:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.text-theme {
  color: var(--theme-color);
}

.result {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
