<template>
  <teleport to="body">
    <div class="modal fade" id="cardModal" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cardModalLabel">{{ card?.name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <img :src="card?.image" :alt="card?.name" class="img-fluid mb-3 rounded shadow-lg">
              </div>
              <div class="col-md-6">
                <h4 class="mb-4">Key Features:</h4>
                <ul>
                  <li v-for="(feature, index) in card?.features" :key="index">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    {{ feature }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-theme">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>


<script setup>
import { defineProps } from 'vue';

defineProps({
  card: Object
});
</script>

<style scoped>
.modal.fade .modal-dialog {
  transform: translateY(-50px);
  transition: transform 0.3s ease-out;
}

.modal.show .modal-dialog {
  transform: translateY(0);
}

.modal-content {
  border-radius: 15px;
  border: none;
}

.modal-header {
  background: linear-gradient(135deg, #8b1c41, #c41e3d);
  color: white;
}

.modal-title {
  font-weight: bold;
  font-size: 1.25rem;
}

.modal-body {
  background: #f8f9fa;
  padding: 20px;
}

.modal-footer {
  background: #f8f9fa;
  border-top: 1px solid #ddd;
}

.btn-theme {
  background-color: #c41e3d;
  color: white;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.btn-theme:hover {
  background-color: #8b1c41;
  transform: scale(1.05);
}
</style>
