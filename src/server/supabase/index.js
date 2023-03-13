import { createClient } from '@supabase/supabase-js';
import { ANON_KEY, SUPABASE_PROJECT_URL } from '../../enums';
const projectUrl = SUPABASE_PROJECT_URL
const anonKey = ANON_KEY;

const supabase = createClient(projectUrl, anonKey);

export default supabase;
