import { d as attr, c as pop, p as push, e as stringify, f as bind_props, g as escape_html, h as copy_payload, j as assign_payload, k as slot } from "../../chunks/index2.js";
import "../../chunks/client.js";
import { S as SecondaryButton } from "../../chunks/SecondaryButton.js";
import { M as MainButton } from "../../chunks/MainButton.js";
import { f as fallback } from "../../chunks/utils.js";
import "clsx";
function Header($$payload, $$props) {
  push();
  let menuIconSrc = "/visuals/icons/menu-icon-light.svg";
  let logoSrc = "/visuals/logos/full-logo/full-logo-yellow-orange-light.svg";
  let menuTextColor = "#F4F4F4";
  let bgColor = "transparent";
  let boxShadow = "none";
  $$payload.out += `<header class="header svelte-17im5kk"${attr("style", `background-color: ${stringify(bgColor)}; box-shadow: ${stringify(boxShadow)};`)}><div class="header__menu svelte-17im5kk"${attr("style", `color: ${stringify(menuTextColor)};`)}><img class="header__menu-icon svelte-17im5kk"${attr("src", menuIconSrc)} alt="Menu Icon"> <p${attr("style", `color: ${stringify(menuTextColor)}`)} class="svelte-17im5kk">MENU</p></div> <a href="/" class="svelte-17im5kk"><img class="header__logo svelte-17im5kk"${attr("src", logoSrc)} alt="Full Logo"></a> `;
  SecondaryButton($$payload, {
    id: "header-button",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Kies jouw deal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></header>`;
  pop();
}
function MenuDrawer($$payload, $$props) {
  push();
  let isOpen = fallback($$props["isOpen"], false);
  let animationKey = 0;
  function openDrawer() {
    isOpen = true;
  }
  if (isOpen) {
    animationKey += 1;
  }
  $$payload.out += `<div${attr("class", `overlay ${stringify(isOpen ? "active" : "")} svelte-1n7pmmo`)}></div> <div${attr("class", `drawer ${stringify(isOpen ? "open" : "")} svelte-1n7pmmo`)}><div class="drawer-close svelte-1n7pmmo"><img class="drawer-close-icon svelte-1n7pmmo" src="/visuals/icons/close-icon.svg" alt="Close Menu"></div>  `;
  if (isOpen) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="drawer-links svelte-1n7pmmo"${attr("key", animationKey)}><a href="/" style="animation-delay: 0.1s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Home</h4></a> <a href="/aanbod" style="animation-delay: 0.2s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Aanbod</h4></a> <a href="/zelf-verkopen" style="animation-delay: 0.3s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Zelf je huis verkopen</h4></a> <a href="/verkoop-begeleiding" style="animation-delay: 0.4s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Verkoop begeleiding</h4></a> <a href="/koop-begeleiding" style="animation-delay: 0.5s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Koop begeleiding</h4></a> <a href="/over-moveroof" style="animation-delay: 0.6s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Over MoveRoof</h4></a></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="button-row">`;
  MainButton($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Geef feedback`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  MainButton($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Deal kiezen`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  bind_props($$props, { isOpen, openDrawer });
  pop();
}
function Footer($$payload) {
  $$payload.out += `<footer class="footer svelte-1oes2r1"><div class="top svelte-1oes2r1"><div class="brand svelte-1oes2r1"><img src="/visuals/logos/full-logo/full-logo-yellow-orange-light.svg" alt="Full MoveRoof Logo" class="logo logo-full svelte-1oes2r1"> <img src="/visuals/logos/icon-logo/logo-icon-yellow-orange-light.svg" alt="MoveRoof Icon Logo" class="logo logo-icon svelte-1oes2r1"> <p id="slogan" class="svelte-1oes2r1">Jouw huis. jouw deal</p></div></div> <div class="divider svelte-1oes2r1"></div> <div class="columns svelte-1oes2r1"><div class="column svelte-1oes2r1"><h3 class="svelte-1oes2r1">Over ons</h3> <ul class="svelte-1oes2r1"><li class="svelte-1oes2r1"><a href="/zelf-verkopen" class="svelte-1oes2r1">Onze verkooppaketten</a></li> <li class="svelte-1oes2r1"><a href="/over-moveroof" class="svelte-1oes2r1">Over MoveRoof</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding" class="svelte-1oes2r1">Begeleiding bij verkopen</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding" class="svelte-1oes2r1">Begeleiding bij aankopen</a></li></ul></div> <div class="column svelte-1oes2r1"><h3 class="svelte-1oes2r1">Verkoop begeleiding</h3> <ul class="svelte-1oes2r1"><li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#klaar-voor-verkoop" class="svelte-1oes2r1">Klaar om te verkopen?</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#vraagprijs-bepalen" class="svelte-1oes2r1">De vraagprijs bepalen</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#bezichtigingen-geven" class="svelte-1oes2r1">Tips voor bezichtigingen</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#pro-onderhandelingen" class="svelte-1oes2r1">Onderhandelingen als een pro</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#verkoopovereenkomst" class="svelte-1oes2r1">De overeenkomst opstellen</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#eindinspectie-tips" class="svelte-1oes2r1">Tips voor de eindinspectie</a></li></ul></div> <div class="column svelte-1oes2r1"><h3 class="svelte-1oes2r1">Koop begeleiding</h3> <ul class="svelte-1oes2r1"><li class="svelte-1oes2r1"><a href="/koop-begeleiding#kosten-woningbezit" class="svelte-1oes2r1">Totale kosten woningaankoop</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding#verkoopmakelaar-begrijpen" class="svelte-1oes2r1">Verkoopmakelaars begrijpen</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding#slim-bieden" class="svelte-1oes2r1">Slim bieden</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding#verplichte-documenten" class="svelte-1oes2r1">Verplichte hypotheek documenten</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding#koopovereenkomst-taal" class="svelte-1oes2r1">De taal van de koopovereenkomst</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding#belasting-info" class="svelte-1oes2r1">De Belastingaangifte na de aankoop</a></li></ul></div> <div class="column svelte-1oes2r1"><h3 class="svelte-1oes2r1">Contact</h3> <p class="svelte-1oes2r1">Email: moveroofnl@gmail.com</p> <p class="svelte-1oes2r1">KvK nummer: 96269960</p> <p class="svelte-1oes2r1">Persoon hierachter: Feike Leemkuil</p></div></div></footer> <div class="bottom svelte-1oes2r1"><a href="/terms-of-service" class="svelte-1oes2r1">Algemene voorwaarden</a> <span class="svelte-1oes2r1">|</span> <a href="/privacy-statement" class="svelte-1oes2r1">Privacy</a> <span class="svelte-1oes2r1">|</span> <a href="XXX" class="svelte-1oes2r1">Cookies</a></div>`;
}
function Popups($$payload, $$props) {
  push();
  let showOverlay = false;
  let showListing = false;
  let showThankYouListing = false;
  let showFeedback = false;
  let showThankYouFeedback = false;
  let nameListing = "";
  let emailListing = "";
  let phoneListing = "";
  let addressListing = "";
  let nameFeedback = "";
  let emailFeedback = "";
  let messageFeedback = "";
  function openListingPopup(packageName = "") {
    showListing = true;
    showOverlay = true;
    showThankYouListing = false;
  }
  function openFeedbackPopup() {
    showFeedback = true;
    showOverlay = true;
    showThankYouFeedback = false;
  }
  $$payload.out += `<div${attr("class", `overlay ${stringify(showOverlay ? "active" : "")} svelte-j5gud2`)}></div> <div${attr("class", `popup listing ${stringify(showListing ? "" : "hidden")} svelte-j5gud2`)}><h3 class="secondary">Verkopen via MoveRoof</h3> <p>Breng verandering in de markt teweeg met een ongebonden makelaar en bespaar
    duizenden euro's.</p> <form class="form svelte-j5gud2"><div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="text"${attr("value", nameListing)} required placeholder="Naam"> <label class="label svelte-j5gud2">Naam</label></div> <div class="row svelte-j5gud2"><div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="email"${attr("value", emailListing)} required placeholder="E-mailadres"> <label class="label svelte-j5gud2">E-mail</label></div> <div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="tel"${attr("value", phoneListing)} placeholder="Tel nr - optioneel"> <label class="label svelte-j5gud2">Tel nr - optioneel</label></div></div> <div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="text"${attr("value", addressListing)} required placeholder="Adres - Straat, nummer en plaats"> <label class="label svelte-j5gud2">Adres - Straat, nummer en plaats</label></div> <div class="group svelte-j5gud2"><select class="input svelte-j5gud2" required><option value="" disabled selected hidden>Kies een deal</option><option value="Starter">Starter - €395,-</option><option value="Premium">Premium - €850,-</option><option value="All-In">All-In - €1.050,-</option></select></div> <br> `;
  SecondaryButton($$payload, {
    type: "submit",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Start de verkoop!`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form></div> <div${attr("class", `popup thankyou ${stringify(showThankYouListing ? "" : "hidden")} svelte-j5gud2`)}><h4 class="secondary">Bedankt voor de aanvraag! Oprecht!</h4> <br> <p>Dat je het vertrouwen in mij en MoveRoof hebt om je woning met ons te delen
    vind ik onwijs tof.</p> <br> <p>Het vertrouwen is mij onwijs veel waard, dankjewel hiervoor! We gaan er wat
    moois van maken samen.</p> <br> <p>Feike Leemkuil.</p></div> <div${attr("class", `popup feedback ${stringify(showFeedback ? "" : "hidden")} svelte-j5gud2`)}><h3 class="secondary">Feedback delen</h3> <p>Heb je suggesties of feedback op MoveRoof en de website en/of service? Deel het
    hieronder. Waardeer het oprecht!</p> <form class="form svelte-j5gud2"><div class="row svelte-j5gud2"><div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="text"${attr("value", nameFeedback)} required placeholder="Naam"> <label class="label svelte-j5gud2">Naam</label></div> <div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="email"${attr("value", emailFeedback)} placeholder="E-mailadres"> <label class="label svelte-j5gud2">E-mail - optioneel</label></div></div> <div class="group svelte-j5gud2"><textarea class="textarea svelte-j5gud2" placeholder="Deel hier je bericht...">`;
  const $$body = escape_html(messageFeedback);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea> <label class="label svelte-j5gud2">Je feedback/suggestie</label></div> `;
  SecondaryButton($$payload, {
    type: "submit",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Feedback versturen`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form></div> <div${attr("class", `popup thankyou ${stringify(showThankYouFeedback ? "" : "hidden")} svelte-j5gud2`)}><h4 class="secondary">Bedankt voor de feedback! Oprecht!</h4> <br> <p>Dat je de tijd hebt genomen om je gedachtes en suggesties omtrent MoveRoof te
    delen waardeer ik oprecht enorm. Dankjewel!</p> <br> <p>Als je je contactgegevens hebt gedeeld hoop ik je nog te kunnen spreken en
    nogmaals te bedanken. Anders bij deze: mijn dankbaarheid is groot!</p> <br> <p>Fijne dag en hopelijk spreken we elkaar nog eens.</p> <br> <p>Feike Leemkuil.</p></div>`;
  bind_props($$props, { openListingPopup, openFeedbackPopup });
  pop();
}
function _layout($$payload, $$props) {
  let isMenuOpen = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Header($$payload2);
    $$payload2.out += `<!----> `;
    MenuDrawer($$payload2, {
      get isOpen() {
        return isMenuOpen;
      },
      set isOpen($$value) {
        isMenuOpen = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <main><!---->`;
    slot($$payload2, $$props, "default", {}, null);
    $$payload2.out += `<!----></main> `;
    Footer($$payload2);
    $$payload2.out += `<!----> `;
    Popups($$payload2, {});
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
export {
  _layout as default
};
