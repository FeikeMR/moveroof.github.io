import { p as push, k as escape_html, c as pop, l as getContext } from './index2-DOpG7evU.js';
import { s as stores } from './client-C1wqTozx.js';
import './exports-G4MFV61T.js';
import './utils-DCHhsSU0.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-CtYtEgkb.js.map
