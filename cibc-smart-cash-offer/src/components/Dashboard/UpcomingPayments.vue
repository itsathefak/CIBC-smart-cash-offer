<template>
    <div class="upcoming-payments mb-4">
      <h2 class="mb-3">Upcoming Payments</h2>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Date</th>
              <th>Payee</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(payment, index) in upcomingPayments" :key="index">
              <td>{{ payment.date }}</td>
              <td>{{ payment.payee }}</td>
              <td>{{ formatCurrency(payment.amount) }}</td>
              <td>
                <span :class="['badge', payment.status === 'Scheduled' ? 'bg-warning' : 'bg-success']">
                  {{ payment.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-center">
        <button class="btn btn-primary">Manage Payments</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const upcomingPayments = ref([
    { date: '2023-05-20', payee: 'Hydro Company', amount: 85.50, status: 'Scheduled' },
    { date: '2023-05-22', payee: 'Internet Provider', amount: 79.99, status: 'Scheduled' },
    { date: '2023-05-25', payee: 'Credit Card Company', amount: 500.00, status: 'Scheduled' },
    { date: '2023-05-28', payee: 'Insurance Company', amount: 150.75, status: 'Processed' },
  ]);
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);
  };
  </script>
  
  <style scoped>
  .upcoming-payments {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .table th {
    font-weight: 600;
    color: #495057;
  }
  
  .table td {
    vertical-align: middle;
  }
  
  .btn-primary {
    background-color: #c41f3e;
    border-color: #c41f3e;
  }
  
  .btn-primary:hover {
    background-color: #9e1832;
    border-color: #9e1832;
  }
  </style>
  
  