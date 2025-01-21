import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.SUPABASE_URL
const supabaseUrl = "https://sxujhhtponnwtmecmxcs.supabase.co"
// const supabaseKey = import.meta.env.SUPABASE_KEY
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4dWpoaHRwb25ud3RtZWNteGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0OTg3MjksImV4cCI6MjA1MjA3NDcyOX0.OTcpmAKpckTLV-EYwG6LVeUnsGwvaskS9bpY9xz9yZw"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;