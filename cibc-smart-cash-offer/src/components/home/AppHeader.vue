<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/home">
        <img src="../../assets/cibc.png" alt="CIBC Logo" height="30">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/personal-banking">Personal Banking</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/business-banking">Business Banking</router-link>
          </li>
          <li class="nav-item" v-for="item in menuItems" :key="item">
            <router-link v-if="item === 'About Us'" class="nav-link" to="/about">{{ item }}</router-link>
            <a v-else class="nav-link" href="#">{{ item }}</a>
          </li>
        </ul>
        <router-link v-if="!isSignedIn" to="/sign-on">
          <button class="btn btn-theme ms-3">Sign On</button>
        </router-link>
        <button v-else @click="signOut" class="btn btn-theme ms-3">Sign Out</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const menuItems = [ 'Investing', 'About Us'];
const isSignedIn = ref(false);

const signOut = () => {
  isSignedIn.value = false;
  // Add any additional sign-out logic here (e.g., clearing user data)
  router.push('/home'); // Redirect to home page after sign-out
};

// Function to update sign-in status
const updateSignInStatus = (status) => {
  isSignedIn.value = status;
};

defineExpose({ updateSignInStatus });
</script>

<style scoped>
.navbar-nav .nav-link {
  position: relative;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--theme-color);
  transition: width 0.3s ease;
}

.navbar-nav .nav-link:hover::after {
  width: 100%;
}

.btn-theme {
  background-color: var(--theme-color);
  border-color: var(--theme-color);
  color: white;
  transition: all 0.3s ease;
}

.btn-theme:hover {
  background-color: var(--theme-color-dark);
  color: white;
  border-color: var(--theme-color-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>

