<script setup>
import FormControl from "@/components/FormControl.vue"
import ButtonBlock from "@/components/ButtonBlock.vue"
import { supabase } from "@/utils/supabaseConnection.js";
import { ref } from "vue";

const email = ref('')
const sendEmailSuccess = ref(false)

const getEmitEmail = (value) => {
  email.value = value
}
const trigerSendEmail = async() => {
  const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: 'http://localhost:5173/update-password',
  })
  if(error) {
    alert('Email rate limit exceeded')
    return
  }
  sendEmailSuccess.value = true
}
</script>

<template>
  <div id="forgot-password">
    <div class="container d-flex justify-content-center">
      <div class="mt-5">
        <p v-if="sendEmailSuccess">Please check your email "{{ email }}" for your password reset link </p>
        <div v-else>
          <FormControl label="Email" type="email" placeholder="you@exmaple.com" @emit-data-form="getEmitEmail" />
          <ButtonBlock label="Send Email" @click="trigerSendEmail" />
        </div>
      </div>
    </div>
  </div>
</template>
