<template>
    <section class="testimonials-section">
      <div class="container">
        <h2 v-scroll-reveal>Celebrating Client Success Stories</h2>
        <div class="testimonials-carousel" v-scroll-reveal="{ delay: 200 }">
          <button class="nav-button prev" @click="prevTestimonial" :disabled="currentIndex === 0">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </button>
          <div class="testimonial-container">
            <div v-for="testimonial in visibleTestimonials" :key="testimonial.name" class="testimonial-card">
              <img :src="testimonial.image" :alt="testimonial.name" class="testimonial-image">
              <h3>{{ testimonial.name }}</h3>
              <p class="testimonial-role">{{ testimonial.role }}</p>
              <p class="testimonial-text">"{{ testimonial.text }}"</p>
            </div>
          </div>
          <button class="nav-button next" @click="nextTestimonial" :disabled="currentIndex + 2 >= testimonials.length">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faChevronLeft, faChevronRight);
  
  const testimonials = ref([
    {
      name: 'Bianca Nastasi',
      role: 'Co-owner, Health Club Wellness Clinic',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQGCWMISCDfh5w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1663017723290?e=2147483647&v=beta&t=1oAcy9hKygrNsDuXJEg6jdIxbzp8xAv6BAUSsPF8kz4',
      text: 'Bianca offered valuable advice, guided us on strategies to settle our personal loan, and directed us in collecting all the necessary documentation to bolster our business case, thus maximizing our borrowing potential for the business. She was always available to help us and she made the process of securing a business loan so smooth.'
    },
    {
      name: 'Dr. Ben Connolly, ND',
      role: 'President, Cornerstone Naturopathic',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHLPofJT-_z-g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1701349510152?e=2147483647&v=beta&t=0t_JolM02TkVswPYeVFa8nMQYQCjX1QL4ObBTw213g8',
      text: 'Even though Claudine had advised me to keep my mortgage where it was…I realized prioritizing a good relationship with my bank is more important to me over the long term than penalties in the short term. So I decided to pay the penalty to break the mortgage and move my business to CIBC.'
    },
    {
      name: 'Claudine Revert-Gravel',
      role: 'CIBC',
      image: 'https://www.cibc.com/content/dam/cibc-public-assets/business/images/claudine-revert-gravel-portrait.png/_jcr_content/renditions/cq5dam.thumbnail.319.319.png',
      text: 'CIBC\'s business banking services have been instrumental in helping me grow my cafe. Their expert advice and flexible financing options allowed me to expand to a second location faster than I ever thought possible.'
    }
  ]);
  
  const currentIndex = ref(0);
  
  const visibleTestimonials = computed(() => {
    return testimonials.value.slice(currentIndex.value, currentIndex.value + 2);
  });
  
  const nextTestimonial = () => {
    if (currentIndex.value + 2 < testimonials.value.length) {
      currentIndex.value += 1;
    }
  };
  
  const prevTestimonial = () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1;
    }
  };
  </script>
  
  <style scoped>
  .testimonials-section {
    padding: 80px 0;
    background-color: white;
  }
  
  h2 {
    text-align: center;
    color: #c41e3d;
    margin-bottom: 2rem;
  }
  
  .testimonials-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .testimonial-container {
    display: flex;
    gap: 20px;
    overflow: hidden;
    width: calc(50% * 2 + 20px);
  }
  
  .testimonial-card {
    flex: 0 0 calc(50% - 10px);
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .testimonial-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #c41e3d;
  }
  
  .testimonial-role {
    font-size: 0.875rem;
    color: #6c757d;
    margin-bottom: 1rem;
  }
  
  .testimonial-text {
    font-style: italic;
  }
  
  .nav-button {
    background-color: transparent;
    color: #333;
    border: none;
    padding: 10px;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s ease;
    margin: 0 15px;
  }
  
  .nav-button:hover:not(:disabled) {
    color: #c41e3d;
  }
  
  .nav-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>
  
  