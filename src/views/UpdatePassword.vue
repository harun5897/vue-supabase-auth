<script setup>
import FormControl from "@/components/FormControl.vue"
import ButtonBlock from "@/components/ButtonBlock.vue"
import { supabase } from "@/utils/supabaseConnection.js";
import { ref } from "vue";

const password = ref('')

const getEmitPassword = (value) => {
  password.value = value
}
const trigerUpdatePassword = async() => {
  const { data, error } = await supabase.auth.updateUser({ password: password.value })

  console.log('data => ', data)
  console.log('error => ', error)
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
