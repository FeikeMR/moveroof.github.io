import { o as sanitize_props, q as rest_props, t as spread_attributes, f as slot, j as bind_props } from './index2-DOpG7evU.js';
import { f as fallback } from './utils-DCHhsSU0.js';

function SecondaryButton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["id", "type", "onClick"]);
  let id = fallback($$props["id"], "");
  let type = fallback($$props["type"], "button");
  let onClick = $$props["onClick"];
  $$payload.out += `<button${spread_attributes(
    {
      class: "secondary-button",
      id,
      type,
      ...$$restProps
    },
    { "svelte-1pkeyz6": true }
  )}><!---->`;
  slot($$payload, $$props, "default", {}, () => {
    $$payload.out += `Click me`;
  });
  $$payload.out += `<!----></button>`;
  bind_props($$props, { id, type, onClick });
}

export { SecondaryButton as S };
//# sourceMappingURL=SecondaryButton-D0Qtw-hY.js.map
