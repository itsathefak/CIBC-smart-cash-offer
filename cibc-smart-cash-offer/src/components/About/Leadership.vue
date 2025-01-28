<template>
    <section class="leadership">
      <h2 class="section-title">Our Leadership</h2>
      <div class="leadership-container">
        <div v-for="(leader, index) in leaders" :key="index" class="leader-card" v-scroll-reveal="{ delay: 200 * index }">
          <div class="leader-image">
            <img :src="leader.image" :alt="leader.name" />
          </div>
          <h3>{{ leader.name }}</h3>
          <p class="leader-title">{{ leader.title }}</p>
          <p class="leader-bio">{{ leader.bio }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ScrollReveal from 'scrollreveal';
  
  const leaders = ref([
    {
      name: "Victor G. Dodig",
      title: "President and CEO",
      image: "https://media.licdn.com/dms/image/v2/C5603AQH1bSh0N-Li5Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1574456477144?e=2147483647&v=beta&t=84c1UpumcFtL4T2b4gzEUAKcweahzcaOaXWSeSgGbQk",
      bio: "Victor has been leading CIBC's transformation into a relationship-oriented bank for a modern world since 2014."
    },
    {
      name: "Hratch Panossian",
      title: "Senior Executive Vice-President and CFO",
      image: "https://www.sickkids.ca/siteassets/images/staff-headshots/board-of-trustee-headshots/hratch-panossian-headshot-300.png",
      bio: "Hratch oversees financial governance and reporting, as well as CIBC's corporate strategy and financial planning."
    },
    {
      name: "Christina Kramer",
      title: "Senior Executive Vice-President and Group Head, Technology, Infrastructure and Innovation",
      image: "https://ffnews.com/wp-content/uploads/2021/07/Christina-Kramer-.jpg",
      bio: "Christina leads CIBC's technology and operations teams, driving innovation and digital transformation across the bank."
    }
  ]);
  
  const vScrollReveal = {
    mounted: (el, binding) => {
      ScrollReveal().reveal(el, binding.value);
    }
  };
  </script>
  
  <style scoped>
  .leadership {
    padding: 5rem 0;
    background-color: #f8f9fa;
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--theme-color);
  }
  
  .leadership-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .leader-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    width: calc(33.33% - 2rem);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .leader-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .leader-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1rem;
  }
  
  .leader-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .leader-title {
    color: var(--theme-color);
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .leader-bio {
    font-size: 0.9rem;
  }
  
  @media screen and (max-width: 1024px) {
    .leader-card {
      width: calc(50% - 2rem);
    }
  }
  
  @media screen and (max-width: 600px) {
    .leader-card {
      width: 100%;
    }
  }
  </style>
  
  