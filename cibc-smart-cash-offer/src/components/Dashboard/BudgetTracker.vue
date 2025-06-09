<template>
  <div class="budget-tracker mb-4">
    <h2 class="section-title mb-3 text-center">Budget Tracker</h2>

    <!-- Budget Overview -->
    <div class="card">
      <div class="card-body">
        <div class="row">
          <!-- Budget and Spending Section -->
          <div class="col-md-6 mb-4">
            <h5>Budget Overview</h5>
            <div class="mb-3">
              <label for="incomeInput" class="form-label">Monthly Income</label>
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input
                  id="incomeInput"
                  type="number"
                  v-model="income"
                  class="form-control"
                  placeholder="Enter your monthly income"
                  min="0"
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="budgetInput" class="form-label">Monthly Budget</label>
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input
                  id="budgetInput"
                  type="number"
                  v-model="budget"
                  class="form-control"
                  placeholder="Enter your budget"
                  @input="updateProgress"
                  min="0"
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="spentInput" class="form-label">Amount Spent</label>
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input
                  id="spentInput"
                  type="number"
                  v-model="spent"
                  class="form-control"
                  placeholder="Enter amount spent"
                  @input="updateProgress"
                  min="0"
                />
              </div>
            </div>

            <!-- Progress Bar -->
            <div class="progress mt-3" style="height: 25px">
              <div
                class="progress-bar"
                role="progressbar"
                :style="{
                  width: `${Math.min(spentPercentage, 100)}%`,
                  backgroundColor: progressBarColor,
                }"
                :aria-valuenow="spentPercentage"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ spentPercentage }}%
              </div>
              <!-- Overspent indicator -->
              <div
                v-if="spentPercentage > 100"
                class="progress-bar progress-bar-overspent"
                :style="{ width: `${Math.min(spentPercentage - 100, 100)}%` }"
              >
                +{{ spentPercentage - 100 }}%
              </div>
            </div>

            <!-- Budget Summary -->
            <div class="budget-summary mt-3">
              <div class="d-flex justify-content-between align-items-center">
                <span
                  ><strong>{{ formatCurrency(spent) }}</strong> spent</span
                >
                <span
                  ><strong>{{ formatCurrency(budget) }}</strong> budget</span
                >
              </div>
              <div class="mt-2 text-center">
                <span class="badge" :class="remainingBadgeClass">
                  <font-awesome-icon :icon="budgetStatusIcon" class="me-1" />
                  {{ budgetStatusText }}
                </span>
              </div>
            </div>
          </div>

          <!-- Spending Categories Section -->
          <div class="col-md-6">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5>Spending Categories</h5>
              <button
                class="btn btn-outline-primary btn-sm"
                @click="sortCategories"
              >
                <font-awesome-icon icon="sort-amount-down" class="me-1" />
                Sort
              </button>
            </div>

            <!-- Category List -->
            <div class="categories-container mb-4" ref="categoriesContainer">
              <div
                v-for="(category, index) in sortedCategories"
                :key="index"
                class="category-item"
                :class="{
                  'category-overspent': isCategoryOverBudget(category),
                }"
              >
                <div v-if="editingIndex === index" class="category-edit-form">
                  <div class="row g-2">
                    <div class="col-6">
                      <input
                        v-model="editingCategory.name"
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Category name"
                      />
                    </div>
                    <div class="col-3">
                      <input
                        v-model="editingCategory.amount"
                        type="number"
                        class="form-control form-control-sm"
                        placeholder="Amount"
                        min="0"
                      />
                    </div>
                    <div class="col-3">
                      <input
                        v-model="editingCategory.budget"
                        type="number"
                        class="form-control form-control-sm"
                        placeholder="Budget"
                        min="0"
                      />
                    </div>
                  </div>
                  <div class="d-flex justify-content-end mt-2">
                    <button
                      class="btn btn-primary btn-sm me-2"
                      @click="saveCategory(index)"
                    >
                      Save
                    </button>
                    <button
                      class="btn btn-outline-secondary btn-sm"
                      @click="cancelEdit"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                <div v-else>
                  <div class="category-info">
                    <span class="category-name">{{ category.name }}</span>
                    <div class="category-amount-container">
                      <span class="category-amount">{{
                        formatCurrency(category.amount)
                      }}</span>
                      <span v-if="category.budget" class="category-budget">
                        / {{ formatCurrency(category.budget) }}
                      </span>
                    </div>
                  </div>
                  <div class="category-progress">
                    <div class="progress" style="height: 8px">
                      <div
                        class="progress-bar category-progress-bar"
                        :style="{
                          width: `${Math.min(
                            getCategoryPercentage(category.amount),
                            100
                          )}%`,
                          backgroundColor: getCategoryProgressColor(category),
                        }"
                      ></div>
                      <!-- Overspent indicator for categories -->
                      <div
                        v-if="
                          category.budget && category.amount > category.budget
                        "
                        class="progress-bar category-progress-overspent"
                        :style="{
                          width: `${Math.min(
                            ((category.amount - category.budget) /
                              category.budget) *
                              100,
                            100
                          )}%`,
                        }"
                      ></div>
                    </div>
                    <small class="text-muted"
                      >{{ getCategoryPercentage(category.amount) }}% of total
                      spending</small
                    >
                  </div>
                  <div class="category-actions">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      @click="editCategory(index)"
                      title="Edit category"
                    >
                      <font-awesome-icon icon="edit" />
                    </button>
                    <button
                      class="btn btn-outline-danger btn-sm"
                      @click="showDeleteConfirm(index)"
                      title="Remove category"
                    >
                      <font-awesome-icon icon="trash" />
                    </button>
                  </div>
                </div>
              </div>

              <!-- Empty state -->
              <div v-if="topCategories.length === 0" class="empty-state">
                <font-awesome-icon icon="chart-pie" class="empty-icon" />
                <p>
                  No spending categories yet. Add your first category below!
                </p>
              </div>
            </div>

            <!-- Add New Category Section -->
            <div class="add-category-section">
              <h6>Add New Category</h6>
              <div class="row g-2">
                <div class="col-6">
                  <input
                    v-model="newCategory.name"
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Category name"
                    @keyup.enter="addCategory"
                  />
                </div>
                <div class="col-3">
                  <input
                    v-model="newCategory.amount"
                    type="number"
                    class="form-control form-control-sm"
                    placeholder="Amount"
                    min="0"
                    @keyup.enter="addCategory"
                  />
                </div>
                <div class="col-3">
                  <input
                    v-model="newCategory.budget"
                    type="number"
                    class="form-control form-control-sm"
                    placeholder="Budget"
                    min="0"
                    @keyup.enter="addCategory"
                  />
                </div>
              </div>
              <div class="row g-2 mt-2">
                <div class="col-8">
                  <button
                    class="btn btn-primary btn-sm w-100"
                    @click="addCategory"
                  >
                    <font-awesome-icon icon="plus" class="me-1" />
                    Add Category
                  </button>
                </div>
                <div class="col-4">
                  <button
                    class="btn btn-outline-secondary btn-sm w-100"
                    @click="clearForm"
                  >
                    <font-awesome-icon icon="times" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete confirmation modal -->
    <div v-if="showDeleteModal" class="delete-modal">
      <div class="delete-modal-content">
        <p>Are you sure you want to remove "{{ categoryToDelete?.name }}"?</p>
        <div class="d-flex justify-content-end">
          <button class="btn btn-danger btn-sm me-2" @click="confirmDelete">
            Delete
          </button>
          <button
            class="btn btn-outline-secondary btn-sm"
            @click="cancelDelete"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="text-center mt-3">
      <button class="btn btn-outline-primary me-2" @click="exportBudget">
        <font-awesome-icon icon="download" class="me-1" />
        Export Budget
      </button>
      <button class="btn btn-outline-secondary" @click="resetBudget">
        <font-awesome-icon icon="refresh" class="me-1" />
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faTrash,
  faPlus,
  faRefresh,
  faExclamationTriangle,
  faCheckCircle,
  faTimesCircle,
  faSortAmountDown,
  faChartPie,
  faTimes,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faEdit,
  faTrash,
  faPlus,
  faRefresh,
  faExclamationTriangle,
  faCheckCircle,
  faTimesCircle,
  faSortAmountDown,
  faChartPie,
  faTimes,
  faDownload
);

