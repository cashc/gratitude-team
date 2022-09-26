import { createClient } from '@supabase/supabase-js';

const API_ENDPOINT: string = process.env.REACT_APP_API_ENDPOINT || '';
const PUBLIC_KEY: string = process.env.REACT_APP_PUBLIC_KEY || '';

export const supabase = createClient(API_ENDPOINT, PUBLIC_KEY);
