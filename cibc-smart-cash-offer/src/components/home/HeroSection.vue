<template>
  <section class="hero-section position-relative overflow-hidden">
    <div class="animated-background">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
      <img src="https://logos-world.net/wp-content/uploads/2021/05/CIBC-Emblem.png" alt="CIBC Logo" class="floating-logo">
    </div>
    <div class="container h-100 d-flex flex-column justify-content-center">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="display-4 fw-bold text-white mb-4 animate__animated animate__fadeInLeft">
            Get a $300 Cash Bonus
          </h1>
          <p class="lead text-white mb-5 animate__animated animate__fadeInLeft animate__delay-1s">
            Plus, earn up to 5% cash back for the first 4 months
          </p>
          <div class="animate__animated animate__fadeInUp animate__delay-2s">
            <button type="button" class="btn btn-light btn-lg me-3 apply-now-btn" @click="openApplicationModal">
              Apply Now
            </button>
            <button class="btn btn-outline-light btn-lg learn-more-btn" @click="scrollToComparisonSection">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="floating-card animate__animated animate__fadeInRight animate__delay-1s">
      <img 
        src="https://www.cibc.com/content/dam/global-assets/card-art/credit-cards/aventura-cards/cibc-aventura-visa-infinite-card/cibc-visa-aventura-infinite-en.png/_jcr_content/renditions/cq5dam.web.1280.1280.png" 
        alt="CIBC Dividend Visa Infinite Card" 
        class="img-fluid"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

const emit = defineEmits(['open-application-modal']);

onMounted(() => {
  document.body.classList.add('animate__animated', 'animate__fadeIn');
});

const openApplicationModal = () => {
  emit('open-application-modal');
};

const scrollToComparisonSection = () => {
  const comparisonSection = document.getElementById('cardComparisonSection');
  if (comparisonSection) {
    comparisonSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
@import 'animate.css';

.hero-section {
  background: linear-gradient(135deg, #c41e3d, #8b1c41);
  height: 600px;
  color: white;
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
  width: 250px;
  height: 250px;
  top: -50px;
  right: 10%;
  animation: float 20s infinite ease-in-out;
}

.circle-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 5%;
  animation: float 15s infinite ease-in-out reverse;
}

.circle-3 {
  width: 100px;
  height: 100px;
  top: 30%;
  left: 30%;
  animation: float 18s infinite ease-in-out;
}

.floating-logo {
  position: absolute;
  width: 80px;
  bottom: 10%;
  right: 15%;
  opacity: 0.2;
  animation: floatLogo 25s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px); }
}

@keyframes floatLogo {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(15px, -15px) rotate(5deg); }
  50% { transform: translate(30px, 0px) rotate(0deg); }
  75% { transform: translate(15px, 15px) rotate(-deg); }
}

.floating-card {
  position: absolute;
  right: 5%;
  top: 30%;
  transform: translateY(-50%);
  width: 40%;
  max-width: 400px;
  animation: float 6s ease-in-out infinite;
}

.apply-now-btn {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
}

.learn-more-btn {
  position: relative;
  overflow: hidden;
}

.learn-more-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease;
  transform: translate(-50%, -50%) rotate(35deg);
}

.learn-more-btn:hover::after {
  width: 0;
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 991px) {
  .hero-section {
    height: auto;
    padding: 60px 0;
  }

  .floating-card {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    width: 80%;
    max-width: 300px;
    margin: 40px auto 0;
  }
}
</style>

