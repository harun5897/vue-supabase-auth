<script setup>
import FormControl from "@/components/FormControl.vue"
import ButtonBlock from "@/components/ButtonBlock.vue"
import LoadingButtonBlock from "@/components/LoadingButtonBlock.vue"
import { useAuthStore } from "@/stores/auth.js";

const { 
  emailForgotPassword,
  sendEmailSuccess,
  loading,
  sendEmailForgotPassword,
} = useAuthStore()

const trigerSendEmail = async() => {
  loading.value = true
  const resultSendEmailForgotPassword = await sendEmailForgotPassword()
  loading.value = false
  if(!resultSendEmailForgotPassword.isSuccess) {
    alert(resultSendEmailForgotPassword.message)
    return
  }
  sendEmailSuccess.value = true
}
const getEmitEmail = (value) => {
  emailForgotPassword.value = value
}
</script>

<template>
  <div id="forgot-password">
    <div class="container d-flex justify-content-center">
      <div class="mt-5">
        <p v-if="sendEmailSuccess">
          Please check your email 
          "{{ emailForgotPassword }}" 
          for your password reset link 
        </p>
        <div v-else>
          <form @submit.prevent="trigerSendEmail">
            <FormControl 
              label="Email" 
              type="email" 
              placeholder="you@exmaple.com" 
              @emit-data-form="getEmitEmail" 
            />
            <ButtonBlock v-if="!loading" label="Send Email" type="submit" />
            <LoadingButtonBlock v-else label="Send Email" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
