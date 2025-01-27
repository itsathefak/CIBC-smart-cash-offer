<template>
    <div class="faq-section mb-5 animate__animated animate__fadeIn">
      <h2 class="text-center mb-5">Frequently Asked Questions</h2>
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
  </template>
  
  <script setup>
  const faqs = [
    {
      question: 'What is the annual fee for this card?',
      answer: 'The annual fee for the CIBC Dividend® Visa Infinite* Card is $120, which is waived for the first year.'
    },
    {
      question: 'What is the minimum income requirement?',
      answer: 'You need a minimum annual personal income of $60,000 or a minimum annual household income of $100,000 to be eligible for this card.'
    },
    {
      question: 'How do I redeem my cash back?',
      answer: 'Your cash back is automatically credited to your account once a year in December.'
    },
    {
      question: 'Is there a limit to how much cash back I can earn?',
      answer: 'There is no limit on the total cash back you can earn with this card.'
    },
    {
      question: 'Can I add authorized users to my account?',
      answer: 'Yes, you can add authorized users to your account. Each additional card has an annual fee of $30.'
    }
  ];
  </script>
  
  <style scoped>
  .accordion-button:not(.collapsed) {
    background-color: rgba(196, 31, 62, 0.1);
    color: var(--theme-color);
  }
  
  .accordion-button:focus {
    box-shadow: 0 0 0 0.25rem rgba(196, 31, 62, 0.25);
  }
  
  .accordion-item {
    transition: all 0.3s ease;
  }
  
  .accordion-item:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  </style>
  
  