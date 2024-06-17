<script setup>
const props = defineProps({
  label: String,
});
</script>

<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label class="form-check-label" for="flexCheckDefault">
      {{ props.label ?? "Example Label" }}
    </label>
  </div>
</template>

<style scoped>
label {
  margin-bottom: 2px;
  color: grey;
  font-size: 14px;
}
</style>
