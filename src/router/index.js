import { createRouter, createWebHistory } from "vue-router";
import Root from "@/pages/Root.vue";
import Typography from "@/pages/Typography.vue";
import Buttons from "@/pages/Buttons.vue";
import Colors from "@/pages/Colors.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: Root,
  },

  {
    path: "/typography",
    name: "typography",
    component: Typography,
  },
  {
    path: "/buttons",
    name: "buttons",
    component: Buttons,
  },
  {
    path: "/colors",
    name: "colors",
    component: Colors,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
