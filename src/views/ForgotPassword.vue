<script setup>
import FormControl from "@/components/FormControl.vue"
import ButtonBlock from "@/components/ButtonBlock.vue"
import { useAuthStore } from "@/stores/auth.js";

const { 
  emailForgotPassword,
  sendEmailSuccess,
  sendEmailForgotPassword,

} = useAuthStore()

const trigerSendEmail = async() => {
  const resultSendEmailForgotPassword = await sendEmailForgotPassword()
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
        <p v-if="sendEmailSuccess">Please check your email "{{ emailForgotPassword }}" for your password reset link </p>
        <div v-else>
          <form @submit.prevent="trigerSendEmail">
            <FormControl label="Email" type="email" placeholder="you@exmaple.com" @emit-data-form="getEmitEmail" />
            <ButtonBlock label="Send Email" type="submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
