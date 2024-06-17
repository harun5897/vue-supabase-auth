<script setup>
const props = defineProps({
  label: String,
  type: String,
});
</script>

<template>
  <div class="d-grid gap-2">
    <button
      :class="`btn btn-${props.type ?? 'primary'} mt-3 py-2`"
      type="button"
    >
      {{ props.label ?? "Example label" }}
    </button>
  </div>
</template>

<style scoped>
button {
  font-size: 13px;
  font-weight: bold;
}
.btn-primary {
  background-color: #893dff;
  border-color: #893dff;
}
</style>
