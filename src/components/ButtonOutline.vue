<script setup>
const props = defineProps({
  label: String,
  type: String,
});
</script>

<template>
  <div class="d-grid gap-2 w-100">
    <button
      type="button"
      :class="`btn btn-outline-${props.type ?? 'primary'} py-2`"
    >
      {{ props.label ?? "Button" }}
    </button>
  </div>
</template>

<style scoped>
button {
  font-size: 13px;
  font-weight: 500;
}
</style>
