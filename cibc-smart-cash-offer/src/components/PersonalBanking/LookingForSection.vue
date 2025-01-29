<template>
    <section class="looking-for-section">
      <div class="container">
        <h2>Looking for something specific?</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="category in categories" :key="category.title">
            <div class="category-card">
              <font-awesome-icon :icon="category.icon" class="icon" />
              <h3>{{ category.title }}</h3>
              <ul>
                <li v-for="item in category.items" :key="item">
                  <a href="#">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  const categories = ref([
    {
      icon: ['fas', 'credit-card'],
      title: 'Cards',
      items: ['Credit Cards', 'Debit Cards', 'Prepaid Cards']
    },
    {
      icon: ['fas', 'home'],
      title: 'Buying a home',
      items: ['Mortgages', 'Home Equity Line of Credit', 'Mortgage Calculator']
    },
    {
      icon: ['fas', 'piggy-bank'],
      title: 'Loan or line of credit',
      items: ['Personal Loans', 'Lines of Credit', 'Auto Loans']
    },
    {
      icon: ['fas', 'chart-line'],
      title: 'Building wealth',
      items: ['Investments', 'Retirement Planning', 'Wealth Management']
    },
    {
      icon: ['fas', 'plane-arrival'],
      title: 'New to Canada',
      items: ['Newcomer Banking Package', 'International Student Banking', 'Foreign Currency Accounts']
    },
    {
      icon: ['fas', 'user-graduate'],
      title: 'Banking for students',
      items: ['Student Chequing Account', 'Student Credit Cards', 'Student Line of Credit']
    }
  ]);
  </script>
  
  <style scoped>
  .looking-for-section {
    padding: 4rem 0;
    background-color: #f5f7fa;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #c41e3d;
  }
  
  .category-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 3rem;
    color: #c41e3d;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #c41e3d;
  }
  </style>
  
  