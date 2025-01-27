<template>
  <div class="card benefits-card mb-5 animate__animated animate__fadeIn">
    <div class="card-body">
      <h2 class="card-title mb-4">CIBC Dividend® Visa Infinite* Card Benefits</h2>
      <ul class="list-group list-group-flush">
        <li v-for="(benefit, index) in cardBenefits" :key="index" class="list-group-item benefit-item">
          <i class="bi bi-check-circle-fill text-success me-2"></i>
          {{ benefit }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const cardBenefits = [
  '$300 cash bonus when you spend $3,000 in the first 4 months',
  'Earn 5% cash back on groceries and gas for the first 4 months (up to $2,500 spent)',
  'After the promotional period, earn up to 4% cash back on eligible purchases',
  'Comprehensive travel insurance package',
  'Purchase security and extended protection insurance',
  'Earn 2% cash back on dining and transportation purchases',
  'Access to exclusive concierge services',
  'No annual fee for the first year'
];
</script>

<style scoped>
.benefits-card {
  border-left: 5px solid var(--theme-color);
  transition: all 0.3s ease;
}

.benefits-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.benefit-item {
  transition: background-color 0.3s ease;
}

.benefit-item:hover {
  background-color: rgba(196, 31, 62, 0.1);
}
</style>
