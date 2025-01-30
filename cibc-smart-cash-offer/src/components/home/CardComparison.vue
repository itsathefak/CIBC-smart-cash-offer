<template>
  <div id="cardComparisonSection" class="card-comparison animate__animated animate__fadeIn">
    <h2 class="text-center section-title  mb-5">Compare Our Cards</h2>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="card in cards" :key="card.name">
        <div class="card h-100 comparison-card">
          <div class="card-header bg-theme text-white">
            <h3 class="card-title">{{ card.name }}</h3>
          </div>
          <div class="card-body">
            <img :src="card.image" :alt="card.name" class="img-fluid mb-3">
            <ul class="list-unstyled">
              <li v-for="(feature, index) in card.features" :key="index" class="mb-2">
                <i class="bi bi-check-circle-fill text-theme me-2"></i>
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="card-footer">
            <button 
              class="btn btn-theme w-100" 
              @click="openModal(card)"
              data-bs-toggle="modal" 
              data-bs-target="#cardModal">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <CardModal 
      :card="selectedCard"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CardModal from './CardModal.vue';

const cards = [
  {
    name: "CIBC Dividend® Visa Infinite* Card",
    image: "https://www.cibc.com/content/dam/global-assets/card-art/credit-cards/dividend-cards/cibc-dividend-visa-card/cibc-dividend-visa-card-en.png/_jcr_content/renditions/cq5dam.web.1280.1280.png",
    features: [
      "Up to 4% cash back on eligible purchases",
      "$300 welcome bonus",
      "Comprehensive travel insurance"
    ]
  },
  {
    name: 'CIBC Aventura® Visa Infinite* Card',
    image: 'https://www.cibc.com/content/dam/global-assets/card-art/credit-cards/aventura-cards/cibc-aventura-visa-infinite-card/cibc-visa-aventura-infinite-en.png/_jcr_content/renditions/cq5dam.web.1280.1280.png',
    features: [
      'Earn points on all purchases',
      'Flexible travel redemption options',
      'Airport lounge access'
    ]
  },
  {
    name: 'CIBC Select Visa* Premium Card',
    image: 'https://www.cibc.com/content/dam/global-assets/card-art/credit-cards/aventura-cards/cibc-aventura-visa-card/cibc-visa-aventura-en.png/_jcr_content/renditions/cq5dam.web.1280.1280.png',
    features: [
      'Low interest rate on purchases and balance transfers',
      'No annual fee',
      'Purchase security and extended protection insurance'
    ]
  }
];

const selectedCard = ref(null);

const openModal = (card) => {
  selectedCard.value = card;
};
</script>

<style scoped>
.comparison-card {
   transition: all 0.3s ease;
   border: none;
   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--theme-color);
  }

.comparison-card:hover {
   transform: translateY(-10px);
   box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.bg-theme {
   background-color: var(--theme-color);
}

.text-theme {
   color: var(--theme-color);
}

.card-footer .btn-theme {
  background: white;
  border: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.card-footer .btn-theme:hover {
  background: linear-gradient(135deg, #8b1c41, #c41e3d);
  color: white;
  transform: translateY(-5px) scale(1);
}
</style>
