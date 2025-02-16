import { p as push, m as head, g as attr, j as bind_props, c as pop, n as ensure_array_like, k as escape_html, h as stringify } from './index2-DOpG7evU.js';
import { f as fallback } from './utils-DCHhsSU0.js';
import { g as getImageUrl } from './getImageUrl-DplFgzQo.js';
import './supabaseClient-C-M2jtdH.js';
import './index3-QiWydKBQ.js';
import 'stream';
import 'http';
import 'url';
import 'punycode';
import 'https';
import 'zlib';

function ListingHero($$payload, $$props) {
  push();
  let filteredHeroImages;
  let listing = $$props["listing"];
  let heroImages = fallback($$props["heroImages"], () => [], true);
  let currentHeroIndex = 0;
  function formatPrice(value) {
    if (value === void 0 || value === null) return "";
    let num = Number(value).toLocaleString("nl-NL");
    return `€ ${num}`;
  }
  filteredHeroImages = heroImages.filter((image) => image.is_hero === true || image.is_hero === "true" || image.is_hero === 1 || image.is_hero === "1").sort((a, b) => a.hero_order - b.hero_order);
  const each_array = ensure_array_like(filteredHeroImages);
  $$payload.out += `<section class="listing-hero svelte-jia7f8"><div class="listing-hero-images svelte-jia7f8"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let image = each_array[i];
    $$payload.out += `<img${attr("src", getImageUrl(image.file_path))}${attr("alt", "Hero image " + i)}${attr("class", `${stringify(`hero-image ${i === currentHeroIndex ? "active" : ""}`)} svelte-jia7f8`)}>`;
  }
  $$payload.out += `<!--]--></div> <div class="listing-hero-container svelte-jia7f8"><div class="listing-hero-details svelte-jia7f8"><div class="listing-hero-address svelte-jia7f8"><h4 class="secondary svelte-jia7f8">${escape_html(listing.city)}</h4> <div class="listing-hero-city-price svelte-jia7f8"><h2 id="listing-hero-street" class="svelte-jia7f8">${escape_html(listing.street)} ${escape_html(listing.street_number)} `;
  if (listing.street_number_suffix) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${escape_html(listing.street_number_suffix)}`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></h2> <h2 id="listing-hero-price" class="svelte-jia7f8">${escape_html(formatPrice(listing.asking_price))} k.k.</h2></div></div></div> <div class="listing-hero-data svelte-jia7f8"><div class="listing-hero-data-point svelte-jia7f8"><h6 class="svelte-jia7f8">Slaapkamers</h6> <div class="listing-hero-data-point-row svelte-jia7f8"><img src="/visuals/icons/bed-icon.svg" alt="bedroom icon" class="svelte-jia7f8"> <h5 class="svelte-jia7f8">${escape_html(listing.bedroom_count)}</h5></div></div> <div id="seperation-line-vert" class="svelte-jia7f8"></div> <div class="listing-hero-data-point svelte-jia7f8"><h6 class="svelte-jia7f8">Badkamers</h6> <div class="listing-hero-data-point-row svelte-jia7f8"><img src="/visuals/icons/bath-icon.svg" alt="bathroom icon" class="svelte-jia7f8"> <h5 class="svelte-jia7f8">${escape_html(listing.bathroom_count)}</h5></div></div> <div id="seperation-line-vert" class="svelte-jia7f8"></div> <div class="listing-hero-data-point svelte-jia7f8"><h6 class="svelte-jia7f8">Woon Opp.</h6> <div class="listing-hero-data-point-row svelte-jia7f8"><img src="/visuals/icons/floorplan-icon.svg" alt="floorplan icon" class="svelte-jia7f8"> <h5 class="svelte-jia7f8">${escape_html(listing.living_space)} m²</h5></div></div> <div id="seperation-line-vert" class="svelte-jia7f8"></div> <div class="listing-hero-data-point svelte-jia7f8"><h6 class="svelte-jia7f8">Energielabel</h6> <div class="listing-hero-data-point-row svelte-jia7f8"><img src="/visuals/icons/leaf-icon.svg" alt="leaf icon" class="svelte-jia7f8"> <h5 class="svelte-jia7f8">${escape_html(listing.energy_label)}</h5></div></div></div> <div class="scroll-prompt svelte-jia7f8"><img src="/visuals/icons/mouse-icon.svg" alt="mouse icon" class="svelte-jia7f8"> <p class="svelte-jia7f8">SCROL VOOR MEER</p></div> <div class="main-button svelte-jia7f8" id="view-listing-images"><h6 class="svelte-jia7f8">Alle foto's (${escape_html(heroImages.length)})</h6></div></div></section>`;
  bind_props($$props, { listing, heroImages });
  pop();
}
function ListingDataList($$payload, $$props) {
  push();
  let listing = $$props["listing"];
  function formatPrice(value) {
    if (!value && value !== 0) return "";
    let num = Number(value).toLocaleString("nl-NL");
    return `€ ${num}`;
  }
  $$payload.out += `<div class="listing-data-list svelte-1b7g5aa"><h4>Woning kenmerken</h4> <div class="listing-data-category svelte-1b7g5aa"><h6 class="secondary svelte-1b7g5aa"><b>Overdracht:</b></h6> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Vraagprijs</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(formatPrice(listing.asking_price))} k.k.</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Vraagprijs/m²</p> <p class="listing-data-var svelte-1b7g5aa">`;
  if (listing.living_space > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${escape_html(formatPrice(listing.asking_price / listing.living_space))}`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Status</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.listing_status)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Aanvaarding</p> <p class="listing-data-var svelte-1b7g5aa">In overleg</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div></div> <div class="listing-data-category svelte-1b7g5aa"><h6 class="secondary svelte-1b7g5aa"><b>Bouw:</b></h6> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Soort woning</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.property_type)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Bouwjaar</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.building_period)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Soort dak</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.roof_type)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Fundering</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.foundation_type ?? "Onbekend")}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Isolatie</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.isolation)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Type glas</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.glass_type)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div></div> <div class="listing-data-category svelte-1b7g5aa"><h6 class="secondary svelte-1b7g5aa"><b>Oppervlakten &amp; Inhoud:</b></h6> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Woon oppervlak</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.living_space)}m²</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Gebouwgebonden buitenruimte</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.external_addon_space ?? 0)}m²</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Overige inpandige ruimte</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.internal_storage_space ?? 0)}m²</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Externe bergruimte</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.external_storage_space ?? 0)}m²</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Perceel</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.plot_size)}m²</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Inhoud</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.volume)}m³</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Tuin</p> <p class="listing-data-var svelte-1b7g5aa">Onbekend</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Garage</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.garage_type)} (Capaciteit: ${escape_html(listing.garage_capacity)})</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div></div> <div class="listing-data-category svelte-1b7g5aa"><h6 class="secondary svelte-1b7g5aa"><b>Indeling:</b></h6> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Aantal kamers</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.total_rooms)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Aantal slaapkamers</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.bedroom_count)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Aantal badkamers</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.bathroom_count)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Badkamervoorzieningen</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.bathroom_amenities_custom ? listing.bathroom_amenities_custom : listing.bathroom_amenities)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Keukenapparatuur</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.kitchen_appliances_custom ? listing.kitchen_appliances_custom : listing.kitchen_appliances)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Vloertype</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.floor_type)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Aantal woonlagen</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.floor_count)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Werk- of hobbyruimte</p> <p class="listing-data-var svelte-1b7g5aa">Onbekend</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div></div> <div class="listing-data-category svelte-1b7g5aa"><h6 class="secondary svelte-1b7g5aa"><b>Energie:</b></h6> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Energielabel</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.energy_label)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Warmtepomp</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.has_heatpump ? `Ja, ${listing.heatpump_model ?? ""}` : "Nee")}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Vloerverwarming</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.has_underfloor_heating ? "Ja" : "Nee")}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Warm water</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.warm_water)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">Verwarming</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.heating)}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div> <div class="listing-data-row svelte-1b7g5aa"><p class="listing-data-name svelte-1b7g5aa">CV Ketel</p> <p class="listing-data-var svelte-1b7g5aa">${escape_html(listing.central_heating_boiler ?? "Onbekend")}</p></div> <div id="seperation-line-horiz" class="svelte-1b7g5aa"></div></div></div>`;
  bind_props($$props, { listing });
  pop();
}
function ListingDescription($$payload, $$props) {
  push();
  let listing = $$props["listing"];
  let moreParagraphs = listing.description_paragraphs ? listing.description_paragraphs.split("\n").filter(Boolean) : [];
  $$payload.out += `<div class="listing-description svelte-fxoin9"><h4 class="svelte-fxoin9">${escape_html(listing.description_header)}</h4> <p class="svelte-fxoin9">${escape_html(listing.description_paragraph1)}</p> `;
  if (moreParagraphs.length > 0) {
    $$payload.out += "<!--[-->";
    {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="toggle show-description svelte-fxoin9"><img src="/visuals/icons/chevron-down-orange.svg" alt="chevron down" class="svelte-fxoin9"> <p class="secondary svelte-fxoin9">Volledige beschrijving tonen</p></div>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { listing });
  pop();
}
function ListingInterestForm($$payload, $$props) {
  push();
  let listingInfo;
  let name = "";
  let email = "";
  let phone = "";
  let message = "";
  let listing = $$props["listing"];
  listingInfo = listing ? `${listing.street} ${listing.street_number}, ${listing.city}` : "";
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="listing-interest svelte-gp424g"><h4 class="secondary svelte-gp424g">Contact opnemen met de verkoper:</h4> <p class="detail svelte-gp424g">De onderstaande gegevens worden doorgestuurd naar de verkoper.</p> <form class="listing-interest-form svelte-gp424g"><input type="hidden" name="listingInfo"${attr("value", listingInfo)}> <div class="input-group svelte-gp424g"><input class="input-field svelte-gp424g" type="text" id="naam" name="naam"${attr("value", name)} required placeholder=" "> <label class="input-name svelte-gp424g" for="naam">Naam</label></div> <div class="input-row svelte-gp424g"><div class="input-group svelte-gp424g"><input class="input-field svelte-gp424g" type="email" id="email" name="email"${attr("value", email)} required placeholder=" "> <label class="input-name svelte-gp424g" for="email">E-mail</label></div> <div class="input-group svelte-gp424g"><input class="input-field svelte-gp424g" type="tel" id="telefoon" name="telefoon"${attr("value", phone)} placeholder=" "> <label class="input-name svelte-gp424g" for="telefoon">Tel nr - optioneel</label></div></div> <div class="input-group svelte-gp424g"><textarea class="text-field svelte-gp424g" id="bericht" name="bericht" placeholder=" ">`;
    const $$body = escape_html(message);
    if ($$body) {
      $$payload.out += `${$$body}`;
    }
    $$payload.out += `</textarea> <label class="input-name svelte-gp424g" for="bericht">Bericht aan de verkoper</label></div> <button class="submit-button svelte-gp424g" type="submit">Bericht versturen</button></form></div>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { listing });
  pop();
}
function ImagePopup($$payload, $$props) {
  push();
  let images = fallback($$props["images"], () => [], true);
  let isOpen = false;
  let currentIndex = 0;
  function open(index = 0) {
    isOpen = true;
    currentIndex = index;
  }
  if (isOpen) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div id="image-popup" class="svelte-jn4pne"><div class="popup-content svelte-jn4pne"><img id="popup-image"${attr("src", getImageUrl(images[currentIndex]?.file_path))} alt="Listing Image" class="svelte-jn4pne"> <img class="close-btn svelte-jn4pne" src="/visuals/icons/close-icon.svg" alt="Close"> `;
    if (images.length > 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img class="arrow left-arrow svelte-jn4pne" src="/visuals/icons/left-arrow-icon.svg" alt="Previous"> <img class="arrow right-arrow svelte-jn4pne" src="/visuals/icons/right-arrow-icon.svg" alt="Next">`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { images, open });
  pop();
}
function _page($$payload, $$props) {
  push();
  let dynamicTitle;
  let data = $$props["data"];
  let listing = data.listing;
  let images = data.images;
  dynamicTitle = `Huis te koop: ${listing.street} ${listing.street_number}${listing.street_number_suffix && listing.street_number_suffix.trim() !== "" ? " " + listing.street_number_suffix : ""} ${listing.city} - MoveRoof`;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(dynamicTitle)}</title>`;
  });
  ListingHero($$payload, { listing, heroImages: images });
  $$payload.out += `<!----> `;
  ImagePopup($$payload, { images });
  $$payload.out += `<!----> <div class="listing-detail-content svelte-tnbqw7">`;
  ListingDataList($$payload, { listing, class: "listing-data-list" });
  $$payload.out += `<!----> <div class="listing-description-interest svelte-tnbqw7"><div class="listing-description-desktop svelte-tnbqw7">`;
  ListingDescription($$payload, { listing });
  $$payload.out += `<!----></div> <div${attr("class", `listing-interest-wrapper svelte-tnbqw7 ${stringify([
    "",
    ""
  ].filter(Boolean).join(" "))}`)}>`;
  ListingInterestForm($$payload, { listing });
  $$payload.out += `<!----></div></div></div>`;
  bind_props($$props, { data });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DK1Q1NkF.js.map
