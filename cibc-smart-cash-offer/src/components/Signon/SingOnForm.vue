<template>
  <div class="sign-on-form">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="cardNumber">Card number</label>
        <input 
          type="text" 
          id="cardNumber" 
          v-model="cardNumber" 
          @input="formatCardNumber"
          placeholder="Enter your 16-digit card number"
          maxlength="19"
          required
        >
      </div>
      <div class="form-group form-check">
        <input type="checkbox" id="rememberMe" v-model="rememberMe">
        <label for="rememberMe">Remember my card</label>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <div class="password-input">
          <input 
            :type="showPassword ? 'text' : 'password'" 
            id="password" 
            v-model="password" 
            placeholder="Enter your password"
            required
          >
          <button type="button" @click="togglePassword" class="btn-show-password">
            {{ showPassword ? 'Hide' : 'Show' }} password
          </button>
        </div>
      </div>
      <div class="form-links">
        <a href="#" @click.prevent="showForgotPassword">Reset your password</a>
        <a href="#" @click.prevent="showRegister">Register</a>
      </div>
      <button type="submit" class="btn-sign-on">Sign on</button>
    </form>
    <div class="security-note">
      <i class="fas fa-lock"></i> Security guaranteed
      <a href="#" class="link-agreement">Electronic access agreement</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter

const router = useRouter(); // Initialize the router

const cardNumber = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);

const formatCardNumber = (event) => {
  let value = event.target.value.replace(/\s/g, '').replace(/\D/g, '');
  let formattedValue = '';
  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += ' ';
    }
    formattedValue += value[i];
  }
  cardNumber.value = formattedValue;
};

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted', { cardNumber: cardNumber.value, password: password.value, rememberMe: rememberMe.value });
  
  // Redirect to /dashboard route after successful sign-on
  router.push('/dashboard');
};

const showForgotPassword = () => {
  // Show forgot password modal or navigate to forgot password page
  console.log('Show forgot password');
};

const showRegister = () => {
  // Show register modal or navigate to register page
  console.log('Show register');
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
  
  <style scoped>
  .sign-on-form {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-left: 2rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  .form-check {
    display: flex;
    align-items: center;
  }
  
  .form-check input {
    margin-right: 0.5rem;
  }
  
  .password-input {
    position: relative;
  }
  
  .btn-show-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #c41f3e;
    cursor: pointer;
  }
  
  .form-links {
    margin-bottom: 1rem;
  }
  
  .form-links a {
    display: block;
    color: #c41f3e;
    text-decoration: none;
    margin-bottom: 0.5rem;
  }
  
  .btn-sign-on {
    background-color: #c41f3e;
    color: #ffffff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .btn-sign-on:hover {
    background-color: #9e1832;
    transform: translateY(-2px);
  }
  
  .security-note {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #666;
  }
  
  .security-note i {
    color: #c41f3e;
    margin-right: 0.5rem;
  }
  
  .link-agreement {
    color: #c41f3e;
    text-decoration: none;
    margin-left: 0.5rem;
  }
  
  .link-agreement:hover {
    text-decoration: underline;
  }
  </style>
  
  