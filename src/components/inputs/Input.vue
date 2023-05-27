<template>
  <div class="form-input" :style="{ width: width }">
    <input
      :type="type"
      :name="name"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      class="input-text"
      @input="updateValue($event)"
    />

    <label :for="id" class="input-label">{{ label }}</label>
    <transition-group>
      <div v-for="err in errors" :key="err.$uid" class="form-error">
        <div class="form-error__message">{{ err.$message }}</div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
const props = defineProps({
  errors: {
    type: Array,
    required: false,
  },
  type: {
    type: String,
    required: true,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    required: true,
    default: "",
  },
  id: {
    type: String,
    required: true,
    default: "",
  },
  placeholder: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "300px",
  },
});

const emits = defineEmits(["update:value"]);

const updateValue = (e) => {
  emits("update:value", e.target.value);
};
</script>

<style lang="scss" scoped>
.form {
  &-input {
    margin-bottom: 30px;
    position: relative;
  }
  &-error {
    background: var(--danger);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
}
.input {
  &-text {
    border: 1px solid var(--primary);
    padding: 0 10px;
    height: 40px;
    border-radius: 7px;
    font-size: 15px;
    width: 100%;
    position: relative;
    z-index: 1;
    &:focus {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
    &:not(:placeholder-shown) {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
  }
  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    opacity: 0;
    z-index: -1;
    transition: 0.3s;
    font-size: 13px;
    color: var(--primary);
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
