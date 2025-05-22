<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <transition name="modal-scale-fade">
      <div class="modal-content">
        <button class="modal-close" @click="close">×</button>
        <!-- bind a class when mapLoaded is true -->
        <div
          id="modal-map"
          class="mapbox-container"
          :class="{ 'map-loaded': mapLoaded }"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import mapboxgl from "mapbox-gl";

const props = defineProps({ modelValue: Boolean });
const emit = defineEmits(["update:modelValue"]);
const visible = ref(false);

// track when map has finished loading
const mapLoaded = ref(false);

const branches = [
  { name: "CIBC Downtown Toronto", coords: [-79.3832, 43.6532] },
  { name: "CIBC Yonge & Eglinton", coords: [-79.3985, 43.7076] },
  { name: "CIBC Mississauga Central", coords: [-79.6441, 43.589] },
];

let mapInstance = null;

watch(
  () => props.modelValue,
  async (open) => {
    visible.value = open;

    if (!open) {
      // on close: destroy map and reset flag
      if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
      }
      mapLoaded.value = false;
      return;
    }

    // on open: mount fresh map
    await nextTick();
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    mapInstance = new mapboxgl.Map({
      container: "modal-map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: branches[0].coords,
      zoom: 10,
    });

    // when the style & tiles have loaded, trigger our fade-in
    mapInstance.on("load", () => {
      mapLoaded.value = true;
    });

    // add markers
    branches.forEach((b) => {
      new mapboxgl.Marker()
        .setLngLat(b.coords)
        .setPopup(new mapboxgl.Popup().setText(b.name))
        .addTo(mapInstance);
    });
  },
  { immediate: true }
);

function close() {
  emit("update:modelValue", false);
}
</script>

<style scoped>
/* backdrop */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* content card */
.modal-content {
  position: relative;
  width: 90%;
  max-width: 800px;
  height: 80%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #333;
  z-index: 1001;
}

/* map container: hidden initially */
.mapbox-container {
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

/* when mapLoaded flips true, fade & scale up */
.mapbox-container.map-loaded {
  opacity: 1;
  transform: scale(1);
}

/* modal content animation */
.modal-scale-fade-enter-active,
.modal-scale-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.modal-scale-fade-enter-from,
.modal-scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.modal-scale-fade-enter-to,
.modal-scale-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
