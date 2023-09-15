import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rqmsppjapobwbiulflww.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxbXNwcGphcG9id2JpdWxmbHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3NTI1NjgsImV4cCI6MjAxMDMyODU2OH0.ORhKJurf_um1sEJzIOuwXFlMvqX2aCf_lmhkcQqq0RM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
