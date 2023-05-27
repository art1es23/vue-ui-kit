<template>
  <h1 class="heading-1">Tabs</h1>
  <div class="container">
    <Tabs :tabs="tabsList" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tabs from "../components/tabs/Tabs.vue";
</script>
