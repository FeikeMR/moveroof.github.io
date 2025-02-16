import { c as createClient } from "./index3.js";
const supabaseUrl = "https://xymimmacrznyxzvmtiuh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5bWltbWFjcnpueXh6dm10aXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMjcxNDgsImV4cCI6MjA1NDcwMzE0OH0.GdTK_DCqMV8yafA7s4WjZsA8gY1JSktUjYXPHGa4Ga0";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export {
  supabase as s
};
