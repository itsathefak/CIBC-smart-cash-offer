<template>
    <section class="business-credit-cards-section">
      <div class="container">
        <h2 v-scroll-reveal>Business Credit Cards</h2>
        <p class="lead text-center mb-5" v-scroll-reveal="{ delay: 200 }">Power up your business with the right card and extra savings</p>
        <div class="card-carousel" v-scroll-reveal="{ delay: 400 }">
          <button class="nav-button prev" @click="prevCard" :disabled="currentIndex === 0">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </button>
          <div class="card-container">
            <div v-for="(card) in visibleCards" :key="card.title" class="credit-card">
              <img :src="card.image" :alt="card.title" class="card-image">
              <h3>{{ card.title }}</h3>
              <ul class="card-features">
                <li v-for="feature in card.features" :key="feature">{{ feature }}</li>
              </ul>
              <div class="card-fee">
                <span class="fee">{{ card.annualFee }}</span>
                <span class="period">annual fee</span>
              </div>
              <a href="#" class="btn btn-primary btn-block">Learn More</a>
            </div>
          </div>
          <button class="nav-button next" @click="nextCard" :disabled="currentIndex + 3 >= cards.length">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faChevronLeft, faChevronRight);
  
  const cards = ref([
    {
      title: 'CIBC Aventura® Visa* Card for Business',
      image: 'https://cibccentre.rsagroup.ca/sites/cibccentre/files/creditcards/CIBC_Aventura_Visa_gold_business_front_eng.png',
      features: [
        'Earn points on all purchases',
        'Flexible travel redemption options',
        'Comprehensive insurance coverage'
      ],
      annualFee: '$180'
    },
    {
      title: 'CIBC Aeroplan® Visa* Business Plus Card',
      image: 'https://www.cibc.com/content/dam/global-assets/card-art/credit-cards/aventura-cards/cibc-aventura-visa-card-for-business-plus/cibc-visa-aventura-business-plus-en.png/_jcr_content/renditions/cq5dam.web.1280.1280.png',
      features: [
        'Earn Aeroplan points on every purchase',
        'Welcome bonus of up to 20,000 Aeroplan points',
        'Free first checked bag on Air Canada flights'
      ],
      annualFee: '$180'
    },
    {
      title: 'CIBC Costco Business Mastercard®',
      image: 'https://www.cibc.com/content/dam/global-assets/card-art/credit-cards/costco-card/cibc-mastercard-costco-business.png/_jcr_content/renditions/cq5dam.web.1280.1280.png',
      features: [
        '3% cash back on restaurant purchases',
        '2% cash back on Costco gas',
        'No annual fee with Costco membership'
      ],
      annualFee: '$0'
    },
    {
      title: 'CIBC bizline® Visa* Card',
      image: 'https://cibccentre.rsagroup.ca/sites/cibccentre/files/creditcards/bizline_visa_front_eng.png',
      features: [
        'Low interest rates',
        'No annual fee',
        'Flexible credit limits'
      ],
      annualFee: '$0'
    }
  ]);
  
  const currentIndex = ref(0);
  
  const visibleCards = computed(() => {
    return cards.value.slice(currentIndex.value, currentIndex.value + 3);
  });
  
  const nextCard = () => {
    if (currentIndex.value + 3 < cards.value.length) {
      currentIndex.value += 1;
    }
  };
  
  const prevCard = () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1;
    }
  };
  </script>
  
  <style scoped>
  .business-credit-cards-section {
    padding: 80px 0;
    background-color: white;
  }
  
  h2 {
    text-align: center;
    color: #c41e3d;
    margin-bottom: 2rem;
  }
  
  .card-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .card-container {
    display: flex;
    gap: 20px;
    overflow: hidden;
    width: calc(33.33% * 3 + 40px);
    justify-content: space-between;
  }
  
  .credit-card {
    flex: 0 0 calc(33.33% - 20px);
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .credit-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card-image {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #c41e3d;
  }
  
  .card-features {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 1rem;
  }
  
  .card-features li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
  }
  
  .card-features li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #c41e3d;
  }
  
  .card-fee {
    margin-top: auto;
    margin-bottom: 1rem;
  }
  
  .fee {
    font-size: 1.5rem;
    font-weight: bold;
    color: #c41e3d;
  }
  
  .period {
    font-size: 0.875rem;
    color: #6c757d;
  }
  
  .nav-button {
    background-color: transparent;
    color: #333;
    border: none;
    padding: 10px;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .nav-button:hover:not(:disabled) {
    color: #c41e3d;
  }
  
  .nav-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .btn-primary {
    background-color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-primary:hover {
    background-color: #9e1832;
    border-color: #9e1832;
  }
  </style>
  
  