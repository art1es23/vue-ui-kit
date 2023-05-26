<template>
  <h1 class="heading-1">Colors</h1>

  <div class="container">
    <div
      v-for="(section, idx) in colorSection"
      :key="section.name"
      :class="['section-color', `section-color-${idx + 1}`]"
    >
      <h2 class="heading-2">{{ section.name }}</h2>
      <div class="section-color-content">
        <Color
          v-for="color in section.colors"
          :key="color"
          :colorName="color"
        />
      </div>
    </div>

    <div class="section-gradient">
      <h2 class="heading-2">Gradients</h2>

      <Gradient
        v-for="gradient in gradientBlocks"
        :key="gradient.name"
        :gradient="gradient"
        class="section-gradient__item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Color from "../components/colors/Color.vue";
import Gradient from "../components/colors/Gradient.vue";

const colorSection = ref([
  {
    name: "Primary colors",
    colors: ["#BE52F2", "#DBA5F5", "#EEDFF2"],
  },
  {
    name: "Accent colors",
    colors: ["#6979F8", "#A5AFFB", "#E5E7FA"],
  },
  {
    name: "Semantic colors",
    colors: [
      "#FFCF5C",
      "#FFE29D",
      "#FFF8E7",
      "#FFA26B",
      "#FFC7A6",
      "#FFE8DA",
      "#0084F4",
      "#66B5F8",
      "#D5E9FA",
      "#00C48C",
      "#7DDFC3",
      "#D5F2EA",
      "#FF647C",
      "#FDAFBB",
      "#FBE4E8",
    ],
  },
  {
    name: "Neutral colors",
    colors: ["#1A051D", "#3F3356", "#D0C9D6", "#ECE9F1", "#F7F5F9", "#FFFFFF"],
  },
]);

const gradientBlocks = ref([
  {
    name: "Purple",
    from: "#BD7AE3",
    to: "#8461C9",
    deg: "45º",
  },
  {
    name: "Blue-Sky",
    from: "#CDDDF4",
    to: "#CDBAFA",
    deg: "45º",
  },
]);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px 80px;
  //   justify-content: space-between;
}

.section-color {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &-1,
  &-2 {
    // width: calc(50% - 20px);
    width: auto;
  }

  &-content {
    display: flex;
    width: 100%;
    gap: 30px;
    flex-wrap: wrap;
    flex-grow: 1;
  }
}

.section-gradient {
  width: 100%;
  display: flex;
  gap: 10px 80px;
  flex-wrap: wrap;
  justify-content: space-between;
  transition: all 0.2s;

  &__item {
    width: calc(50% - 40px);
  }
}
</style>
