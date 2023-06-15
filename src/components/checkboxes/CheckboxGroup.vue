<template>
  <p>Something like this sijdfksdjfkskdflk</p>
  <div v-for="item in list" :key="item.id">
    <Checkbox
      :label="item.label"
      :id="item.id"
      :name="item.name"
      :value="item.value"
      :isChecked="selectedItems.includes(item.id)"
      isGroup
      @updateCheckboxGroup="handlerGroupCheckbox"
    />
  </div>
</template>
<!-- checkboxGroup -->
<script setup>
import Checkbox from "./Checkbox.vue";

const props = defineProps({
  list: {
    type: Array,
    required: true,
    validator: (item) => {
      const isHasNameKey = item.every((el) => Object.keys(el).includes("name"));
      const isHasIDKey = item.every((el) => Object.keys(el).includes("id"));

      return isHasNameKey && isHasIDKey;
    },
  },

  selectedItems: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits("update:selectedItems");

const handlerGroupCheckbox = ({ checkboxId, isChecked }) => {
  const selectedItems = [...props.selectedItems];
  if (isChecked) {
    selectedItems.push(checkboxId);
  } else {
    selectedItems.splice(selectedItems.indexOf(checkboxId), 1);
  }
  emits("update:selectedItems", selectedItems);
};
</script>
