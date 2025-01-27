<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const drawer = ref(props.modelValue);

const menuItems = ['Personal Banking', 'Business Banking', 'Investing', 'About Us'];

watch(drawer, (newValue) => {
  emit('update:modelValue', newValue);
});

watch(() => props.modelValue, (newValue) => {
  drawer.value = newValue;
});
</script>

