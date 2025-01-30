<template>
    <section class="contact-section">
      <div class="container">
        <h2 v-scroll-reveal>Contact Us</h2>
        <p class="lead text-center mb-5" v-scroll-reveal="{ delay: 200 }">Connect with a business banking expert on your schedule or in your community</p>
        <div class="row">
          <div class="col-md-6 mb-4" v-scroll-reveal="{ delay: 400 }">
            <div class="contact-card">
              <h3>Sales and Products</h3>
              <p>For questions about sales or products:</p>
              <a href="tel:18669927223" class="btn btn-primary btn-lg">
                <font-awesome-icon :icon="['fas', 'phone']" /> 1-866-992-7223
              </a>
              <p class="mt-3">
                Monday to Friday: 8:00 am to 8:00 pm ET<br>
                Saturday: 10:00 am to 7:00 pm ET
              </p>
            </div>
          </div>
          <div class="col-md-6 mb-4" v-scroll-reveal="{ delay: 600 }">
            <div class="contact-card">
              <h3>Everyday Banking</h3>
              <p>For questions about everyday banking:</p>
              <a href="tel:18004652422" class="btn btn-primary btn-lg">
                <font-awesome-icon :icon="['fas', 'phone']" /> 1-800-465-2422
              </a>
              <p class="mt-3">
                Available 24/7
              </p>
            </div>
          </div>
        </div>
        <div class="text-center mt-4" v-scroll-reveal="{ delay: 800 }">
          <a href="#" class="btn btn-outline-primary btn-lg">Find a Branch</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  </script>
  
  <style scoped>
  .contact-section {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  h2 {
    text-align: center;
    color: #c41e3d;
    margin-bottom: 2rem;
  }
  
  .contact-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .contact-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #c41e3d;
  }
  
  .btn-primary {
    background-color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-primary:hover {
    background-color: #9e1832;
    border-color: #9e1832;
  }
  
  .btn-outline-primary {
    color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-outline-primary:hover {
    background-color: #c41e3d;
    color: white;
  }
  </style>
  
  