import { c as createClient } from './index3-QiWydKBQ.js';
import { e as error } from './index-CvuFLVuQ.js';
import 'stream';
import 'http';
import 'url';
import 'punycode';
import 'https';
import 'zlib';

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

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DK1Q1NkF.js')).default;
const server_id = "src/routes/listings/[listing_id]/+page.server.js";
const imports = ["_app/immutable/nodes/5.Dj5eHyra.js","_app/immutable/chunks/B-FElII2.js","_app/immutable/chunks/BPB6zGR0.js","_app/immutable/chunks/CU8CDMvg.js","_app/immutable/chunks/wjY5rkY6.js","_app/immutable/chunks/Bjwh0b6H.js","_app/immutable/chunks/Ce8ShSsf.js","_app/immutable/chunks/Bk6LkYh5.js","_app/immutable/chunks/dRWcjXu1.js","_app/immutable/chunks/BgNj6qsk.js","_app/immutable/chunks/CXBMni9p.js","_app/immutable/chunks/CC-Vp8pk.js","_app/immutable/chunks/B9bQSa7m.js","_app/immutable/chunks/BeVkuMN_.js","_app/immutable/chunks/BfJPdjCu.js","_app/immutable/chunks/CD6vdLJv.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DE_it28E.js"];
const stylesheets = ["_app/immutable/assets/5.BqoR2YkW.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-Y5RKK3sN.js.map
