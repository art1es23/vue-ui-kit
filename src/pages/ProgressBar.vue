<template>
  <h1 class="heading-1">Progress Bar</h1>
  <h2 class="heading-2">Default Bar</h2>
  <div class="container container-column">
    <ProgressBar :maxWidth="maxWidth" :percent="percentBar" :color="color" />
    <div class="container">
      <Button label="+10%" @click="incPercentToProgress" />
      <Button label="-10%" @click="decPercentFromProgress" />
    </div>
  </div>

  <h2 class="heading-2">Circle Bar</h2>
  <div class="container container-column">
    <ProgressCircle
      :maxWidth="maxWidth"
      :percent="percentCircle"
      :color="color"
    />
    <div class="container">
      <Button label="+10%" @click="incPercentToProgress('circle')" />
      <Button label="-10%" @click="decPercentFromProgress('circle')" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProgressBar from "../components/progress-bar/ProgressBar.vue";
import ProgressCircle from "../components/progress-bar/ProgressCircle.vue";
import Button from "../components/buttons/Button.vue";
const percentBar = ref(40);
const percentCircle = ref(30);
const maxWidth = ref("50%");
const color = ref("danger");

const incPercentToProgress = (type = "default") => {
  if (type === "circle") {
    percentCircle.value =
      percentCircle.value >= 100 ? 100 : percentCircle.value + 10;
  } else {
    percentBar.value = percentBar.value >= 100 ? 100 : percentBar.value + 10;
  }
};
const decPercentFromProgress = (type = "default") => {
  if (type === "circle") {
    percentCircle.value =
      percentCircle.value <= 0 ? 0 : percentCircle.value - 10;
  } else {
    percentBar.value = percentBar.value <= 0 ? 0 : percentBar.value - 10;
  }
};
</script>
