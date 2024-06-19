import { z } from "zod";
import { ref } from "vue";
import { supabase } from "@/utils/supabaseConnection.js";

export const useAuthStore = () => {
  const email = ref('')
  const password = ref('')
  const emailForgotPassword = ref('')
  const newPassword = ref('')
  const confirmNewPassword = ref('')
  const sendEmailSuccess = ref(false)   

  const signInPasswordEmail = async() => {
    const FormSchema = z.object({
      email: z.string().email({ message: "Invalid email address" }),
      password: z.string().min(5, { message: "Must be 6 or more characters long" })
    })
    const resultFormValidation = FormSchema.safeParse({
      email: email.value,
      password: password.value
    })
    if(!resultFormValidation.success) {
      const errorFormValidation = resultFormValidation.error.errors[0]
      return {
        isSuccess: false,
        data: '',
        message: `${errorFormValidation.path[0]}, ${errorFormValidation.message}`
      }
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if(error) {
      return {
        isSuccess: false,
        data: '',
        message: 'Invalid login, please check your email and password'
      }
    }
    return {
      isSuccess: true,
      data: '',
      message: 'Login is success'
    }
  }
  const signInFacebook = async() => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: import.meta.env.VITE_SUPABSE_OAUTH,
        skipBrowserRedirect: true,
      },
    });
    if(error) {
      return {
        isSuccess: false,
        data: '',
        message: 'Invalid login'
      }
    }
    return {
      isSuccess: true,
      data: data.url,
      message: 'Login with facebook is success'
    }
  }
  const signInGoogle = async() => {
    const { data, error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: import.meta.env.VITE_SUPABSE_OAUTH,
        skipBrowserRedirect: true,
      }
    })
    if(error) {
      return {
        isSuccess: false,
        data: '',
        message: 'Invalid login'
      }
    }
    return {
      isSuccess: true,
      data: data.url,
      message: 'Login with google is success'
    }
  }
  const signOut = async() => {
    const { error } = await supabase.auth.signOut()
    if(error) {
      return {
        isSuccess: false,
        data: '',
        message: error.message
      }
    }
    return {
      isSuccess: true,
      data: '',
      message: 'Sign out is success'
    }
  }
  const sendEmailForgotPassword = async() => {
    const FormSchema = z.object({ email: z.string().email({ message: "Invalid email address" }) })
    const resultFormValidation = FormSchema.safeParse({ email: emailForgotPassword.value })
    if(!resultFormValidation.success) {
      const errorFormValidation = resultFormValidation.error.errors[0]
      return {
        isSuccess: false,
        data: '',
        message: `${errorFormValidation.path[0]}, ${errorFormValidation.message}`
      }
    }
    const { error } = await supabase.auth.resetPasswordForEmail(emailForgotPassword.value, {
      redirectTo: `${import.meta.env.VITE_BASE_URL}/update-password`,
    })
    if(error) {
      return {
        isSuccess: false,
        data: '',
        message: error.message
      }
    }
    return {
      isSuccess: true,
      data: '',
      message: 'Send email is success'
    }
  }
  const updatePassword = async() => {
    const FormSchema = z.object({
      newPassword: z.string()
      .min(6, { message: "Must be 6 or more characters long" })
      .max(15, { message: "Must be 15 or fewer characters long" })
      .regex(new RegExp('.*[A-Z].*'), { message: "Must be including uppercase" })
      .regex(new RegExp('.*[a-z].*'), { message: "Must be including lowercase" })
      .regex(new RegExp('.*[0-9].*'), { message: "Must be including number" })
      .regex(new RegExp('.*[!@#$%^&*()].*'), { message: "Must be including special character like ! @ # $ % ^ & * ( )" })
    })
    const resultFormValidation = FormSchema.safeParse({ newPassword: newPassword.value })
    if(!resultFormValidation.success) {
      const errorFormValidation = resultFormValidation.error.errors[0]
      return {
        isSuccess: false,
        data: '',
        message: `${errorFormValidation.path[0]}, ${errorFormValidation.message}`
      }
    }
    if(confirmNewPassword.value !== newPassword.value) {
      return {
        isSuccess: false,
        data: '',
        message: 'Password does not match'
      }
    }
    const { data, error } = await supabase.auth.updateUser({ password: newPassword.value })
    if(error) {
      return {
        isSuccess: false,
        data: '',
        message: error.message,
      }
    }
    return {
      isSuccess: true,
      data: '',
      message: 'Update password is success'
    }
  }
  return {
    // REF
    email,
    password,
    emailForgotPassword,
    sendEmailSuccess,
    newPassword,
    confirmNewPassword,
    // Method
    signInPasswordEmail,
    signInFacebook,
    signInGoogle,
    signOut,
    sendEmailForgotPassword,
    updatePassword,
  }
}