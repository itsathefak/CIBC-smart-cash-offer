<template>
  <section class="hero-section position-relative overflow-hidden mb-5">
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

const emit = defineEmits(['open-application-modal']);

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

.hero-section {
  background: linear-gradient(135deg, #c41e3d, #8b1c41);
  height: 600px;
  color: white;
}

.floating-card {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 40%;
  max-width: 400px;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(-50%) translateX(0); }
  50% { transform: translateY(-50%) translateX(-20px); }
  100% { transform: translateY(-50%) translateX(0); }
}

.apply-now-btn {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
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

