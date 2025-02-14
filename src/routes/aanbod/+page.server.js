import { createClient } from '@supabase/supabase-js';
import { error } from '@sveltejs/kit';

// Environment variables (adjust names if needed)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function load() {
  // Fetch all listings along with their images from the "listing_images" table
  const { data: listings, error: listingsError } = await supabase
    .from('listings')
    .select('*, listing_images(*)');

  if (listingsError) {
    throw error(500, 'Failed to fetch listings');
  }

  return {
    listings: listings ?? []
  };
}