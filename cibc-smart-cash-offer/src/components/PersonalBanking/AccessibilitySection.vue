<template>
    <section class="accessibility-section">
      <div class="container">
        <h2>Accessibility at CIBC</h2>
        <p class="lead">What we do to make sure our products and services are accessible to all.</p>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="accessibility-card">
              <h3>CIBC's Accessibility Plan</h3>
              <p>Learn about our commitment to accessibility and how we're making our services more inclusive.</p>
              <a href="#" class="btn btn-primary">View Accessibility Plan</a>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="accessibility-card">
              <h3>Progress Report</h3>
              <p>Read our Accessibility Plan progress report in the Sustainability Report Appendix.</p>
              <a href="#" class="btn btn-primary">Download Report (PDF)</a>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a href="#" class="btn btn-outline-primary btn-lg">Learn more about accessibility at CIBC</a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .accessibility-section {
    padding: 4rem 0;
    background-color: white;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #c41e3d;
  }
  
  .lead {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .accessibility-card {
    background-color: #f5f7fa;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  .btn-primary {
    background-color: #c41e3d;
    border-color: #c41e3d;
  }
  
  .btn-primary:hover {
    background-color: #8b1c41;
    border-color: #8b1c41;
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
  
  