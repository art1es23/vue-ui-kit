<template>
  <h1 class="heading-1">Radio Buttons</h1>
  <div class="container container-column">
    <p>Selected item: {{ listRadio.selectedItem }}</p>
    <template v-for="item in listRadio.list" :key="item.id">
      <Radio
        :label="item.label"
        :id="item.id"
        :name="item.name"
        :value="item.value"
        v-model:selectedItem="listRadio.selectedItem"
      />
    </template>
  </div>
  <h2 class="heading-2">State of Radio</h2>
  <div class="container container-column">
    <Radio
      label="Disabled"
      id="Disabled"
      name="Disabled"
      value="Disabled"
      :isDisabled="isDisabled"
      v-model:isChecked="isDisabledChecked"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Radio from "../components/radio/Radio.vue";

const isDisabled = ref(true);
const isDisabledChecked = ref(true);

const listRadio = ref({
  selectedItem: "",
  list: [
    {
      name: "radio",
      id: "radio-1",
      label: "First",
      value: "radio-1",
    },
    {
      name: "radio",
      id: "radio-2",
      label: "Second",
      value: "radio-2",
    },
    {
      name: "radio",
      id: "radio-3",
      label: "Third",
      value: "radio-3",
    },
    {
      name: "radio",
      id: "radio-4",
      label: "Four",
      value: "radio-4",
    },
  ],
});
</script>
