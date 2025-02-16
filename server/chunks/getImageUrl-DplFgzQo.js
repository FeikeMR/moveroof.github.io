import { s as supabase } from './supabaseClient-C-M2jtdH.js';

function getImageUrl(filePath) {
  const { data } = supabase.storage.from("listing-images").getPublicUrl(filePath);
  return data.publicUrl;
}

export { getImageUrl as g };
//# sourceMappingURL=getImageUrl-DplFgzQo.js.map
