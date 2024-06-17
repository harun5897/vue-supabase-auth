import { createClient } from "@supabase/supabase-js";
const SUPABASE_PROJECT = import.meta.env.VITE_SUPABASE_PROJECT
const SUPABSE_ANON_KEY = import.meta.env.VITE_SUPABSE_ANON_KEY

export const supabase = createClient(SUPABASE_PROJECT, SUPABSE_ANON_KEY);
