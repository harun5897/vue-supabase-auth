<script setup>
import FormCheck from "@/components/FormCheck.vue";
import FormControl from "@/components/FormControl.vue";
import FormControlV2 from "@/components/FormControlV2.vue";
import ButtonBlock from "@/components/ButtonBlock.vue";
import HeaderSignIn from "@/components/HeaderSignIn.vue";
import ButtonOutline from "@/components/ButtonOutline.vue";
import router from "@/router";
import { useAuthStore } from "@/stores/auth.js";
import { onMounted } from "vue"

const { 
  signInPasswordEmail, 
  signInFacebook,
  signInGoogle, 
  email, 
  password 
} = useAuthStore()

const trigerSignInPasswordEmail = async () => {
  const resultSignInPasswordEmail = await  signInPasswordEmail()
  if(!resultSignInPasswordEmail.isSuccess) {
    alert(resultSignInPasswordEmail.message)
    return
  }
  router.push("/education");
}
const trigerSignInFacebook = async () => {
  const resultSignInFacebook = await signInFacebook()
  if(!resultSignInFacebook.isSuccess) {
    alert(resultSignInFacebook.message)
    return
  }
  window.location.replace(resultSignInFacebook.data)
}
const trigerSignInGoogle = async () => {
  const resultSignInGoogle = await signInGoogle()
  if(!resultSignInGoogle.isSuccess) {
    alert(resultSignInGoogle.message)
    return
  }
  window.location.replace(resultSignInGoogle.data)
}

const getEmitEmail = (value) => {
  email.value = value
}
const getEmitPassword = (value) => {
  password.value = value
}

onMounted(async()=> {
  if(window.location.hash) {
    const hash = window.location.hash.substring(1)
    if(hash.includes('access_token')) {
      router.push('/education')
    } else {
      alert('Invalid login with facebook')
    }
  }
})
</script>

<template>
  <div id="sign-in" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center">
      <div class="d-flex">
        <div class="card border-0 shadow">
          <div class="card-body p-4">
            <HeaderSignIn class="mb-4" />
            <form @submit.prevent="trigerSignInPasswordEmail">
              <FormControl
                type="email"
                label="Email Address"
                placeholder="you@example.com"
                @emit-data-form="getEmitEmail"
              />
              <FormControlV2
                type="password"
                label="Password"
                labelLink="Forgot Password"
                linkTo="/forgot-password"
                placeholder="Enter 6 character or more"
                @emit-data-form="getEmitPassword"
              />
              <FormCheck label="Remember me" />
              <ButtonBlock label="Login" type="submit" class="mt-3" />
            </form>
            <div class="text-center mt-3">
              <span>or login with</span>
            </div>
            <div class="d-flex justify-content-center mt-3 mb-3">
              <ButtonOutline 
                @click="trigerSignInGoogle" 
                label="Google" 
                type="danger" 
                class="me-2" 
              />
              <ButtonOutline 
                @click="trigerSignInFacebook" 
                label="Facebook" 
                type="primary" 
                class="me-2" 
              />
            </div>
          </div>
        </div>
        <div class="hero-sign-in">
          <img src="@/assets/login.png" alt="" width="550" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#sign-in {
  height: 100vh;
}
.card {
  width: 100%;
}
span {
  color: grey;
  font-size: 14px;
}
</style>
