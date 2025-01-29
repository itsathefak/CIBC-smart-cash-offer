<template>
  <section class="our-values">
    <h2 class="section-title">Our Core Values</h2>
    <div class="values-container">
      <div v-for="(value, index) in values" :key="index" class="value-card" v-scroll-reveal="{ delay: 200 * index }">
        <div class="icon-container">
          <font-awesome-icon :icon="['fas', value.icon]" />
        </div>
        <h3>{{ value.title }}</h3>
        <p>{{ value.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ScrollReveal from 'scrollreveal';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const values = ref([
  {
    icon: 'handshake',
    title: 'Trust',
    description: 'We build and maintain trust with our clients, employees, and communities through integrity and transparency.'
  },
  {
    icon: 'users',
    title: 'Teamwork',
    description: 'We collaborate across our organization to deliver the best solutions and experiences for our clients.'
  },
  {
    icon: 'lightbulb',
    title: 'Innovation',
    description: 'We embrace change and continuously seek new ways to enhance our services and operations.'
  },
  {
    icon: 'heart',
    title: 'Client-Focused',
    description: 'We put our clients at the center of everything we do, striving to exceed their expectations.'
  }
]);

const vScrollReveal = {
  mounted: (el, binding) => {
    ScrollReveal().reveal(el, binding.value);
  }
};
</script>

<style scoped>
.our-values {
  padding: 5rem 0;
  background-color: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--theme-color);
}

.values-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.value-card {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  width: calc(25% - 2rem);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.icon-container {
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c41e3d, #8b1c41);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1rem;
}

.icon-container svg {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

@media screen and (max-width: 1024px) {
  .value-card {
    width: calc(50% - 2rem);
  }
}

@media screen and (max-width: 600px) {
  .value-card {
    width: 100%;
  }
}
</style>

