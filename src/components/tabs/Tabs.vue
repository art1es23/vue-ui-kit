<template>
  <div class="tab-nav">
    <span
      v-for="tab in tabs"
      :key="tab.id"
      :class="['tab-nav__item', { selected: tab.id === activeTab }]"
      @click="handlerTab(tab.id)"
      >{{ tab.label }}</span
    >
  </div>
  <div class="tab-content">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },

  activeTab: {
    type: Number,
    required: false,
  },
});

const emits = defineEmits(["selectTab"]);

const handlerTab = (id) => {
  emits("selectTab", id);
};
</script>

<style lang="scss" scoped>
.tab {
  &-nav {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    &__item {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      border-radius: 7px;
      cursor: pointer;
      border: 1px solid var(--primary);
      padding: 0 20px;
      font-size: 15px;
      &:hover {
        background: var(--primary-hover);
        color: #fff;
        transition: 0.2s;
      }
      &.selected {
        background: var(--primary);
        color: #fff;
      }
    }
  }
  &-content {
    padding: 20px;
    border-radius: 7px;
    background: #fff;
  }
}
</style>
