import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uarllyemsintcyzlztee.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcmxseWVtc2ludGN5emx6dGVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MzI4ODUsImV4cCI6MjAxNzAwODg4NX0.S3VuSgqNY45HS2KWpNpN_bzobEqLsZnPk6Mlx2zvGao";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
