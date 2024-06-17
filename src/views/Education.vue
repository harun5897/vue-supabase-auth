<script setup>
import ButtonBlock from "@/components/ButtonBlock.vue";
import router from "@/router";
import { useDataStore } from "@/stores/index.js";
import { useAuthStore } from "@/stores/auth.js";
const {
  dataEducationLevel,
  selectedEducationLevel,
  selectedSubEducationLevel,
  getSubEducationLevel,
  mutateSelectedEducationLevel,
  mutateSelectedSubEducationLevel,
  validationOnSelectSubEducationLevel,
} = useDataStore();
const { signOut } = useAuthStore()
const trigerSignOut = async() => {
  const resultSignOut =  await signOut()
  if(!resultSignOut.isSuccess) {
    alert(resultSignOut.message) 
    return
  }
  router.push('/')
}
</script>

<template>
  <div id="education">
    <div class="container d-flex justify-content-center mt-5">
      <div class="dropdown">
        <button
          class="btn btn-success dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ selectedEducationLevel.labelEducationLevel }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li v-for="item in dataEducationLevel">
            <span
              @click="mutateSelectedEducationLevel(item.idEducationLevel)"
              class="dropdown-item"
            >
              {{ item.labelEducationLevel }}
            </span>
          </li>
        </ul>
      </div>
      <div class="dropdown ms-4">
        <button
          @click="validationOnSelectSubEducationLevel"
          class="btn btn-danger dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ selectedSubEducationLevel.subLevelLabel }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li v-for="item in getSubEducationLevel">
            <span
              @click="mutateSelectedSubEducationLevel(item.idSubEducationLevel)"
              class="dropdown-item"
              >{{ item.subLevelLabel }}</span
            >
          </li>
        </ul>
      </div>
    </div>
    <ButtonBlock label="SignOut" type="primary" class="mt-3" @click="trigerSignOut" />
  </div>
</template>

<style scoped>
.dropdown-toggle {
  width: 300px;
}
.dropdown-menu {
  width: 100%;
}
</style>
