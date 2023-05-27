<template>
  <h1 class="heading-1">Checkboxes</h1>
  <h2 class="heading-2">Active</h2>
  <div class="container container-column">
    <Checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="1"
      v-model:isChecked="isChecked"
    />
    <Checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="1"
      :isDisabled="isDisabled"
      v-model:isChecked="isDisabledChecked"
    />
  </div>

  <h2 class="heading-2">Checkbox Group</h2>
  <div class="container container-column">
    <p>Selected Items: {{ listCheckboxes.selectedItems }}</p>
    <CheckboxGroup
      :list="listCheckboxes.list"
      v-model:selectedItems="listCheckboxes.selectedItems"
    />
  </div>

  <h2 class="heading-2">Switch</h2>
  <div class="container container-column">
    <p>State: {{ isSwitched }}</p>
    <Checkbox
      label="Switch"
      id="switch"
      name="switch"
      value="switch"
      v-model:isChecked="isSwitched"
      type="switch"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Checkbox from "../components/checkboxes/Checkbox.vue";
import CheckboxGroup from "../components/checkboxes/CheckboxGroup.vue";

const isChecked = ref(true);
const isDisabled = ref(true);
const isDisabledChecked = ref(true);
const isSwitched = ref(true);

const listCheckboxes = ref({
  selectedItems: [],
  list: [
    {
      name: "CheckboxGroup",
      id: "checkbox-1",
      label: "First",
      value: "checkbox-1",
    },
    {
      name: "CheckboxGroup",
      id: "checkbox-2",
      label: "Second",
      value: "checkbox-2",
    },
    {
      name: "CheckboxGroup",
      id: "checkbox-3",
      label: "Third",
      value: "checkbox-3",
    },
    {
      name: "CheckboxGroup",
      id: "checkbox-4",
      label: "Four",
      value: "checkbox-4",
    },
  ],
});
</script>
