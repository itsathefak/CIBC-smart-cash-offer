<template>
    <div class="modal fade" id="applicationModal" tabindex="-1" aria-labelledby="applicationModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="applicationModalLabel">Apply for CIBC Dividend® Visa Infinite* Card</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitApplication">
              <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" v-model="firstName" required>
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" v-model="lastName" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone" v-model="phone" required>
              </div>
              <button type="submit" class="btn btn-theme w-100">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const phone = ref('');
  
  const submitApplication = () => {
    console.log('Application submitted:', { firstName: firstName.value, lastName: lastName.value, email: email.value, phone: phone.value });
    alert('Thank you for your application! We will contact you soon.');
    // Reset form fields
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
  };
  </script>
  
  <style scoped>
  .modal-content {
    border-radius: 15px;
  }
  
  .modal-header {
    background-color: var(--theme-color);
    color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  
  .btn-close {
    color: white;
  }
  
  .form-control:focus {
    border-color: var(--theme-color);
    box-shadow: 0 0 0 0.2rem rgba(196, 31, 62, 0.25);
  }
  
  .btn-theme {
    background-color: var(--theme-color);
    border-color: var(--theme-color);
    transition: all 0.3s ease;
  }
  
  .btn-theme:hover {
    background-color: var(--theme-color-dark);
    border-color: var(--theme-color-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  
  