<template>
  <div class="budget-tracker mb-4">
    <h2 class="mb-4">Budget Tracker</h2>

    <!-- Budget Overview -->
    <div class="card">
      <div class="card-body">
        <div class="row">
          <!-- Budget and Spending Section -->
          <div class="col-md-6 mb-4">
            <h5>Budget Overview</h5>
            <div>
              <label for="budgetInput">Monthly Budget</label>
              <input
                id="budgetInput"
                type="number"
                v-model="budget"
                class="form-control"
                placeholder="Enter your budget"
                @input="updateProgress"
              />
            </div>
            <div class="mt-3">
              <label for="spentInput">Amount Spent</label>
              <input
                id="spentInput"
                type="number"
                v-model="spent"
                class="form-control"
                placeholder="Enter amount spent"
                @input="updateProgress"
              />
            </div>
            <div class="progress mt-3">
              <div
                class="progress-bar"
                role="progressbar"
                :style="{ width: `${spentPercentage}%` }"
                :aria-valuenow="spentPercentage"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ spentPercentage }}%
              </div>
            </div>
            <p class="mt-2">
              <strong>{{ formatCurrency(spent) }} spent</strong> out of
              <strong>{{ formatCurrency(budget) }} budget</strong>
            </p>
          </div>

          <!-- Spending Categories Section -->
          <div class="col-md-6">
            <h5>Top Spending Categories</h5>
            <!-- Category List -->
            <ul class="list-group mb-4">
              <li
                v-for="(category, index) in topCategories"
                :key="index"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{{ category.name }}</span>
                <div class="d-flex align-items-center">
                  <span class="badge bg-primary rounded-pill">{{
                    formatCurrency(category.amount)
                  }}</span>
                  <button
                    class="btn btn-warning btn-sm ms-2"
                    @click="editCategory(index)"
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-danger btn-sm ms-2"
                    @click="removeCategory(index)"
                  >
                    Remove
                  </button>
                </div>
              </li>
            </ul>
            <!-- Category Add Section -->
            <div class="mb-4">
              <h6>Add a New Category</h6>
              <div class="input-group mb-3">
                <input
                  v-model="newCategory.name"
                  type="text"
                  class="form-control"
                  placeholder="Category Name (e.g. Groceries)"
                />
                <input
                  v-model="newCategory.amount"
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
              </div>
              <button class="btn btn-primary" @click="addCategory">
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Manage Budget Button -->
    <div class="text-center mt-3">
      <button class="btn btn-primary" @click="manageBudget">
        Manage Your Budget
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// State for budget and spent
const budget = ref(5000);
const spent = ref(3750);
const topCategories = ref([
  { name: "Groceries", amount: 800 },
  { name: "Utilities", amount: 500 },
  { name: "Entertainment", amount: 300 },
]);

// New Category state
const newCategory = ref({
  name: "",
  amount: 0,
});

// Calculate percentage of spent vs budget
const spentPercentage = computed(() =>
  Math.round((spent.value / budget.value) * 100)
);

// Format currency in CAD
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(amount);
};

// Update progress bar whenever the budget or spent value changes
const updateProgress = () => {
  if (budget.value === 0) return; // Avoid dividing by zero
  spentPercentage.value = Math.round((spent.value / budget.value) * 100);
};

// Add a new category with both name and amount
const addCategory = () => {
  if (newCategory.value.name && newCategory.value.amount > 0) {
    topCategories.value.push({
      name: newCategory.value.name,
      amount: newCategory.value.amount,
    });
    // Clear input fields after adding
    newCategory.value.name = "";
    newCategory.value.amount = 0;
  } else {
    alert("Please provide a valid category name and amount.");
  }
};

// Edit an existing category
const editCategory = (index) => {
  const newAmount = prompt(
    `Enter new amount for ${topCategories.value[index].name}:`,
    topCategories.value[index].amount
  );
  if (newAmount !== null) {
    topCategories.value[index].amount = parseFloat(newAmount);
  }
};

// Remove a category from the list
const removeCategory = (index) => {
  if (confirm("Are you sure you want to remove this category?")) {
    topCategories.value.splice(index, 1);
  }
};

// Manage budget (Placeholder function)
const manageBudget = () => {
  alert("You can now manage your budget.");
};
</script>

<style scoped>
.budget-tracker {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.progress {
  height: 20px;
}

.progress-bar {
  background-color: #c41f3e;
}

.list-group-item {
  border: none;
  padding: 0.75rem 1rem;
}

.badge {
  background-color: #c41f3e !important;
}

.btn-primary {
  background-color: #c41f3e;
  border-color: #c41f3e;
}

.btn-primary:hover {
  background-color: #9e1832;
  border-color: #9e1832;
}

.btn-warning {
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-danger {
  background-color: #f44336;
  border-color: #f44336;
}

.form-control {
  max-width: 200px;
}

.card-body {
  padding: 1.5rem;
}

.input-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.input-group .form-control {
  width: 45%;
}

.btn-success {
  background-color: #28a745;
  width: 100%;
}

.btn-success:hover {
  background-color: #218838;
}
</style>
