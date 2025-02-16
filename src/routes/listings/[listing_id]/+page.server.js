// Import the Supabase client creation function and SvelteKit error helper
import { createClient } from '@supabase/supabase-js';
import { error } from '@sveltejs/kit';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a Supabase client instance
const supabase = createClient(supabaseUrl, supabaseKey);

export async function load({ params }) {
  const { listing_id } = params;

  // Fetch the listing data
  const { data: listing, error: listingError } = await supabase
    .from('listings')
    .select('*')
    .eq('listing_id', parseInt(listing_id))
    .single();

  if (listingError || !listing) {
    throw error(404, 'Listing not found');
  }

  // Fetch images associated with the listing from the correct table
  const { data: images, error: imagesError } = await supabase
    .from('listing_images')
    .select('*')
    .eq('listing_id', listing_id);

  if (imagesError) {
    console.error('Error fetching images:', imagesError);
  }

  return {
    listing,
    images: images || []
  };
}