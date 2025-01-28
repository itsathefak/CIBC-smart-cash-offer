<template>
    <section class="about-hero">
      <div class="hero-content">
        <h1 class="animate__animated animate__fadeInDown">Empowering Your Financial Journey</h1>
        <p class="animate__animated animate__fadeInUp animate__delay-1s">
          For over 150 years, CIBC has been a trusted partner in your financial success.
        </p>
      </div>
      <div class="hero-image animate__animated animate__zoomIn animate__delay-2s">
        <img src="https://www.cibc.com/content/dam/cibc-public-assets/business/images/cibc-advisor-helping-two-clients-banner-desktop.png/_jcr_content/renditions/cq5dam.web.2000.2000.png" alt="CIBC Headquarters" />
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .about-hero {
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    background: linear-gradient(135deg, #c41e3d, #8b1c41);
    color: white;
    overflow: hidden;
  }
  
  .hero-content {
    max-width: 50%;
  }
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
  }
  
  .hero-image {
    width: 40%;
    height: 70%;
    overflow: hidden;
    border-radius: 20px;
  }
  
  .hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    .about-hero {
      flex-direction: column;
      text-align: center;
      padding: 2rem;
    }
  
    .hero-content, .hero-image {
      max-width: 100%;
      width: 100%;
    }
  
    .hero-image {
      height: 40%;
      margin-top: 2rem;
    }
  }
  </style>
  
  