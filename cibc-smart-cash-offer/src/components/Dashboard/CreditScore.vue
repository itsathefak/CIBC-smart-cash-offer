<template>
    <div class="credit-score-widget mb-4">
      <h2 class="section-title mb-3 text-center">Credit Score</h2>
      <div class="card">
        <div class="card-body text-center">
          <div class="credit-score-chart mb-3">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#e0e0e0" stroke-width="20" />
              <circle cx="100" cy="100" r="90" fill="none" :stroke="creditScoreColor" stroke-width="20"
                      :stroke-dasharray="`${creditScorePercentage} 565`" stroke-dashoffset="0" transform="rotate(-90 100 100)" />
              <text x="100" y="100" text-anchor="middle" dominant-baseline="central" font-size="36" font-weight="bold" fill="#333">
                {{ creditScore }}
              </text>
            </svg>
          </div>
          <h3 class="mb-2">{{ creditScoreRating }}</h3>
          <p class="text-muted">Your credit score is {{ creditScoreDescription }}</p>
          <p :class="['mt-3', creditScoreChangeClass]">
            <font-awesome-icon :icon="creditScoreChangeIcon" />
            {{ Math.abs(creditScoreChange) }} points since last month
          </p>
        </div>
      </div>
      <div class="text-center mt-3">
        <button @click="viewCreditReport" class="btn btn-primary">View Credit Report</button>
      </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp, faArrowDown);

const creditScore = ref(750);
const creditScoreChange = ref(15);

const creditScoreRating = computed(() => {
  if (creditScore.value >= 800) return 'Excellent';
  if (creditScore.value >= 740) return 'Very Good';
  if (creditScore.value >= 670) return 'Good';
  if (creditScore.value >= 580) return 'Fair';
  return 'Poor';
});

const creditScoreDescription = computed(() => {
  if (creditScore.value >= 800) return 'exceptional';
  if (creditScore.value >= 740) return 'very good';
  if (creditScore.value >= 670) return 'good';
  if (creditScore.value >= 580) return 'fair';
  return 'poor';
});

const creditScorePercentage = computed(() => {
  return (creditScore.value / 900) * 565;
});

const creditScoreColor = computed(() => {
  if (creditScore.value >= 800) return '#4caf50';
  if (creditScore.value >= 740) return '#8bc34a';
  if (creditScore.value >= 670) return '#ffc107';
  if (creditScore.value >= 580) return '#ff9800';
  return '#f44336';
});

const creditScoreChangeClass = computed(() => {
  return creditScoreChange.value >= 0 ? 'text-success' : 'text-danger';
});

const creditScoreChangeIcon = computed(() => {
  return creditScoreChange.value >= 0 ? ['fas', 'arrow-up'] : ['fas', 'arrow-down'];
});

const viewCreditReport = () => {
  console.log('View credit report');
  // Implement view credit report functionality
};
</script>

<style scoped>
.credit-score-widget {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #c41f3e;
  font-weight: bold;
}

.credit-score-chart {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-primary {
  background-color: #c41f3e;
  border-color: #c41f3e;
}

.btn-primary:hover {
  background-color: #9e1832;
  border-color: #9e1832;
}

h3 {
  font-size: 1.5rem;
  color: #c41f3e;
}

.card-body {
  text-align: center;
}

@media (max-width: 767px) {
  .credit-score-chart {
    margin-bottom: 1rem;
  }
}
</style>
