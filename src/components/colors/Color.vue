<template>
  <div class="color">
    <div class="color-bg" :style="{ backgroundColor: colorName }"></div>
    <span class="color-name">{{ colorName }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  colorName: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.color {
  display: flex;
  flex-direction: column;
  height: 100px;
  //   width: 125px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 2.5px rgb(0 0 0 / 25%);

  &-bg {
    width: 100%;
    height: 100%;
  }

  &-name {
    text-align: center;
    font-size: 14px;
    padding: 7.5px 12px;
  }
}
</style>
