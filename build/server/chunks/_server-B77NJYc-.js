import { s as supabase } from './supabaseClient-C-M2jtdH.js';
import './index3-QiWydKBQ.js';
import 'stream';
import 'http';
import 'url';
import 'punycode';
import 'https';
import 'zlib';

const GET = async () => {
  const { data, error } = await supabase.from("listings").select("*");
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

export { GET };
//# sourceMappingURL=_server-B77NJYc-.js.map
