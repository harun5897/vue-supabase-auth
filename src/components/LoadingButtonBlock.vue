<script setup>
const props = defineProps({
  label: String,
  buttonStyle: String,
});
</script>

<template>
  <div class="d-grid gap-2">
    <button 
      :class="`btn btn-${props.buttonStyle ?? 'primary'} py-2`" 
      type="button" disabled>
        <span 
          class="spinner-grow spinner-grow-sm" 
          role="status" 
          aria-hidden="true">
        </span>
        {{ props.label ?? "Loading..." }}
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