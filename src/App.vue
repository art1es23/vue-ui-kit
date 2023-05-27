<template>
  <div class="container">
    <div class="sidebar-toggle" @click="toggleSidebar">&#5125;</div>
    <HeaderLayout />
    <SidebarLayout :isOpenedSidebar="isOpenedSidebar" />
  </div>
  <div :class="['content', { content_full: !isOpenedSidebar }]">
    <router-view />
  </div>
</template>

<script setup>
import HeaderLayout from "./components/layouts/HeaderLayout.vue";
import SidebarLayout from "./components/layouts/SidebarLayout.vue";

import { ref } from "vue";

const isOpenedSidebar = ref(false);

const toggleSidebar = () => (isOpenedSidebar.value = !isOpenedSidebar.value);
</script>

<style lang="scss">
@import url("./style.scss");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  // max-width: 1400px;
  margin-left: 250px;
  padding: 75px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  width: 15px;
  background: var(--primary);
  height: 100%;
  top: 62px;
  z-index: 1;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
}

@media screen and (max-width: 1023px) {
  .content {
    margin-left: 0;
  }
}
</style>
