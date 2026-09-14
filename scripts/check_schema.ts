
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

async function checkSchema() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase credentials');
    return;
  }
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  const { data, error } = await supabase
    .from('international_universities')
    .select('*')
    .limit(1);

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Columns in international_universities:', Object.keys(data[0] || {}));
    console.log('Sample data:', data[0]);
  }
}

checkSchema();
