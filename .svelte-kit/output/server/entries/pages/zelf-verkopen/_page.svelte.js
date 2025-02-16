import { c as pop, p as push, n as head } from "../../../chunks/index2.js";
import { M as MainButton } from "../../../chunks/MainButton.js";
import "../../../chunks/client.js";
import "clsx";
import { S as SecondaryButton } from "../../../chunks/SecondaryButton.js";
import { P as ProcessCarousel } from "../../../chunks/ProcessCarousel.js";
function PackagesDetail($$payload, $$props) {
  push();
  $$payload.out += `<section class="pkg-services-desktop only-desktop svelte-u5tsu5"><h2 class="svelte-u5tsu5">Een passend pakket voor elke situatie</h2> <div class="pkg-headers svelte-u5tsu5"><div class="pkg svelte-u5tsu5" id="Starter"><h2 class="svelte-u5tsu5">Starter</h2> <p class="pkg-desc svelte-u5tsu5">Meeste zelfstandigheid voor jou verkoop.</p> <div class="pkg-price svelte-u5tsu5"><p class="price svelte-u5tsu5">€195,-</p> <img class="pkg-img svelte-u5tsu5" src="/visuals/general/packagevis-starter.svg" alt="Starter"></div> `;
  SecondaryButton($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Kies deze deal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="pkg svelte-u5tsu5" id="Premium"><div class="highlight svelte-u5tsu5">Meest gekozen</div> <h2 class="svelte-u5tsu5">Premium</h2> <p class="pkg-desc svelte-u5tsu5">Bespaar duizenden euro's &amp; behoudt de zelfstandigheid.</p> <div class="pkg-price svelte-u5tsu5"><p class="price svelte-u5tsu5">550,-</p> <img class="pkg-img svelte-u5tsu5" src="/visuals/general/packagevis-premium.svg" alt="Premium"></div> `;
  SecondaryButton($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Kies deze deal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="pkg svelte-u5tsu5" id="All-In"><h2 class="svelte-u5tsu5">All-In</h2> <p class="pkg-desc svelte-u5tsu5">Forse besparing &amp; sterke woningpresentatie.</p> <div class="pkg-price svelte-u5tsu5"><p class="price svelte-u5tsu5">€750,-</p> <img class="pkg-img svelte-u5tsu5" src="/visuals/general/packagevis-allin.svg" alt="All-In"></div> `;
  SecondaryButton($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Kies deze deal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div> <div class="services svelte-u5tsu5"><div class="service header-row svelte-u5tsu5"><div class="service-header svelte-u5tsu5">Wat zit er in het pakket?</div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Verkooptips &amp; officiële documenten</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Opname door makelaar</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Advies verkoopprijs</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Advies verkoopstrategie</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Digitale brochure</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Onderhandelingen door makelaar</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Wij stellen de overeenkomsten op</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Helpdesk</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">NEN2580 meetrapport</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/non-check-icon.svg" alt="non-check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Professionele plattegronden</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/non-check-icon.svg" alt="non-check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Kadastrale gegevens</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/non-check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">Video opname</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/non-check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/non-check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div> <div class="service svelte-u5tsu5"><div class="service-name svelte-u5tsu5">3D plattegronden</div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/non-check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/non-check-icon.svg" alt="check" class="svelte-u5tsu5"></div> <div class="service-icon svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"></div></div></div></section> <section id="combined-packages-services-mobile" class="only-mobile svelte-u5tsu5"><h2>Een passend pakket voor elke situatie</h2> <div class="mobile-slider svelte-u5tsu5" id="packages-mobile-slider"><div class="pkg-mobile svelte-u5tsu5" data-package-index="0"><h3 class="svelte-u5tsu5">Starter</h3> <p class="pkg-desc svelte-u5tsu5">Meeste zelfstandigheid voor jou verkoop.</p> <div class="pkg-price svelte-u5tsu5"><p class="price svelte-u5tsu5">€195,-</p> <img class="pkg-img svelte-u5tsu5" src="/visuals/general/packagevis-starter.svg" alt="Starter"></div> `;
  SecondaryButton($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Kies deze deal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="pkg-mobile premium svelte-u5tsu5" data-package-index="1"><div class="highlight svelte-u5tsu5">Meest gekozen</div> <h3 class="svelte-u5tsu5">Premium</h3> <p class="pkg-desc svelte-u5tsu5">Bespaar duizenden euro's &amp; behoudt de zelfstandigheid.</p> <div class="pkg-price svelte-u5tsu5"><p class="price svelte-u5tsu5">€550,-</p> <img class="pkg-img svelte-u5tsu5" src="/visuals/general/packagevis-premium.svg" alt="Premium"></div> `;
  SecondaryButton($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Kies deze deal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="pkg-mobile svelte-u5tsu5" data-package-index="2"><h3 class="svelte-u5tsu5">All-In</h3> <p class="pkg-desc svelte-u5tsu5">Forse besparing &amp; sterke woningpresentatie.</p> <div class="pkg-price svelte-u5tsu5"><p class="price svelte-u5tsu5">€750,-</p> <img class="pkg-img svelte-u5tsu5" src="/visuals/general/packagevis-allin.svg" alt="All-In"></div> `;
  SecondaryButton($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Kies deze deal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div> <div class="slider-dots svelte-u5tsu5" id="mobile-package-dots"><div class="dot active svelte-u5tsu5"></div> <div class="dot svelte-u5tsu5"></div> <div class="dot svelte-u5tsu5"></div></div> <div class="mobile-services svelte-u5tsu5"><div class="pkg-services svelte-u5tsu5" data-package-services="0" style="display: block;"><ul class="svelte-u5tsu5"><li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> Verkooptips &amp; officiële documenten</li> <li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> Opname door makelaar</li> <li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> Advies verkoopprijs</li> <li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> Advies verkoopstrategie</li> <li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> Digitale brochure</li> <li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> Onderhandelingen door makelaar</li> <li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> Wij stellen de overeenkomsten op</li> <li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> Helpdesk</li></ul></div> <div class="pkg-services svelte-u5tsu5" data-package-services="1" style="display: none;"><div class="services-base svelte-u5tsu5"><img src="/visuals/icons/check-icon-secondary.svg" alt="check secondary" class="svelte-u5tsu5"> <p class="svelte-u5tsu5">Alles van Starter</p></div> <ul class="svelte-u5tsu5"><li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> NEN2580 meetrapport</li> <li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> Professionele plattegronden</li></ul></div> <div class="pkg-services svelte-u5tsu5" data-package-services="2" style="display: none;"><div class="services-base svelte-u5tsu5"><img src="/visuals/icons/check-icon-secondary.svg" alt="check secondary" class="svelte-u5tsu5"> <p class="svelte-u5tsu5">Alles van Premium</p></div> <ul class="svelte-u5tsu5"><li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> Video opname</li> <li class="svelte-u5tsu5"><img src="/visuals/icons/check-icon.svg" alt="check" class="svelte-u5tsu5"> 3D plattegronden</li></ul></div></div></section>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Zelf verkopen - MoveRoof</title>`;
  });
  PackagesDetail($$payload);
  $$payload.out += `<!----> `;
  ProcessCarousel($$payload);
  $$payload.out += `<!----> <section id="why-moveroof" class="svelte-hr46ai"><div class="why-moveroof-container svelte-hr46ai"><h2 class="svelte-hr46ai">Waarom kiezen voor MoveRoof?</h2> <p class="svelte-hr46ai">MoveRoof is een onafhankelijke makelaar. Dit betekent dat wij niet
      de belangen van investeerders hoeven te balanceren met klanten
      belangen, maar ons 'gewoon' volledig op de klant kunnen focussen.</p> <p class="svelte-hr46ai">Door de opbouw van MoveRoof - 1 persoon met een part-time baan ernaast - gaat elke verdiende
      euro regelrecht naar de verbetering van ons product, de service en ons platform.</p> <p class="svelte-hr46ai">Meer weten over waarom MoveRoof uniek is?</p> `;
  MainButton($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Over MoveRoof`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></section>`;
  pop();
}
export {
  _page as default
};
