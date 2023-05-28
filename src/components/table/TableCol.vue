<template>
  <div class="table-column">
    <span v-if="columnTitle" class="table-column__title"
      >{{ columnTitle }}:</span
    >
    <slot v-if="!isImg"></slot>
    <img v-else :src="srcImg" :alt="altImg" class="table-column-image" />
  </div>
</template>

<script setup>
const props = defineProps({
  isImg: {
    type: Boolean,
    required: false,
  },
  srcImg: {
    type: String,
    required: false,
  },
  altImg: {
    type: String,
    required: false,
  },
  columnTitle: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.table-column {
  padding: 15px 0;
  position: relative;
  &-image {
    max-width: 100%;
    @media screen and (max-width: 767px) {
      max-width: 200px;
    }
  }
  &__title {
    margin-right: 5px;
    display: none;
    @media screen and (max-width: 767px) {
      display: inline-block;
    }
  }
}
</style>
