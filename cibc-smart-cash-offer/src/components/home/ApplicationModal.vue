<template>
  <div class="modal fade" id="applicationModal" tabindex="-1" aria-labelledby="applicationModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="applicationModalLabel">Apply for a Credit Card</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Success Message -->
          <div v-if="successMessage" class="alert alert-success text-center">
            {{ successMessage }}
          </div>
          
          <!-- Card Selection -->
          <div v-if="!successMessage" class="card-selection text-center mb-4">
            <div v-for="(card, index) in cards" :key="index" class="card-option" @click="selectCard(card)">
              <img :src="card.image" :alt="card.name" class="card-img" :class="{ 'selected': selectedCard.name === card.name }">
              <p>{{ card.name }}</p>
            </div>
          </div>
          
          <h6 v-if="!successMessage" class="text-center">Selected Card:</h6>
          <div v-if="!successMessage" class="selected-card-preview text-center">
            <img v-if="selectedCard.image" :src="selectedCard.image" :alt="selectedCard.name" class="img-fluid">
            <p>{{ selectedCard.name }}</p>
          </div>
          
          <!-- Form -->
          <form v-if="!successMessage" @submit.prevent="submitApplication">
            <div class="mb-3">
              <label for="fullName" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="fullName" v-model="form.fullName" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" v-model="form.email" required>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <input type="tel" class="form-control" id="phone" v-model="form.phone" required>
            </div>
            <div class="mb-3">
              <label for="income" class="form-label">Annual Income</label>
              <input type="number" class="form-control" id="income" v-model="form.income" required>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" v-model="form.address" required>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-theme btn-lg">Submit Application</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

let modalInstance = null;

onMounted(() => {
  modalInstance = new Modal(document.getElementById('applicationModal'), {
    backdrop: 'static',
    keyboard: false
  });
});

const cards = ref([
  {
    name: "CIBC Dividend® Visa Infinite* Card",
    image: "https://www.cibc.com/content/dam/global-assets/card-art/credit-cards/dividend-cards/cibc-dividend-visa-card/cibc-dividend-visa-card-en.png/_jcr_content/renditions/cq5dam.web.1280.1280.png"
  },
  {
    name: "CIBC Aventura® Visa Infinite* Card",
    image: 'https://www.cibc.com/content/dam/global-assets/card-art/credit-cards/aventura-cards/cibc-aventura-visa-infinite-card/cibc-visa-aventura-infinite-en.png/_jcr_content/renditions/cq5dam.web.1280.1280.png',
  },
  {
    name: "CIBC Select Visa* Premium Card",
    image: 'https://www.cibc.com/content/dam/global-assets/card-art/credit-cards/aventura-cards/cibc-aventura-visa-card/cibc-visa-aventura-en.png/_jcr_content/renditions/cq5dam.web.1280.1280.png',
  }
]);

const selectedCard = ref(cards.value[0]);
const form = ref({ fullName: '', email: '', phone: '', income: '', address: '' });
const successMessage = ref('');

const selectCard = (card) => {
  selectedCard.value = card;
};

const submitApplication = () => {
  console.log("Application submitted:", { ...form.value, selectedCard: selectedCard.value });
  
  // Show the success message
  successMessage.value = "Your application has been submitted successfully!";
  
  // Close the modal after 2 seconds
  setTimeout(() => {
    modalInstance.hide();
    // Reset form and success message after modal is closed
    form.value = { fullName: '', email: '', phone: '', income: '', address: '' };
    successMessage.value = '';
  }, 2000);
};

const show = () => {
  if (modalInstance) {
    modalInstance.show();
  }
};

defineExpose({ show });
</script>
  
  <style scoped>
  .card-selection {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  .card-option {
    cursor: pointer;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
  }
  .card-option img {
    width: 100px;
    height: auto;
  }
  .card-option.selected {
    border: 2px solid var(--theme-color);
    background-color: rgba(255, 255, 255, 0.2);
  }
  .selected-card-preview img {
    max-width: 150px;
    margin-bottom: 10px;
  }
  .btn-theme {
  background-color: #c41e3d;
  color: white;
  border-radius: 10px;
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
}

.btn-theme:hover {
  background-color: #8b1c41;
  color: white;
  transform: scale(1.05);
}
  </style>
  