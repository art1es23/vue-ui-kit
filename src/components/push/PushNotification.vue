<template>
  <div class="notification" :data-id="notification.id">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  notification: Object,
});
</script>
