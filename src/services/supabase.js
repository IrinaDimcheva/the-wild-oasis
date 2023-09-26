import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xvmwucmylowbmgbznfek.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2bXd1Y215bG93Ym1nYnpuZmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NjA0OTcsImV4cCI6MjAxMTIzNjQ5N30.WY5m3Q_tT-zBE-I2HeJ9Gq-m7ePlt99THyw7ooYT8pU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
