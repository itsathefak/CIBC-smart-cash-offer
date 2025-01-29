<template>
    <section class="customer-testimonials animate-on-scroll">
      <h2 class="section-title">What Our Customers Say</h2>
      <div class="testimonials-slider">
        <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="testimonial-content">
            <p class="quote">"{{ testimonial.quote }}"</p>
            <div class="author">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="avatar">
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const testimonials = ref([
    {
      id: 1,
      quote: "CIBC's digital banking solutions have made managing my finances so much easier. I love the convenience and security they provide.",
      name: "Sarah Johnson",
      title: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      quote: "The personalized financial advice I received from CIBC has been invaluable. It's helped me make better decisions for my future.",
      name: "Michael Chen",
      title: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      quote: "I've been a CIBC customer for over 20 years, and their commitment to innovation and customer service never ceases to impress me.",
      name: "Emily Rodriguez",
      title: "Marketing Executive",
      avatar: "https://images.unsplash.com/photo-1517212160285-e9fbf358c905?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);
  </script>
  
  <style scoped>
  .customer-testimonials {
    padding: 5rem 0;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--theme-color);
  }
  
  .testimonials-slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .testimonials-slider::-webkit-scrollbar {
    display: none;
  }
  
  .testimonial {
    flex: 0 0 100%;
    scroll-snap-align: start;
    padding: 2rem;
  }
  
  .testimonial-content {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 2rem;
  }
  
  .quote {
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 1.5rem;
  }
  
  .author {
    display: flex;
    align-items: center;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 1rem;
    object-fit: cover;
  }
  
  .author-info h4 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--theme-color);
  }
  
  .author-info p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
  }
  
  @media screen and (min-width: 768px) {
    .testimonials-slider {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  
    .testimonial {
      padding: 0;
    }
  }
  </style>
  
  