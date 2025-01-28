<template>
    <div class="intro-page">
      <div class="intro-content">
        <h1 class="intro-title">Welcome to CIBC</h1>
        <p class="intro-subtitle">Discover a world of financial possibilities</p>
        <router-link to="/home" class="intro-get-started-btn">
          Get Started
          <span class="intro-btn-arrow">→</span>
        </router-link>
      </div>
      <div class="intro-animations">
        <svg class="intro-circle" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg class="intro-square" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" />
        </svg>
        <svg class="intro-triangle" viewBox="0 0 100 100">
          <polygon points="50,15 85,85 15,85" />
        </svg>
      </div>
      <div class="intro-floating-images">
        <img src="https://logos-world.net/wp-content/uploads/2021/05/CIBC-Emblem.png" alt="CIBC Logo" class="intro-cibc-logo">
        <img src="https://logos-world.net/wp-content/uploads/2021/05/CIBC-Emblem.png" alt="Credit Card" class="intro-credit-card">
        <img src="https://logos-world.net/wp-content/uploads/2021/05/CIBC-Emblem.png" alt="Mobile Banking" class="intro-mobile-banking">
      </div>
      <div class="intro-background-elements">
        <div v-for="n in 100" :key="n" class="intro-star" :style="{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  let starInterval;
  
  onMounted(() => {
    document.body.classList.add('intro-active');
    animateStars();
  });
  
  onUnmounted(() => {
    clearInterval(starInterval);
  });
  
  const animateStars = () => {
    starInterval = setInterval(() => {
      const stars = document.querySelectorAll('.intro-star');
      const starsToAnimate = Math.floor(Math.random() * 11) + 10; // 10 to 20 stars
      const animatedStars = new Set();
  
      while (animatedStars.size < starsToAnimate) {
        const randomIndex = Math.floor(Math.random() * stars.length);
        if (!animatedStars.has(randomIndex)) {
          stars[randomIndex].style.animation = 'none';
          stars[randomIndex].offsetHeight; // Trigger reflow
          stars[randomIndex].style.animation = 'intro-twinkle 2s';
          animatedStars.add(randomIndex);
        }
      }
    }, 500);
  };
  
  router.beforeEach((to, from, next) => {
    if (from.name === 'Intro' && to.name === 'Home') {
      document.body.classList.add('intro-transition');
      setTimeout(() => {
        document.body.classList.remove('intro-active', 'intro-transition');
        next();
      }, 500);
    } else {
      next();
    }
  });
  </script>
  
  <style scoped>
  .intro-page {
    background: linear-gradient(135deg, #c41e3d, #8b1c41);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  
  .intro-content {
    text-align: center;
    color: white;
    z-index: 10;
  }
  
  .intro-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    animation: intro-fadeInUp 1s ease-out;
  }
  
  .intro-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    animation: intro-fadeInUp 1s ease-out 0.5s both;
  }
  
  .intro-get-started-btn {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    background-color: white;
    color: #c41e3d;
    text-decoration: none;
    border-radius: 50px;
    transition: all 0.3s ease;
    animation: intro-fadeInUp 1s ease-out 1s both;
    position: relative;
    overflow: hidden;
  }
  
  .intro-get-started-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .intro-get-started-btn:hover .intro-btn-arrow {
    transform: translateX(5px);
  }
  
  .intro-btn-arrow {
    display: inline-block;
    margin-left: 5px;
    transition: transform 0.3s ease;
  }
  
  .intro-animations {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  
  .intro-circle, .intro-square, .intro-triangle {
    position: absolute;
    width: 100px;
    height: 100px;
    fill: rgba(255, 255, 255, 0.1);
  }
  
  .intro-circle {
    top: 20%;
    left: 20%;
  }
  
  .intro-square {
    top: 60%;
    right: 20%;
  }
  
  .intro-triangle {
    bottom: 20%;
    left: 50%;
  }
  
  .intro-floating-images img {
    position: absolute;
    width: 150px;
    height: auto;
    animation: intro-float 30s infinite ease-in-out;
  }
  
  .intro-cibc-logo {
    top: 30%;
    left: 10%;
    animation-delay: 1s;
  }
  
  .intro-credit-card {
    bottom: 20%;
    left: 15%;
    animation-delay: 3s;
  }
  
  .intro-mobile-banking {
    top: 15%;
    right: 25%;
    animation-delay: 5s;
  }
  
  .intro-background-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  
  .intro-star {
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: white;
    border-radius: 50%;
    opacity: 0;
  }
  
  @keyframes intro-float {
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(50px, 50px) rotate(5deg); }
    50% { transform: translate(100px, 0) rotate(0deg); }
    75% { transform: translate(50px, -50px) rotate(-5deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
  
  @keyframes intro-fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes intro-twinkle {
    0%, 100% { opacity: 0; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
  }
  
  /* Page Transition */
  .intro-active {
    overflow: hidden;
  }
  
  .intro-transition {
    animation: intro-pageTransition 0.5s ease-in-out;
  }
  
  @keyframes intro-pageTransition {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0.9); opacity: 0; }
  }
  
  @media (max-width: 768px) {
    .intro-title {
      font-size: 2.5rem;
    }
    
    .intro-subtitle {
      font-size: 1.2rem;
    }
    
    .intro-floating-images img {
      width: 100px;
    }
    
    .intro-cibc-logo {
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .intro-credit-card {
      bottom: 20%;
      left: 10%;
    }
    
    .intro-mobile-banking {
      bottom: 20%;
      right: 10%;
    }
    
    .intro-circle, .intro-square, .intro-triangle {
      width: 50px;
      height: 50px;
    }
  }
  </style>
  
  