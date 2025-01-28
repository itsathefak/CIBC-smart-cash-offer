<template>
    <section class="innovation-hub">
      <h2 class="section-title">Innovation Hub</h2>
      <div class="innovation-content">
        <div class="innovation-text" v-scroll-reveal="{ delay: 200 }">
          <h3>Shaping the Future of Banking</h3>
          <p>At CIBC, we're constantly innovating to provide our clients with cutting-edge financial solutions. Our Innovation Hub is where ideas come to life, transforming the way we bank.</p>
          <ul>
            <li>AI-powered financial insights</li>
            <li>Blockchain technology for secure transactions</li>
            <li>Advanced mobile banking features</li>
            <li>Open banking initiatives</li>
          </ul>
        </div>
        <div class="innovation-image" v-scroll-reveal="{ delay: 400 }">
          <img src="https://www.cibc.com/content/dam/cibc-public-assets/business/advice-centre/biz-hub/articles/woman-smiling-in-kitchen-holding-phone-credit-card-banner.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" alt="CIBC Innovation Hub" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import ScrollReveal from 'scrollreveal';
  
  const vScrollReveal = {
    mounted: (el, binding) => {
      ScrollReveal().reveal(el, binding.value);
    }
  };
  </script>
  
  <style scoped>
  .innovation-hub {
    padding: 5rem 0;
    background-color: #f8f9fa;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--theme-color);
  }
  
  .innovation-content {
    display: flex;
    align-items: center;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .innovation-text {
    flex: 1;
  }
  
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--theme-color);
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
  }
  
  li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--theme-color);
  }
  
  .innovation-image {
    flex: 1;
  }
  
  .innovation-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media screen and (max-width: 768px) {
    .innovation-content {
      flex-direction: column;
      gap: 2rem;
    }
  }
  </style>
  
  