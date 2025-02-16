import { c as createClient } from "../../../../chunks/index3.js";
import { e as error } from "../../../../chunks/index.js";
const supabaseUrl = "https://xymimmacrznyxzvmtiuh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5bWltbWFjcnpueXh6dm10aXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMjcxNDgsImV4cCI6MjA1NDcwMzE0OH0.GdTK_DCqMV8yafA7s4WjZsA8gY1JSktUjYXPHGa4Ga0";
const supabase = createClient(supabaseUrl, supabaseKey);
async function load({ params }) {
  const { listing_id } = params;
  const { data: listing, error: listingError } = await supabase.from("listings").select("*").eq("listing_id", parseInt(listing_id)).single();
  if (listingError || !listing) {
    throw error(404, "Listing not found");
  }
  const { data: images, error: imagesError } = await supabase.from("listing_images").select("*").eq("listing_id", listing_id);
  if (imagesError) {
    console.error("Error fetching images:", imagesError);
  }
  return {
    listing,
    images: images || []
  };
}
export {
  load
};
