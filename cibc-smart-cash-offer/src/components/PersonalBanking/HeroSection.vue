<template>
    <section class="about-hero">
      <div class="animated-background">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
        <img src="https://logos-world.net/wp-content/uploads/2021/05/CIBC-Emblem.png" alt="CIBC Logo" class="floating-logo">
      </div>
      <div class="hero-content">
        <h1 class="animate__animated animate__fadeInDown">Welcome to CIBC Personal Banking</h1>
        <p class="animate__animated animate__fadeInUp animate__delay-1s">
          Do More With Your Money
        </p>
      </div>
      <div class="hero-image animate__animated animate__zoomIn animate__delay-2s">
        <img src="https://www.cibc.com/content/dam/cibc-public-assets/personal-banking/credit-cards/images/travelling-family-of-four-mobile.png/_jcr_content/renditions/cq5dam.web.767.767.png" alt="CIBC Headquarters" />
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
    position: relative;
  }
  
  .animated-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
    background-color: white;
  }
  
  .circle-1 {
    width: 300px;
    height: 300px;
    top: -50px;
    left: -50px;
    animation: float 15s infinite ease-in-out;
  }
  
  .circle-2 {
    width: 200px;
    height: 200px;
    bottom: 50px;
    right: 100px;
    animation: float 12s infinite ease-in-out reverse;
  }
  
  .circle-3 {
    width: 150px;
    height: 150px;
    top: 50%;
    left: 50%;
    animation: float 10s infinite ease-in-out;
  }
  
  .floating-logo {
    position: absolute;
    width: 100px;
    top: 20%;
    right: 10%;
    opacity: 0.5;
    animation: floatLogo 20s infinite ease-in-out;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -30px); }
  }
  
  @keyframes floatLogo {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(20px, -20px) rotate(5deg); }
    50% { transform: translate(40px, 0px) rotate(0deg); }
    75% { transform: translate(20px, 20px) rotate(-5deg); }
  }
  
  .hero-content {
    max-width: 50%;
    z-index: 1;
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
    z-index: 1;
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
  
  