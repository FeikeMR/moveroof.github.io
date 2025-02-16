<script>
    // We expect a "listing" prop containing all fields from the Supabase "listings" table.
    export let listing;
  
    // Simple formatting helpers
    function formatPrice(value) {
      if (!value && value !== 0) return '';
      // Example: "1450000.00" => "€ 1.450.000"
      // You may want a more robust internationalization approach.
      let num = Number(value).toLocaleString('nl-NL');
      return `€ ${num}`;
    }
  </script>
  
  <div class="listing-data-list">
    <h4>Woning kenmerken</h4>
  
    <!-- Overdracht -->
    <div class="listing-data-category">
      <h6 class="secondary"><b>Overdracht:</b></h6>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Vraagprijs</p>
        <p class="listing-data-var">{formatPrice(listing.asking_price)} k.k.</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Vraagprijs/m&sup2;</p>
        <p class="listing-data-var">
          {#if listing.living_space > 0}
            {formatPrice(listing.asking_price / listing.living_space)}
          {/if}
        </p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Status</p>
        <p class="listing-data-var">{listing.listing_status}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Aanvaarding</p>
        <p class="listing-data-var">In overleg</p>
      </div>
      <div id="seperation-line-horiz"></div>
    </div>
  
    <!-- Bouw -->
    <div class="listing-data-category">
      <h6 class="secondary"><b>Bouw:</b></h6>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Soort woning</p>
        <p class="listing-data-var">{listing.property_type}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Bouwjaar</p>
        <p class="listing-data-var">{listing.building_period}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Soort dak</p>
        <p class="listing-data-var">{listing.roof_type}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Fundering</p>
        <p class="listing-data-var">{listing.foundation_type ?? 'Onbekend'}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Isolatie</p>
        <p class="listing-data-var">{listing.isolation}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Type glas</p>
        <p class="listing-data-var">{listing.glass_type}</p>
      </div>
      <div id="seperation-line-horiz"></div>
    </div>
  
    <!-- Oppervlakten & inhoud -->
    <div class="listing-data-category">
      <h6 class="secondary"><b>Oppervlakten & Inhoud:</b></h6>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Woon oppervlak</p>
        <p class="listing-data-var">{listing.living_space}m&sup2;</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Gebouwgebonden buitenruimte</p>
        <p class="listing-data-var">
          {listing.external_addon_space ?? 0}m&sup2;
        </p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Overige inpandige ruimte</p>
        <p class="listing-data-var">
          {listing.internal_storage_space ?? 0}m&sup2;
        </p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Externe bergruimte</p>
        <p class="listing-data-var">
          {listing.external_storage_space ?? 0}m&sup2;
        </p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Perceel</p>
        <p class="listing-data-var">{listing.plot_size}m&sup2;</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Inhoud</p>
        <p class="listing-data-var">{listing.volume}m&sup3;</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Tuin</p>
        <p class="listing-data-var">Onbekend</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Garage</p>
        <p class="listing-data-var">
          {listing.garage_type} (Capaciteit: {listing.garage_capacity})
        </p>
      </div>
      <div id="seperation-line-horiz"></div>
    </div>
  
    <!-- Indeling -->
    <div class="listing-data-category">
      <h6 class="secondary"><b>Indeling:</b></h6>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Aantal kamers</p>
        <p class="listing-data-var">{listing.total_rooms}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Aantal slaapkamers</p>
        <p class="listing-data-var">{listing.bedroom_count}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Aantal badkamers</p>
        <p class="listing-data-var">{listing.bathroom_count}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Badkamervoorzieningen</p>
        <p class="listing-data-var">
          {listing.bathroom_amenities_custom
            ? listing.bathroom_amenities_custom
            : listing.bathroom_amenities}
        </p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Keukenapparatuur</p>
        <p class="listing-data-var">
          {listing.kitchen_appliances_custom
            ? listing.kitchen_appliances_custom
            : listing.kitchen_appliances}
        </p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Vloertype</p>
        <p class="listing-data-var">{listing.floor_type}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Aantal woonlagen</p>
        <p class="listing-data-var">{listing.floor_count}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Werk- of hobbyruimte</p>
        <p class="listing-data-var">Onbekend</p>
      </div>
      <div id="seperation-line-horiz"></div>
    </div>
  
    <!-- Energie -->
    <div class="listing-data-category">
      <h6 class="secondary"><b>Energie:</b></h6>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Energielabel</p>
        <p class="listing-data-var">{listing.energy_label}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Warmtepomp</p>
        <p class="listing-data-var">
          {listing.has_heatpump
            ? `Ja, ${listing.heatpump_model ?? ''}`
            : 'Nee'}
        </p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Vloerverwarming</p>
        <p class="listing-data-var">
          {listing.has_underfloor_heating ? 'Ja' : 'Nee'}
        </p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Warm water</p>
        <p class="listing-data-var">{listing.warm_water}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">Verwarming</p>
        <p class="listing-data-var">{listing.heating}</p>
      </div>
      <div id="seperation-line-horiz"></div>
  
      <div class="listing-data-row">
        <p class="listing-data-name">CV Ketel</p>
        <p class="listing-data-var">
          {listing.central_heating_boiler ?? 'Onbekend'}
        </p>
      </div>
      <div id="seperation-line-horiz"></div>
    </div>
  </div>
  
  <style>
    .listing-data-list {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  
    .listing-data-category {
      display: flex;
      flex-direction: column;
      margin: 15px 0;
    }

    .listing-data-category h6 {
      margin-bottom: 5px;
    }
  
    .listing-data-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 8px 0;
    }
  
    .listing-data-name {
      color: #787878;
      margin-right: 5%;
      flex-basis: 40%;
    }
  
    .listing-data-var {
      max-width: 55%;
      text-align: right;
    }
  
    #seperation-line-horiz {
      border: 0.5px solid rgba(120, 120, 120, 0.7);
    }
  </style>  