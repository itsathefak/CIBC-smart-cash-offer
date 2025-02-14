<template>
    <div class="dashboard-sidebar" :class="{ 'collapsed': isCollapsed }">
      <div class="sidebar-header">
        <img src="../../assets/cibc.png" alt="CIBC Logo" class="logo">
        <button @click="toggleSidebar" class="toggle-btn">
          <font-awesome-icon :icon="isCollapsed ? 'chevron-right' : 'chevron-left'" />
        </button>
      </div>
      <nav>
        <ul>
          <li v-for="(item, index) in menuItems" :key="index">
            <a :href="item.url" :title="item.text">
              <font-awesome-icon :icon="item.icon" />
              <span class="menu-text">{{ item.text }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faChevronLeft, faChevronRight, faTachometerAlt, faExchangeAlt, faFileInvoiceDollar, faCreditCard, faChartLine, faUserCog } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faChevronLeft, faChevronRight, faTachometerAlt, faExchangeAlt, faFileInvoiceDollar, faCreditCard, faChartLine, faUserCog);
  
  const isCollapsed = ref(false);
  
  const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
    document.body.classList.toggle('sidebar-open', !isCollapsed.value);
  };
  
  const menuItems = [
    { text: 'Dashboard', url: '#', icon: 'tachometer-alt' },
    { text: 'Transfers', url: '#', icon: 'exchange-alt' },
    { text: 'Bill Payments', url: '#', icon: 'file-invoice-dollar' },
    { text: 'Credit Cards', url: '#', icon: 'credit-card' },
    { text: 'Investments', url: '#', icon: 'chart-line' },
    { text: 'Account Settings', url: '#', icon: 'user-cog' },
  ];
  </script>
  
  <style scoped>
  .dashboard-sidebar {
    background-color: #ffffff;
    color: #333333;
    width: 250px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .dashboard-sidebar.collapsed {
    transform: translateX(-190px);
  }
  
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .logo {
    height: 30px;
    transition: all 0.3s ease;
  }
  
  .collapsed .logo {
    opacity: 0;
  }
  
  .toggle-btn {
    background: none;
    border: none;
    color: #333333;
    cursor: pointer;
    font-size: 1.2rem;
    z-index: 10;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li a {
    display: flex;
    align-items: center;
    padding: 1rem;
    color: #333333;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  nav ul li a:hover {
    background-color: rgba(196, 31, 62, 0.1);
    color: #c41f3e;
  }
  
  .menu-text {
    margin-left: 1rem;
    transition: all 0.3s ease;
  }
  
  .collapsed .menu-text {
    opacity: 0;
  }
  
  @media (max-width: 768px) {
    .dashboard-sidebar {
      transform: translateX(-250px);
    }
  
    .dashboard-sidebar.collapsed {
      transform: translateX(0);
    }
  }
  </style>
  
  <style>
  body.sidebar-open {
    overflow: hidden;
  }
  
  @media (max-width: 768px) {
    body.sidebar-open::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }
  }
  </style>
  
  