<template>
    <transition name="fade" mode="out-in">
      <slot></slot>
    </transition>
  </template>
  
  <script setup>
  // No additional script needed
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  
  