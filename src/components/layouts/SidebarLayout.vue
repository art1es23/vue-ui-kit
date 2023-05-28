<template>
  <div :class="['sidebar', { 'sidebar--active': isOpenedSidebar }]">
    <router-link
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      class="sidebar__link"
      >{{ link.name }}</router-link
    >
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isOpenedSidebar: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const links = ref([
  {
    name: "Typography",
    path: "/typography",
  },
  {
    name: "Buttons",
    path: "/buttons",
  },
  {
    name: "Colors",
    path: "/colors",
  },
  {
    name: "Checkboxes",
    path: "/checkboxes",
  },
  {
    name: "Radio",
    path: "/radio",
  },
  {
    name: "ProgressBar",
    path: "/progress-bar",
  },
  {
    name: "Inputs",
    path: "/inputs",
  },
  {
    name: "Tabs",
    path: "/tabs",
  },
  {
    name: "Table",
    path: "/table",
  },
]);
</script>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  display: flex;
  flex-direction: column;
  z-index: 10;

  &--active {
    transform: translateX(0px);
  }
  &__link {
    transition: 0.2s;
    font-weight: bold;
    padding: 7.5px 10px;
    &:hover {
      color: var(--primary);
    }
  }
}
</style>
