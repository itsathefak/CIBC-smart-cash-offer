<template>
    <section class="our-history">
      <h2 class="section-title">Our Rich History</h2>
      <div class="timeline">
        <div v-for="(event, index) in historicalEvents" :key="index" class="timeline-item" :class="{ 'right': index % 2 !== 0 }">
          <div class="timeline-content" v-scroll-reveal="{ delay: 200 }">
            <div class="year">{{ event.year }}</div>
            <h3>{{ event.title }}</h3>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ScrollReveal from 'scrollreveal';
  
  const historicalEvents = ref([
    {
      year: 1867,
      title: "The Beginning",
      description: "CIBC was founded as the Canadian Bank of Commerce, coinciding with Canada's Confederation."
    },
    {
      year: 1961,
      title: "A New Identity",
      description: "The Canadian Bank of Commerce and the Imperial Bank of Canada merged to form the Canadian Imperial Bank of Commerce (CIBC)."
    },
    {
      year: 1992,
      title: "Digital Innovation",
      description: "CIBC launched its first online banking services, pioneering digital banking in Canada."
    },
    {
      year: 2019,
      title: "CIBC Square",
      description: "Construction began on CIBC Square, our new global headquarters in Toronto, symbolizing our commitment to innovation and sustainability."
    }
  ]);
  
  const vScrollReveal = {
    mounted: (el, binding) => {
      ScrollReveal().reveal(el, binding.value);
    }
  };
  </script>
  
  <style scoped>
  .our-history {
    padding: 5rem 0;
    background-color: #f8f9fa;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--theme-color);
  }
  
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--theme-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
  
  .timeline-item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }
  
  .timeline-item::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid var(--theme-color);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  
  .right {
    left: 50%;
  }
  
  .right::after {
    left: -16px;
  }
  
  .timeline-content {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .year {
    position: absolute;
    top: -40px;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--theme-color);
  }
  
  @media screen and (max-width: 600px) {
    .timeline::after {
      left: 31px;
    }
    
    .timeline-item {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }
    
    .timeline-item::after {
      left: 15px;
    }
    
    .right {
      left: 0%;
    }
  }
  </style>
  
  