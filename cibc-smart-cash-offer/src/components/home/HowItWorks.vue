<template>
  <div class="how-it-works mb-5 animate__animated animate__fadeIn">
    <h2 class="text-center mb-5">How It Works</h2>
    <div class="row">
      <div v-for="(step, index) in steps" :key="index" class="col-md-4 mb-4">
        <div class="card h-100 step-card">
          <div class="card-body text-center">
            <div class="step-number mb-3">{{ index + 1 }}</div>
            <h3 class="card-title">{{ step.title }}</h3>
            <p class="card-text">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  {
    title: 'Apply Online',
    description: 'Fill out our simple online application form in just a few minutes.'
  },
  {
    title: 'Quick Approval',
    description: 'Get a decision on your application quickly, often within 60 seconds.'
  },
  {
    title: 'Activate and Earn',
    description: 'Once you receive your card, activate it and start earning cash back on your purchases right away.'
  }
];
</script>

<style scoped>
.step-card {
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.step-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.step-number {
  width: 50px;
  height: 50px;
  background-color: var(--theme-color);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto;
}
</style>