// State for budget and spent
const income = ref(6000);
const budget = ref(5000);
const spent = ref(3750);
const sortOrder = ref("desc"); // 'asc' or 'desc'
const topCategories = ref([
  { name: "Groceries", amount: 800, budget: 600 },
  { name: "Utilities", amount: 500, budget: 450 },
  { name: "Entertainment", amount: 300, budget: 400 },
  { name: "Transportation", amount: 450, budget: 500 },
  { name: "Dining Out", amount: 275, budget: 200 },
]);

// New Category state
const newCategory = ref({
  name: "",
  amount: 0,
  budget: 0,
});

// Editing state
const editingIndex = ref(-1);
const editingCategory = ref({
  name: "",
  amount: 0,
  budget: 0,
});

// Delete confirmation state
const showDeleteModal = ref(false);
const deleteIndex = ref(-1);
const categoryToDelete = ref(null);

// Calculate percentage of spent vs budget
const spentPercentage = computed(() => {
  if (budget.value === 0) return 0;
  return Math.round((spent.value / budget.value) * 100);
});

// Calculate remaining budget or overspent amount
const remainingBudget = computed(() => budget.value - spent.value);

// Budget status text
const budgetStatusText = computed(() => {
  if (remainingBudget.value < 0) {
    return `Overspent by ${formatCurrency(Math.abs(remainingBudget.value))}`;
  }
  return `${formatCurrency(remainingBudget.value)} remaining`;
});

