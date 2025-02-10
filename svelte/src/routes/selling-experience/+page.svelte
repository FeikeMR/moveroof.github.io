<script>
    import Stage from "svelte/src/lib/components/Stage.svelte";
  
    // Track which stage is open
    let openStageId = null;
  
    function onToggleStage(e) {
      const id = e.detail.stageId;
      if (openStageId === id) {
        openStageId = null;
      } else {
        openStageId = id;
      }
    }
  
    // Define all 12 "stages" as in your original "selling experience" HTML
    // Each stage has: stageId, title, description, templateCount, elements[]
    // Each element has: elementId, title, templates[], articleHtml, (and isOpen is controlled by parent).
    let stages = [
      {
        stageId: "keuze-om-te-verkopen",
        title: "Keuze om te verkopen",
        description:
          "Voordat je het proces induikt om te verkopen, ben je financieel en emotioneel klaar om te verkopen?",
        templateCount: 0,
        elements: [
          {
            elementId: "klaar-voor-verkoop",
            title: "Klaar om te verkopen?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Hoe bepaal je of je klaar bent om je woning te verkopen?</h4>
  <p>Het verkopen van een huis is een belangrijke beslissing die verder gaat dan een financiële overweging. Het is een keuze die vaak wordt ingegeven door persoonlijke, praktische en emotionele factoren. Dit artikel helpt je te bepalen of je klaar bent om de stap te zetten en je woning te verkopen.</p>
  <h5>Waarom overweeg je verkoop?</h5>
  <p>Het is belangrijk om stil te staan bij je motivatie. Stel jezelf de vraag waarom je je woning wilt verkopen. Veelvoorkomende redenen kunnen zijn:</p>
  <ul>
      <li>Ruimtegebrek: Je gezin groeit en je huidige woning voelt te klein.</li>
      <li>Overcapaciteit: Je kinderen zijn uit huis en je huis is te groot geworden.</li>
      <li>Werk of studie: Een baan of studie elders vraagt om een verhuizing.</li>
      <li>Financiële situatie: Je maandlasten zijn te hoog of je wilt kapitaal vrijmaken.</li>
      <li>Levensstijl: Je wilt dichter bij familie wonen, meer rust of juist meer reuring.</li>
  </ul>
  <p>Door je motivatie helder te krijgen, kun je beter beoordelen of de timing juist is of dat het mogelijk iets tijdelijks is waar je overheen komt.</p>
  <h5>Praktisch: Heb je een plan?</h5>
  <p>Een goede voorbereiding is essentieel om je verkooptraject soepel te laten verlopen. Zorg dat je:</p>
  <ul>
      <li>Je financiële situatie begrijpt. Heb je inzicht in je hypotheek, je spaargeld en eventuele verplichtingen?</li>
      <li>Weet waar je naartoe gaat. Ben je al op zoek naar een nieuwe woning of wil je eerst tijdelijk huren?</li>
      <li>De juiste hulp inschakelt indien nodig. Beslis of je het verkoopproces zelf wilt doen of dat je een makelaar inschakelt.</li>
      <li>Een tijdspad hebt. Het verkopen van een huis kost tijd. Zorg dat je ruimte hebt om dit goed te plannen.</li>
  </ul>
  <h5>Twijfel je nog?</h5>
  <p>Als je nog niet zeker weet of je klaar bent om te verkopen, neem dan de tijd om je opties te overwegen. Praat met vrienden, familie of een professional om je gedachten te ordenen. Het is beter om een weloverwogen keuze te maken dan overhaast te handelen.</p>
  <h5>Conclusie</h5>
  <p>Of je klaar bent om je woning te verkopen hangt af van je motivatie, financiële situatie, emotionele gereedheid en praktische voorbereiding. Neem de tijd om deze aspecten te overwegen. Een goed doordachte beslissing zorgt niet alleen voor minder stress, maar ook voor een beter resultaat. Wil je meer lezen of je er financieel en emotioneel klaar voor bent om je woning te verkopen, lees de artikelen van stap 1 "Keuze om te verkopen".</p>
            `
          },
          {
            elementId: "verkoop-voorbereiding",
            title: "Jezelf voorbereiden op de verkoop",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Financiële en emotionele voorbereiding voor de verkoop van je huis</h4>
  <p>Het verkopen van je huis is een grote stap. Of je nu al jaren in je huis woont of maar kort, het kan emotioneel en financieel overweldigend zijn. Een goede voorbereiding kan het verschil maken. Dit artikel helpt je op weg met inzichten over hoe je je financieel en emotioneel kunt voorbereiden op de verkoop van je huis.</p>
  <h5>Financiële voorbereiding: meer dan alleen cijfers</h5>
  <p>Het verkopen van je huis heeft financiële gevolgen. Denk hierbij niet alleen aan de verkoopprijs, maar ook aan de kosten die komen kijken bij het verkoopproces. Zo voorkom je verrassingen en houd je overzicht over je budget.</p>
  <ol>
      <li><strong>Bepaal de waarde van je huis.</strong> Om realistisch te zijn over wat je kunt verwachten, is het belangrijk om de waarde van je woning te laten bepalen. Dit kun je doen door een taxatie te laten uitvoeren door een erkend taxateur. Voor een globaal beeld kun je ook de WOZ-waarde raadplegen en kijken naar vergelijkbare woningen in jouw buurt die recent zijn verkocht.</li>
      <li><strong>Houd rekening met verkoopkosten.</strong> Zelf je huis verkopen zonder makelaar kan kosten besparen, maar er zijn alsnog uitgaven waarmee je rekening moet houden, zoals:
          <ul>
              <li>Advertentiekosten op platforms als Funda of Marktplaats.</li>
              <li>Kosten voor professionele fotografie om je huis aantrekkelijk te presenteren.</li>
              <li>Eventuele kosten voor een energielabel, wat verplicht is bij verkoop.</li>
          </ul>
      </li>
      <li><strong>Bereid je voor op de afrekening.</strong> Bij de verkoop van je huis wordt vaak gedacht aan de opbrengst, maar vergeet niet dat je ook mogelijk kosten hebt bij de notaris voor de eigendomsoverdracht. Als je een hypotheek hebt, kan er sprake zijn van een boeterente of aflossing.</li>
      <li><strong>Wat gebeurt er met je hypotheek?</strong> Controleer bij je bank of hypotheekverstrekker wat de gevolgen zijn van de verkoop. Bij sommige hypotheken kun je deze meenemen naar een volgende woning, maar in andere gevallen moet je deze volledig aflossen. Houd ook rekening met de zogeheten <a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/woning/eigen-woning/u-verkoopt-een-huis/bijleenregeling/bijleenregeling" target="_blank">'bijleenregeling'</a>, waarbij de winst die je maakt op je huis invloed kan hebben op een nieuwe hypotheek.</li>
  </ol>
  <h5>Emotionele voorbereiding: afscheid nemen en vooruit kijken</h5>
  <p>Het is makkelijk om je te focussen op de praktische en financiële kant van de verkoop, maar het emotionele aspect mag niet worden onderschat. Je huis is meer dan een stapel stenen; het is een plek vol herinneringen.</p>
  <ol>
      <li><strong>Wees je bewust van de verandering.</strong> De verkoop van je huis kan een gevoel van verlies oproepen. Misschien heb je hier jarenlang gewoond en een band opgebouwd met de buurt of buren. Neem de tijd om bewust afscheid te nemen.</li>
      <li><strong>Betrek je gezin in het proces.</strong> Als je met een partner of kinderen samenwoont, is het belangrijk om hen mee te nemen in het proces. Voor kinderen kan het extra moeilijk zijn om een vertrouwde plek achter te laten.</li>
      <li><strong>Visualiseer je toekomst.</strong> Het helpt om je te richten op wat er komt na de verkoop.</li>
      <li><strong>Vraag hulp als het nodig is.</strong> Het is helemaal niet gek om emotioneel te zijn tijdens de verkoop van je huis. Als je merkt dat je het moeilijk vindt om ermee om te gaan, praat dan met vrienden of familie. Ook een professionele coach of counselor kan je helpen om de verandering in goede banen te leiden.</li>
  </ol>
  <h5>Neem de tijd</h5>
  <p>MoveRoof maakt het inzichtelijk, overzichtelijk en makkelijk, maar een huis verkopen is geen dagelijkse bezigheid. Neem de tijd om je goed voor te bereiden, zowel financieel als emotioneel. Met een duidelijke planning en een beetje zelfreflectie kun je deze grote stap met vertrouwen nemen.</p>
  <p>Door de praktische tips en inzichten in dit artikel kun je een solide basis leggen voor een soepele verkoop. Onthoud: een goede voorbereiding is het halve werk!</p>
            `
          }
        ]
      },
      {
        stageId: "onderzoek-en-voorbereiding",
        title: "Onderzoek & voorbereiding",
        description:
          "Voordat je duikt in het verkopen van de woning enkele voorbereidingen, een goede voorbereiding is essentieel.",
        templateCount: 1, // the stage-head icons mention +1 template
        elements: [
          {
            elementId: "verkoop-onderzoek",
            title: "Onderzoek voordat je verkoopt",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Wat moet je weten voordat je je woning verkoopt?</h4>
  <p>Het verkopen van je woning is een grote stap. Het is niet alleen een kwestie van een bord in de tuin zetten en wachten op een koper. Er komt veel meer bij kijken. In dit artikel bespreken we de belangrijkste zaken die je moet weten voordat je je woning verkoopt, zodat je goed voorbereid bent. Denk aan de marktsituatie, het kostenplaatje, juridische verplichtingen, emotionele voorbereiding en tijdsinvestering.</p>
  <h5>Begrijp de marktsituatie</h5>
  <p>De huizenmarkt kan enorm variëren. Is het een kopersmarkt, waarin er veel aanbod is en kopers dus kunnen onderhandelen? Of is het een verkopersmarkt, waarin huizen snel en vaak boven de vraagprijs worden verkocht? Het is belangrijk om een realistisch beeld te hebben van de markt voordat je je woning in de verkoop zet.</p>
  <p>Je kunt dit onderzoeken door:</p>
  <ul>
      <li>Te kijken naar recente verkoopprijzen van vergelijkbare woningen in jouw buurt.</li>
      <li>Te raadplegen hoeveel woningen te koop staan en hoe lang ze gemiddeld te koop blijven.</li>
      <li>Inzicht te krijgen in de renteontwikkelingen, want die hebben invloed op het aantal kopers.</li>
  </ul>
  <p>Een goed begrip van de marktsituatie helpt je om een passende vraagprijs vast te stellen en je verwachtingen te managen.</p>
  <h5>Juridische verplichtingen</h5>
  <p>Bij de verkoop van een woning heb je te maken met verschillende wettelijke regels:</p>
  <ul>
      <li><strong>Informatieplicht:</strong> Als verkoper ben je verplicht om alle relevante informatie over de woning te delen, zoals gebreken.</li>
      <li><strong>Koopcontract:</strong> Het koopcontract moet juridisch kloppen en bevat afspraken over de prijs, de leverdatum en eventuele ontbindende voorwaarden. MoveRoof heeft hiervoor gratis templates, zie stap 8 "Verkoopovereenkomst opstellen"</li>
      <li><strong>Overdrachtsbelasting:</strong> Hoewel kopers deze belasting meestal betalen, is het goed om hiervan op de hoogte te zijn.</li>
  </ul>
  <p>Een notaris of juridisch adviseur kan je ondersteunen bij het naleven van deze verplichtingen.</p>
  <h5>Tot slot</h5>
  <p>Een woning verkopen is een proces dat voorbereiding en inzet vraagt. Door je goed in te lezen en te organiseren, kun je veel stress voorkomen en een succesvolle verkoop realiseren. Onthoud: hoe beter je bent voorbereid, hoe groter de kans op een goede verkoopprijs en een soepel proces. MoveRoof helpt je hier graag bij!</p>
            `
          },
          {
            elementId: "zelf-of-makelaar",
            title: "Zelf verkopen of toch een makelaar?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Zelf je woning verkopen of met een makelaar? Een eerlijke vergelijking</h4>
  <p>Bij het verkopen van een woning komt veel kijken. Een van de eerste beslissingen die je moet nemen, is of je het zelf doet of dat je een makelaar inschakelt. Beide opties hebben hun voor- en nadelen. Wat betaal je als je het zelf doet? En wat kost een makelaar? En wat krijg je eigenlijk voor dat geld?</p>
  <p>Laten we eerlijk zijn: een woning verkopen is een grote stap. Het gaat niet alleen om geld, maar ook om tijd en energie. Toch blijkt zelf verkopen vaak (financieel) aantrekkelijker te zijn en geeft veel voldoening – mits je bereid bent om tijd en aandacht te investeren. Laten we het eens goed bekijken.</p>
  <h5>De kosten van een makelaar</h5>
  <p>Als je een makelaar inschakelt, betaal je meestal een percentage van de verkoopprijs, ook wel courtage genoemd. Dit percentage ligt vaak tussen de 1% en 2% van de verkoopprijs. Stel, je woning wordt verkocht voor €350.000 en je betaald 1.5% courtage, dan betaal je €5.250,- aan courtage. Daarbovenop kunnen er extra kosten zijn, zoals:</p>
  <ul>
      <li>Opstartkosten;</li>
      <li>Kosten voor het maken van foto’s;</li>
      <li>Advertenties op Funda;</li>
      <li>De onderhandelingen.</li>
  </ul>
  <p>Wat krijg je hiervoor? Een makelaar neemt werk uit handen, zoals:</p>
  <ul>
      <li>Het bepalen van een vraagprijs;</li>
      <li>Het regelen van een fotograaf en plattegronden;</li>
      <li>Het plaatsen van de woning op Funda;</li>
      <li>Bezichtigingen geven;</li>
      <li>Onderhandelingen.</li>
  </ul>
  <p>Maar deze diensten dragen dus een (nu) bekend prijskaartje.</p>
  <h5>Wat kost het om zelf je woning te verkopen?</h5>
  <p>Zelf je woning verkopen betekent niet dat het gratis is, maar het kan aanzienlijk goedkoper zijn. Hieronder een overzicht van de kosten waarmee je rekening moet houden:</p>
  <p><strong>Advertentiekosten:</strong> 
  Als je je woning enkel adverteert op Marktplaats of andere sociale media kanalen dan kunnen deze kosten €0 zijn. Echter zie je vaak dat mensen hun woning toch graag op Funda zien verschijnen en daar ook voordelen van ervaren. Zelf kan je als particulier geen woning op Funda plaatsen dus dit zal je via een internetmakelaar moeten doen. Internetmakelaars kunnen meer aanbieden, maar enkel een Funda-plaatsing kost vaak wel €500. MoveRoof heeft hiervoor significant goedkopere oplossingen.</p>
  <p><strong>Fotografie:</strong> 
  Goede foto’s maken je woning aantrekkelijk en zorgen voor meer interesse. Dit kan je zelf doen of een fotograaf inhuren.</p>
  <p><strong>Taxatie en energielabel:</strong> 
  Taxatierapporten zijn voor de koper nodig; je kunt de koper dit zelf laten opstellen. Indien je dit vooraf wilt kost dit gemiddeld €600. Een energielabel moet je wel echt leveren, dit is vereist. Dit kost gemiddeld €200.</p>
  <p><strong>Overige kosten:</strong>
  Naast bovenstaande kosten kan je er ook voor kiezen om de koopovereenkomst op te laten stellen door een jurist (<strong>tip:</strong> dit hoeft niet, wij hebben templates). Doe je dit wel liever, dan kost dit gemiddeld €300 tot €500.</p>
  <p>In totaal, afhankelijk van je keuzes, kan je je woning zelf verkopen voor een bedrag tussen de €600 en €2.200. Dit is natuurlijk fors minder dan een makelaar. 
  MoveRoof heeft gewerkt aan een goedkopere oplossing hiervoor, zie <a href="/public/zelf-verkopen.html"><u>hier</u></a> de mogelijkheden.</p>
  <h5>De hoeveelheid werk: Wat moet je zelf doen?</h5>
  <p>Als je kiest voor zelf verkopen, neem je een groot deel van het proces in eigen hand. Dit betekent dat je zelf:</p>
  <ul>
      <li>Een vraagprijs bepaalt;</li>
      <li>Een aantrekkelijke advertentie opstelt;</li>
      <li>Bezichtigingen geeft;</li>
      <li>Onderhandelt over de prijs;</li>
  </ul>
  <p>Het kan in het begin overweldigend lijken, maar veel van deze taken zijn goed te doen als je georganiseerd te werk gaat en je deze MoveRoof proceslijn volgt.</p>
  <h5>Waarom zelf verkopen financieel aantrekkelijker is</h5>
  <p>Het grootste voordeel van zelf verkopen is dat je de kosten van een makelaar bespaart. Neem het eerder genoemde voorbeeld: als je woning wordt verkocht voor €350.000, betaal je aan een makelaar gemiddeld €5.250 (uitgaande van 1,5% courtage). Zelf verkopen kost je waarschijnlijk niet meer dan €1.700 als je een compleet pakket kiest via Makelaarsland, of zelfs maar €600-€700 via MoveRoof.com. Dat is een verschil van duizenden euro’s. Dat geld kun je mooi besteden aan bijvoorbeeld je nieuwe woning, een verbouwing of een leuke vakantie.</p>
  <h5>Voor wie is zelf verkopen geschikt?</h5>
  <p>Zelf je woning verkopen is vooral een goede keuze als:</p>
  <ul>
      <li>Je tijd hebt om het verkoopproces op je te nemen;</li>
      <li>Je georganiseerd bent en goed kunt communiceren;</li>
      <li>Je kosten wilt besparen;</li>
      <li>Je het niet erg vindt om bezichtigingen te begeleiden en te onderhandelen.</li>
  </ul>
  <h5>Tot slot</h5>
  <p>Zelf je woning verkopen vraagt om een actieve aanpak, maar de besparingen zijn vaak groots. Het is een kwestie van goed voorbereid zijn en je inlezen in wat er nodig is. Hopelijk helpt dit artikel je om een weloverwogen keuze te maken. Wat je ook kiest, onthoud: de verkoop van je woning is een belangrijke stap, en je hebt de regie in eigen handen.</p>
  <p><strong>MoveRoof helpt je graag aan zo goed mogelijke ervaring voor de laagst mogelijke kosten. Neem contact op om de mogelijkheden te horen.</strong></p>
            `
          },
          {
            elementId: "lijst-van-zaken-start",
            title: "Nadenken over de lijst van zaken",
            templates: [
              {
                fileUrl: "/public/assets/documents/verkopen/Lijst van zaken voorbereiding - MoveRoof Template.pdf",
                fileName: "Lijst van zaken voorbereiding - MoveRoof Template.pdf",
                labelText: "De lijst van zaken - PDF"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/Lijst van zaken voorbereiding - MoveRoof Template.docx",
                fileName: "Lijst van zaken voorbereiding - MoveRoof Template.docx",
                labelText: "De lijst van zaken - Word"
              }
            ],
            articleHtml: `
  <h4 class="secondary">Wat wil je wel of niet achterlaten bij de verkoop van je woning?</h4>
  <p>Bij de verkoop van een woning komt een bijzondere vraag naar voren: wat neem je mee en wat laat je achter? Hoewel je misschien geneigd bent om alles mee te nemen, is het goed om stil te staan bij wat je kopers wilt aanbieden. Sommige zaken kun je verkopen als onderdeel van de woning, andere dingen kunnen een meerwaarde zijn om de verkoop te versnellen. Dit artikel helpt je om bewuste keuzes te maken.</p>
  <h5>Wat moet je achterlaten?</h5>
  <p>Er zijn een aantal zaken die standaard bij de woning horen en die je wettelijk gezien niet zomaar mag meenemen. Dit wordt het "nagelvaste goed" genoemd. Denk hierbij aan:</p>
  <ul>
      <li><strong>Ingebouwde keukenapparatuur:</strong> Zoals een vaatwasser, oven of kookplaat die vast in de keuken zijn geïnstalleerd.</li>
      <li><strong>Vaste verlichting:</strong> Lampen die in het plafond zijn ingebouwd.</li>
      <li><strong>Vloeren:</strong> Als de vloer vastgelijmd of gespijkerd is, wordt deze gezien als onderdeel van de woning.</li>
      <li><strong>Sanitair:</strong> Toiletten, wastafels en ingebouwde douches.</li>
  </ul>
  <p>Het is belangrijk om duidelijk te communiceren met potentiële kopers wat er bij de woning inbegrepen is. Dit voorkomt misverstanden en mogelijke conflicten bij de oplevering.</p>
  <h5>Wat kun je verkopen of achterlaten?</h5>
  <p>Naast het standaard "nagelvaste goed" zijn er spullen die je kunt aanbieden aan de koper. Dit kunnen items zijn die praktisch zijn of die de woning aantrekkelijker maken. Denk bijvoorbeeld aan:</p>
  <ul>
      <li><strong>Meubels op maat:</strong> Zoals een op maat gemaakte kast of een bed dat precies in de kamer past.</li>
      <li><strong>Raambekleding:</strong> Gordijnen, jaloezieën of rolgordijnen die op maat gemaakt zijn en perfect bij de woning passen.</li>
      <li><strong>Vrijstaande apparatuur:</strong> Een koelkast, vriezer of wasmachine. Deze kunnen een aantrekkelijke extra zijn voor kopers.</li>
      <li><strong>Tuinmeubilair:</strong> Als je een mooie set hebt die goed bij de tuin past, kun je deze aanbieden.</li>
  </ul>
  <p>Kopers zijn vaak bereid extra te betalen voor een woning waar al deze zaken blijven staan, omdat ze dan minder zelf hoeven te regelen.</p>
  <h5>Hoe communiceer je dit naar de koper?</h5>
  <p>Transparantie is cruciaal bij de verkoop van je woning. Hier zijn een paar tips om duidelijk te maken wat je achterlaat en wat niet:</p>
  <ul>
      <li><strong>Maak een lijst:</strong> Stel een lijst op van de spullen die je wilt achterlaten en bied dit aan bij de bezichtigingen of het onderhandelingsproces.</li>
      <li><strong>Wees flexibel:</strong> Als een koper specifiek vraagt naar een item dat je eigenlijk wilde meenemen, overweeg dan of je dit alsnog kunt achterlaten.</li>
      <li><strong>Bespreek het in de koopovereenkomst:</strong> Zorg dat alle afspraken vastgelegd worden in de koopakte.</li>
  </ul>
  <h5>Waarom zou je spullen achterlaten?</h5>
  <p>Het achterlaten of verkopen van spullen kan voordelen hebben:</p>
  <ul>
      <li><strong>Praktisch voor de koper:</strong> Een volledig ingerichte woning of een woning met handige extra’s maakt het aantrekkelijker voor kopers.</li>
      <li><strong>Snellere verkoop:</strong> Een woning die instapklaar is, kan sneller verkocht worden.</li>
      <li><strong>Minder gedoe voor jou:</strong> Je hoeft niet alles mee te nemen en kunt misschien zelfs besparen op verhuiskosten.</li>
  </ul>
  <h5>Tot slot</h5>
  <p>Het bepalen van wat je wel of niet achterlaat bij de verkoop van je woning is een persoonlijke keuze. Het kan echter ook strategisch zijn om de verkoop aantrekkelijker te maken. Door goed te communiceren en afspraken vast te leggen, kun je problemen voorkomen en een soepele overdracht realiseren.</p>
            `
          },
          {
            elementId: "verplichte-documenten-start",
            title: "Verplichte documenten verzamelen",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Welke documenten heb je nodig bij de verkoop van je woning?</h4>
  <p>Je hebt besloten je huis te verkopen. Een van de belangrijkste onderdelen van het verkoopproces is het verzamelen van de juiste documenten. Deze papieren zorgen ervoor dat je alles netjes en volgens de regels regelt, wat het vertrouwen van kopers wekt, je een hoop stress kan besparen en je allemaal moet meeleveren bij de uiteindelijke koopovereenkomst. Maar welke documenten heb je precies nodig? En waar kun je ze vinden? Dat leg ik je graag uit.</p>
  <h5>1. Eigendomsbewijs: bewijs dat jij de eigenaar bent</h5>
  <p>Het eigendomsbewijs (ook wel de akte van levering genoemd) bevestigt dat jij de rechtmatige eigenaar van de woning bent. Dit document heb je destijds ontvangen van de notaris toen je de woning kocht. Ben je het kwijt? Geen zorgen. Je kunt een kopie opvragen bij het Kadaster.</p>
  <p><strong>Waar opvragen?</strong> Via <a href="https://kadaster.nl" target="_blank">Kadaster.nl</a></p>
  <h5>2. Kadastrale kaart</h5>
  <p>De kadastrale kaart toont de exacte grenzen van je perceel en omliggende kavels.</p>
  <p><strong>Waar opvragen?</strong> Via <a href="https://kadaster.nl" target="_blank">Kadaster.nl</a></p>
  <h5>3. Energielabel: verplicht bij verkoop</h5>
  <p>Wettelijk gezien moet je een geldig energielabel kunnen overhandigen bij de verkoop van je woning. Heb je er nog geen of is het verlopen? Dan kun je een nieuw energielabel aanvragen via erkende adviseurs.</p>
  <p><strong>Waar regelen?</strong> Meer informatie en aanvragen via de <a href="https://www.rijksoverheid.nl" target="_blank">Rijksoverheid</a></p>
  <h5>4. WOZ-beschikking: de waarde van je woning</h5>
  <p>De WOZ-beschikking geeft de door de gemeente vastgestelde waarde van je woning aan. ...</p>
  <p><strong>Waar opvragen?</strong> Ga naar <a href="https://mijn.overheid.nl" target="_blank">MijnOverheid</a></p>
  <h5>5. Lijst van zaken</h5>
  <p>Bij de verkoop zijn de vragenlijst en de lijst van roerende zaken standaarddocumenten. Hierin beschrijf je de staat van de woning en geef je aan welke spullen achterblijven.</p>
  <p><strong>Gebruik hiervoor ons voorbeeld bij het vorige artikel.</strong></p>
  <h5>6. Documenten van de Vereniging van Eigenaren (VvE)</h5>
  <p>Als je een appartement verkoopt, zijn VvE-documenten onmisbaar. Denk aan notulen van vergaderingen, de jaarstukken, het meerjarenonderhoudsplan en het huishoudelijk reglement. Mogelijk heeft jouw VvE nog andere documenten die hier relevant voor zijn, vraag dit bij hen na.</p>
  <h5>7. Splitsingsakte en -tekening</h5>
  <p>Voor appartementen is de splitsingsakte en -tekening essentieel.</p>
  <p><strong>Waar opvragen?</strong> Via <a href="https://kadaster.nl" target="_blank">Kadaster.nl</a></p>
  <h5>8. Aanslagen gemeentelijke belastingen</h5>
  <p>Deze documenten laten zien welke gemeentelijke lasten er aan de woning verbonden zijn.</p>
  <p><strong>Waar opvragen?</strong> Log in op <a href="https://mijn.overheid.nl" target="_blank">MijnOverheid</a></p>
  <h5>9. Plattegronden en bouwtekeningen</h5>
  <p>Deze documenten geven kopers inzicht in de indeling en afmetingen van je woning.</p>
  <p><strong>Waar opvragen?</strong> Bij de gemeente of via <a href="https://kadaster.nl" target="_blank">Kadaster.nl</a></p>
  <h5>10. Garantiebewijzen en onderhoudsdocumenten</h5>
  <p>Heb je recent een nieuwe cv-ketel geplaatst of zonnepanelen laten installeren? Verzamel de garantiebewijzen en eventuele onderhoudsdocumenten.</p>
  <h5>Goed voorbereid, minder stress</h5>
  <p>Het verzamelen van alle benodigde documenten kan even duren, maar het zorgt ervoor dat je woningverkoop soepel verloopt. Het voorkomt last-minute problemen en zorgt ervoor dat kopers je vertrouwen.</p>
            `
          },
          {
            elementId: "abonnementen-inventarisatie",
            title: "Inventarisatie van abonnementen",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Waarom het belangrijk is om je abonnementen en registraties te inventariseren</h4>
  <p>Bij het verkopen van je woning en een eventuele verhuizing, vergeet je al snel iets belangrijks: je abonnementen en waar je overal staat ingeschreven. Dit lijkt op het eerste gezicht onbelangrijk, maar het kan je veel tijd en geld schelen als je dit op tijd regelt.</p>
  <h5>Wat voor abonnementen en registraties moet je inventariseren?</h5>
  <p>Veel mensen hebben meer abonnementen en registraties dan ze zich realiseren. Hier zijn een paar voorbeelden:</p>
  <ul>
      <li><strong>Energie- en waterleveranciers</strong></li>
      <li><strong>Internet en tv</strong></li>
      <li><strong>Gemeentelijke belastingen</strong></li>
      <li><strong>Verzekeringen</strong></li>
      <li><strong>Post en pakketten</strong></li>
      <li><strong>Vereniging van Eigenaren (VvE)</strong></li>
  </ul>
  <h5>Waarom nu beginnen?</h5>
  <p>Een goede voorbereiding helpt je om stress te voorkomen en zorgt ervoor dat je niets over het hoofd ziet.</p>
  <h5>Hoe maak je een overzicht?</h5>
  <p>Het maken van een overzicht is eenvoudig en kost je niet veel tijd. Volg deze stappen:</p>
  <ol>
      <li><strong>Maak een document of lijst</strong></li>
      <li><strong>Noteer categorieën</strong></li>
      <li><strong>Controleer je bankafschriften</strong></li>
      <li><strong>Vul de lijst regelmatig aan</strong></li>
      <li><strong>Actieplan maken</strong></li>
  </ol>
  <h5>Tot slot</h5>
  <p>Het inventariseren van je abonnementen en inschrijvingen lijkt misschien een kleine taak, maar het kan je veel gedoe besparen tijdens de verhuizing. Door nu al een overzicht te maken, kun je stress en extra kosten voorkomen.</p>
            `
          }
        ]
      },
      {
        stageId: "woning-verkoopklaar-maken",
        title: "Woning verkoopklaar maken",
        description:
          "Hoe laat je jou woning het beste uit de verf komen? Mogelijk toch een kleine reparatie, schoonmaakbeurt of accessoires.",
        templateCount: 0,
        elements: [
          {
            elementId: "repareren-ja-nee",
            title: "Woning repareren of liever niet?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Repareren of niet? Maak bewust de keuze bij het verkopen van je huis</h4>
  <p>Wanneer je je huis wilt verkopen, komt al snel de vraag naar boven: Moet ik nog dingen repareren of kan ik mijn woning verkopen zoals hij is? Het antwoord hangt af van jouw situatie, en het is belangrijk om hier bewust over na te denken.</p>
  <h5>Verkopen zonder reparaties</h5>
  <p>Sommige verkopers kiezen ervoor om hun woning in de huidige staat aan te bieden.</p>
  <ul>
      <li><strong>Geen extra kosten</strong></li>
      <li><strong>Sneller verkoopproces</strong></li>
      <li><strong>Aantrekkelijk voor klussers</strong></li>
  </ul>
  <p>Maar let op, er zijn ook nadelen. Een huis dat zichtbare gebreken heeft, kan minder aantrekkelijk zijn en daardoor langer te koop staan.</p>
  <h5>Verkopen na reparaties</h5>
  <p>Je kunt ervoor kiezen om kleine of grotere reparaties door te voeren. Voordelen:</p>
  <ul>
      <li><strong>Meer kopers aanspreken</strong></li>
      <li><strong>Hogere verkoopprijs</strong></li>
      <li><strong>Snellere verkoop</strong></li>
  </ul>
  <h5>De juiste keuze maken</h5>
  <p>De keuze tussen repareren of niet hangt vooral af van:</p>
  <ul>
      <li><strong>Je budget</strong></li>
      <li><strong>De staat van je huis</strong></li>
      <li><strong>De markt</strong></li>
  </ul>
  <p>Wees realistisch en maak een keuze die past bij jouw situatie.</p>
            `
          },
          {
            elementId: "welke-reparaties",
            title: "Welke reparaties wel/niet doen?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Welke reparaties zijn de moeite waard en welke niet?</h4>
  <p>Bij het verkopen van je huis wil je vaak de beste prijs krijgen, maar je wilt ook niet onnodig veel investeren in reparaties. Hoe weet je welke verbeteringen echt een verschil maken?</p>
  <h5>Reparaties die de moeite waard zijn</h5>
  <ul>
      <li><strong>Essentiële gebreken oplossen</strong></li>
      <li><strong>Kleine cosmetische aanpassingen</strong></li>
  </ul>
  <h5>Reparaties die je beter kunt overslaan</h5>
  <ul>
      <li><strong>Luxe upgrades</strong></li>
      <li><strong>Overdreven styling</strong></li>
      <li><strong>Onzichtbare verbeteringen</strong></li>
  </ul>
  <h5>Conclusie</h5>
  <p>Bij het verkopen van je huis draait het om balans. Pak de gebreken aan die kopers kunnen afschrikken en zorg voor een nette, verzorgde uitstraling. Vermijd dure ingrepen waarvan je niet zeker weet of ze waarde toevoegen.</p>
            `
          },
          {
            elementId: "buitenruimte-opfleuren",
            title: "Fleur je buitenruimte op",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Geef je tuin (of balkon) een opknapbeurt: de kracht van buitenruimte bij de verkoop van je huis</h4>
  <p>Wanneer je je huis verkoopt, is de buitenruimte een super belangrijke plek die kopers aantrekt.</p>
  <h5>Waarom is de buitenruimte zo belangrijk?</h5>
  <p>Een tuin of balkon is niet zomaar een extra ruimte; het is een verlengstuk van de woning.</p>
  <h5>Wat kun je doen om je tuin verkoopklaar te maken?</h5>
  <ul>
      <li><strong>Ruim op</strong></li>
      <li><strong>Groen in topvorm</strong></li>
      <li><strong>Creëer sfeer</strong></li>
      <li><strong>Herstel beschadigingen</strong></li>
      <li><strong>Laat de ruimte groter lijken</strong></li>
  </ul>
  <h5>En als je geen tuin, maar een balkon hebt?</h5>
  <ul>
      <li><strong>Maak het functioneel</strong></li>
      <li><strong>Voeg groen toe</strong></li>
      <li><strong>Zorg voor netheid</strong></li>
  </ul>
  <h5>Conclusie</h5>
  <p>Of je nu een grote tuin hebt of een klein balkon, de buitenruimte is vaak het eerste en het laatste wat een koper ziet.</p>
            `
          },
          {
            elementId: "woning-aankleden",
            title: "Kleed je woning nét iets meer aan",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Kan je je woning iets meer aankleden? Een warmere sfeer doet wonderen</h4>
  <p>Bij het verkopen van je huis gaat het niet alleen om de grote lijnen, zoals de indeling en de staat van de woning. De sfeer in je huis speelt een minstens zo grote rol.</p>
  <h5>Waarom sfeer toevoegen werkt</h5>
  <p>Wanneer iemand je huis bezichtigt, stellen ze zich vaak voor hoe het zou zijn om daar zelf te wonen.</p>
  <h5>Hoe kun je je woning aankleden?</h5>
  <ul>
      <li><strong>Textiel voor warmte en kleur</strong></li>
      <li><strong>Wanddecoratie</strong></li>
      <li><strong>Groen in huis</strong></li>
      <li><strong>Licht en sfeer</strong></li>
      <li><strong>Accessoires voor de finishing touch</strong></li>
  </ul>
  <h5>Conclusie</h5>
  <p>Het aankleden van je woning is een eenvoudige, maar doeltreffende manier om meer sfeer te creëren en kopers aan te spreken. Met een paar extra kussens, wat planten en mooie verlichting geef je jouw huis een warme uitstraling waar iedereen zich thuis voelt.</p>
            `
          }
        ]
      },
      {
        stageId: "verkoopprijs-en-strategie",
        title: "Verkoopprijs & -strategie bepalen",
        description:
          "Het bepalen van je verkoopprijs en je -strategie is essentieel om het een prettige en goede verkoopervaring voor jezelf te maken.",
        templateCount: 0,
        elements: [
          {
            elementId: "buurt-huizenprijzen",
            title: "Huizenprijzen in jouw buurt",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Huizenprijzen in jouw buurt: Hoe krijg je een idee van de waarde?</h4>
  <p>Als je hebt besloten om je woning zelf te verkopen, is het logisch dat je benieuwd bent naar wat je huis waard is.</p>
  <h5>Waarom is een eerste indruk van de waarde belangrijk?</h5>
  <p>Voordat je een vraagprijs gaat bepalen, is het handig om te weten wat vergelijkbare woningen in jouw buurt doen.</p>
  <h5>Kijk naar vergelijkbare woningen in de buurt</h5>
  <p>Een van de makkelijkste manieren om een idee te krijgen van de huizenprijzen in jouw omgeving, is door te kijken naar woningen die lijken op de jouwe.</p>
  <h5>Vraagprijzen vs. verkoopprijzen</h5>
  <p>Vergeet niet dat vraagprijzen op Funda niet altijd hetzelfde zijn als verkoopprijzen. Kijk daarom ook naar de daadwerkelijke verkoopprijzen.</p>
  <h5>De invloed van de huizenmarkt</h5>
  <p>De staat van de huizenmarkt speelt een grote rol bij de waarde van jouw woning.</p>
  <h5>Emoties vs. realiteit</h5>
  <p>Het is begrijpelijk dat je je huis een hoge waarde toekent, zeker als je er al jaren woont.</p>
  <h5>Tot slot: blijf nieuwsgierig</h5>
  <p>Het vormen van een goed beeld van de huizenprijzen in jouw buurt is een belangrijke eerste stap.</p>
            `
          },
          {
            elementId: "vraagprijs-bepalen",
            title: "Vraagprijs bepalen",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Hoe bepaal je de vraagprijs van je woning?</h4>
  <p>Je hebt een goed idee van de huizenprijzen in jouw buurt, maar nu komt het echte werk: het bepalen van de vraagprijs. Dit is een cruciale stap, want een goede vraagprijs kan het verschil maken tussen een snelle verkoop of een woning die maandenlang te koop staat.</p>
  <h5>Kijk kritisch naar je woning</h5>
  <p>Wees eerlijk over de staat van je woning.</p>
  <h5>Analyseer de markt</h5>
  <p>De huizenmarkt kan per regio en zelfs per wijk sterk verschillen.</p>
  <h5>Houd rekening met bijkomende kosten</h5>
  <p>Bij het vaststellen van de vraagprijs is het belangrijk om rekening te houden met de kosten die je nog moet maken.</p>
  <h5>Je kan ook een taxatie laten doen</h5>
  <p>Hoewel je zelf al veel onderzoek hebt gedaan, is het inschakelen van een taxateur een slimme zet.</p>
  <h5>Blijf flexibel</h5>
  <p>De vraagprijs is een startpunt. Tijdens onderhandelingen kan het gebeuren dat je iets moet zakken om tot een deal te komen.</p>
  <h5>Tot slot</h5>
  <p>Het bepalen van de vraagprijs van je woning is een combinatie van research, strategie en een beetje gevoel. Neem de tijd om dit goed te doen.</p>
            `
          },
          {
            elementId: "verkoopstrategie-ja-nee",
            title: "Verkopen met/zonder verkoopstrategie",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Wat is een verkoopstrategie en heb ik dit nodig?</h4>
  <p>Bij het verkopen van je woning komt veel kijken. Naast het bepalen van de vraagprijs is er een andere belangrijke vraag: hoe ga je je huis eigenlijk verkopen? Dit is waar een verkoopstrategie om de hoek komt kijken. Maar wat houdt een verkoopstrategie precies in, en is het echt nodig?</p>
  <h5>Wat is een verkoopstrategie?</h5>
  <p>Een verkoopstrategie is simpel gezegd het plan dat je opstelt om je woning succesvol te verkopen.</p>
  <h5>Waarom is een verkoopstrategie belangrijk?</h5>
  <p>De huizenmarkt is competitief. Zelfs in een verkopersmarkt kan een slimme strategie het verschil maken.</p>
  <h5>Wat gebeurt er zonder strategie?</h5>
  <p>Als je geen duidelijke verkoopstrategie hebt, kan het verkoopproces rommelig en chaotisch worden.</p>
  <h5>Heb jij een verkoopstrategie nodig?</h5>
  <p>Het korte antwoord: ja. Of je nu een ervaren verkoper bent of voor het eerst je huis verkoopt, een verkoopstrategie geeft je rust en richting.</p>
  <h5>Tot slot</h5>
  <p>Een verkoopstrategie is meer dan een luxe; het is een essentieel onderdeel van het verkoopproces. Het geeft je grip op de situatie en helpt je om keuzes te maken die passen bij jouw woning en situatie.</p>
            `
          },
          {
            elementId: "verkoopstrategie-kiezen",
            title: "Verkoopstrategie kiezen",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Welke verkoopstrategie past bij mij?</h4>
  <p>Je hebt besloten je woning zelf te verkopen. Nu komt de vraag: welke verkoopstrategie past het beste bij jou en jouw woning?</p>
  <h5>Wat wil je bereiken?</h5>
  <p>Voordat je een strategie kiest, is het belangrijk om na te denken over je doelen.</p>
  <h5>Optie 1: Lagere vraagprijs om biedingen uit te lokken</h5>
  <p>Een veelgebruikte strategie is om je woning iets onder de marktwaarde te prijzen.</p>
  <h5>Optie 2: Marktconform prijzen voor een breed publiek</h5>
  <p>Wil je een strategie die veilig en betrouwbaar is? Kies dan voor een marktconforme vraagprijs.</p>
  <h5>Optie 3: Adverteren op de juiste plekken</h5>
  <p>Zelf verkopen betekent ook dat je slim moet adverteren.</p>
  <h5>Optie 4: Wat wil je benadrukken?</h5>
  <p>Ieder woning heeft unieke eigenschappen.</p>
  <h5>Optie 5: De juiste toon vinden</h5>
  <p>Hoe je je woning presenteert, zegt veel over wie je wilt aanspreken.</p>
  <h5>Wat past bij jou?</h5>
  <p>De ideale verkoopstrategie hangt af van jouw persoonlijke situatie.</p>
  <h5>Tot slot</h5>
  <p>Welke strategie je ook kiest, zorg dat deze aansluit bij jouw doelen en situatie. Een goede verkoopstrategie is meer dan alleen een prijs bedenken.</p>
            `
          },
          {
            elementId: "biedingstermijn-gebruiken",
            title: "Biedingstermijn gebruiken als strategie",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Wat is een biedingstermijn en wanneer stel je dit in?</h4>
  <p>Een biedingstermijn is een periode waarin geïnteresseerde kopers een bod op jouw woning kunnen uitbrengen.</p>
  <h5>Hoe stel je een biedingstermijn in?</h5>
  <ul>
      <li><strong>Een concrete einddatum en -tijdstip</strong></li>
      <li><strong>Kopers vooraf informeren</strong></li>
      <li><strong>Transparantie over de voorwaarden</strong></li>
  </ul>
  <h5>Voor- en nadelen van een biedingstermijn</h5>
  <h6>Voordelen:</h6>
  <ul>
      <li><strong>Overzicht en rust</strong></li>
      <li><strong>Gelijke kansen voor kopers</strong></li>
      <li><strong>Mogelijk hogere biedingen</strong></li>
  </ul>
  <h6>Nadelen:</h6>
  <ul>
      <li><strong>Druk voor kopers</strong></li>
      <li><strong>Risico van geen biedingen</strong></li>
      <li><strong>Lastig handhaven</strong></li>
  </ul>
  <h5>Hoe communiceer je een biedingstermijn?</h5>
  <p>Wees helder en consequent.</p>
  <h5>Hoe handhaaf je een biedingstermijn?</h5>
  <p>Om eerlijkheid te garanderen, is het belangrijk om je aan je eigen regels te houden.</p>
            `
          }
        ]
      },
      {
        stageId: "woningpresentatie",
        title: "Woningpresentatie",
        description:
          "Het maken van de meest aantrekkelijke en goed-verkopende woningpresentatie, dat is het doel hier!",
        templateCount: 0,
        elements: [
          {
            elementId: "woning-staging",
            title: "De kunst van 'woningstaging'",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Je huis verkoopklaar maken: De kunst van woningstaging</h4>
  <p>Wanneer je jouw huis gaat verkopen, wil je natuurlijk dat potentiële kopers meteen verliefd worden op de woning. Een van de meest effectieve manieren om dat te bereiken, is door het huis te “stagen”.</p>
  <h5>Wat is woningstaging?</h5>
  <p>Woningstaging is het proces waarbij je je huis zo aantrekkelijk mogelijk maakt voor een brede doelgroep.</p>
  <h5>Begin met een frisse blik</h5>
  <p>Het is vaak lastig om naar je eigen huis te kijken door de ogen van een koper.</p>
  <h5>Simpele tips voor een staged huis</h5>
  <ul>
      <li><strong>Creëer ruimte</strong></li>
      <li><strong>Houd het neutraal</strong></li>
      <li><strong>Speel met licht</strong></li>
      <li><strong>Werk met accessoires</strong></li>
  </ul>
  <h5>De eerste indruk telt</h5>
  <p>De buitenkant van je woning is het eerste wat kopers zien.</p>
  <h5>Professionele hulp inschakelen?</h5>
  <p>Het kan lonend zijn om een professionele woningstylist in te schakelen.</p>
  <h5>Het effect van woningstaging</h5>
  <p>Onderzoek toont aan dat gestylde woningen sneller verkopen en vaak tegen een hogere prijs.</p>
            `
          },
          {
            elementId: "wie-maakt-fotos",
            title: "Wie gaat jou foto's maken?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Verkoop Fotografie: Zelf doen of een professional inhuren?</h4>
  <p>Als je je huis gaat verkopen, is het maken van goede foto’s essentieel.</p>
  <h5>De kracht van goede foto’s</h5>
  <p>Mooie foto’s van je huis zijn niet zomaar een luxe, ze zijn een essentieel onderdeel van het verkoopproces.</p>
  <h5>Zelf foto’s maken: waarom niet?</h5>
  <p>Tegenwoordig hebben veel mensen een smartphone met een uitstekende camera.</p>
  <h5>Wanneer kies je voor een professional?</h5>
  <p>Hoewel zelf foto’s maken tegenwoordig goed mogelijk is, kan een professionele fotograaf nog steeds een meerwaarde hebben.</p>
  <h5>Conclusie</h5>
  <p>Het is tegenwoordig prima mogelijk om zelf goede foto’s te maken van je huis, zeker als je gebruik maakt van de juiste tips en technieken.</p>
            `
          },
          {
            elementId: "zelf-fotos-maken",
            title: "Zelf de mooiste foto's maken",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Zelf verkoopfoto’s maken: Hoe maak je de perfecte beelden?</h4>
  <p>Het maken van goede foto’s van je huis is een belangrijke stap in het verkoopproces. Je hoeft hiervoor niet altijd een professionele fotograaf in te schakelen. Met de juiste voorbereiding en je smartphone kun je zelf prachtige foto’s maken die jouw huis op zijn best laten zien.</p>
  <h5>Waarom zelf foto’s maken?</h5>
  <p>Met de technologie van vandaag hebben veel smartphones camera’s van hoge kwaliteit.</p>
  <h5>Voorbereiding: De basis van een goede foto</h5>
  <p>Een mooie foto begint met een goede voorbereiding.</p>
  <ul>
      <li><strong>Ruim op en maak schoon</strong></li>
      <li><strong>Creëer ruimte en rust</strong></li>
      <li><strong>Let op details</strong></li>
  </ul>
  <h5>Het juiste licht: De sleutel tot een goede foto</h5>
  <ul>
      <li><strong>Maak gebruik van natuurlijk licht</strong></li>
      <li><strong>Vermijd direct zonlicht</strong></li>
      <li><strong>Zet extra lampen aan</strong></li>
  </ul>
  <h5>Compositie: Hoe plaats je alles in beeld?</h5>
  <ul>
      <li><strong>Gebruik de juiste hoogte</strong></li>
      <li><strong>Maak gebruik van lijnen</strong></li>
      <li><strong>Kies de juiste hoeken</strong></li>
  </ul>
  <h5>Tips voor verschillende ruimtes</h5>
  <ul>
      <li><strong>Woonkamer</strong></li>
      <li><strong>Keuken</strong></li>
      <li><strong>Slaapkamer</strong></li>
      <li><strong>Badkamer</strong></li>
  </ul>
  <h5>Nabewerking: De finishing touch</h5>
  <p>Zelfs de beste foto’s kunnen vaak nog wat kleine verbeteringen gebruiken.</p>
  <h5>Controleer en selecteer</h5>
  <p>Maak altijd meerdere foto’s per ruimte en bekijk ze op een groot scherm.</p>
  <h5>Conclusie</h5>
  <p>Zelf verkoopfoto’s maken is met een beetje voorbereiding en geduld absoluut haalbaar. Door slim gebruik te maken van licht, compositie en nabewerking kun je jouw woning op een professionele manier presenteren.</p>
            `
          },
          {
            elementId: "verkoop-storytelling",
            title: "Storytelling bij de verkoop van je woning",
            templates: [],
            articleHtml: `
  <h4 class="secondary">De kracht van storytelling bij de verkoop van je woning</h4>
  <p>Het verkopen van een woning gaat over meer dan vierkante meters. Wat een woning echt aantrekkelijk maakt, is het gevoel dat het oproept. Hier komt storytelling – het vertellen van een verhaal – om de hoek kijken.</p>
  <h5>Waarom storytelling werkt</h5>
  <p>Storytelling raakt mensen op een emotioneel niveau.</p>
  <h5>Hoe creëer je een verhaal?</h5>
  <ul>
      <li><strong>Begin bij de kern</strong></li>
      <li><strong>Gebruik beeldende taal</strong></li>
      <li><strong>Vertel over ervaringen</strong></li>
      <li><strong>Wees authentiek</strong></li>
  </ul>
  <h5>Voorbeelden van storytelling in woningomschrijvingen</h5>
  <ul>
      <li><strong>In plaats van: </strong> "Ruime tuin op het zuiden." 
      <br><strong>Probeer: </strong> "Geniet van lange zomeravonden ..."</li>
  </ul>
  <h5>Het visuele aspect</h5>
  <p>Storytelling gaat niet alleen over woorden. Foto’s en video’s versterken het verhaal.</p>
  <h5>Het effect van storytelling op de koper</h5>
  <p>Een koper die geraakt wordt door het verhaal, blijft langer geïnteresseerd.</p>
  <h5>Conclusie</h5>
  <p>Door de kracht van storytelling te benutten, geef je jouw woning net dat beetje extra dat het verschil kan maken. Het draait uiteindelijk om één vraag: hoe maak je van een huis een thuis – en hoe vertel je dat verhaal?</p>
            `
          },
          {
            elementId: "verkoop-promotie",
            title: "Zelf je woning extra promoten",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Zelf je woning promoten: Hoe maak je van jouw huis een hotspot voor potentiële kopers?</h4>
  <p>Wanneer je jouw woning zelf verkoopt, zijn er partijen zoals MoveRoof die ervoor zorgen dat je huis op Funda wordt geplaatst. Dat is een geweldige eerste stap, maar wist je dat je zelf ook veel kunt doen om je woning extra in de schijnwerpers te zetten?</p>
  <h5>Het belang van goede promotie</h5>
  <p>Veel verkopers denken dat een advertentie op Funda voldoende is, maar potentiële kopers gebruiken meer dan één bron.</p>
  <h5>Sociale media: Jouw grootste bondgenoot</h5>
  <p>Facebook, Instagram, en zelfs LinkedIn kunnen helpen om jouw woning aan te prijzen.</p>
  <h5>Lokale platforms en marktplaatsen</h5>
  <p>Naast Funda zijn er andere manieren om je huis lokaal te promoten, zoals Nextdoor of Marktplaats.</p>
  <h5>Het maken van een opvallende advertentie</h5>
  <p>De inhoud van je advertentie speelt een grote rol in hoe effectief je promotie is.</p>
  <ul>
      <li><strong>Een pakkende titel</strong></li>
      <li><strong>Professionele foto’s</strong></li>
      <li><strong>Een aantrekkelijke beschrijving</strong></li>
  </ul>
  <h5>Organiseer een open huis</h5>
  <p>Een open huis is een uitstekende manier om meer kijkers te trekken.</p>
  <h5>Mond-tot-mondreclame</h5>
  <p>Vertel mensen in je netwerk dat je huis te koop staat.</p>
  <h5>Laat je woning opvallen</h5>
  <p>Zelf je woning promoten kan een creatieve en leuke uitdaging zijn. Door sociale media, lokale platforms en jouw netwerk slim in te zetten, kun je de zichtbaarheid van je huis enorm vergroten.</p>
            `
          }
        ]
      },
      {
        stageId: "contact-en-bezichtigingen",
        title: "Contact & bezichtigingen",
        description:
          "Er komen vragen en bezichtigingen aan, hoe ga je hier het beste mee om?",
        templateCount: 1, // because there's +1 template in stage head
        elements: [
          {
            elementId: "contacten-managen",
            title: "Contacten & vragen 'managen'",
            templates: [
              {
                fileUrl: "/public/assets/documents/verkopen/Contacten logboek - MoveRoof Template.xlsx",
                fileName: "Contacten logboek - MoveRoof Template.xlsx",
                labelText: "Contacten logboek - Excel"
              }
            ],
            articleHtml: `
  <h4 class="secondary">Alle contacten managen en organiseren tijdens de verkoop van je huis</h4>
  <p>Je woning staat online, misschien heb je hem zelfs zelf op je sociale media gepost voor extra aandacht. Dat is spannend, zeker als de aanvragen binnenstromen en potentiële kopers je via allerlei kanalen proberen te bereiken. Hoe zorg je ervoor dat je alle contacten overzichtelijk houdt en niets over het hoofd ziet? In dit artikel geef ik praktische tips om de communicatie met belangstellenden goed te organiseren.</p>
  <h5>Overzicht is alles</h5>
  <p>Als je huis eenmaal online staat, kunnen de reacties snel komen. Mensen bellen, sturen berichten via WhatsApp, reageren via e-mail of via de verkoopwebsite. Het is belangrijk om vanaf het begin structuur aan te brengen.</p>
  <h5>Gebruik een centrale plek voor alle gegevens</h5>
  <p>Het helpt enorm om alle informatie op één centrale plek te bewaren, bijvoorbeeld in Excel of Google Sheets. Noteer bijvoorbeeld:</p>
  <ul>
      <li>Naam en contactgegevens</li>
      <li>Datum van contact</li>
      <li>Het kanaal (e-mail, WhatsApp, Funda, etc.)</li>
      <li>Opmerkingen</li>
  </ul>
  <p>Denk er wel aan om deze gegevens te verwijderen wanneer je woning is verkocht en niet ergens rond te laten slingeren.</p>
            `
          },
          {
            elementId: "bezichtigingen-plannen",
            title: "Bezichtigingen plannen en organiseren",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Hoe organiseer en plan je bezichtigingen?</h4>
  <p>Je huis verkopen betekent vaak veel afspraken maken voor bezichtigingen. Het is een spannend proces, maar als je niet goed plant, kan het ook uitputtend zijn. Hoe zorg je ervoor dat je bezichtigingen slim organiseert?</p>
  <h5>Kies vaste dagen en tijden</h5>
  <p>Het is verleidelijk om iedereen op hun gewenste moment te ontvangen, maar dat kan snel chaotisch worden. Kies in plaats daarvan één of twee vaste dagen per week.</p>
  <h5>Plan bezichtigingen slim op de dag</h5>
  <p>Plan bezichtigingen met genoeg tijd ertussen.</p>
  <h5>Geef voorkeur aan daglicht</h5>
  <p>Huizen komen het best tot hun recht in natuurlijk licht.</p>
  <h5>Schrijf bezichtigingen op in je agenda</h5>
  <p>Het is klein en vanzelfsprekend, maar schrijf de bezichtigingen op in je digitale of fysieke agenda.</p>
  <h5>Combineer bezichtigingen waar mogelijk</h5>
  <p>Als je meerdere geïnteresseerden hebt, kun je overwegen om een open huis te organiseren.</p>
  <h5>Wees flexibel, maar bewaak je grenzen</h5>
  <p>Probeer mee te denken met de koper, maar bewaak ook je eigen agenda.</p>
            `
          },
          {
            elementId: "bezichtigingen-geven",
            title: "Zelf je bezichtigingen geven",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Tips voor het geven van een bezichtiging</h4>
  <p>Een bezichtiging is vaak het moment waarop potentiële kopers besluiten of jouw huis bij hen past. Dit kan spannend zijn, maar het is ook een kans om jouw woning van zijn beste kant te laten zien.</p>
  <h5>Een goede voorbereiding is het halve werk</h5>
  <p>Voordat de eerste bezoeker aanbelt, is het belangrijk om je huis goed voor te bereiden.</p>
  <h5>Wees gastvrij en ontspannen</h5>
  <p>Het contact met de bezoeker kan het verschil maken in hoe zij jouw woning ervaren.</p>
  <h5>Geef ruimte voor eigen ontdekking</h5>
  <p>Laat bezoekers zelf rondkijken zonder hen constant te volgen.</p>
  <h5>Maak het leuk voor jezelf</h5>
  <p>Bezichtigingen kunnen intensief zijn, maar met een goede mindset wordt het voor jou ook een leuke ervaring.</p>
            `
          },
          {
            elementId: "vragen-van-kopers",
            title: "Veelgestelde vragen van kopers",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Veelgestelde vragen van potentiële kopers</h4>
  <p>Tijdens bezichtigingen of het verkoopproces zullen potentiële kopers vaak met vragen komen. Goed voorbereid zijn op deze vragen laat een professionele indruk achter en zorgt ervoor dat je niet overvallen wordt.</p>
  <h5>Wat zijn de maandelijkse kosten?</h5>
  <p>Kopers willen vaak weten wat ze maandelijks kwijt zijn aan vaste lasten.</p>
  <h5>Hoe oud zijn de installaties en het dak?</h5>
  <p>Kopers willen weten of ze op korte termijn kosten kunnen verwachten.</p>
  <h5>Waarom verkoop je het huis?</h5>
  <p>Dit is een persoonlijke vraag, maar kopers stellen hem vaak om een gevoel te krijgen bij de reden van verkoop.</p>
  <h5>Wat is de staat van onderhoud?</h5>
  <p>Voor kopers is het belangrijk om te weten of het huis goed onderhouden is.</p>
  <h5>Hoe is de buurt?</h5>
  <p>Kopers willen weten of de buurt aansluit bij hun wensen.</p>
  <h5>Hoeveel bieden andere geïnteresseerden?</h5>
  <p>Dit kan een lastige vraag zijn. Je bent niet verplicht om exacte bedragen te delen.</p>
  <h5>Zijn er gebreken waar we rekening mee moeten houden?</h5>
  <p>Transparantie over gebreken is belangrijk. Je hebt als verkoper een meldplicht.</p>
  <h5>Wat is de opleverdatum?</h5>
  <p>Geef aan wanneer je verwacht dat de woning beschikbaar is.</p>
  <h5>Tips om je goed voor te bereiden</h5>
  <ul>
      <li><strong>Maak een lijst van gegevens</strong></li>
      <li><strong>Wees eerlijk</strong></li>
      <li><strong>Vraag hulp als nodig</strong></li>
  </ul>
            `
          }
        ]
      },
      {
        stageId: "biedingen-en-onderhandelen",
        title: "Biedingen & onderhandelen",
        description:
          "Om het meeste uit de verkoop te halen is het om kunnen gaan met biedingen en onderhandelingen belangrijk.",
        templateCount: 1,
        elements: [
          {
            elementId: "bedenkingen-vooraf",
            title: "Bedenkingen vooraf",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Houd je hoofd koel: bepaal vooraf je grenzen bij de verkoop van je huis</h4>
  <p>Het verkopen van je huis kan een rollercoaster van emoties zijn.</p>
  <h5>Waarom een goede voorbereiding belangrijk is</h5>
  <p>Zonder een duidelijk plan kun je tijdens het verkoopproces snel uit balans raken.</p>
  <h5>Bepaal je minimale verkoopprijs</h5>
  <p>Je minimale verkoopprijs is de grens waar je echt niet onder wilt gaan.</p>
  <h5>Wanneer is een bod te laag?</h5>
  <p>Bekijk de context van het bod.</p>
  <h5>Beslis wanneer je bereid bent te verkopen</h5>
  <p>Naarmate je bod krijgt, kan de hoogte van het bod en de voorwaarden je keuze beïnvloeden.</p>
  <h5>Creëer rust met duidelijke afspraken</h5>
  <p>Schrijf je minimale prijs en criteria op papier.</p>
  <h5>Conclusie: kies voor een rationele aanpak</h5>
  <p>Het verkoopproces kan hectisch en emotioneel zijn, maar door vooraf duidelijk te bepalen wat je wilt en nodig hebt, zorg je voor rust en overzicht.</p>
            `
          },
          {
            elementId: "onverwachtse-biedingen",
            title: "Hoe ga je om met onverwachte biedingen?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Onverwachte biedingen? Zo blijf je kalm en houd je de controle</h4>
  <p>Je bent volop bezig met de verkoop van je huis, en ineens gebeurt het: een potentiële koper doet onverwacht een bod. Dit kan je als verkoper overvallen, zeker als je niet direct weet hoe je moet reageren.</p>
  <h5>Waarom onverwachte biedingen een uitdaging zijn</h5>
  <p>Een onverwacht bod kan je verrassen, vooral als het aanbod lager of juist hoger is dan je had verwacht.</p>
  <h5>Blijf professioneel, hoe verrast je ook bent</h5>
  <p>Bij een onverwacht bod is het belangrijk om rustig te blijven.</p>
  <h5>Verzamel alle informatie</h5>
  <ul>
      <li><strong>Hoe serieus is het bod?</strong></li>
      <li><strong>Zijn er voorwaarden?</strong></li>
      <li><strong>Is de koper goed voorbereid?</strong></li>
  </ul>
  <h5>Laat je niet onder druk zetten</h5>
  <p>Sommige kopers proberen je misschien onder druk te zetten om snel te beslissen.</p>
  <h5>Raadpleeg je eigen plan</h5>
  <p>Denk terug aan je minimale prijs en voorwaarden die je van tevoren hebt bepaald.</p>
  <h5>Bespreek het met een vertrouwenspersoon</h5>
  <p>Bij twijfel kun je altijd overleggen met iemand die je vertrouwt.</p>
  <h5>Geef een goed doordacht antwoord</h5>
  <p>Als je besluit te reageren, doe dit op een manier die je onderhandelingspositie versterkt.</p>
  <h5>Samenvatting: houd altijd de regie</h5>
  <p>Onverwachte biedingen kunnen spannend zijn, maar door kalm te blijven en een plan te volgen, houd je de controle.</p>
            `
          },
          {
            elementId: "pro-onderhandelingen",
            title: "Onderhandelen als een pro",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Onderhandelen als een pro: zo verkoop je je huis met zelfvertrouwen</h4>
  <p>Het onderhandelen over de verkoop van je huis is een spannend moment. Het is de fase waarin je de waarde van je huis echt gaat verzilveren.</p>
  <h5>Bereid je voor als een professional</h5>
  <ul>
      <li><strong>Ken de waarde van je huis</strong></li>
      <li><strong>Bepaal je speelruimte</strong></li>
  </ul>
  <h5>Beheers de kunst van communicatie</h5>
  <ul>
      <li><strong>Luister actief</strong></li>
      <li><strong>Blijf kalm en professioneel</strong></li>
  </ul>
  <h5>Onderhandel over meer dan alleen de prijs</h5>
  <ul>
      <li>Opleverdatum</li>
      <li>Roerende zaken</li>
      <li>Voorbehoud van financiering</li>
  </ul>
  <h5>Bouw strategie op met tegenbiedingen</h5>
  <p>Een tegenbod is een krachtig instrument in de onderhandelingen.</p>
  <h5>Weet wanneer je moet stoppen</h5>
  <p>Soms bereik je een punt waarop verder onderhandelen niet zinvol is.</p>
  <h5>Sluit de deal met vertrouwen</h5>
  <p>Als je een bod ontvangt dat aansluit bij jouw wensen, aarzel dan niet om toe te slaan.</p>
            `
          },
          {
            elementId: "meer-dan-verkoopprijs",
            title: "Prijs is niet het enige belangrijke",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Meer dan alleen de prijs: waar kun je nog meer over onderhandelen bij de verkoop van je huis?</h4>
  <p>Bij de verkoop van je huis denken de meeste mensen vooral aan de prijs. Maar een succesvolle onderhandeling draait om meer dan alleen het bedrag dat een koper betaalt.</p>
  <h5>Wat kun je naast de prijs onderhandelen?</h5>
  <ul>
      <li><strong>Opleverdatum</strong></li>
      <li><strong>Roerende zaken</strong></li>
      <li><strong>Voorbehoud van financiering</strong></li>
      <li><strong>Bouwkundige keuring</strong></li>
      <li><strong>Garanties of onderhoudswerkzaamheden</strong></li>
  </ul>
  <h5>Flexibiliteit als onderhandelingsmiddel</h5>
  <p>Door flexibel te zijn op andere punten dan de prijs, kun je je onderhandelingspositie versterken.</p>
  <h5>Tips voor soepele onderhandelingen</h5>
  <ul>
      <li><strong>Wees voorbereid</strong></li>
      <li><strong>Schrijf alles op</strong></li>
      <li><strong>Laat emoties los</strong></li>
      <li><strong>Blijf realistisch</strong></li>
  </ul>
  <h5>Samenvatting: meer onderhandelen is meer kansen</h5>
  <p>Bij de verkoop van je huis draait het om meer dan alleen de prijs. Door slim te onderhandelen over zaken zoals de opleverdatum, roerende zaken en voorbehoud van financiering, kun je een deal sluiten die voor beide partijen aantrekkelijk is.</p>
            `
          },
          {
            elementId: "gebruik-biedlogboek",
            title: "Het gebruik van een biedlogboek",
            templates: [
              {
                fileUrl: "/public/assets/documents/verkopen/Biedlogboek - MoveRoof Template.xlsx",
                fileName: "Biedlogboek - MoveRoof Template.xlsx",
                labelText: "Biedlogboek - Excel"
              }
            ],
            articleHtml: `
  <h4 class="secondary">Transparantie in de verkoop: waarom een biedlogboek onmisbaar is</h4>
  <p>Bij het verkopen van je huis komen vaak meerdere biedingen binnen, elk met hun eigen voorwaarden en bedragen. Dit kan al snel onoverzichtelijk worden, vooral als je meerdere geïnteresseerden hebt.</p>
  <h5>Wat is een biedlogboek?</h5>
  <p>Een biedlogboek is een overzicht waarin je alle biedingen noteert die je ontvangt tijdens de verkoop van je huis.</p>
  <h5>Waarom is een biedlogboek belangrijk?</h5>
  <ul>
      <li><strong>Overzicht en structuur</strong></li>
      <li><strong>Transparantie en eerlijkheid</strong></li>
      <li><strong>Onderbouwing bij geschillen</strong></li>
  </ul>
  <h5>Wanneer is een biedlogboek verplicht?</h5>
  <p>Sinds januari 2023 is het voor makelaars verplicht om een biedlogboek bij te houden. Als je zelf verkoopt, ben je dat niet verplicht, maar het is wel slim.</p>
  <h5>Hoe gebruik je een biedlogboek?</h5>
  <ul>
      <li><strong>Leg biedingen direct vast</strong></li>
      <li><strong>Informeer kopers</strong></li>
      <li><strong>Houd het logboek overzichtelijk</strong></li>
      <li><strong>Bewaar het logboek goed</strong></li>
  </ul>
  <h5>Conclusie: een biedlogboek is een kleine moeite met grote voordelen</h5>
  <p>Hoewel je als particuliere verkoper niet verplicht bent om een biedlogboek bij te houden, is het een waardevol hulpmiddel. Het brengt structuur in het verkoopproces, zorgt voor transparantie en beschermt je tegen misverstanden.</p>
            `
          },
          {
            elementId: "andere-kopers-inlichten",
            title: "Andere potentiële kopers inlichten",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Hoe houd je andere kopers op de hoogte van biedingen zonder druk uit te oefenen?</h4>
  <p>Bij de verkoop van je huis kan het voorkomen dat je meerdere geïnteresseerde kopers hebt. Misschien doet één koper een bod, maar weet je dat er anderen zijn die mogelijk ook willen bieden.</p>
  <h5>Waarom kopers op de hoogte houden belangrijk is</h5>
  <p>Een eerlijke en transparante communicatie tijdens het verkoopproces zorgt ervoor dat alle partijen zich gehoord voelen.</p>
  <h5>Hoe communiceer je op een neutrale en transparante manier?</h5>
  <ul>
      <li><strong>Informeer zonder druk uit te oefenen</strong></li>
      <li><strong>Gebruik een duidelijke tijdslijn</strong></li>
      <li><strong>Kies het juiste communicatiemiddel</strong></li>
  </ul>
  <h5>Hoe zorg je dat het proces eerlijk blijft?</h5>
  <ul>
      <li><strong>Wees transparant over de regels</strong></li>
      <li><strong>Gebruik een biedingslogboek</strong></li>
      <li><strong>Maak je uiteindelijke keuze objectief</strong></li>
  </ul>
  <h5>Wat kun je beter niet doen?</h5>
  <ul>
      <li><strong>Geen druk uitoefenen</strong></li>
      <li><strong>Geen valse informatie delen</strong></li>
      <li><strong>Geen voorkeursbehandeling geven</strong></li>
  </ul>
  <h5>Voorbeeld van een nette communicatie</h5>
  <p>... (hier zou je een voorbeeldmail zetten) ...</p>
  <h5>Waarom deze aanpak werkt</h5>
  <p>Door neutraal en duidelijk te communiceren, laat je zien dat je een eerlijke verkoper bent.</p>
  <h5>Samenvatting: transparantie is de sleutel tot succes</h5>
  <p>Andere kopers op de hoogte houden van biedingen hoeft geen lastige opgave te zijn. Door transparant, eerlijk en neutraal te communiceren, creëer je een verkoopproces waarin iedereen zich gehoord voelt.</p>
            `
          }
        ]
      },
      {
        stageId: "overeenkomst-opstellen",
        title: "Overeenkomst opstellen",
        description:
          "We helpen je een goede verkoopovereenkomst opstellen met templates en begeleiding.",
        templateCount: 6,
        elements: [
          {
            elementId: "wat-is-een-verkoopovereenkomst",
            title: "Wat is een verkoopovereenkomst?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Wat is een koopovereenkomst en waarom stel je deze op als verkoper?</h4>
  <p><i>Goed om te weten: MoveRoof heeft gratis koopovereenkomst templates die je kan gebruiken.</i></p>
  <p>Een koopovereenkomst is een schriftelijke afspraak tussen de verkoper en de koper van een woning waarin de belangrijkste voorwaarden van de verkoop worden vastgelegd.</p>
  <h5>Wat is een koopovereenkomst?</h5>
  <p>Een koopovereenkomst is een bindende afspraak waarin alle voorwaarden rond de verkoop van een woning zijn vastgelegd.</p>
  <h5>Waarom stel je een koopovereenkomst op?</h5>
  <ul>
      <li><strong>Rechtszekerheid</strong></li>
      <li><strong>Duidelijkheid over ontbindende voorwaarden</strong></li>
      <li><strong>Bindende afspraken over overname en oplevering</strong></li>
      <li><strong>Bescherming tegen dubbele verkoop</strong></li>
  </ul>
  <h5>Wat regel je specifiek als verkoper?</h5>
  <ul>
      <li><strong>Inbegrepen en uitgesloten roerende goederen</strong></li>
      <li><strong>Ontbindende voorwaarden van de koper</strong></li>
      <li><strong>Afspraken over gebreken en garanties</strong></li>
      <li><strong>Borgsom of bankgarantie</strong></li>
  </ul>
  <h5>Wanneer is een koopovereenkomst definitief?</h5>
  <p>De koopovereenkomst wordt definitief zodra beide partijen hebben ondertekend én de bedenktijd van drie dagen is verstreken.</p>
  <h5>Conclusie</h5>
  <p>Een koopovereenkomst is meer dan verplicht papierwerk. Voor jou als verkoper is het een belangrijk middel om afspraken juridisch vast te leggen en risico’s te beperken.</p>
            `
          },
          {
            elementId: "inhoud-verkoopovereenkomst",
            title: "Wat komt er in de verkoopovereenkomst",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Wat moet er in de verkoopovereenkomst staan?</h4>
  <p><i>Goed om te weten: MoveRoof heeft gratis koopovereenkomst templates die je kan gebruiken.</i></p>
  <p>Een verkoopovereenkomst is een essentieel document bij het verkopen van je woning.</p>
  <h5>1. De basisgegevens van de partijen</h5>
  <p>De verkoopovereenkomst moet beginnen met de gegevens van jou als verkoper en die van de koper.</p>
  <h5>2. Beschrijving van de woning</h5>
  <p>Een duidelijke omschrijving van de woning is cruciaal.</p>
  <h5>3. Koopprijs en betalingsvoorwaarden</h5>
  <p>De koopsom moet duidelijk in de overeenkomst staan.</p>
  <h5>4. Opleverdatum</h5>
  <p>De datum waarop de koper de woning officieel in gebruik neemt.</p>
  <h5>5. Ontbindende voorwaarden</h5>
  <p>Met een koopovereenkomst leg je vast welke uitzonderingen de koper heeft om van de koop af te zien.</p>
  <h5>6. Lijst van zaken</h5>
  <p>Een lijst van zaken hoort bij de verkoopovereenkomst.</p>
  <h5>7. Borgsom of bankgarantie</h5>
  <p>Vermeld of de koper een borgsom van 10% van de koopsom moet storten.</p>
  <h5>8. Energielabel en andere documenten</h5>
  <p>Sinds 2021 is het verplicht om een geldig energielabel te overhandigen.</p>
  <h5>9. Juridische garanties en plichten</h5>
  <p>Als verkoper heb je een meldingsplicht.</p>
  <h5>10. Handtekeningen en wettelijke bedenktijd</h5>
  <p>De overeenkomst wordt pas definitief als beide partijen hebben ondertekend en de bedenktijd is verstreken.</p>
  <h5>Conclusie</h5>
  <p>De verkoopovereenkomst is meer dan een papier met handtekeningen; het is een juridisch document dat alle afspraken over de verkoop van je woning vastlegt.</p>
            `
          },
          {
            elementId: "ontbindende-voorwaarden",
            title: "De ontbindende voorwaarden",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Ontbindende voorwaarden in de koopovereenkomst: Veiligheidsnet voor koper en verkoper</h4>
  <p><i>Goed om te weten: MoveRoof heeft gratis koopovereenkomst templates die je kan gebruiken.</i></p>
  <p>Wanneer je jouw woning verkoopt, zijn ontbindende voorwaarden een cruciaal onderdeel van de koopovereenkomst.</p>
  <h5>1. Wat zijn ontbindende voorwaarden?</h5>
  <p>Ontbindende voorwaarden zijn afspraken die het mogelijk maken om de koop te annuleren als aan bepaalde voorwaarden niet wordt voldaan.</p>
  <h5>2. Veelvoorkomende ontbindende voorwaarden</h5>
  <ul>
      <li><strong>Financieringsvoorbehoud</strong></li>
      <li><strong>Voorbehoud verkoop eigen woning</strong></li>
      <li><strong>Bouwkundige keuring</strong></li>
  </ul>
  <h5>3. Wat betekenen ontbindende voorwaarden voor jou als verkoper?</h5>
  <ul>
      <li><strong>Verlengde onzekerheid</strong></li>
      <li><strong>Onderhandelen over voorwaarden</strong></li>
      <li><strong>Ontbindende voorwaarden beperken jouw mogelijkheden</strong></li>
  </ul>
  <h5>4. Waar moet je op letten als verkoper?</h5>
  <ul>
      <li><strong>Vraag om zekerheid van de koper</strong></li>
      <li><strong>Wees transparant over gebreken</strong></li>
      <li><strong>Houd rekening met de tijdlijn</strong></li>
  </ul>
  <h5>Conclusie</h5>
  <p>Ontbindende voorwaarden bieden een koper de zekerheid dat hij onder bepaalde omstandigheden zonder grote gevolgen van de koop kan afzien.</p>
            `
          },
          {
            elementId: "verkoopovereenkomst-info",
            title: "Welke info heb je nodig?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Informatie verzamelen voor een koopovereenkomst: wat moet je regelen?</h4>
  <p><i>Goed om te weten: MoveRoof heeft gratis koopovereenkomst templates die je kan gebruiken.</i></p>
  <p>Het opstellen van een koopovereenkomst is een belangrijk moment in het verkoopproces van jouw woning. Dit document legt de afspraken tussen jou en de koper vast.</p>
  <h5>Wat moet je verzamelen?</h5>
  <p>Bij het opstellen van de koopovereenkomst heb je een aantal gegevens nodig:</p>
  <ul>
      <li><strong>Informatie over de woning</strong></li>
      <li><strong>Gegevens van de koper</strong></li>
      <li><strong>Afspraken uit de onderhandelingen</strong></li>
  </ul>
  <h5>Formele en informele manieren om informatie op te vragen</h5>
  <p>Je wilt dat de koper zo snel mogelijk de informatie aanlevert die je nodig hebt.</p>
  <h6>Formeel script</h6>
  <p>Voorbeeld e-mail...</p>
  <h6>Informeel script</h6>
  <p>Voorbeeld e-mail...</p>
  <h5>Waar kun je terecht voor aanvullende hulp?</h5>
  <p>Als je twijfelt of je alle benodigde informatie hebt, kun je hulp inschakelen van betrouwbare bronnen zoals de Vereniging Eigen Huis.</p>
            `
          },
          {
            elementId: "juridische-zekerheid",
            title: "Juridische zekerheid zonder stress",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Juridische zekerheid zonder stress: De koopovereenkomst dubbelchecken en omgaan met geschillen</h4>
  <p><i>Goed om te weten: MoveRoof heeft gratis koopovereenkomst templates die je kan gebruiken.</i></p>
  <p>De koopovereenkomst is een cruciaal document bij de verkoop van je woning. Het legt de gemaakte afspraken vast en biedt juridische zekerheid.</p>
  <h5>1. De belangrijkste juridische termen in eenvoudige taal</h5>
  <ul>
      <li><strong>Koopovereenkomst</strong></li>
      <li><strong>Ontbindende voorwaarden</strong></li>
      <li><strong>Borgsom of bankgarantie</strong></li>
      <li><strong>Meldingsplicht en onderzoeksplicht</strong></li>
      <li><strong>Oplevering en leveringsakte</strong></li>
  </ul>
  <h5>2. Hoe controleer je de koopovereenkomst?</h5>
  <p>Het is belangrijk om de koopovereenkomst zorgvuldig door te nemen voordat je tekent. Dit kun je zelf doen, maar het is verstandig om een professional in te schakelen.</p>
  <h5>3. Wat gebeurt er als er een geschil ontstaat?</h5>
  <ul>
      <li><strong>Blijf in gesprek</strong></li>
      <li><strong>Schakel juridische hulp in</strong></li>
      <li><strong>Aanspraak maken op de borgsom</strong></li>
      <li><strong>De rechter inschakelen</strong></li>
  </ul>
  <h5>4. Hoe voorkom je problemen?</h5>
  <ul>
      <li><strong>Wees transparant</strong></li>
      <li><strong>Werk samen met een notaris</strong></li>
      <li><strong>Vraag om een schriftelijke bevestiging</strong></li>
  </ul>
  <h5>Conclusie</h5>
  <p>Een koopovereenkomst biedt juridische zekerheid, maar alleen als deze goed wordt opgesteld en gecontroleerd.</p>
            `
          },
          {
            elementId: "uitzonderlijke-situaties",
            title: "Wanneer je niet onze templates kan gebruiken",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Wanneer kun je onze koopovereenkomst templates niet gebruiken?</h4>
  <p>Het invullen van een koopovereenkomst met onze templates is eenvoudig en efficiënt. Toch zijn er uitzonderlijke situaties waarin het verstandig is om de op-het-moment beschikbare templates niet te gebruiken.</p>
  <h5>1. Bij woningen met erfpacht</h5>
  <p>Als de woning op erfpachtgrond staat, zijn er extra zaken waar rekening mee moet worden gehouden.</p>
  <h5>2. Bij transformatiewoningen</h5>
  <p>Panden die oorspronkelijk een andere functie hadden en later zijn omgebouwd tot woonruimte.</p>
  <h5>3. Bij woningen in gedeelde eigendom (bijvoorbeeld coöperaties)</h5>
  <p>Als de woning onderdeel is van een gedeeld eigendom.</p>
  <h5>4. Bij appartementen zonder goed functionerende VvE</h5>
  <p>Een appartement met een niet-actieve VvE brengt risico’s met zich mee.</p>
  <h5>5. Andere bijzondere situaties</h5>
  <ul>
      <li>Monumentale panden</li>
      <li>Recreatiewoningen</li>
      <li>Woningdelen met zakelijke rechten of lasten</li>
  </ul>
  <h5>Wat kun je doen?</h5>
  <p>Kom je in een van bovenstaande situaties terecht? Neem contact met ons op, en wij stellen een aangepaste koopovereenkomst voor je op.</p>
            `
          },
          {
            elementId: "ontvangstbevestiging",
            title: "De ontvangstbevestiging opstellen",
            templates: [
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Ontvangstbevestiging - MoveRoof Template.pdf",
                fileName: "Ontvangstbevestiging - MoveRoof Template.pdf",
                labelText: "Ontvangstbevestiging - PDF"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Ontvangstbevestiging - MoveRoof Template.docx",
                fileName: "Ontvangstbevestiging - MoveRoof Template.docx",
                labelText: "Ontvangstbevestiging - Word"
              }
            ],
            articleHtml: `
  <h4 class="secondary">Wat is een ontvangstbevestiging en waarom is het belangrijk?</h4>
  <p>Wanneer je een woning verkoopt of koopt, komen er heel wat documenten voorbij. Eén daarvan is de ontvangstbevestiging. Dit document is een officieel bewijs dat de koper de ondertekende koopovereenkomst daadwerkelijk heeft ontvangen.</p>
  <p>De ontvangstbevestiging zorgt voor duidelijkheid tussen koper en verkoper.</p>
  <h5>Wanneer wordt de ontvangstbevestiging gestuurd?</h5>
  <p>De ontvangstbevestiging wordt gestuurd nadat de koopovereenkomst door beide partijen is ondertekend.</p>
  <h5>Wat vul je in op de ontvangstbevestiging?</h5>
  <p>Het document vraagt om een aantal gegevens van zowel de koper als de verkoper.</p>
  <h5>Het doel van de ontvangstbevestiging</h5>
  <ul>
      <li><strong>Juridische zekerheid</strong></li>
      <li><strong>Startpunt voor bedenktijd koper</strong></li>
      <li><strong>Bescherming voor verkoper en koper</strong></li>
  </ul>
  <h5>Gebruik ons template</h5>
  <p>Wij bieden een ontvangstbevestiging template aan om het je zo makkelijk mogelijk te maken.</p>
            `
          },
          {
            elementId: "lijst-van-zaken",
            title: "De lijst van zaken opstellen",
            templates: [
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Lijst van zaken - MoveRoof Template.pdf",
                fileName: "Lijst van zaken - MoveRoof Template.pdf",
                labelText: "De lijst van zaken - PDF"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Lijst van zaken - MoveRoof Template.docx",
                fileName: "Lijst van zaken - MoveRoof Template.docx",
                labelText: "De lijst van zaken - Word"
              }
            ],
            articleHtml: `
  <h4 class="secondary">De lijst met zaken: essentieel voor een soepele verkoop</h4>
  <p>Bij de verkoop van je huis komen er veel details kijken, en een van de meest praktische hulpmiddelen die je hierbij kunt gebruiken is de lijst met zaken.</p>
  <h5>Wat is de lijst met zaken precies?</h5>
  <p>De lijst met zaken is een bijlage die meestal samen met de koopovereenkomst wordt meegestuurd.</p>
  <h5>Onderhandelen over wat blijft of gaat</h5>
  <p>De lijst met zaken biedt ook een uitstekende basis voor eventuele onderhandelingen.</p>
  <h5>Ons template voor de lijst met zaken</h5>
  <p>Wij hebben een handig template ontwikkeld dat je direct kunt gebruiken.</p>
  <h5>De lijst invullen: praktische tips</h5>
  <ul>
      <li><strong>Wees specifiek</strong></li>
      <li><strong>Bekijk het huis door de ogen van de koper</strong></li>
      <li><strong>Maak gebruik van foto’s</strong></li>
  </ul>
  <h5>Waarom deze lijst jou stress bespaart</h5>
  <p>Het invullen van de lijst met zaken lijkt misschien een detail, maar het heeft een grote impact op de algehele verkoopervaring.</p>
            `
          },
          {
            elementId: "overeenkomst-huis-appartement",
            title: "Overeenkomst huis/appartement?",
            templates: [
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Voorbeeld Overeenkomst - appartement - MoveRoof.pdf",
                fileName: "Voorbeeld Overeenkomst - appartement - MoveRoof.pdf",
                labelText: "Voorbeeld overeenkomst appartement"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Voorbeeld Overeenkomst - eengezinswoning - MoveRoof.pdf",
                fileName: "Voorbeeld Overeenkomst - eengezinswoning - MoveRoof.pdf",
                labelText: "Voorbeeld overeenkomst eengezinswoning"
              }
            ],
            articleHtml: `
  <h4 class="secondary">Verschil tussen een koopovereenkomst voor een huis en een appartement</h4>
  <p><i>Goed om te weten: MoveRoof heeft gratis koopovereenkomst templates die je kan gebruiken, we hebben verschillende voor een huis of een appartement.</i></p>
  <p>Wanneer je een koopovereenkomst sluit voor een huis of appartement, lijkt het proces op het eerste gezicht hetzelfde. Maar er zijn een aantal belangrijke verschillen.</p>
  <h5>1. Huis: Volledig eigendom van het perceel</h5>
  <p>Bij de koop van een huis word je eigenaar van de woning én het perceel.</p>
  <h5>2. Appartement: Lid van de VvE</h5>
  <p>Bij de koop van een appartement koop je niet alleen jouw woning, maar ook een aandeel in het gehele gebouw en het perceel.</p>
  <h5>3. Bijzondere clausules</h5>
  <p>Bij appartementen kunnen bijzondere clausules gelden die niet van toepassing zijn bij huizen.</p>
  <h5>4. Controle op gemeenschappelijke delen</h5>
  <p>Een belangrijk verschil is dat bij de koop van een appartement ook de staat van de gemeenschappelijke delen een rol speelt.</p>
  <h5>Conclusie</h5>
  <p>Een koopovereenkomst voor een huis is vaak eenvoudiger, omdat het alleen gaat om de woning en het perceel. Bij een appartement komen er meer juridische documenten en verplichtingen kijken door de gezamenlijke eigendom en de VvE.</p>
            `
          },
          {
            elementId: "verkoopovereenkomst",
            title: "De overeenkomst opstellen",
            templates: [
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Overeenkomst - appartement - MoveRoof Template.pdf",
                fileName: "Overeenkomst - appartement - MoveRoof Template.pdf",
                labelText: "Overeenkomst appartement - PDF"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Overeenkomst - appartement - MoveRoof Template.docx",
                fileName: "Overeenkomst - appartement - MoveRoof Template.docx",
                labelText: "Overeenkomst appartement - Word"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Overeenkomst - eengezinswoning - MoveRoof Template.pdf",
                fileName: "Overeenkomst - eengezinswoning - MoveRoof Template.pdf",
                labelText: "Overeenkomst eengezinswoning - PDF"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Overeenkomst - eengezinswoning - MoveRoof Template.docx",
                fileName: "Overeenkomst - eengezinswoning - MoveRoof Template.docx",
                labelText: "Overeenkomst eengezinswoning - Word"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Toelichting koopovereenkomst bestaand appartement model.pdf",
                fileName: "Toelichting koopovereenkomst bestaand appartement model.pdf",
                labelText: "Toelichting overeenkomst appartement"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Toelichting koopovereenkomst bestaande eengezinswoning model.pdf",
                fileName: "Toelichting koopovereenkomst bestaande eengezinswoning model.pdf",
                labelText: "Toelichting overeenkomst eengezinswoning"
              }
            ],
            articleHtml: `
  <h4 class="secondary">Zelf een verkoopovereenkomst invullen: zo doe je dat</h4>
  <p>Het verkopen van een woning is spannend. Wanneer je als verkoper een verkoopovereenkomst opstelt, is het belangrijk om dit zorgvuldig te doen. Gelukkig is het met een goed model en wat uitleg prima zelf te doen.</p>
  <h5>Gebruik onze voorbeelden</h5>
  <p>Natuurlijk hebben wij ook voorbeeldmodellen die je kunt raadplegen.</p>
  <h5>Let op het juiste model</h5>
  <p>Er zijn twee verschillende modellen: eentje voor een appartement en eentje voor een eengezinswoning. Gebruik altijd het juiste model.</p>
  <h5>Aan de slag met de verkoopovereenkomst</h5>
  <p>Vul rustig alles in en check alles dubbel. Van koopsom tot opleverdatum en van roerende zaken tot ontbindende voorwaarden.</p>
  <h5>Wat als je vastloopt?</h5>
  <p>Het is niet erg om hulp in te schakelen als je ergens niet uitkomt. Onze templates zijn speciaal ontwikkeld om het invullen makkelijk te maken. Door goed de tijd te nemen en deze stappen te volgen, kun je met vertrouwen jouw verkoopovereenkomst invullen.</p>
            `
          },
          {
            elementId: "verkoopovereenkomst-begeleiding",
            title: "Begeleiding voor het opstellen",
            templates: [
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Overeenkomst - appartement - MoveRoof Template.pdf",
                fileName: "Overeenkomst - appartement - MoveRoof Template.pdf",
                labelText: "Overeenkomst appartement - PDF"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Overeenkomst - appartement - MoveRoof Template.docx",
                fileName: "Overeenkomst - appartement - MoveRoof Template.docx",
                labelText: "Overeenkomst appartement - Word"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Overeenkomst - eengezinswoning - MoveRoof Template.pdf",
                fileName: "Overeenkomst - eengezinswoning - MoveRoof Template.pdf",
                labelText: "Overeenkomst eengezinswoning - PDF"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Overeenkomst - eengezinswoning - MoveRoof Template.docx",
                fileName: "Overeenkomst - eengezinswoning - MoveRoof Template.docx",
                labelText: "Overeenkomst eengezinswoning - Word"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Toelichting koopovereenkomst bestaand appartement model.pdf",
                fileName: "Toelichting koopovereenkomst bestaand appartement model.pdf",
                labelText: "Toelichting overeenkomst appartement"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/koopovereenkomst/Toelichting koopovereenkomst bestaande eengezinswoning model.pdf",
                fileName: "Toelichting koopovereenkomst bestaande eengezinswoning model.pdf",
                labelText: "Toelichting overeenkomst eengezinswoning"
              }
            ],
            articleHtml: `
  <h4 class="secondary">Uitgebreid Stappenplan: Koopovereenkomst Invullen</h4>
  <p>Dit stappenplan begeleidt je stap voor stap bij het invullen van een koopovereenkomst. Het doel is dat iedereen, ongeacht kennis of ervaring, deze ingewikkelde documenten begrijpt en correct kan invullen. Voor de duidelijkheid bespreken we zowel de overeenkomst voor een woning als voor een appartement.</p>
  <h5>Algemene Uitleg</h5>
  <p>Tekst tussen vierkante haken betekent dat je daar jouw gegevens of die van de koper moet invullen. Laat de haken niet staan in de uiteindelijke versie.</p>
  <h5>Stappenplan per Artikel</h5>
  <p>In beide modellen zie je artikelen die je moet invullen: koopsom, opleverdatum, etc. Let goed op of je het appartement- of woningmodel gebruikt.</p>
  <h5>Afronden en Controleren</h5>
  <ul>
      <li>Controleer het document op fouten of lege plekken.</li>
      <li>Print twee kopieën.</li>
      <li>Onderteken het document samen met de koper.</li>
  </ul>
  <p>Door deze handleiding te volgen, kun je met vertrouwen jouw koopovereenkomst invullen!</p>
            `
          }
        ]
      },
      {
        stageId: "financieringsperiode",
        title: "Financieringsperiode",
        description: "Stage information description text like they need to change their adresses.",
        templateCount: 0,
        elements: [
          {
            elementId: "financieringsperiode",
            title: "De financieringsperiode, wat kan je verwachten?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Wat gebeurt er tijdens de financieringsperiode van de koper? En wat betekent dit voor jou als verkoper?</h4>
  <p>Je hebt een bod geaccepteerd, en de handtekeningen staan onder de koopovereenkomst. Gefeliciteerd! Maar nu begint de financieringsperiode van de koper—de tijd waarin de hypotheek rond moet komen.</p>
  <h5>De ontbindende voorwaarde: zekerheid voor de koper én verkoper</h5>
  <p>In de meeste koopovereenkomsten wordt een ontbindende voorwaarde voor financiering opgenomen. Dit geeft de koper het recht om de koopovereenkomst te ontbinden als hij de hypotheek niet rond krijgt.</p>
  <h5>Waarom duurt het soms zo lang?</h5>
  <p>Het proces van hypotheekverstrekking is nauwkeurig en kan tijd kosten. De bank kijkt naar inkomen, schulden en de taxatiewaarde.</p>
  <h5>Wat kun jij doen tijdens deze periode?</h5>
  <ul>
      <li><strong>Geduld en begrip tonen</strong></li>
      <li><strong>Blijf bereikbaar</strong></li>
      <li><strong>Plan geen overhaaste verhuizing</strong></li>
  </ul>
  <h5>Wat als de financiering niet rondkomt?</h5>
  <p>Het kan gebeuren dat de koper zijn hypotheek niet rond krijgt. In dat geval kan de koper de koopovereenkomst ontbinden mits hij dit op tijd aantoont.</p>
  <h5>En als alles wél goed gaat?</h5>
  <p>Als de financiering rond is, krijg je hiervan bericht. Dan kan de notaris de eigendomsoverdracht voorbereiden.</p>
            `
          },
          {
            elementId: "financieringsperiode-contact",
            title: "In contact blijven met de koper",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Hoe blijf je in goed contact met de koper zonder opdringerig te zijn?</h4>
  <p>Je hebt een koper gevonden voor je huis, en dat is geweldig! Maar nu begint de weg naar de sleuteloverdracht. Hoe zorg je dat het contact prettig blijft?</p>
  <h5>Wees vriendelijk en professioneel</h5>
  <p>Het contact met de koper hoeft geen vriendschap te worden, maar een vriendelijke toon doet wonderen.</p>
  <h5>Geef ruimte, maar blijf bereikbaar</h5>
  <p>De koper heeft vaak veel aan zijn hoofd.</p>
  <h5>Gebruik duidelijke communicatiekanalen</h5>
  <p>Spreek af hoe je met elkaar communiceert: via e-mail, telefoon, of via de makelaar.</p>
  <h5>Respecteer de privacy van de koper</h5>
  <p>Het is verleidelijk om te vragen hoe het staat met de financiering, maar geef de koper de tijd.</p>
  <h5>Zorg voor een goede overdracht</h5>
  <p>Laat de koper bij de sleuteloverdracht zien dat je het huis met zorg hebt achtergelaten.</p>
  <h5>Positieve samenwerking</h5>
  <p>Door vriendelijk en professioneel te blijven, een open houding te tonen en de koper ruimte te geven, leg je de basis voor een soepele afronding.</p>
            `
          },
          {
            elementId: "slim-verhuizen",
            title: "Slim verhuizen",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Slim verhuizen: hoe doe je dat?</h4>
  <p>Als je gaat verhuizen, voelt het alsof je een compleet nieuw hoofdstuk begint. Dat klinkt mooi, maar in de praktijk komt er veel meer bij kijken dan alleen het ophalen van de sleutels van je nieuwe huis. Slim verhuizen is een kunst, en als je het goed aanpakt, bespaar je niet alleen tijd en geld, maar ook een hoop stress.</p>
  <h5>Inpakken met een plan</h5>
  <p>Een goede verhuizing begint bij het inpakken.</p>
  <h5>Maak een ‘essentiële spullen’ doos</h5>
  <p>Zorg voor een aparte doos met alles wat je meteen nodig hebt.</p>
  <h5>Spullen van A naar B</h5>
  <ul>
      <li><strong>Start met zware en grote meubels</strong></li>
      <li><strong>Bescherm je meubels</strong></li>
      <li><strong>Maak een plattegrond</strong></li>
  </ul>
  <h5>Uitpakken zonder stress</h5>
  <p>Begin met de meest essentiële kamers, zoals de keuken, badkamer en slaapkamer.</p>
  <h5>Conclusie</h5>
  <p>Met een goed doordacht plan voor inpakken, verplaatsen en uitpakken kun je je verhuizing een stuk aangenamer maken.</p>
            `
          }
        ]
      },
      {
        stageId: "eindinspectie",
        title: "Eindinspectie",
        description: "Stage information description text like they need to change their adresses.",
        templateCount: 2,
        elements: [
          {
            elementId: "eindinspectie-toelichting",
            title: "Wat en waarvoor is de eindinspectie?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">De Eindinspectie: wat is het en waarom is het zo belangrijk bij de verkoop van je huis?</h4>
  <p>Bij het verkopen van je woning is al veel komen kijken. Eén van de laatste en belangrijkste stappen is de eindinspectie. Dit moment is cruciaal om ervoor te zorgen dat zowel de koper als de verkoper met een gerust hart de handtekening onder de koopovereenkomst kan zetten.</p>
  <h5>Wat is een eindinspectie?</h5>
  <p>De eindinspectie is een officiële controle van de woning door de koper vlak vóór de overdracht bij de notaris.</p>
  <h5>Waarom is de eindinspectie belangrijk?</h5>
  <ul>
      <li><strong>Voorkomen van conflicten</strong></li>
      <li><strong>Check op verborgen gebreken</strong></li>
      <li><strong>Schriftelijk vastleggen</strong></li>
  </ul>
  <h5>Hoe verloopt een eindinspectie?</h5>
  <p>Een eindinspectie wordt vaak georganiseerd door de koper en de verkoper samen. Samen loop je door het huis en controleer je alle ruimtes.</p>
  <h5>Tips voor een geslaagde eindinspectie</h5>
  <ul>
      <li><strong>Bereid je goed voor</strong></li>
      <li><strong>Zorg dat het huis schoon en leeg is</strong></li>
      <li><strong>Neem rustig de tijd</strong></li>
  </ul>
  <h5>Tot slot</h5>
  <p>De eindinspectie is een belangrijk moment voor zowel de koper als de verkoper. Het zorgt ervoor dat beide partijen met een gerust hart de sleuteloverdracht kunnen voltooien.</p>
            `
          },
          {
            elementId: "eindinspectie-tips",
            title: "Tips voor de eindinspectie",
            templates: [
              {
                fileUrl: "/public/assets/documents/verkopen/Eindinspectie checklist - MoveRoof Template.pdf",
                fileName: "Eindinspectie checklist - MoveRoof Template.pdf",
                labelText: "Inspectie checklist - PDF"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/Eindinspectie checklist - MoveRoof Template.docx",
                fileName: "Eindinspectie checklist - MoveRoof Template.docx",
                labelText: "Inspectie checklist - Word"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/Eindinspectierapport - MoveRoof Template.pdf",
                fileName: "Eindinspectierapport - MoveRoof Template.pdf",
                labelText: "Inspectierapport - PDF"
              },
              {
                fileUrl: "/public/assets/documents/verkopen/Eindinspectierapport - MoveRoof Template.docx",
                fileName: "Eindinspectierapport - MoveRoof Template.docx",
                labelText: "Inspectierapport - Word"
              }
            ],
            articleHtml: `
  <h4 class="secondary">Zorgeloos de eindinspectie door: tips om geschillen te voorkomen</h4>
  <p>De eindinspectie is een belangrijk moment vlak voor de sleuteloverdracht van je woning. Het is dé gelegenheid om te controleren of alles in orde is.</p>
  <h5>Waarom is voorbereiding zo belangrijk?</h5>
  <p>Tijdens de eindinspectie kun je als verkoper laten zien dat je alles netjes en volgens afspraak hebt achtergelaten.</p>
  <h6>Checklist voor een zorgeloze eindinspectie</h6>
  <ul>
      <li><strong>Controleer de afgesproken spullen</strong></li>
      <li><strong>Noteer de meterstanden</strong></li>
      <li><strong>Loop samen door de woning</strong></li>
      <li><strong>Controleer technische installaties</strong></li>
      <li><strong>Zorg voor een inspectierapport</strong></li>
  </ul>
  <h5>Tips voor een succesvolle eindinspectie</h5>
  <ul>
      <li><strong>Wees eerlijk</strong></li>
      <li><strong>Neem de tijd</strong></li>
      <li><strong>Houd het schoon en netjes</strong></li>
  </ul>
  <h5>Tot slot</h5>
  <p>Met een goede voorbereiding en een gestructureerde aanpak kun je een hoop stress en onduidelijkheden voorkomen tijdens de eindinspectie.</p>
            `
          }
        ]
      },
      {
        stageId: "notaris",
        title: "Notaris",
        description: "Stage information description text like they need to change their adresses.",
        templateCount: 0,
        elements: [
          {
            elementId: "notaris-voorbereiding",
            title: "Voorbereiden op de notarisafspraak",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Gefeliciteerd met de verkoop van je huis! Zo bereid je je voor op de notarisafspraak</h4>
  <p>Je hebt het voor elkaar: de koopovereenkomst is getekend. Gefeliciteerd! Misschien voelt het alsof je er bijna bent, maar er zijn nog een paar stappen te zetten voordat je echt de sleutel kunt overhandigen. Een van de belangrijkste momenten is de afspraak bij de notaris.</p>
  <h5>Wat doet de notaris precies?</h5>
  <p>De notaris is in dit proces de persoon die zorgt voor de officiële afhandeling van de verkoop.</p>
  <h5>Wat neem je mee naar de afspraak?</h5>
  <ul>
      <li><strong>Een geldig identiteitsbewijs</strong></li>
      <li><strong>De koopovereenkomst</strong></li>
      <li><strong>Gegevens van je hypotheekverstrekker</strong></li>
      <li><strong>Bankgegevens</strong></li>
  </ul>
  <h5>Wat gebeurt er tijdens de afspraak?</h5>
  <p>Tijdens de afspraak leest de notaris de akte van levering voor.</p>
  <h5>Hoe bereid je je verder voor?</h5>
  <p>Zorg dat het huis leeg en schoon is en dat alle sleutels klaar liggen.</p>
  <h5>Kleine checklist voor de notarisafspraak</h5>
  <ul>
      <li>Controleer ID-kaart of paspoort</li>
      <li>Neem de koopovereenkomst mee</li>
      <li>Noteer eventuele vragen</li>
      <li>Zorg dat alle sleutels klaar zijn</li>
  </ul>
            `
          },
          {
            elementId: "notaris-verwachting",
            title: "Wat gebeurt er bij de notaris?",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Wat Gebeurt Er bij de Notaris? Dit Kun Je Verwachten bij de Huisverkoop</h4>
  <p>Het moment dat je naar de notaris gaat, voelt vaak als de laatste stap in het verkoopproces van je huis. Maar wat gebeurt er precies op die dag?</p>
  <h5>De rol van de notaris</h5>
  <p>De notaris is een onafhankelijke professional die ervoor zorgt dat alles juridisch klopt.</p>
  <h5>Wat wordt er geregeld?</h5>
  <p><strong>De Eigendomsoverdracht</strong><br>
  <strong>De Hypotheek</strong><br>
  <strong>Betaling en Afrekening</strong></p>
  <h5>Wat neem je mee?</h5>
  <ul>
      <li>Een geldig identiteitsbewijs</li>
      <li>Eventueel de koopakte</li>
  </ul>
  <h5>Wat kun je verwachten?</h5>
  <p>De afspraak duurt vaak niet langer dan 45 minuten.</p>
  <h5>Het moment van opluchting</h5>
  <p>Na de handtekening is het officieel: de woning is niet meer van jou. Je kunt opgelucht ademhalen en een nieuwe fase ingaan.</p>
            `
          }
        ]
      },
      {
        stageId: "laatste-zaken",
        title: "Laatste zaken",
        description: "Stage information description text like they need to change their adresses.",
        templateCount: 0,
        elements: [
          {
            elementId: "laatste-zaken",
            title: "De laatste zaken",
            templates: [],
            articleHtml: `
  <h4 class="secondary">Verkocht! Wat Te Doen Na De Verkoop Van Je Woning</h4>
  <p>Je hebt het gehaald: de handtekening staat, de sleuteloverdracht is geregeld, en je huis is officieel verkocht. Maar wat gebeurt er nu? De verkoop van je woning is een belangrijke mijlpaal, maar er zijn nog een paar stappen om alles netjes af te ronden. Hier lees je wat je kunt verwachten en regelen na de verkoop.</p>
  <h5>Controleer de afrekening van de notaris</h5>
  <p>De notaris heeft niet alleen de eigendomsoverdracht geregeld, maar ook de financiële afhandeling.</p>
  <h5>Informeer de Belastingdienst</h5>
  <p>Verkoop je je woning met overwaarde (winst)? Dan kan dit gevolgen hebben voor je belastingaangifte.</p>
  <h5>Geef je nieuwe adres door</h5>
  <p>Verhuizen naar een nieuw adres? Vergeet niet je verhuizing binnen vijf dagen door te geven aan de gemeente.</p>
  <h5>Opzeggen of overzetten van contracten</h5>
  <p>Zorg dat je geen onnodige rekeningen meer ontvangt.</p>
  <h5>Administratie opruimen</h5>
  <p>Zorg dat je alle belangrijke documenten netjes opbergt.</p>
  <h5>Vier je succes!</h5>
  <p>Vergeet niet stil te staan bij dit bijzondere moment. Het verkopen van je huis is een grote prestatie en verdient een moment van trots.</p>
            `
          }
        ]
      }
    ];
</script>

<svelte:head>
  <title>Verkoop begeleiding - MoveRoof</title>
  <link rel="icon" href="/svelte/src/lib/assets/visuals/logos/logo-favicon.svg" type="image/svg+xml">
</svelte:head>
  
<section class="experience-page">
    <!-- Intro row -->
    <div class="experience-intro">
      <div class="experience-intro-text">
        <h1 class="secondary">Zelf je woning verkopen</h1>
        <p class="white">Bij MoveRoof begrijpen we dat het (zelf) verkopen van je woning een grote stap is, en we zijn hier om je te begeleiden naar een succesvolle en stressvrije verkoop.</p>
        <p class="white">Wel of geen verkoopervaring, het maakt niet uit. Met onze tips, begeleiding en gratis templates kan je jouw woning makkelijker, beter en transparanter verkopen dan welke makelaar dan ook.</p>
        <br>
        <p class="white"><i>"Het verkopen van ons huis zelf was een enorme klus – we waren soms echt de draad kwijt. De info en templates van MoveRoof gaven ons de houvast en controle die we nodig hadden, zelfs onderhandelen en een verkoopovereenkomst opstellen bleek ineens haalbaar. Feike was ook altijd bereid om te helpen, en dat heeft ons zoveel rust en vertrouwen gegeven. Wat een top idee dit!"</i></p>
        <p class="secondary"><b>- David & Anna (Purmerend)</b></p>
      </div>
      <img src="/public/assets/visuals/general/experience-selling-hero.webp" alt="experience-selling-hero">
    </div>
  
    <h2 class="secondary">Het verkoopproces</h2>
  
    <!-- Render each stage -->
    {#each stages as st}
      <Stage
        stageId={st.stageId}
        title={st.title}
        description={st.description}
        templateCount={st.templateCount}
        isOpen={openStageId === st.stageId}
        elements={st.elements}
        on:toggleStage={onToggleStage}
      />
    {/each}
  
</section>  