import { p as push, n as ensure_array_like, g as attr, k as escape_html, j as bind_props, c as pop, h as stringify } from './index2-DOpG7evU.js';
import { f as fallback } from './utils-DCHhsSU0.js';
import { S as SecondaryButton } from './SecondaryButton-D0Qtw-hY.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function StageElement($$payload, $$props) {
  push();
  let elementId = fallback($$props["elementId"], "");
  let title = fallback($$props["title"], "");
  let templates = fallback($$props["templates"], () => [], true);
  let articleHtml = fallback($$props["articleHtml"], "");
  let isOpen = fallback($$props["isOpen"], false);
  $$payload.out += `<div class="stage-element"${attr("id", elementId)}><div${attr("class", `stage-element-header ${stringify(isOpen ? "open" : "")}`)}><img class="stage-element-header-chevron" src="/visuals/icons/chevron-dark.svg"> <h5>${escape_html(title)}</h5> `;
  if (templates && templates.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="template-label svelte-1q2rre9"><img src="/visuals/icons/document-icon-orange.svg" alt="Template Icon" class="svelte-1q2rre9"></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div${attr("class", `stage-element-content ${stringify(isOpen ? "show" : "")} svelte-1q2rre9`)}>`;
  if (templates && templates.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(templates);
    $$payload.out += `<div class="stage-element-buttons svelte-1q2rre9"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let t = each_array[$$index];
      SecondaryButton($$payload, {
        children: ($$payload2) => {
          $$payload2.out += `<p class="white svelte-1q2rre9">${escape_html(t.labelText)}</p>`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="stage-article">${html(articleHtml)}</div></div></div>`;
  bind_props($$props, {
    elementId,
    title,
    templates,
    articleHtml,
    isOpen
  });
  pop();
}
function Stage($$payload, $$props) {
  push();
  let stageId = fallback($$props["stageId"], "");
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let templateCount = fallback($$props["templateCount"], 0);
  let elements = fallback($$props["elements"], () => [], true);
  let isOpen = fallback($$props["isOpen"], false);
  let openElementId = null;
  if (!isOpen) {
    openElementId = null;
  }
  const each_array = ensure_array_like(elements);
  $$payload.out += `<div class="stage"><div${attr("class", `stage-head ${stringify(isOpen ? "open" : "")}`)}><div class="stage-head-name"><h4 class="secondary">${escape_html(title)}</h4></div> <div class="stage-head-icons">`;
  if (templateCount > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="template-label-text"><b>+ ${escape_html(templateCount)} template</b></p> <div class="template-label-icon"><p>+${escape_html(templateCount)}</p> <img src="/visuals/icons/document-icon-dark.svg"></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <img class="stage-head-chevron" src="/visuals/icons/chevron-dark.svg"></div></div> <div${attr("class", `stage-information ${stringify(isOpen ? "show" : "")}`)}><div class="stage-description"><p>${escape_html(description)}</p></div> <div class="stage-content"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let elem = each_array[$$index];
    StageElement($$payload, {
      elementId: elem.elementId,
      title: elem.title,
      templates: elem.templates,
      articleHtml: elem.articleHtml,
      isOpen: openElementId === elem.elementId
    });
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, {
    stageId,
    title,
    description,
    templateCount,
    elements,
    isOpen
  });
  pop();
}

export { Stage as S };
//# sourceMappingURL=Stage-HwMe2CQE.js.map
