import * as server from '../entries/pages/aanbod/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/aanbod/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/aanbod/+page.server.js";
export const imports = ["_app/immutable/nodes/3.Bg-sEaPu.js","_app/immutable/chunks/B-FElII2.js","_app/immutable/chunks/BPB6zGR0.js","_app/immutable/chunks/CU8CDMvg.js","_app/immutable/chunks/CXBMni9p.js","_app/immutable/chunks/CC-Vp8pk.js","_app/immutable/chunks/wjY5rkY6.js","_app/immutable/chunks/B9bQSa7m.js","_app/immutable/chunks/BeVkuMN_.js","_app/immutable/chunks/Bk6LkYh5.js","_app/immutable/chunks/dRWcjXu1.js","_app/immutable/chunks/BfJPdjCu.js","_app/immutable/chunks/CD6vdLJv.js","_app/immutable/chunks/C1FmrZbK.js"];
export const stylesheets = ["_app/immutable/assets/3.B6z1Z-is.css"];
export const fonts = [];
