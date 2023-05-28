import { createRouter, createWebHistory } from "vue-router";
import Root from "@/pages/Root.vue";
import Typography from "@/pages/Typography.vue";
import Buttons from "@/pages/Buttons.vue";
import Colors from "@/pages/Colors.vue";
import Checkboxes from "@/pages/Checkboxes.vue";
import Radio from "@/pages/Radio.vue";
import ProgressBar from "@/pages/ProgressBar.vue";
import Inputs from "@/pages/Inputs.vue";
import Tabs from "@/pages/Tabs.vue";
import Table from "@/pages/Table.vue";

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
  {
    path: "/checkboxes",
    name: "checkboxes",
    component: Checkboxes,
  },
  {
    path: "/radio",
    name: "radio",
    component: Radio,
  },
  {
    path: "/progress-bar",
    name: "progress-bar",
    component: ProgressBar,
  },
  {
    path: "/inputs",
    name: "inputs",
    component: Inputs,
  },
  {
    path: "/tabs",
    name: "tabs",
    component: Tabs,
  },
  {
    path: "/table",
    name: "table",
    component: Table,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
