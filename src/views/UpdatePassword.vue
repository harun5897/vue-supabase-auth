<script setup>
import FormControl from "@/components/FormControl.vue"
import ButtonBlock from "@/components/ButtonBlock.vue"
import router from "@/router"
import { useAuthStore } from "@/stores/auth.js";

const { 
  newPassword,
  updatePassword
} = useAuthStore()

const trigerUpdatePassword = async() => {
  const resultUpdatePassword = await updatePassword()
  if(!resultUpdatePassword.isSuccess) {
    alert(resultUpdatePassword.message)
    return
  }
  alert(resultUpdatePassword.message)
  router.push('/')
}
const getEmitPassword = (value) => {
  newPassword.value = value
}
</script>

<template>
  <div id="update-password">
    <div class="container d-flex justify-content-center">
      <div class="mt-5">
        <FormControl label="Password" type="password" placeholder="Password" @emit-data-form="getEmitPassword" />
        <ButtonBlock label="Update Password" @click="trigerUpdatePassword" />
      </div>
    </div>
  </div>
</template>
