<template>
    <section class="offer-section">
      <div class="container">
        <h2 class="text-center mb-5">Limited Time Offer</h2>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="offer-card">
              <img src="https://www.investorsedge.cibc.com/content/dam/ie-public-assets/learn/images/two-young-adults-looking-at-a-computer-banner-mobile.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg" alt="Limited Time Offer" class="offer-image">
              <h3>100 Free Trades</h3>
              <p>Open a CIBC Investor's Edge account using promo code EDGE2425 and get 100 free trades.</p>
              <a href="#" class="btn btn-outline-primary">Learn More</a>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="offer-card">
              <img src="https://www.investorsedge.cibc.com/content/dam/ie-public-assets/contact-us/images/man-walking-with-device-mobile.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg" alt="Limited Time Offer" class="offer-image">
              <h3>$200 or More Cash Back</h3>
              <p>Transfer funds to your new account and get up to $10,000 cash back. The more you transfer, the more you get!</p>
              <a href="#" class="btn btn-outline-primary">See Details</a>
            </div>
          </div>
        </div>
        <p class="text-center mt-4">Offer ends March 31, 2025. Qualifying steps apply.†</p>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
    h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  .offer-section {
    padding: 80px 0;
    background-color: #ffffff;
  }
  
  .offer-card {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .offer-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    color: #c41e3d;
    margin-bottom: 1rem;
  }
  
  .btn-outline-primary {
    color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-outline-primary:hover {
    background-color: #c41e3d;
    color: white;
  }
  
  .offer-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    margin-bottom: 1rem;
  }
  </style>
  
  