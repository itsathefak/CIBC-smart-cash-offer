<template>
    <div class="dashboard" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <DashboardHeader @toggle-sidebar="toggleSidebar" />
      <DashboardSidebar ref="sidebar" />
      <main class="main-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8">
              <AccountSummary />
              <InvestmentSummary />
              <RecentTransactions />
            </div>
            <div class="col-lg-4">
              <CreditScoreWidget />
              <QuickActions />
              <UpcomingPayments />
            </div>
          </div>
          <BudgetTracker />
          <OffersBanner />
        </div>
      </main>
      <SecurityAlert />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import DashboardHeader from './DashboardHeader.vue';
  import DashboardSidebar from './DashboardSidebar.vue';
  import AccountSummary from './AccountSummary.vue';
  import RecentTransactions from './RecentTransactions.vue';
  import QuickActions from './QuickActions.vue'
  import OffersBanner from './OffersBanner.vue';
  import SecurityAlert from './SecurityAlerts.vue'
  import UpcomingPayments from './UpcomingPayments.vue'
  import InvestmentSummary from './InvestmentSummary.vue';
  import CreditScoreWidget from './CreditScore.vue'
  import BudgetTracker from './BudgetTracker.vue';
  
  const sidebar = ref(null);
  const isSidebarCollapsed = ref(false);
  
  const toggleSidebar = () => {
    if (sidebar.value) {
      sidebar.value.toggleSidebar();
      isSidebarCollapsed.value = !isSidebarCollapsed.value;
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    background-color: #f5f7fa;
    min-height: 100vh;
  }
  
  .main-content {
    padding-top: 80px; /* Adjust based on your header height */
    padding-left: 250px; /* Adjust based on your sidebar width */
    transition: all 0.3s ease;
  }
  
  .sidebar-collapsed .main-content {
    padding-left: 60px;
  }
  
  @media (max-width: 768px) {
    .main-content {
      padding-left: 0px;
    }
  
    .sidebar-collapsed .main-content {
      padding-left: 0;
    }
  }
  </style>
  
  