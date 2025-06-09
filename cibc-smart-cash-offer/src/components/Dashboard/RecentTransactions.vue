<template>
  <div class="recent-transactions mb-4">
    <h2 class="section-title mb-3">Recent Transactions</h2>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(transaction, index) in transactions" :key="index">
            <td>{{ transaction.date }}</td>
            <td>{{ transaction.description }}</td>
            <td
              :class="transaction.amount < 0 ? 'text-danger' : 'text-success'"
            >
              {{ formatCurrency(transaction.amount) }}
            </td>
            <td>{{ transaction.account }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <a href="#" class="btn btn-primary">View All Transactions</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const transactions = ref([
  {
    date: "2023-05-15",
    description: "Grocery Store",
    amount: -85.5,
    account: "Smart Checking",
  },
  {
    date: "2023-05-14",
    description: "Salary Deposit",
    amount: 2500.0,
    account: "Smart Checking",
  },
  {
    date: "2023-05-13",
    description: "Online Shopping",
    amount: -120.75,
    account: "CIBC Dividend Visa",
  },
  {
    date: "2023-05-12",
    description: "Interest Earned",
    amount: 15.25,
    account: "High Interest Savings",
  },
  {
    date: "2023-05-11",
    description: "Restaurant",
    amount: -65.0,
    account: "CIBC Dividend Visa",
  },
  {
    date: "2023-05-10",
    description: "Movie Ticket",
    amount: -15.0,
    account: "Smart Checking",
  },
  {
    date: "2023-05-09",
    description: "Gift Card Purchase",
    amount: -50.0,
    account: "CIBC Dividend Visa",
  },
  {
    date: "2023-05-08",
    description: "Cash Withdrawal",
    amount: -200.0,
    account: "Smart Checking",
  },
  {
    date: "2023-05-07",
    description: "Bonus Deposit",
    amount: 500.0,
    account: "High Interest Savings",
  },
  {
    date: "2023-05-06",
    description: "Transfer to Savings",
    amount: -300.0,
    account: "Smart Checking",
  },
]);

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(amount);
};
</script>

<style scoped>
.btn-primary {
  background-color: #c41f3e;
  border-color: #c41f3e;
}

.section-title {
  color: #c41f3e;
  font-weight: bold;
}

.btn-primary:hover {
  background-color: #9e1832;
  border-color: #9e1832;
}

.recent-transactions {
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
</style>
