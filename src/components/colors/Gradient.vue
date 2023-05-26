<template>
  <div class="gradient">
    <div
      class="gradient-bg"
      :style="{
        backgroundImage: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
      }"
    ></div>

    <div class="gradient-description">
      <span class="gradient-from-to">{{ gradient.from }}</span>
      <span class="gradient-deg">{{ gradient.deg }}</span>
      <span class="gradient-from-to">{{ gradient.to }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  gradient: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.gradient {
  display: flex;
  flex-direction: column;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 2.5px rgb(0 0 0 / 25%);
  transition: all 0.2s;

  &-bg {
    width: 100%;
    height: 100%;
  }

  &-description {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    // padding: 12px;
  }

  &-from-to {
    text-align: center;
    font-size: 14px;
    padding: 7.5px 12px;
  }

  &-deg {
    color: #bbb;
  }
}
</style>
