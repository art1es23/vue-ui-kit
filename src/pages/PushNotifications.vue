<template>
  <h1 class="heading-1">Push Notifications</h1>
  <div class="notification-container">
    <Button label="Push me" @click="pushNotification"/>
    
    <PushNotification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    >
    </PushNotification>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PushNotification from "../components/push/PushNotification.vue";
import Button from "../components/buttons/Button.vue";

const notifications = ref([
  {
    id: 1,
    label: "First notification",
    icon: "/public/vite.svg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, eligendi!",
  },
  {
    id: 2,
    label: "Second notification",
    icon: "/public/vite.svg",

    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, eligendi!",
  },
  {
    id: 3,
    label: "Third notification",
    icon: "/public/vite.svg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, eligendi!",
  },
]);
</script>
