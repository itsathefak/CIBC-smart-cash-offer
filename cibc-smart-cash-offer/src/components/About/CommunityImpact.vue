<template>
    <section class="community-impact">
      <h2 class="section-title">Our Community Impact</h2>
      <div class="impact-container">
        <div v-for="(initiative, index) in initiatives" :key="index" class="impact-card" v-scroll-reveal="{ delay: 200 * index }">
          <div class="icon-container">
            <i :class="initiative.icon"></i>
          </div>
          <h3>{{ initiative.title }}</h3>
          <p>{{ initiative.description }}</p>
          <div class="impact-stats">
            <span class="stat-number">{{ initiative.stat }}</span>
            <span class="stat-description">{{ initiative.statDescription }}</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ScrollReveal from 'scrollreveal';
  
  const initiatives = ref([
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'CIBC Foundation',
      description: 'Supporting cancer research and care, as well as education and financial literacy programs.',
      stat: '$350M+',
      statDescription: 'raised for cancer causes since 1992'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Youth Education',
      description: 'Empowering young people through financial education and career development opportunities.',
      stat: '100,000+',
      statDescription: 'students reached annually'
    },
    {
      icon: 'fas fa-tree',
      title: 'Environmental Sustainability',
      description: 'Committed to reducing our environmental footprint and supporting clean energy initiatives.',
      stat: '30%',
      statDescription: 'reduction in greenhouse gas emissions by 2027'
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Employee Volunteerism',
      description: 'Encouraging our team to give back to their communities through volunteer programs.',
      stat: '100,000+',
      statDescription: 'volunteer hours contributed annually'
    }
  ]);
  
  const vScrollReveal = {
    mounted: (el, binding) => {
      ScrollReveal().reveal(el, binding.value);
    }
  };
  </script>
  
  <style scoped>
  .community-impact {
    padding: 5rem 0;
    background-color: white;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--theme-color);
  }
  
  .impact-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .impact-card {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    width: calc(25% - 2rem);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .impact-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .icon-container {
    font-size: 3rem;
    color: var(--theme-color);
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .impact-stats {
    margin-top: 1rem;
  }
  
  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: var(--theme-color);
  }
  
  .stat-description {
    font-size: 0.9rem;
  }
  
  @media screen and (max-width: 1024px) {
    .impact-card {
      width: calc(50% - 2rem);
    }
  }
  
  @media screen and (max-width: 600px) {
    .impact-card {
      width: 100%;
    }
  }
  </style>