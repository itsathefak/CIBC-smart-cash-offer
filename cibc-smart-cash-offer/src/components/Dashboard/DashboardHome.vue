<template>
    <div class="dashboard-home">
      <h1 class="mb-4">Welcome to Your Dashboard</h1>
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
  </template>
  
  <script setup>
  import AccountSummary from './AccountSettings.vue';
  import InvestmentSummary from './InvestmentSummary.vue';
  import RecentTransactions from './RecentTransactions.vue';
  import CreditScoreWidget from './CreditScoreWidget.vue';
  import QuickActions from './QuickActions.vue';
  import UpcomingPayments from './UpcomingPayments.vue';
  import BudgetTracker from './BudgetTracker.vue';
  import OffersBanner from './OffersBanner.vue';
  </script>
  
  