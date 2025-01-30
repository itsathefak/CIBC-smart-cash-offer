<template>
    <section class="trading-tools">
      <div class="container">
        <h2 class="text-center mb-5">Powerful Trading Tools</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(tool, index) in tradingTools" :key="index">
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
  import { faSearch, faChartBar, faBell, faNewspaper, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faSearch, faChartBar, faBell, faNewspaper, faMobileAlt);
  
  const tradingTools = ref([
    {
      icon: ['fas', 'search'],
      title: 'Stock Screener',
      description: 'Find investment opportunities that match your criteria.'
    },
    {
      icon: ['fas', 'chart-bar'],
      title: 'Advanced Charting',
      description: 'Analyze stock performance with customizable charts and technical indicators.'
    },
    {
      icon: ['fas', 'bell'],
      title: 'Real-time Alerts',
      description: 'Stay informed with customizable price and news alerts.'
    },
    {
      icon: ['fas', 'newspaper'],
      title: 'Market News',
      description: 'Access the latest market news and expert analysis.'
    },
    {
      icon: ['fas', 'mobile-alt'],
      title: 'Mobile Trading',
      description: 'Trade on-the-go with our powerful mobile app.'
    }
  ]);
  </script>
  
  <style scoped>
    h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  .trading-tools {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  .tool-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  
  