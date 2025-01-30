<template>
    <section class="tools-and-resources">
      <div class="container">
        <h2 class="text-center mb-5">Tools and Educational Resources</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(tool, index) in tools" :key="index">
            <div class="tool-card">
              <font-awesome-icon :icon="tool.icon" class="icon" />
              <h3>{{ tool.title }}</h3>
              <p>{{ tool.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faChartLine, faShieldAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faChartLine, faShieldAlt, faGraduationCap);
  
  const tools = ref([
    {
      icon: ['fas', 'chart-line'],
      title: 'Research',
      description: 'Access insights from leading economists and analysts to make informed decisions.'
    },
    {
      icon: ['fas', 'shield-alt'],
      title: 'Security',
      description: 'Trade with confidence, backed by the CIBC Digital Banking Guarantee.'
    },
    {
      icon: ['fas', 'graduation-cap'],
      title: 'Educational Resources',
      description: 'Learn about investing strategies and market trends with our comprehensive resources.'
    }
  ]);
  </script>
  
  <style scoped>
    h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  .tools-and-resources {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  .tool-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
  }
  
  .tool-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 3rem;
    color: #c41e3d;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #333;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
  }
  </style>
  
  