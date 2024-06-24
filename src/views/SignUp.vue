<script setup>
import HeaderSignUp from "@/components/HeaderSignUp.vue"
import FormControl from "@/components/FormControl.vue"
import ButtonBlock from "@/components/ButtonBlock.vue"
import LoadingButtonBlock from "@/components/LoadingButtonBlock.vue"
import router from "@/router";
import { useAuthStore } from "@/stores/auth.js"
const { 
  fullName,
  registerEmail,
  registerPassword,
  signUp,
  loading,
} = useAuthStore()

const trigerSignUp = async() => {
  loading.value = true
  const resultSignUp = await signUp()
  loading.value = false
  if(!resultSignUp.isSuccess) {
    alert(resultSignUp.message)
    return
  }
  alert(resultSignUp.message)
  router.push('/')
}
const getEmitFullName = (value) => fullName.value = value
const getEmitRegsiterEmail = (value) => registerEmail.value = value
const getEmitRegisterPassword = (value) => registerPassword.value = value
</script>
<template>
  <div id="sign-up" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center">
      <div class="d-flex">
        <div class="card border-0 shadow">
          <div class="card-body p-4">
            <HeaderSignUp class="mb-4" />
            <form @submit.prevent="trigerSignUp">
              <FormControl
                type="text"
                label="Full Name"
                placeholder="Jhon doe"
                @emit-data-form="getEmitFullName"
              />
              <FormControl
                type="email"
                label="Email Address"
                placeholder="you@example.com"
                @emit-data-form="getEmitRegsiterEmail"
              />
              <FormControl
                type="password"
                label="Password"
                placeholder="Enter 6 character or more"
                @emit-data-form="getEmitRegisterPassword"
              />
              <ButtonBlock v-if="!loading" label="Register" type="submit" class="mt-3" />
              <LoadingButtonBlock v-else label="Login" class="mt-3" />
            </form>
            <div class="text-center mt-3">
              <span>Do you have account ?
                <RouterLink to="/">login here</RouterLink>
              </span>
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
#sign-up {
  height: 100vh;
}
.card {
  width: 100%;
}
span {
  color: grey;
  font-size: 14px;
}
a {
  color: #893dff;
}
</style>