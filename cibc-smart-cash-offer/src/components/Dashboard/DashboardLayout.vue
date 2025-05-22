<template>
    <div class="dashboard-layout">
      <DashboardSidebar />
      <div class="main-content" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
        <DashboardHeader @toggle-sidebar="toggleSidebar" />
        <main>
          <div class="container-fluid">
            <slot></slot>
          </div>
        </main>
      </div>
      <SecurityAlert />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import DashboardHeader from './DashboardHeader.vue';
  import DashboardSidebar from './DashboardSidebar.vue';
  import SecurityAlert from './SecurityAlert.vue';
  
  const isSidebarCollapsed = ref(false);
  
  const toggleSidebar = () => {
    isSidebarCollapsed.value = !isSidebarCollapsed.value;
  };
  </script>
  
  <style scoped>
  .dashboard-layout {
    display: flex;
    min-height: 100vh;
  }
  
  .main-content {
    flex-grow: 1;
    padding-left: 250px; /* Adjust based on your sidebar width */
    transition: padding-left 0.3s ease;
  }
  
  .main-content.sidebar-collapsed {
    padding-left: 60px; /* Adjust based on your collapsed sidebar width */
  }
  
  main {
    padding-top: 60px; /* Adjust based on your header height */
  }
  
  @media (max-width: 768px) {
    .main-content {
      padding-left: 0;
    }
  }
  </style>
  
  