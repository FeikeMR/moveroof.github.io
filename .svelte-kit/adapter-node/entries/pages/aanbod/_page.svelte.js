import { d as attr, g as escape_html, f as bind_props, c as pop, p as push, m as ensure_array_like, n as head } from "../../../chunks/index2.js";
import { g as getImageUrl } from "../../../chunks/getImageUrl.js";
function ListingTile($$payload, $$props) {
  push();
  let listing = $$props["listing"];
  let heroImage = $$props["heroImage"];
  function formatPrice(value) {
    if (value === void 0 || value === null) return "";
    let num = Number(value).toLocaleString("nl-NL");
    return `€${num}`;
  }
  const listingLink = `/listings/${listing.listing_id}`;
  $$payload.out += `<div class="listing-tile svelte-4hdn76"><a${attr("href", listingLink)}><img${attr("src", heroImage ? getImageUrl(heroImage.file_path) : "/visuals/general/missing_listing_img.jpg")} class="listing-tile-image svelte-4hdn76" alt="Property listing"></a> <div class="listing-tile-details svelte-4hdn76"><div class="listing-tile-main svelte-4hdn76"><h5 class="secondary">${escape_html(listing.city)}</h5> <h5 class="secondary">${escape_html(formatPrice(listing.asking_price))} k.k.</h5></div> <div class="listing-tile-address"><p class="detail">${escape_html(listing.street)} ${escape_html(listing.street_number)} `;
  if (listing.street_number_suffix) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${escape_html(listing.street_number_suffix)}`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->,
        ${escape_html(listing.postal_code)}</p></div> <div class="listing-tile-data svelte-4hdn76"><div class="listing-tile-data-point svelte-4hdn76"><img src="/visuals/icons/bed-icon.svg" alt="bedrooms icon" class="svelte-4hdn76"> <p class="svelte-4hdn76">${escape_html(listing.bedroom_count)} slaapk</p></div> <div class="listing-tile-data-point svelte-4hdn76"><img src="/visuals/icons/floorplan-icon.svg" alt="square meters icon" class="svelte-4hdn76"> <p class="svelte-4hdn76">${escape_html(listing.living_space)} m² woon</p></div> <div class="listing-tile-data-point svelte-4hdn76"><img src="/visuals/icons/leaf-icon.svg" alt="Energy label icon" class="svelte-4hdn76"> <p class="svelte-4hdn76">${escape_html(listing.energy_label)}</p></div></div></div></div>`;
  bind_props($$props, { listing, heroImage });
  pop();
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let listings = data.listings || [];
  function getHeroImage(listing) {
    if (!listing.listing_images || listing.listing_images.length === 0) {
      return null;
    }
    return listing.listing_images.find((img) => img.is_hero) ?? listing.listing_images[0];
  }
  const each_array = ensure_array_like(listings);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Aanbod - MoveRoof</title>`;
  });
  $$payload.out += `<section id="overview-topbar" class="svelte-1hgqwi5"><div id="topbar-row" class="svelte-1hgqwi5"><h6><b>${escape_html(listings.length)} Woningen in aanbod</b></h6></div> <div id="seperation-line" class="svelte-1hgqwi5"></div></section> <div id="listing-overview" class="svelte-1hgqwi5"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let listing = each_array[$$index];
    if (getHeroImage(listing)) {
      $$payload.out += "<!--[-->";
      ListingTile($$payload, { listing, heroImage: getHeroImage(listing) });
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `${escape_html(console.error(`${listing.street} ${listing.street_number}, ${listing.city} listing not loaded, no images`))}`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
