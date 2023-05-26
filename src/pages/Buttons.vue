<template>
  <h1 class="heading-1">Buttons</h1>
  <div class="container">
    <Button label="active" color="primary" />
    <Button label="disabled" isDisabled />
  </div>
  <h2 class="heading-2">Colors</h2>
  <div class="container">
    <Button v-for="btn in btns" :key="btn" :label="btn" :color="btn" />
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="container">
    <Button
      v-for="btn in btns"
      :key="btn"
      :label="btn"
      :color="btn"
      isRounded
    />
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="container">
    <Button
      v-for="btn in btns"
      :key="btn"
      :label="btn"
      :color="btn"
      isOutlined
    />
  </div>

  <h2 class="heading-2">Icons</h2>
  <div class="container">
    <Button
      v-for="(btn, idx) in iconBtns"
      :key="btn.name"
      :color="btn.color"
      :icon="btn.name"
      :isOutlined="idx % 2 === 0"
    />
  </div>

  <h2 class="heading-2">Size</h2>
  <div class="container">
    <Button label="small" color="primary" />
    <Button label="large" color="primary" size="large" />
  </div>

  <h2 class="heading-2">Events</h2>
  <div class="container">
    <Button label="alert" color="warning" @click="clickOnButton" />
  </div>
</template>

<script setup>
import Button from "@/components/buttons/Button.vue";
import { ref } from "vue";

const btns = ref(["primary", "second", "success", "info", "warning", "danger"]);

const iconBtns = ref([
  {
    color: "primary",
    name: "heart",
  },
  {
    color: "second",
    name: "hand",
  },
  {
    color: "success",
    name: "address-book",
  },
  {
    color: "info",
    name: "credit-card",
  },
  {
    color: "warning",
    name: "lemon",
  },
  {
    color: "danger",
    name: "hourglass",
  },
]);

const clickOnButton = () => {
  alert("Greetings, my friend!");
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
