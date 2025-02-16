// src/routes/api/listings/+server.js
import { supabase } from '$lib/supabaseClient';

export const GET = async () => {
  const { data, error } = await supabase
    .from('listings')
    .select('*');

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};