<template>
  <h1 class="heading-1">Tabs</h1>
  <div class="container container-column">
    <Tabs
      :tabs="tabsList.list"
      :activeTab="tabsList.activeTab"
      @selectTab="selectTab"
    >
      <div v-if="tabsList.activeTab === 1">Lorem ipsum dolor sit amet.</div>
      <div v-if="tabsList.activeTab === 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corporis
        iusto ipsam dicta consectetur aliquam voluptatem excepturi dolore
        recusandae alias!
      </div>
      <div v-if="tabsList.activeTab === 3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, nesciunt.
      </div>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tabs from "../components/tabs/Tabs.vue";

const tabsList = ref({
  activeTab: 1,
  list: [
    {
      label: "About us",
      id: 1,
    },
    {
      label: "Vue us",
      id: 2,
    },
    {
      label: "React us",
      id: 3,
    },
  ],
});

const selectTab = (id) => (tabsList.value.activeTab = id);
</script>
