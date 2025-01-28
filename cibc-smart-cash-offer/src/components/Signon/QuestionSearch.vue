<template>
    <div class="question-search">
      <div class="container">
        <h3>Have a Question?</h3>
        <div class="search-box" :class="{ 'active': isActive }">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Type your question here..."
            @focus="isActive = true"
            @blur="isActive = false"
          >
          <button @click="searchQuestion" class="search-button">
            <font-awesome-icon :icon="['fas', 'search']" />
          </button>
        </div>
        <transition name="fade">
          <div v-if="showSuggestions" class="suggestions">
            <p>Popular questions:</p>
            <ul>
              <li v-for="(suggestion, index) in suggestions" :key="index">
                <a href="#" @click.prevent="selectSuggestion(suggestion)">{{ suggestion }}</a>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faSearch } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faSearch);
  
  const searchQuery = ref('');
  const isActive = ref(false);
  const suggestions = [
    'How do I open a new account?',
    'What are the current mortgage rates?',
    'How can I report a lost credit card?',
    'What are the benefits of online banking?'
  ];
  
  const showSuggestions = computed(() => isActive.value && searchQuery.value.length === 0);
  
  const searchQuestion = () => {
    // Implement search functionality here
    console.log('Searching for:', searchQuery.value);
  };
  
  const selectSuggestion = (suggestion) => {
    searchQuery.value = suggestion;
    searchQuestion();
  };
  </script>
  
  <style scoped>
  .question-search {
    background-color: #f5f7fa;
    padding: 4rem 0;
    position: relative;
    overflow: hidden;
  }
  
  .question-search::before,
  .question-search::after {
    content: '';
    position: absolute;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-color: rgba(196, 31, 62, 0.1);
    z-index: 0;
  }
  
  .question-search::before {
    top: -10rem;
    left: -10rem;
    animation: float 8s ease-in-out infinite;
  }
  
  .question-search::after {
    bottom: -10rem;
    right: -10rem;
    animation: float 10s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, -30px); }
  }
  
  h3 {
    text-align: center;
    color: #c41f3e;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    position: relative;
    z-index: 1;
  }
  
  .search-box {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  .search-box.active {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  input {
    flex-grow: 1;
    padding: 1rem 1.5rem;
    border: 2px solid #ccc;
    border-right: none;
    border-radius: 50px 0 0 50px;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  
  input:focus {
    outline: none;
    border-color: #c41f3e;
  }
  
  .search-button {
    background-color: #c41f3e;
    color: #ffffff;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 0 50px 50px 0;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  
  .search-button:hover {
    background-color: #9e1832;
    transform: translateX(5px);
  }
  
  .suggestions {
    max-width: 600px;
    margin: 1rem auto 0;
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }
  
  .suggestions p {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .suggestions ul {
    list-style-type: none;
    padding: 0;
  }
  
  .suggestions li {
    margin-bottom: 0.5rem;
  }
  
  .suggestions a {
    color: #c41f3e;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .suggestions a:hover {
    color: #9e1832;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  
  