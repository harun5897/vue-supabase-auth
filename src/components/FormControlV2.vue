<script setup>
import { ref, watch } from "vue"
const props = defineProps({
  label: String,
  labelLink: String,
  linkTo: String,
  type: String,
  placeholder: String,
});
const emit = defineEmits(["emit-data-form"])
const dataForm = ref('')

watch(dataForm, (newDataForm) => {
  emit('emit-data-form', newDataForm)
})
</script>

<template>
  <div id="form-control" class="mb-3">
    <div class="d-flex justify-content-between">
      <label :for="`form-${type}`" class="form-label">
        {{ props.label ?? "Example Label" }}
      </label>
      <RouterLink :to=props.linkTo>
        {{ props.labelLink ?? "Example Link" }}
      </RouterLink>
    </div>
    <input
      :type="props.type ?? 'text'"
      class="form-control py-2 px-3"
      :placeholder="props.placeholder ?? 'Example placeholder'"
      v-model="dataForm"
    />
  </div>
</template>

<style scoped>
#form-control {
  font-size: 14px;
}
label {
  margin-bottom: 2px;
}
a {
  color: #893dff;
}
.form-label {
  font-weight: 500;
}
input::placeholder {
  font-size: 14px;
}
</style>
