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
async function load() {
  const { data: listings, error: listingsError } = await supabase.from("listings").select("*, listing_images(*)");
  if (listingsError) {
    throw error(500, "Failed to fetch listings");
  }
  return {
    listings: listings ?? []
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Q6i0wy3G.js')).default;
const server_id = "src/routes/aanbod/+page.server.js";
const imports = ["_app/immutable/nodes/3.Bg-sEaPu.js","_app/immutable/chunks/B-FElII2.js","_app/immutable/chunks/BPB6zGR0.js","_app/immutable/chunks/CU8CDMvg.js","_app/immutable/chunks/CXBMni9p.js","_app/immutable/chunks/CC-Vp8pk.js","_app/immutable/chunks/wjY5rkY6.js","_app/immutable/chunks/B9bQSa7m.js","_app/immutable/chunks/BeVkuMN_.js","_app/immutable/chunks/Bk6LkYh5.js","_app/immutable/chunks/dRWcjXu1.js","_app/immutable/chunks/BfJPdjCu.js","_app/immutable/chunks/CD6vdLJv.js","_app/immutable/chunks/C1FmrZbK.js"];
const stylesheets = ["_app/immutable/assets/3.B6z1Z-is.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-D4KHwWi4.js.map
