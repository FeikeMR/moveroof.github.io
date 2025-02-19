import { s as supabase } from "./supabaseClient.js";
function getImageUrl(filePath) {
  const { data } = supabase.storage.from("listing-images").getPublicUrl(filePath);
  return data.publicUrl;
}
export {
  getImageUrl as g
};
