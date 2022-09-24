import { createClient } from '@supabase/supabase-js';

const API_ENDPOINT: string = process.env.API_ENDPOINT || '';
const PUBLIC_KEY: string = process.env.PUBLIC_KEY || '';

export const supabase = createClient(API_ENDPOINT, PUBLIC_KEY);
console.log(supabase);
