import { o as sanitize_props, q as rest_props, t as spread_attributes, k as slot, f as bind_props } from "./index2.js";
import { f as fallback } from "./utils.js";
function MainButton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["id", "type"]);
  let id = fallback($$props["id"], "");
  let type = fallback($$props["type"], "button");
  $$payload.out += `<button${spread_attributes({ class: "main-button", ...$$restProps }, { "svelte-i27kac": true })}><!---->`;
  slot($$payload, $$props, "default", {}, () => {
    $$payload.out += `Click me`;
  });
  $$payload.out += `<!----></button>`;
  bind_props($$props, { id, type });
}
export {
  MainButton as M
};
