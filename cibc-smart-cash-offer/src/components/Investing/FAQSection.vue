<template>
    <section class="faq-section">
      <div class="container">
        <h2 class="text-center mb-5">Your Questions Answered</h2>
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
            <h2 class="accordion-header" :id="'heading' + index">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index">
                {{ faq.question }}
              </button>
            </h2>
            <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index" data-bs-parent="#faqAccordion">
              <div class="accordion-body">
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const faqs = ref([
    {
      question: 'Which accounts are eligible for the offer?',
      answer: 'All new CIBC Investor Edge accounts are eligible for this offer, including individual, joint, and registered accounts.'
    },
    {
      question: 'How do I get free trades?',
      answer: 'To get 100 free trades, open a new CIBC Investor Edge account using the promo code EDGE2425 during the offer period.'
    },
    {
      question: 'How do I qualify for cash back, and when is it paid?',
      answer: 'To qualify for cash back, transfer in the minimum required amount within 60 days of account opening. Cash back will be paid within 30 days after the qualification period.'
    },
    {
      question: 'Can I get both free trades and cash back?',
      answer: 'Yes, you can qualify for both free trades and cash back if you meet the requirements for each offer.'
    },
    {
      question: 'Do I have to open a new account to get free trades or cash back?',
      answer: 'Yes, these offers are only available for new CIBC Investor Edge accounts opened during the offer period.'
    }
  ]);
  </script>
  
  <style scoped>
    h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  .faq-section {
    padding: 80px 0;
    background-color: #ffffff;
  }
  
  .accordion-button:not(.collapsed) {
    background-color: #c41e3d;
    color: white;
  }
  
  .accordion-button:focus {
    box-shadow: 0 0 0 0.25rem rgba(196, 31, 62, 0.25);
  }
  
  .accordion-item {
    margin-bottom: 1rem;
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  </style>
  
  