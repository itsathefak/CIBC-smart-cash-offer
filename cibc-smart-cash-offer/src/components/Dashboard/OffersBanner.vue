<template>
    <div class="offers-banner mb-4">
      <h2 class="section-title mb-3 text-center">Special Offers</h2>
      <div id="offerCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(offer, index) in offers" :key="index" :class="{ active: index === 0 }">
            <div class="offer-card">
              <img :src="offer.image" class="card-img" :alt="offer.title">
              <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                <h5 class="card-title">{{ offer.title }}</h5>
                <p class="card-text">{{ offer.description }}</p>
                <a href="#" class="btn btn-light">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#offerCarousel" data-bs-slide="prev" aria-label="Previous">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#offerCarousel" data-bs-slide="next" aria-label="Next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const offers = ref([
    {
      title: 'Get a $300 Cash Bonus',
      description: 'Open a new CIBC Smart Account and earn up to $300',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/special-offers/mortgage-nov-25/family-with-kid-eating-in-kitchen-mobile.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg'
    },
    {
      title: 'Earn 5x the Points',
      description: 'Use your CIBC Aventura® Visa Infinite* Card and earn 5x the points on travel purchases',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/personal-banking/mortgages/images/couple-cooking-in-kitchen.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg'
    },
    {
      title: 'Mortgage Rates as low as 2.99%',
      description: 'Take advantage of our limited time mortgage offer',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/personal-banking/mortgages/renew-your-mortgage/images/repaying-mortgage-callout.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg'
    }
  ]);
  </script>
  
  <style scoped>
  .offers-banner {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 20px;
  }
  
  .section-title {
    color: #c41f3e;
    font-weight: 700;
    font-size: 2.2rem;
    letter-spacing: 1px;
  }
  
  .carousel-inner {
    border-radius: 12px;
    overflow: hidden;
  }
  
  .offer-card {
    position: relative;
    height: 400px;
  }
  
  .card-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  
  .card-img-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 15px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .offer-card:hover .card-img-overlay {
    opacity: 1;
  }
  
  .card-title {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .card-text {
    font-size: 1.125rem;
    margin-bottom: 20px;
  }
  
  .btn-light {
    background-color: #f8f9fa;
    color: #c41f3e;
    border: none;
    padding: 12px 25px;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 30px;
    transition: all 0.3s;
  }
  
  .btn-light:hover {
    background-color: #e0e0e0;
    color: #c41f3e;
    transform: translateY(-2px);
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: #c41f3e;
    border-radius: 50%;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
  }
  
  @media (max-width: 768px) {
    .offer-card {
      height: 300px;
    }
  
    .section-title {
      font-size: 1.75rem;
    }
  
    .card-title {
      font-size: 1.25rem;
    }
  
    .card-text {
      font-size: 1rem;
    }
  
    .btn-light {
      font-size: 0.9rem;
      padding: 8px 20px;
    }
  }
  </style>
  