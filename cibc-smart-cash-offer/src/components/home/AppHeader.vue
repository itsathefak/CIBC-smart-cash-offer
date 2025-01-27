<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../../assets/cibc.png" alt="CIBC Logo" height="30">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-for="item in menuItems" :key="item">
              <a class="nav-link" href="#">{{ item }}</a>
            </li>
          </ul>
          <button class="btn btn-theme ms-3">Sign On</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  const menuItems = ['Personal Banking', 'Business Banking', 'Investing', 'About Us'];
  </script>
  
  <style scoped>
  .navbar-nav .nav-link {
    position: relative;
    transition: color 0.3s ease;
  }
  
  .navbar-nav .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--theme-color);
    transition: width 0.3s ease;
  }
  
  .navbar-nav .nav-link:hover::after {
    width: 100%;
  }
  
  .btn-theme {
    background-color: var(--theme-color);
    border-color: var(--theme-color);
    color: white;
    transition: all 0.3s ease;
  }
  
  .btn-theme:hover {
    background-color: var(--theme-color-dark);
    border-color: var(--theme-color-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  
  