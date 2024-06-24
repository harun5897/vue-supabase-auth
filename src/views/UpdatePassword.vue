<script setup>
import FormControl from "@/components/FormControl.vue"
import ButtonBlock from "@/components/ButtonBlock.vue"
import LoadingButtonBlock from "@/components/LoadingButtonBlock.vue"
import router from "@/router"
import { useAuthStore } from "@/stores/auth.js";

const { 
  newPassword,
  confirmNewPassword,
  loading,
  updatePassword,
} = useAuthStore()

const trigerUpdatePassword = async() => {
  loading.value = true
  const resultUpdatePassword = await updatePassword()
  loading.value = false
  if(!resultUpdatePassword.isSuccess) {
    alert(resultUpdatePassword.message)
    return
  }
  alert(resultUpdatePassword.message)
  router.push('/')
}
const getEmitNewPassword = (value) => newPassword.value = value
const getEmitConfirmNewPassword = (value) => confirmNewPassword.value = value
</script>

<template>
  <div id="update-password">
    <div class="container d-flex justify-content-center">
      <div class="mt-5">
        <form @submit.prevent="trigerUpdatePassword">
          <FormControl 
            label="New password" 
            type="password" 
            placeholder="New password" 
            @emit-data-form="getEmitNewPassword" 
          />
          <FormControl 
            label="Connfirm password" 
            type="password" 
            placeholder="Confirm password" 
            @emit-data-form="getEmitConfirmNewPassword" 
          />
          <ButtonBlock v-if="!loading" label="Update Password" type="submit" />
          <LoadingButtonBlock v-else label="Update Password" />
        </form>
      </div>
    </div>
  </div>
</template>
