<template>
    <section class="financial-insights animate-on-scroll">
      <h2 class="section-title">Financial Insights</h2>
      <div class="insights-content">
        <div class="insights-text">
          <h3>Empowering Your Financial Decisions</h3>
          <p>At CIBC, we believe in providing our clients with the knowledge and tools to make informed financial decisions. Our team of experts works tirelessly to bring you the latest insights and strategies to help you achieve your financial goals.</p>
          <ul>
            <li>Personalized financial advice</li>
            <li>Market analysis and investment opportunities</li>
            <li>Budgeting and savings strategies</li>
            <li>Retirement planning guidance</li>
          </ul>
        </div>
        <div class="insights-image">
          <img src="https://www.investorsedge.cibc.com/content/dam/ie-public-assets/images/lob/home/investing-screen-phone-and-laptop-en.png/_jcr_content/renditions/cq5dam.web.767.767.png" alt="CIBC Financial Insights" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .financial-insights {
    padding: 5rem 0;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--theme-color);
  }
  
  .insights-content {
    display: flex;
    align-items: center;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .insights-text {
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
  
  .insights-image {
    flex: 1;
  }
  
  .insights-image img {
    width: 100%;
    border-radius: 10px;
  }
  
  @media screen and (max-width: 768px) {
    .insights-content {
      flex-direction: column;
      gap: 2rem;
    }
  }
  </style>
  
  