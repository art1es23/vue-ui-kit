<template>
  <h1 class="heading-1">Inputs</h1>
  <div class="container container-column">
    <form @submit.prevent="submitForm">
      <Input
        type="text"
        id="firstname"
        label="Your firstname"
        name="firstname"
        placeholder="Input your firstname"
        v-model:value="v.nameField.$model"
        :errors="v.nameField.$errors"
      />
      <Input
        type="email"
        id="email"
        label="Your email"
        name="email"
        placeholder="Input your email"
        v-model:value="v.emailField.$model"
        :errors="v.emailField.$errors"
      />
      <Input
        type="text"
        id="luckyNumber"
        label="Your Lucky Number"
        name="luckyNumber"
        placeholder="Input your Lucky Number"
        v-model:value="v.luckyField.$model"
        :errors="v.luckyField.$errors"
      />
      <Input
        type="password"
        id="password"
        label="Your password"
        name="password"
        placeholder="Input your password"
        v-model:value="passwordField"
      />
      <Input
        type="password"
        id="confirmPassword"
        label="Your confirm password"
        name="confirmPassword"
        placeholder="Input your confirm password"
        v-model:value="v.confirmPasswordField.$model"
        :errors="v.confirmPasswordField.$errors"
      />
      <Input
        type="text"
        id="frontend"
        label="Frontend Field"
        name="frontendField"
        placeholder="Input only frontend"
        v-model:value="v.frontendField.$model"
        :errors="v.frontendField.$errors"
      />

      <Button label="submit" color="primary" />
    </form>
  </div>
</template>

<script setup>
import Input from "../components/inputs/Input.vue";
import Button from "../components/buttons/Button.vue";
import { ref, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  minLength,
  maxLength,
  helpers,
  email,
  numeric,
  sameAs,
} from "@vuelidate/validators";

const nameField = ref("");
const emailField = ref("");
const luckyField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");

const frontendField = ref("");

const mustBeFrontend = (value) => value.includes("frontend");

const submitForm = () => {
  v.value.$touch();

  console.log(v.value.$error);
  if (v.value.$error) return;

  alert("Form Submitted!");
};

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(
      `Минимимальная длина: 3 символа`,
      minLength(3)
    ),
  },

  emailField: {
    email: helpers.withMessage(`Вы ввели неверный емейл`, email),
  },

  luckyField: {
    maxLength: helpers.withMessage(
      `Максимальная длина: 2 символа`,
      maxLength(2)
    ),

    numeric: helpers.withMessage(`Вы можете ввести только числа`, numeric),
  },

  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(
      `Пароли не совпадают`,
      sameAs(passwordField.value)
    ),
  },

  frontendField: {
    frontendField: helpers.withMessage(`Только frontend`, mustBeFrontend),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  luckyField,
  confirmPasswordField,
  frontendField,
});

// console.log(v);
</script>