// Budget status icon
const budgetStatusIcon = computed(() => {
  if (remainingBudget.value < 0) return "exclamation-triangle";
  if (remainingBudget.value < budget.value * 0.1) return "times-circle";
  return "check-circle";
});

// Progress bar color based on spending percentage
const progressBarColor = computed(() => {
  if (spentPercentage.value >= 100) return "#dc3545"; // Red for overspent
  if (spentPercentage.value >= 90) return "#fd7e14"; // Orange for warning
  if (spentPercentage.value >= 75) return "#ffc107"; // Yellow for caution
  return "#c41f3e"; // CIBC Red for normal
});

// Badge class for remaining budget
const remainingBadgeClass = computed(() => {
  if (remainingBudget.value < 0) return "bg-danger";
  if (remainingBudget.value < budget.value * 0.1) return "bg-warning";
  return "bg-success";
});

// Sorted categories
const sortedCategories = computed(() => {
  return [...topCategories.value].sort((a, b) => {
    return sortOrder.value === "desc"
      ? b.amount - a.amount
      : a.amount - b.amount;
  });
});

// Format currency in CAD
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(amount);
};

// Get category percentage relative to total spent
const getCategoryPercentage = (amount) => {
  if (spent.value === 0) return 0;
  return Math.round((amount / spent.value) * 100);
};

// Get category progress bar color
const getCategoryProgressColor = (category) => {
  if (category.budget && category.amount > category.budget) {
    return "#dc3545"; // Red for overspent
  }
  if (category.budget && category.amount > category.budget * 0.9) {
    return "#ffc107"; // Yellow for warning
  }
  return "#c41f3e"; // CIBC Red for normal
};

// Check if category is over budget
const isCategoryOverBudget = (category) => {
  return category.budget && category.amount > category.budget;
};

// Update progress bar whenever the budget or spent value changes
const updateProgress = () => {
  const totalCategorySpending = topCategories.value.reduce(
    (sum, cat) => sum + cat.amount,
    0
  );
  if (totalCategorySpending > 0) {
    spent.value = totalCategorySpending;
  }
};

// Sort categories
const sortCategories = () => {
  sortOrder.value = sortOrder.value === "desc" ? "asc" : "desc";
};

// Add a new category
const addCategory = () => {
  if (newCategory.value.name.trim() && newCategory.value.amount > 0) {
    const categoryData = {
      name: newCategory.value.name.trim(),
      amount: Number(newCategory.value.amount),
    };

    if (newCategory.value.budget > 0) {
      categoryData.budget = Number(newCategory.value.budget);
    }

    topCategories.value.push(categoryData);
    clearForm();
    updateProgress();
  } else {
    alert("Please provide a valid category name and amount.");
  }
};

// Clear form
const clearForm = () => {
  newCategory.value.name = "";
  newCategory.value.amount = 0;
  newCategory.value.budget = 0;
};

// Edit category - start editing
const editCategory = (index) => {
  // Make sure we're editing the correct category by using the actual index
  const actualIndex = topCategories.value.indexOf(
    sortedCategories.value[index]
  );
  editingCategory.value = { ...sortedCategories.value[index] };
  editingIndex.value = index;
};

