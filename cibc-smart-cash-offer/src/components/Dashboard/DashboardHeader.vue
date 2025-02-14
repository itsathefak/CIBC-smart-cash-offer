<template>
    <header class="dashboard-header">
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container-fluid">
          <button @click="$emit('toggle-sidebar')" class="btn btn-link sidebar-toggle">
            <font-awesome-icon icon="bars" />
          </button>
          <a class="navbar-brand" href="#">
            <img src="../../assets/cibc.png" alt="CIBC Logo" height="30">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <font-awesome-icon icon="bell" />
                  <span class="d-lg-none ms-2">Notifications</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <font-awesome-icon icon="envelope" />
                  <span class="d-lg-none ms-2">Messages</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Avatar" class="rounded-circle" width="32" height="32">
                  <span class="ms-2">John Doe</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="/sign-on">Sign Out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faBars, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faBars, faBell, faEnvelope);
  
  defineEmits(['toggle-sidebar']);
  </script>
  
  <style scoped>
  .dashboard-header {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .sidebar-toggle {
    color: #c41f3e;
    font-size: 1.2rem;
    padding: 0.5rem;
  }
  
  .navbar-nav .nav-link {
    color: #333;
  }
  
  .navbar-nav .nav-link:hover {
    color: #c41f3e;
  }
  
  @media (max-width: 768px) {
    .navbar-brand {
      margin-right: auto;
    }
  }
  </style>
  
  