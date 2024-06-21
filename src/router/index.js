import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "@/utils/supabaseConnection.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "signin",
      component: () => import("@/views/SignIn.vue"),
    },
    {
      path: "/education",
      name: "education",
      component: () => import("@/views/Education.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/data-table",
      name: "dataTable",
      component: () => import("@/views/DataTable.vue"),
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: () => import("@/views/ForgotPassword.vue"),
    },
    {
      path: "/update-password",
      name: "update-password",
      component: () => import("@/views/UpdatePassword.vue"),
    },
  ],
});
router.beforeEach(async(to) => {
  const { data } = await supabase.auth.getSession()
  console.log(data)
  const isAuthenticated = data.session ? true : false
  if (!isAuthenticated && to.meta.requiresAuth) {
    return { name: 'signin' }
  }
})

export default router;