// Save edited category
const saveCategory = (index) => {
  if (editingCategory.value.name.trim() && editingCategory.value.amount > 0) {
    // Find the actual index in the original array
    const actualIndex = topCategories.value.indexOf(
      sortedCategories.value[index]
    );

    // Update the category at the correct index
    topCategories.value.splice(actualIndex, 1, { ...editingCategory.value });

    cancelEdit();
    updateProgress();
  } else {
    alert("Please provide a valid category name and amount.");
  }
};

// Cancel editing
const cancelEdit = () => {
  editingIndex.value = -1;
};

// Show delete confirmation
const showDeleteConfirm = (index) => {
  categoryToDelete.value = sortedCategories.value[index];
  deleteIndex.value = index;
  showDeleteModal.value = true;
};

// Confirm delete
const confirmDelete = () => {
  // Find the actual index in the original array
  const actualIndex = topCategories.value.indexOf(categoryToDelete.value);

  if (actualIndex !== -1) {
    topCategories.value.splice(actualIndex, 1);
  }

  cancelDelete();
  updateProgress();
};

// Cancel delete
const cancelDelete = () => {
  showDeleteModal.value = false;
  deleteIndex.value = -1;
  categoryToDelete.value = null;
};

// Export budget data
const exportBudget = () => {
  const data = {
    income: income.value,
    budget: budget.value,
    spent: spent.value,
    categories: topCategories.value,
    date: new Date().toISOString(),
  };

  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `budget-${new Date().toISOString().split("T")[0]}.json`;
  link.click();

  URL.revokeObjectURL(url);
};

// Reset budget
const resetBudget = () => {
  income.value = 6000;
  budget.value = 5000;
  spent.value = 0;
  topCategories.value = [];
};

// Initialize
updateProgress();
</script>

<style scoped>
.budget-tracker {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  position: relative;
}

.section-title {
  color: #c41f3e;
  font-weight: bold;
  font-size: 1.5rem;
}

.progress {
  border-radius: 10px;
  background-color: #f8f9fa;
  position: relative;
  overflow: visible;
}

.progress-bar {
  border-radius: 10px;
  transition: all 0.3s ease;
}

.progress-bar-overspent {
  background-color: #dc3545 !important;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255, 255, 255, 0.2) 10px,
    rgba(255, 255, 255, 0.2) 20px
  );
  animation: overspent-pulse 2s infinite;
}

@keyframes overspent-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.budget-summary {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.categories-container {
  max-height: 400px;
  overflow-y: auto;
  position: relative;
}

.category-item {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
  border-left: 4px solid #c41f3e;
  position: relative;
}

.category-item:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.category-overspent {
  border-left-color: #dc3545;
  background-color: #fff5f5;
}

.category-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.category-name {
  font-weight: 600;
  color: #495057;
}

.category-amount-container {
  text-align: right;
}

.category-amount {
  font-weight: bold;
  color: #c41f3e;
}

.category-budget {
  font-size: 0.875rem;
  color: #6c757d;
}

.category-progress {
  margin-bottom: 0.5rem;
}

.category-progress-bar {
  background-color: #c41f3e !important;
}

.category-progress-overspent {
  background-color: #dc3545 !important;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5px,
    rgba(255, 255, 255, 0.2) 5px,
    rgba(255, 255, 255, 0.2) 10px
  );
}

.category-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.category-edit-form {
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.delete-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.delete-modal-content {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: #6c757d;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.add-category-section {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  border: 2px dashed #dee2e6;
}

.add-category-section h6 {
  color: #6c757d;
  margin-bottom: 0.75rem;
}

.btn-primary {
  background-color: #c41f3e;
  border-color: #c41f3e;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #9e1832;
  border-color: #9e1832;
  transform: translateY(-1px);
}

.btn-outline-primary {
  color: #c41f3e;
  border-color: #c41f3e;
}

.btn-outline-primary:hover {
  background-color: #c41f3e;
  border-color: #c41f3e;
  color: white;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  border-color: #dc3545;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.form-control:focus {
  border-color: #c41f3e;
  box-shadow: 0 0 0 0.2rem rgba(196, 31, 62, 0.25);
}

.badge {
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

.input-group-text {
  background-color: #f8f9fa;
  border-color: #ced4da;
  color: #6c757d;
}

@media (max-width: 768px) {
  .budget-tracker {
    padding: 1rem;
  }

  .category-actions {
    justify-content: center;
    margin-top: 0.5rem;
  }
}
</style>
