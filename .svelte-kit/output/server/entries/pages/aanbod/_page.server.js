import { c as createClient } from "../../../chunks/index3.js";
import { e as error } from "../../../chunks/index.js";
const supabaseUrl = "https://xymimmacrznyxzvmtiuh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5bWltbWFjcnpueXh6dm10aXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMjcxNDgsImV4cCI6MjA1NDcwMzE0OH0.GdTK_DCqMV8yafA7s4WjZsA8gY1JSktUjYXPHGa4Ga0";
const supabase = createClient(supabaseUrl, supabaseKey);
async function load() {
  const { data: listings, error: listingsError } = await supabase.from("listings").select("*, listing_images(*)");
  if (listingsError) {
    throw error(500, "Failed to fetch listings");
  }
  return {
    listings: listings ?? []
  };
}
export {
  load
};
