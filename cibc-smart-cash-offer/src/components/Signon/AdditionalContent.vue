<template>
    <div class="additional-content">
      <h2>Why bank with CIBC?</h2>
      <div class="content-grid">
        <div class="content-item">
          <img src="https://www.cibc.com/content/dam/cibc-public-assets/personal-banking/investment/invest-with-an-advisor/images/man-and-woman-using-digital-tablet-horizontal-callout.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg" alt="Banking Network">
          <h3>Extensive Network</h3>
          <p>With one of Canada's largest banking centre networks, we're easy to find.</p>
        </div>
        <div class="content-item">
          <img src="https://www.cibc.com/content/dam/commercial_and_corporate/women-shaking-hands-handshake-banner-desktop.jpg/_jcr_content/renditions/cq5dam.web.2000.2000.jpeg" alt="Expert Advice">
          <h3>Expert Advice</h3>
          <p>Meet with us for advice on selecting the right account, building savings, managing debt, or investing in your future.</p>
        </div>
        <div class="content-item">
          <img src="https://www.cibc.com/content/dam/cibc-public-assets/personal-banking/ways-to-bank/online-services/images/woman-online-banking-banner-mobile.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg" alt="Mobile Banking">
          <h3>Mobile Banking</h3>
          <p>Our mobile banking app has earned top scores for its convenience and ease of use.</p>
        </div>
        <div class="content-item">
          <img src="https://www.cibc.com/content/dam/cibc-public-assets/business/advice-centre/biz-hub/articles/woman-holding-banking-card-banner-1400x600.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg" alt="Global Money Transfer">
          <h3>Global Money Transfer</h3>
          <p>Send money to over 120 countries using CIBC Global Money Transfer™ and pay no transfer fee.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .additional-content {
    margin-top: 3rem;
  }
  
  h2 {
    text-align: center;
    color: #c41f3e;
    margin-bottom: 2rem;
  }
  
  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .content-item {
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .content-item:hover {
    transform: translateY(-5px);
  }
  
  .content-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .content-item h3 {
    color: #c41f3e;
    padding: 1rem;
    margin: 0;
  }
  
  .content-item p {
    padding: 0 1rem 1rem;
    margin: 0;
  }
  </style>
  
  