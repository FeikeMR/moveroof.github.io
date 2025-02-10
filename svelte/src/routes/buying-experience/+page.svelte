<!-- +page.svelte
     Place this file, for example, in src/routes/buying-experience/+page.svelte
     (or wherever you want your "buying" page route).
     
     It uses the same Stage and StageElement components that you already have:
       Stage.svelte
       StageElement.svelte
     as described in your previous instructions.

     This page will replicate all the "Zelf kopen - MoveRoof" content from your HTML,
     placed into structured data for the Svelte components.
     
     You can put styling globally (as you mentioned), or in a separate CSS file.
     The code below references the 'openStageId' to track which stage is expanded,
     and the Stage + StageElement logic is the same pattern used in the 'selling' page.
-->

<script>
    import Stage from "svelte/src/lib/components/Stage.svelte";
  
    let openStageId = null;
  
    function onToggleStage(e) {
      const { stageId } = e.detail;
      if (openStageId === stageId) {
        openStageId = null;
      } else {
        openStageId = stageId;
      }
    }
  
    // Below is the data structure for each stage, and each stage's sub-articles,
    // preserving the text from your "Zelf kopen - MoveRoof" page.
    // We store the article HTML in articleHtml properties, which the StageElement will {@html} render.
  
    let stages = [
      {
        stageId: "financien-en-budget",
        title: "Financiën & budget",
        description:
          "Deze stap helpt je inzien of je financieel & emotioneel klaar bent om te kopen en helpt je opweg met een hypotheek",
        templateCount: 0,
        elements: [
          {
            elementId: "koop-klaar",
            title: "Ben ik klaar om te kopen?",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Ben ik er klaar voor om een woning te kopen?</h4>
              <p>Het kopen van een woning is een grote stap die niet alleen invloed heeft op je financiën, maar ook op je persoonlijke leven, toekomstplannen en gemoedsrust. Het is een beslissing die je niet over één nacht ijs neemt. In dit artikel gaan we kijken naar wat er allemaal bij komt kijken als je voelt dat je (misschien) klaar bent om te kopen – en hoe je kunt nagaan of dit echt het juiste moment is in jouw leven.</p>
              
              <h5>Waarom wil je een huis kopen?</h5>
              <p>Sta eerst eens stil bij de reden waarom je een huis zou willen kopen. Is het omdat iedereen in je omgeving een koophuis heeft? Of heb je het gevoel dat je eindelijk toe bent aan een eigen plek? Misschien wil je graag iets opbouwen voor de lange termijn of verlang je naar de vrijheid om de muur in je woonkamer in die ene felle kleur te verven.</p>
              <p>Het is belangrijk om te beseffen dat een koopwoning meer vraagt dan alleen een maandelijkse (hypotheek)betaling. Je bent ook verantwoordelijk voor onderhoud, reparaties en soms onverwachte uitgaven. Vraag jezelf af of deze verantwoordelijkheid bij je huidige levensfase past. Word je blij van het idee om je eigen plek helemaal naar wens te maken? Of ben je bang dat je te veel ‘vast’ komt te zitten?</p>
              
              <h5>Hoe stabiel is je leven nu?</h5>
              <p>Kopen is een stap die vaak gepaard gaat met een stukje stabiliteit. Dat wil niet zeggen dat je nooit meer mag verhuizen of carrièrekansen in een andere stad moet laten schieten. Wel is het goed om na te denken over je nabije toekomst:</p>
              <ul>
                <li><strong>Carrière en inkomen:</strong> Verwacht je grote veranderingen, zoals een nieuwe baan, een studie of een onzekere inkomstenbron?</li>
                <li><strong>Relatie en gezin:</strong> Heb je plannen om samen te gaan wonen of een gezin te stichten? Is je relatie stabiel, of zit je net in een fase waarin veel kan veranderen?</li>
                <li><strong>Persoonlijke vrijheid:</strong> Houd je van reizen of avontuur, of heb je juist behoefte aan een thuisbasis?</li>
              </ul>
              <p>Een woning kopen betekent in zekere zin dat je in een bepaalde plaats en situatie investeert. Als jij in de komende jaren veel veranderingen verwacht, kan het goed zijn om even pas op de plaats te maken – of juist om te besluiten dat een eigen woning precies past in je plannen.</p>
              
              <h5>Financiële eerste blik: ben je er (in hoofdlijnen) klaar voor?</h5>
              <p>Hoewel we de details rondom hypotheken, eigen inbreng en bijkomende kosten in een later artikel uitgebreider gaan bespreken, is het nu al goed om even kort stil te staan bij je algemene financiële situatie:</p>
              <ul>
                <li><strong>Spaarbuffer:</strong> Heb je mogelijk een financiële buffer achter de hand voor noodgevallen (denk aan een kapotte cv-ketel of onverwachte kosten)? Het is niet alleen de aankoop van de woning, maar ook het onderhoud dat geld kan kosten.</li>
                <li><strong>Maandlasten:</strong> Je kunt tegenwoordig online inschatten wat je ongeveer kunt lenen op basis van je inkomen en andere financiële verplichtingen. Bedenk daarbij of je je prettig voelt bij die maandlasten. Het moet niet voelen alsof je alleen nog maar leeft om de hypotheek te betalen.</li>
                <li><strong>Verantwoordelijkheid:</strong> Als huiseigenaar draai je op voor reparaties en onderhoud. Vind je het geen probleem om te sparen voor toekomstige kosten, zoals schilderwerk of een nieuwe badkamer?</li>
              </ul>
              <p>Laat de precieze cijfers nog even links liggen, maar denk wel alvast na over hoe comfortabel je je financieel voelt. Het kan helpen om je vaste lasten en inkomsten overzichtelijk te maken en te bekijken hoeveel ruimte je hebt.</p>
              
              <h5>Emotionele overwegingen: wat doet een koophuis met je?</h5>
              <p>Naast de rationele kant van het verhaal, is er de emotionele kant. Een eigen woning voelt vaak als een thuis waar je herinneringen gaat maken, je eigen regels bepaalt en je helemaal los kunt gaan op het gebied van inrichting en verbouwen. Het kan een gevoel van zekerheid geven: “Dit is van mij en ik kan er blijven zolang ik wil.”</p>
              <p>Tegelijkertijd is er ook de druk en de zorg die bij eigendom komt kijken. Je wilt het huis goed onderhouden, en het idee dat je ‘vastzit’ aan een plek kan soms benauwend voelen. Vraag jezelf dus niet alleen rationeel, maar ook emotioneel af: “Ben ik klaar om er echt voor te gaan?”</p>
              
              <h5>Tips om duidelijkheid te krijgen</h5>
              <ul>
                <li><strong>Maak een lijst:</strong> Schrijf simpelweg op wat volgens jou de voor- en nadelen zijn van kopen versus huren. Wat spreekt je aan, wat maakt je onzeker?</li>
                <li><strong>Praat met mensen:</strong> Vraag vrienden of familie die recent een huis hebben gekocht naar hun ervaringen. Wat vinden ze fijn en wat hadden ze vooraf onderschat?</li>
                <li><strong>Verken de markt:</strong> Je hoeft nog niet direct te bieden, maar kijk eens rond op huizensites of ga naar een open huis. Zo krijg je een gevoel van de huidige prijzen en wat je voor je geld krijgt.</li>
                <li><strong>Neem de tijd:</strong> Voel je niet opgejaagd door verhalen over “de markt” of schaarste. Dit is jouw leven, jouw toekomst, dus gun jezelf de ruimte om een weloverwogen besluit te nemen.</li>
              </ul>
              
              <h5>Tot slot</h5>
              <p>Een huis kopen is een prachtige stap, maar het vraagt om een goede dosis zelfkennis en realisme. Door na te denken over je motieven, je levenssituatie en een eerste blik te werpen op je financiële mogelijkheden, kom je al een heel eind. Het belangrijkste is dat het goed voelt voor jou – dat je de stap zet met vertrouwen in plaats van angst of stress.</p>
              <p>In het volgende artikel gaan we dieper in op de financiële kant van woningbezit en de verschillende kosten die daarbij komen kijken. Maar voor nu: neem de tijd om te reflecteren op je wensen, je leven en je toekomstplannen. Veel succes!</p>
            `
          },
          {
            elementId: "kosten-woningbezit",
            title: "Totale kosten woningbezit",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Totale kosten van een koopwoning: meer dan alleen de hypotheek</h4>
              <p>Veel mensen denken bij het kopen van een huis vooral aan de hoogte van de hypotheek. Het is begrijpelijk dat dit een belangrijke factor is, maar er komt meer bij kijken. Het bezit en de aankoop van een woning brengt een reeks kosten met zich mee: van eenmalige uitgaven tijdens de overdracht tot terugkerende lasten die je elke maand of elk jaar weer zult tegenkomen. In dit artikel nemen we je mee door de meest voorkomende kostenposten, zodat je een realistisch beeld krijgt van wat je financiële situatie straks écht nodig heeft.</p>
              
              <h5>De hypotheek is niet alles</h5>
              <p>De maandelijkse hypotheeklasten vormen vaak het grootste deel van je woonlasten, maar besef goed dat er nog andere vaste uitgaven bij komen kijken. Je kunt online tools gebruiken om te zien wat je maximaal kunt lenen op basis van je inkomen en andere financiële verplichtingen, maar houd er rekening mee dat jouw daadwerkelijke woonlasten hoger zullen zijn dan alleen de hypotheekaflossing en rente.</p>
              
              <h5>Notariskosten bij de aankoop</h5>
              <p>Als je een woning koopt, schakelt de wet een notaris in voor het opstellen van de transportakte (de officiële eigendomsakte) en eventueel de hypotheekakte. Voor deze diensten betaal je notariskosten. Het tarief kan flink variëren per notaris, dus het loont de moeite om offertes op te vragen.</p>
              
              <h5>Overdrachtsbelasting</h5>
              <p>Bij het kopen van een bestaande woning betaal je overdrachtsbelasting. De hoogte hangt af van je leeftijd, koopprijs en of je de woning zelf gaat bewonen. De actuele informatie hierover vind je bij de Belastingdienst (<a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/woning/overdrachtsbelasting/">link</a>). Voor starters op de woningmarkt kan er een vrijstelling of een verlaagd tarief gelden, maar dat is aan bepaalde voorwaarden gebonden.</p>
              
              <h5>Taxatie en eventuele bouwkundige keuring</h5>
              <p>Voordat een bank je een hypotheek verstrekt, willen zij zekerheid over de waarde van de woning. Daarom wordt vaak een taxatie verplicht gesteld. Dit kost je een paar honderd euro. Ook kan het verstandig zijn om een bouwkundige keuring uit te laten voeren, vooral bij oudere woningen. Zo weet je beter wat de staat van het huis is en welke onderhoudskosten je op korte termijn kunt verwachten.</p>
              
              <h5>Hypotheekadvies- en bemiddelingskosten</h5>
              <p>Als je een hypotheek afsluit, kun je dit niet zomaar zelfstandig regelen; vaak schakel je een financieel adviseur of hypotheekbemiddelaar in. Deze partij helpt je met het vinden van een passende hypotheek en het regelen van de bijbehorende documenten. De kosten hiervoor kunnen sterk verschillen per adviseur en bank, maar reken op een bedrag van enkele honderden tot duizenden euro’s.</p>
              
              <h5>Gemeentelijke belastingen en heffingen</h5>
              <p>Zodra je eigenaar bent, krijg je te maken met gemeentelijke belastingen, zoals onroerendezaakbelasting (OZB). Daar bovenop komen nog waterschapslasten en mogelijk rioolheffing. Deze kosten verschillen per gemeente. Het is dus slim om vooraf te checken bij de gemeente of op hun website hoeveel je ongeveer moet betalen.</p>
              
              <h5>Verzekeringen</h5>
              <p>Als huiseigenaar wil je goed verzekerd zijn tegen schade aan je woning. Een opstalverzekering (of woonhuisverzekering) is meestal verplicht als je een hypotheek hebt. Daarnaast kan een inboedelverzekering verstandig zijn om je spullen te beschermen tegen brand, inbraak of waterschade. Dit zijn maandelijkse of jaarlijkse kosten die je niet moet vergeten.</p>
              
              <h5>Onderhoud en reparaties</h5>
              <p>Waar een huurbaas vroeger veel zaken voor je regelde, ben je als eigenaar zelf verantwoordelijk voor onderhoud. Denk aan schilderwerk, een eventueel nieuw dak, het repareren van lekkages of het vervangen van de cv-ketel. Deze kosten kunnen hoger uitvallen dan je in eerste instantie verwacht. Een goede vuistregel is om elke maand wat geld apart te zetten voor onderhoud en reparaties, zodat je niet voor onverwachte financiële verrassingen komt te staan.</p>
              
              <h5>Vereniging van Eigenaren (VvE)</h5>
              <p>Koop je een appartement, dan ben je automatisch lid van een Vereniging van Eigenaren (VvE). Maandelijks of jaarlijks betaal je een VvE-bijdrage voor gemeenschappelijk onderhoud en verzekeringen. Check hoe actief en financieel gezond de VvE is, en wat de maandelijkse bijdrage inhoudt. Een slecht georganiseerde VvE kan later voor flinke problemen en kosten zorgen (meer informatie op <a href="https://www.rijksoverheid.nl">rijksoverheid.nl</a>).</p>
              
              <h5>Verbouwingen en verbeteringen</h5>
              <p>Misschien wil je de woning meteen aanpakken of in de toekomst verbouwen. Denk aan een nieuwe keuken, een uitbouw of het plaatsen van zonnepanelen. Deze investeringen kunnen waarde toevoegen aan je huis, maar ze kosten natuurlijk ook geld. Overweeg om bij je hypotheekaanvraag of in je persoonlijke budget ruimte te reserveren voor dit soort wensen.</p>
              
              <h5>Verborgen kosten: reservebuffers en extraatjes</h5>
              <p>Tot slot zijn er nog kleine kosten die kunnen oplopen, zoals het afhandelen van verhuis- en klusmateriaal, de inrichting van je nieuwe plek en eventuele aansluitkosten voor internet, tv en nutsvoorzieningen. Het is handig om een buffer te hebben voor dit soort extra’s, zodat je niet in de knel komt.</p>
              
              <h5>Hoe houd je overzicht?</h5>
              <p>Het is veel informatie en het kan overweldigend zijn. Wat helpt, is om een lijst of spreadsheet te maken met alle uitgaven die te verwachten zijn. Maak daarin onderscheid tussen eenmalige en terugkerende kosten. Zo krijg je helder of je elke maand genoeg overhoudt voor andere belangrijke zaken in het leven, zoals hobby’s, vakanties of het opbouwen van een financiële reserve.</p>
              
              <p>Kopen is spannend en kan een fantastische stap zijn, maar juist door je bewust te zijn van alle kosten, koop je met een geruster hart. Heb je er vragen over, schroom niet om advies in te winnen bij een financieel adviseur of mensen in je omgeving die recent een huis hebben gekocht. Zorg dat je weet waar je aan toe bent, zodat jouw nieuwe thuis écht als een fijne plek voelt – zonder onverwachte financiële zorgen.</p>
            `
          },
          {
            elementId: "hypotheken-basis",
            title: "Hypotheken basis kennis",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Verdiepen in hypotheken: kerntermen, mogelijkheden en hoeveel je kunt lenen</h4>
              <p>Het woord ‘hypotheek’ roept vaak meteen allerlei vragen op. Wat houdt het precies in? Welke vormen zijn er? En hoe ontdek je hoeveel je eigenlijk kunt lenen? In dit artikel duiken we in de belangrijkste basisbegrippen, zodat jij straks met meer vertrouwen kunt kijken naar de mogelijkheden die bij jou passen.</p>
              
              <h5>Wat is een hypotheek precies?</h5>
              <p>Een hypotheek is in feite een lening die je bij een geldverstrekker afsluit voor de aankoop van een woning. De woning zelf dient als onderpand. Kun je de lening niet meer betalen, dan heeft de bank het recht om jouw woning te verkopen. Het klinkt heftig, maar zo werkt het systeem. Het zorgt ervoor dat de bank minder risico loopt, en dat maakt het voor veel mensen mogelijk om een huis te kopen zonder dat ze het hele bedrag op de bank hebben staan.</p>
              <p>Hoeveel je kan lenen bespreken we in het volgende artikel.</p>
              
              <h5>Verschillende hypotheekvormen</h5>
              <p>Er bestaan diverse vormen. Hieronder vind je de meest voorkomende die in Nederland relevant zijn, waarbij de eerste twee de meest gekozen vormen zijn:</p>
              <ul>
                <li><strong>Annuïteitenhypotheek:</strong> Je betaalt elke maand een vast bedrag dat bestaat uit rente en aflossing. In het begin betaal je relatief veel rente en los je weinig af. Later verschuift dit, zodat je steeds meer aflost en minder rente betaalt. Het voordeel is dat je maandlasten stabiel blijven (op de rentevaste periode na).</li>
                <li><strong>Lineaire hypotheek:</strong> Je lost elke maand een vast bedrag af (lineair), waardoor je rentedeel steeds kleiner wordt. De maandlasten beginnen daardoor hoger en nemen in de loop der jaren af. Het grootste voordeel is dat je totaal minder rente betaalt dan bij een annuïteitenhypotheek. De hogere kosten in het begin kunnen wel een drempel zijn.</li>
                <li><strong>Aflossingsvrije hypotheek:</strong> Je betaalt alleen rente en lost niet af tijdens de looptijd, waardoor je maandlasten laag blijven. Het risico is dat je na het einde van de looptijd (bijvoorbeeld na 30 jaar) nog steeds een schuld hebt, en die moet op een bepaald moment toch worden afgelost of geherfinancierd. Daarom stellen veel geldverstrekkers eisen aan het percentage dat je ‘aflossingsvrij’ kunt lenen.</li>
                <li><strong>(Bank)spaarhypotheek en andere ‘oude’ vormen:</strong> Vroeger waren spaar- en beleggingshypotheken populair, maar de regels rondom hypotheekrenteaftrek zijn veranderd. Hierdoor komen deze vormen steeds minder voor of worden ze alleen in specifieke situaties aangeboden. Als je nog zo’n hypotheek hebt of overweegt, verdiep je dan goed in de voorwaarden.</li>
              </ul>
              
              <h5>Rente, rentevaste periode en keuzes</h5>
              <p>Naast de keuze in de vorm van aflossen, is de rente een belangrijke factor. Deze bestaat uit:</p>
              <ul>
                <li><strong>Rentepercentage:</strong> De hoogte van de rente is afhankelijk van de markt, je persoonlijke situatie (zoals hoe hoog je lening is ten opzichte van de waarde van je woning) en de gekozen looptijd.</li>
                <li><strong>Rentevaste periode:</strong> Je kunt kiezen om je rente voor een bepaalde periode ‘vast’ te zetten, bijvoorbeeld 10, 20 of 30 jaar. Hoe langer je de rente vastzet, hoe meer zekerheid je hebt over je maandlasten, maar meestal betaal je wel een iets hoger rentepercentage voor die zekerheid.</li>
              </ul>
              
              <h5>Andere begrippen die handig zijn om te kennen</h5>
              <ul>
                <li><strong>NHG (Nationale Hypotheek Garantie):</strong> Dit is een garantie op je hypotheek, die je soms kunt afsluiten als de koopsom van je woning onder een bepaalde grens ligt (zie de actuele grens op <a href="https://www.nhg.nl">nhg.nl</a>). Het kan je rentevoordeel opleveren, omdat de geldverstrekker minder risico loopt.</li>
                <li><strong>Loan-to-Value (LTV):</strong> Dit geeft aan welk percentage van de woningwaarde je leent. Als je een huis koopt van 300.000 euro en je leent 270.000, dan is je LTV 90%. Hoe lager je LTV, hoe gunstiger je vaak je rente.</li>
                <li><strong>Eigen inbreng:</strong> Het deel dat je zelf in de woning investeert (bijvoorbeeld je spaargeld). Je hebt tegenwoordig meestal ook een deel eigen geld nodig om de kosten koper te betalen.</li>
              </ul>
              
              <h5>Mogelijkheden en voor- en nadelen</h5>
              <p>Elke hypotheekvorm en rentevaste periode heeft eigen voor- en nadelen. De een kiest voor lagere maandlasten met meer risico (aflossingsvrij), de ander wil zekerheid en aflossen (annuïteiten of lineair). Denk hierbij niet alleen aan wat je nú kunt betalen, maar ook aan hoe het in de toekomst zit met eventuele gezinsuitbreiding, pensioen of het verminderen van werkuren.</p>
              
              <h5>Hypotheekadvies: wel of niet inschakelen?</h5>
              <p><strong>Hypotheekadviseur:</strong> Een adviseur helpt je de beste keuze te maken. Je betaalt kosten voor het advies, maar je krijgt (als het goed is) ook begeleiding, inzicht in de markt en hulp bij de aanvraag. Let altijd op of de adviseur onafhankelijk is en meerdere geldverstrekkers vergelijkt, of aan één bank gebonden is.</p>
              <p><strong>Execution only:</strong> Ben je zelf erg thuis in financiële zaken, dan kun je in sommige gevallen zonder adviseur een hypotheek afsluiten, oftewel ‘execution only’. Het voordeel is dat je geen advieskosten betaalt. Het nadeel is dat je zelf verantwoordelijk bent als je later ontdekt dat je niet de meest passende hypotheek hebt gekozen (meer informatie via <a href="https://www.afm.nl">afm.nl</a>).</p>
              
              <h5>Hoe maak je de juiste keuze?</h5>
              <p>De eerste stap is altijd om je persoonlijke situatie en wensen in kaart te brengen. Hoeveel wil (of kun) je maandelijks aan woonlasten uitgeven? Hoe belangrijk vind je zekerheid? En hoeveel risico kun en wil je nemen? Door dit voor jezelf helder te krijgen, wordt het makkelijker om een vorm en een rentevaste periode te kiezen.</p>
              
              <h5>Tot slot</h5>
              <p>Hypotheken zijn er in alle soorten en maten. Het is begrijpelijk dat je door de bomen het bos even niet ziet. Neem de tijd om je goed in te lezen en vergelijk verschillende aanbieders en vormen. Praat met mensen in je omgeving over hun keuzes en ervaringen, of schakel een professional in als je merkt dat je graag meer zekerheid en begeleiding wilt. Hierover meer in het volgende artikel.</p>
              <p>Door nu je huiswerk te doen, voorkom je dat je later voor dure verrassingen komt te staan. Een goed passende hypotheek betekent uiteindelijk rust in je hoofd én in je portemonnee. Succes met je zoektocht!</p>
            `
          },
          {
            elementId: "hypotheek-gesprekken",
            title: "Hypotheekindicatie & -gesprekken",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Hypotheek Indicatie en hypotheekgesprekken: hoe ga je goed voorbereid van start?</h4>
              <p>De stap naar een eigen woning begint voor veel mensen met het ontdekken van de vraag: “Hoeveel kan ik eigenlijk lenen?” Een hypotheek indicatie geeft je een eerste idee van je financiële mogelijkheden en vormt een fijne basis bij het bekijken van huizen. Maar hoe pak je dat aan, waar vind je betrouwbare tools en hoe bereid je je voor als je wilt praten met een hypotheekadviseur? Hieronder vind je de belangrijkste aandachtspunten.</p>
              
              <h5>Wat is een hypotheek indicatie?</h5>
              <p>Een hypotheek indicatie is een grove inschatting van het bedrag dat je maximaal kunt lenen voor de aankoop van een woning. Het is geen bindende toezegging, maar meer een richtlijn. Het geeft je houvast, zodat je een realistisch prijssegment kunt aanhouden tijdens je huizenjacht.</p>
              
              <h5>Waar kun je een hypotheek indicatie krijgen?</h5>
              <p>Er zijn verschillende manieren en plekken om een eerste berekening te maken. Zo kun je terecht op:</p>
              <ul>
                <li>De website van het Nibud (<a href="https://www.nibud.nl">nibud.nl</a>).</li>
                <li>Online rekentools van hypotheekverstrekkers of vergelijkingssites.</li>
              </ul>
              <p>Deze sites vragen je om informatie over je inkomen, spaargeld en eventuele schulden (denk aan een studieschuld of creditcardschuld). Aan de hand hiervan maken ze een berekening. Hoe realistischer je antwoorden, hoe beter de inschatting. Vergeet niet dat het maximale leenbedrag niet per se het bedrag is dat bij jouw levensstijl past.</p>
              
              <h5>Voorbereiding op een gesprek met een hypotheekadviseur</h5>
              <p>Als je besluit om een hypotheekadviseur in te schakelen, is het slim om alvast een aantal zaken paraat te hebben voordat je een gesprek inplant:</p>
              <ul>
                <li>Een eerste hypotheek indicatie (zodat je niet volledig blanco het gesprek ingaat).</li>
                <li>Inzicht in je maandelijkse uitgaven, zoals huur, verzekeringen, abonnementen en boodschappen.</li>
                <li>Overzicht van eventuele schulden (studiefinanciering, creditcards, leningen).</li>
                <li>Een idee van je spaargeld en of je een deel van je eigen geld wilt of kunt inbrengen.</li>
              </ul>
              <p>Hoe beter je voorbereid bent, hoe gerichter de adviseur je kan helpen en hoe concreter jullie het gesprek kunnen voeren.</p>
              
              <h5>Waar moet je op letten bij het kiezen van een adviseur?</h5>
              <p>Niet iedereen voelt zich comfortabel bij ‘execution only’ (zelf je hypotheek regelen zonder advies). Een adviseur kan rust en zekerheid geven. Maar hoe kies je de juiste adviseur? Let op:</p>
              <ul>
                <li><strong>Onafhankelijkheid:</strong> Sommige adviseurs werken samen met één of enkele geldverstrekkers, anderen vergelijken het aanbod van veel partijen. Hoe breder het aanbod, hoe groter de kans dat je echt de best passende deal krijgt.</li>
                <li><strong>Kostenstructuur:</strong> Vraag vooraf naar de kosten. Sommige adviseurs werken met een vast tarief, anderen met een uurtarief of provisie. Kijk wat voor jou prettig is en vergelijk eventueel meerdere offertes.</li>
                <li><strong>Ervaringen van anderen:</strong> Praat met vrienden of familie die recent een huis hebben gekocht en vraag naar hun ervaringen. Of check recensies online.</li>
                <li><strong>Klik en vertrouwen:</strong> Een goed adviesgesprek draait niet alleen om cijfers, maar ook om jouw persoonlijke wensen en plannen. Voel je je op je gemak bij de adviseur en heb je het gevoel dat ze écht naar je luisteren?</li>
              </ul>
              
              <h5>Wat bespreek je tijdens een hypotheekgesprek?</h5>
              <p>Het eerste gesprek is vaak een kennismaking waarin je wensen, je financiële situatie en eventuele toekomstplannen worden doorgenomen. Daarna kan de adviseur je vertellen welke hypotheekvorm(en) mogelijk zijn, wat de voor- en nadelen zijn en welke rentetarieven bij je passen. Let op:</p>
              <ul>
                <li>Vraag altijd door als iets niet duidelijk is.</li>
                <li>Laat je niet te snel overhalen om voor één specifieke hypotheekvorm te kiezen.</li>
                <li>Noteer belangrijke begrippen en conclusies, of vraag of je het gesprek mag opnemen zodat je het later nog eens kunt terugluisteren.</li>
              </ul>
              
              <h5>Hoe voorkom je dat je meer leent dan goed voor je is?</h5>
              <p>Het is verleidelijk om voor het hoogst mogelijke leenbedrag te gaan. Toch is het belangrijk om ook rekening te houden met je dagelijkse leven. Hoe graag wil je op vakantie? Hoe belangrijk vind je het om te sparen voor je pensioen of voor eventuele kinderen? En wat gebeurt er als je minder gaat werken? Denk vooruit en neem die toekomstplannen mee in je overwegingen.</p>
              
              <h5>Tot slot</h5>
              <p>Een goede hypotheek indicatie en een prettig gesprek met een adviseur kunnen je veel onzekerheid wegnemen. Of je nu met een specialist praat of zelf met online tools aan de slag gaat: houd altijd in gedachten dat een hypotheek bij jouw leven moet passen, niet andersom. Neem de tijd, wees eerlijk over je financiële situatie en wees niet bang om door te vragen. Zo start je je huizenjacht met een gezond fundament. Succes met de voorbereidingen!</p>
            `
          },
          {
            elementId: "verplichte-documenten-start",
            title: "Verzamel verplichte documenten",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Verzamel nu (en straks) de documenten die je nodig hebt voor je hypotheek</h4>
              <p>Wanneer je een hypotheek aanvraagt, heb je meer nodig dan alleen je ID en een loonstrook. Het loont om al in een vroeg stadium te weten wélke documenten vereist (of handig) zijn, zodat je niet op het laatste moment in paniek nog van alles moet regelen. Hieronder lees je welke papieren je vaak meteen moet kunnen laten zien, en welke pas later in het proces nodig zijn. Zo ben je goed voorbereid op je gesprekken met hypotheekadviseurs en de definitieve aanvraag.</p>
              
              <h5>Documenten die je al vroeg op orde kunt brengen</h5>
              <p>De meeste hypotheekverstrekkers of -adviseurs vragen een paar essentiële stukken zodra je om de tafel gaat, om je financiële situatie te begrijpen:</p>
              <ul>
                <li><strong>Identiteitsbewijs:</strong> Denk aan een geldig paspoort of ID-kaart (geen rijbewijs), want dat is voor officiële identificatie niet voldoende. Controleer de geldigheid, zodat je niet voor verrassingen komt te staan.</li>
                <li><strong>Werkgeversverklaring en (indien nodig) een intentieverklaring:</strong> Een werkgeversverklaring bevestigt je inkomen en de duur van je contract. Sommige geldverstrekkers willen ook een intentieverklaring: daarin verklaart de werkgever dat hij de bedoeling heeft om je contract te verlengen als je goed blijft functioneren. Vraag dit gerust tijdig aan bij je werkgever, zodat je niet afhankelijk bent van iemands vakantieplanning of drukte.</li>
                <li><strong>Loonstroken en bankafschriften:</strong> Houd rekening met de laatste drie maanden loonstroken en eventuele jaarlijkse overzichten (zoals een jaaropgaaf). Ook bankafschriften kunnen soms vereist zijn, zodat de geldverstrekker kan inzien hoe je maandelijkse inkomsten en uitgaven eruitzien.</li>
                <li><strong>Overzicht van eventuele schulden:</strong> Heb je een studieschuld (DUO) of een andere lening? Verzamel daar duidelijke stukken over, zodat de hypotheekadviseur kan inschatten wat dit betekent voor je leencapaciteit. Vergeet ook geen kredietlimiet op je creditcard of betaalrekening.</li>
              </ul>
              
              <h5>Specifieke documenten voor ondernemers of zzp’ers</h5>
              <p>Ben je zelfstandig ondernemer, zzp’er of heb je een eigen bedrijf? Dan ligt de nadruk veel meer op je inkomenshistorie en stabiliteit. Je hebt meestal nodig:</p>
              <ul>
                <li>Jaarrekeningen, winst- en verliesrekeningen van de afgelopen drie jaar</li>
                <li>Jaaropgaven van de Belastingdienst en/of je aangiftes inkomstenbelasting</li>
                <li>Eventueel een prognose van je huidige boekjaar (gemaakt door je accountant of boekhouder)</li>
              </ul>
              <p>Neem de tijd om deze stukken te verzamelen, want het kan even duren om alles netjes geordend te krijgen. Sommige adviseurs verwijzen je eventueel naar gespecialiseerde hypotheekverstrekkers die meer ervaring hebben met ondernemers.</p>
              
              <h5>Documenten die pas later in het traject nodig zijn</h5>
              <p>Zodra je een woning op het oog hebt en de daadwerkelijke aanvraag in gang zet, kan de geldverstrekker om extra informatie vragen:</p>
              <ul>
                <li><strong>Koopovereenkomst en stukken van de woning:</strong> Zodra je een bod hebt gedaan en het is geaccepteerd, wordt een voorlopig koopcontract opgesteld. Dit document is cruciaal voor de hypotheekaanvraag. Bij een appartement is er vaak ook informatie van de Vereniging van Eigenaren nodig (denk aan de VvE-notulen, splitsingsakte, huishoudelijk reglement).</li>
                <li><strong>Taxatierapport:</strong> De bank wil weten hoeveel de woning écht waard is en vraagt daarom meestal om een taxatierapport. Dit regel je bij een erkend taxateur. Soms is er ook een bouwkundig rapport nodig, vooral bij oudere woningen. (<a href="https://www.rijksoverheid.nl">Meer info bij Rijksoverheid</a>.)</li>
                <li><strong>BKR-registratie:</strong> Elke lening staat geregistreerd bij het Bureau Krediet Registratie (BKR). Een hypotheekverstrekker checkt dit, maar het kan fijn zijn om vooraf te weten of daar iets in staat wat je moet toelichten.</li>
                <li><strong>Situaties met een schenking of lening van familie:</strong>
                  <ul>
                    <li><strong>Schenking:</strong> Wordt er geld geschonken? Vaak moet je een ‘schenkingsovereenkomst’ of ‘schenkingsakte’ kunnen laten zien, waarin staat dat het echt een gift is en geen lening. Kijk voor de regels omtrent belastingvrije schenkingen op (<a href="https://www.belastingdienst.nl">belastingdienst.nl</a>).</li>
                    <li><strong>Familielening:</strong> Als je familie je geld leent, is een officiële (notariële) leenovereenkomst verstandig. De geldverstrekker wil kunnen beoordelen welk deel van je woning volledig gefinancierd is door een bank en welk deel via een familielening.</li>
                  </ul>
                </li>
              </ul>
              
              <h5>Waarom al die documenten?</h5>
              <p>Een hypotheekverstrekker wil een compleet beeld van jouw financiële situatie. Voor jouzelf is het ook fijn om te weten waar je aan toe bent. Door papieren te verzamelen, ontdek je soms zelf ook of er nog onverwachte kosten of schulden zijn waar je rekening mee moet houden.</p>
              
              <h5>Tips om alles overzichtelijk te bewaren</h5>
              <p>Het klinkt misschien saai, maar een goede mappenstructuur of een ordner is écht een aanrader. Maak bijvoorbeeld een map “Hypotheek” op je computer (of in de cloud) en bewaar daarin submappen met loonstroken, bankafschriften, contracten, werkgeversverklaringen enzovoort. Zo kun je alles snel terugvinden als de adviseur of bank erom vraagt.</p>
              
              <h5>Tot slot</h5>
              <p>Hoe sneller je al deze documenten bij elkaar hebt, hoe soepeler je hypotheekgesprek en uiteindelijke aanvraag kunnen verlopen. Hoewel het verzamelen soms wat werk is, scheelt het een hoop stress als je straks je droomhuis vindt. Zorg dat je je mappen up-to-date houdt en aarzel niet om je werkgever, boekhouder of familie tijdig te benaderen voor de juiste papieren.</p>
              <p>Een goede voorbereiding geeft rust en vergroot de kans dat je aanvraag vlot en zonder onnodige obstakels wordt goedgekeurd. Succes met het verzamelen van alle papieren en geniet van het proces naar je nieuwe thuis!</p>
            `
          }
        ]
      },
      {
        stageId: "woningen-vinden",
        title: "Woningen vinden",
        description:
          "Om dé woning te vinden zijn enkele stappen belangrijk, in deze artikelen is beschreven wat belangrijk is om jou woning te vinden.",
        templateCount: 0,
        elements: [
          {
            elementId: "markt-analyze",
            title: "Mini markt-analyze",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Mini-marktanalyse: snap de woningmarkt voor je serieus gaat zoeken</h4>
              <p>Voordat je echt op huizenjacht gaat, is het slim om eerst te begrijpen hoe de woningmarkt in elkaar zit. Een zogenaamde ‘mini-marktanalyse’ helpt je een beter beeld te krijgen van wat er momenteel speelt: hoe ziet de vraag en het aanbod eruit, en wat kun je verwachten qua prijzen en snelheid van verkopen? Hieronder lees je hoe je zelf een eenvoudige marktcheck kunt doen.</p>
              
              <h5>Kijk naar vraag en aanbod in jouw regio</h5>
              <p>Niet elke stad of regio is hetzelfde. In de ene stad is het overschot aan zoekers enorm en moet je snel beslissen, terwijl in een andere plaats huizen juist wat langer te koop staan. Handige bronnen om te raadplegen zijn:</p>
              <ul>
                <li>Online huizenplatforms als <a href="https://www.funda.nl">funda.nl</a> waar je kunt zien hoe lang woningen gemiddeld te koop staan.</li>
                <li>Cijfers van het Kadaster (<a href="https://www.kadaster.nl">kadaster.nl</a>) en het CBS (<a href="https://www.cbs.nl">cbs.nl</a>) over huizenprijzen en de snelheden waarmee woningen worden verkocht.</li>
                <li>Lokale kranten of websites die regelmatig updates geven over de regionale markt.</li>
              </ul>
              
              <h5>Houd oog voor prijstrends</h5>
              <p>Probeer een gevoel te krijgen van hoe de prijzen zich ontwikkelen. Gaan ze omhoog? Stagneren ze? Of zijn ze wat aan het zakken? Ook een snelle blik op de vraagprijzen van vergelijkbare woningen (bijvoorbeeld dezelfde type woning in jouw voorkeurswijk) kan je helpen om te zien of jouw budget realistisch is.</p>
              
              <h5>Bepaal hoe gewild jouw gewenste type woning is</h5>
              <p>Maak voor jezelf duidelijk welk type huis je zoekt: een appartement, tussenwoning, hoekwoning of vrijstaande woning. In sommige gebieden zijn appartementen razend populair, in andere gebieden zijn het juist de gezinswoningen die in trek zijn. Hoe gewilder het type woning, hoe meer concurrentie je kunt verwachten.</p>
              
              <h5>Let op renteontwikkelingen en overheidsbeleid</h5>
              <p>Renteveranderingen hebben invloed op de betaalbaarheid van huizen. Gaat de rente omhoog? Dan kunnen mensen vaak minder lenen, wat eventueel zorgt voor minder vraag naar woningen. Ook overheidsmaatregelen (bijvoorbeeld aanpassingen in de overdrachtsbelasting) kunnen de markt veranderen. Houd daarom het nieuws in de gaten, of check een website als <a href="https://www.rijksoverheid.nl">rijksoverheid.nl</a> om te zien of er iets op stapel staat dat relevant kan zijn voor jouw situatie.</p>
              
              <h5>Krijg feeling met de markt door bezichtigingen</h5>
              <p>Je hoeft niet te wachten met bezichtigen tot je “helemaal klaar” bent. Ook een paar proefbezichtigingen kunnen je helpen om te ervaren hoe druk het is, wat de staat van woningen is in een bepaalde prijscategorie, en hoe realistisch vraagprijzen zijn. Je merkt vaak snel of er massaal belangstelling is voor een huis of dat het wat rustiger is.</p>
              
              <h5>Waarom een mini-marktanalyse?</h5>
              <p>Als je weet hoe de markt ervoor staat, is het makkelijker om te bepalen hoe je wilt zoeken en bieden. In een krappe markt met veel concurrentie wil je misschien sneller handelen of je onderhandelingsruimte bijvoorbaat wat aanpassen. Is de markt ruimer? Dan heb je juist weer wat meer tijd en kun je wellicht scherper onderhandelen.</p>
              
              <h5>Tot slot</h5>
              <p>Een mini-marktanalyse hoeft niet ingewikkeld te zijn. Door op een paar bronnen te kijken en actief te volgen wat er in jouw regio gebeurt, krijg je een realistische verwachting. Dat zorgt voor minder verrassingen en maakt je beter voorbereid wanneer je straks serieus gaat zoeken en bieden. Succes met je marktverkenning!</p>
            `
          },
          {
            elementId: "zoektocht-voorbereiding",
            title: "Voorbereiding op de zoektocht",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Voorbereidingen voordat je gaat zoeken: must-haves en nice-to-haves</h4>
              <p>Voordat je lukraak huizen gaat bekijken, is het handig om eerst scherp te krijgen wat je écht nodig hebt en wat je graag zou willen. Zo houd je tijdens het zoeken het hoofd koel en voorkom je dat je verliefd wordt op een woning waar je achteraf spijt van krijgt.</p>
              
              <h5>Maak een overzicht van je must-haves</h5>
              <ul>
                <li>Denk na over het aantal slaapkamers dat je minimaal nodig hebt, bijvoorbeeld omdat je een thuiskantoor wilt of kinderen hebt.</li>
                <li>Bepaal hoe belangrijk locatie is: wil je per se in een bepaalde buurt zitten vanwege werk, school of familie?</li>
                <li>Kijk naar praktische zaken zoals parkeerplek, een tuin of balkon, en de bereikbaarheid van openbaar vervoer of uitvalswegen.</li>
              </ul>
              <p>Deze must-haves zijn de eigenschappen waar je niet snel op wilt inleveren. Het helpt om ze samen te vatten in een kort lijstje.</p>
              
              <h5>Stel je nice-to-haves op</h5>
              <ul>
                <li>Misschien droom je van een ruime woonkeuken of een walk-in closet, maar is het geen ramp als je een wat kleinere keuken hebt.</li>
                <li>Een extra kamer voor hobby’s of logés is leuk, maar misschien geen absolute voorwaarde.</li>
                <li>Een bad of regendouche is heerlijk, maar een normale douche is ook prima – de badkamer kan later altijd nog worden aangepakt.</li>
              </ul>
              <p>Door deze punten als ‘extra wensen’ te labelen, kun je flexibeler omgaan met bezichtigingen en blijf je reëel als het spannend wordt met biedingen.</p>
              
              <h5>Blijf rationeel</h5>
              <ul>
                <li>Neem je lijstje erbij tijdens een bezichtiging en leg elke woning langs dezelfde meetlat. Past het huis bij de belangrijkste must-haves, of laat je je meeslepen door een prachtige inrichting die later toch verdwijnt als de verkoper vertrekt?</li>
                <li>Probeer niet te bezwijken voor kleine details die eigenlijk niet zo belangrijk zijn, hoe mooi ze er ook uitzien.</li>
                <li>Raadpleeg je budget en houd rekening met kosten voor eventuele aanpassingen of onderhoud. Je wilt niet straks in een droomhuis zitten, maar geen geld meer overhebben om het warm te stoken of die droomkeuken te realiseren.</li>
              </ul>
              
              <h5>Flexibel blijven</h5>
              <ul>
                <li>Soms vind je de perfecte mix niet in één woning. Bedenk welke must-haves eventueel toch wat kunnen schuiven en welke echt niet.</li>
                <li>Als de markt krap is, is het soms moeilijk om alles op je wensenlijst te vinden. Dan kan het helpen om je nice-to-haves los te laten of een wijk verder te kijken dan je oorspronkelijke voorkeur.</li>
              </ul>
              <p>Een goede voorbereiding neemt veel stress weg. Je weet beter waar je op moet letten en waarop je wilt inleveren als het even tegenzit. Schrijf je must-haves en nice-to-haves op, neem ze mee naar iedere bezichtiging en durf kritisch te blijven. Zo vergroot je de kans dat je straks vol tevredenheid in je nieuwe huis kunt stappen!</p>
            `
          },
          {
            elementId: "woning-vinden",
            title: "Jou woning vinden",
            templates: [],
            articleHtml: `
              <h4 class="secondary">De juiste woning vinden: tips voor online platformen en verkenning op locatie</h4>
              <p>Nu je een idee hebt van je must-haves en nice-to-haves door ons vorige artikel, is het tijd om serieus te gaan zoeken. Steeds meer mensen beginnen hun huizenjacht online, maar het is ook de moeite waard om je toekomstige buurt in het echt te verkennen. Hier lees je waar je op kunt letten bij het filteren van woningen op platforms én waarom rondrijden in de wijken waar je wilt wonen zo waardevol kan zijn.</p>
              
              <h5>Start met online platformen</h5>
              <ul>
                <li><strong>Funda</strong> (<a href="https://www.funda.nl">funda.nl</a>) is veruit het bekendste platform in Nederland, maar er zijn ook andere sites die mogelijk nieuw aanbod aanleveren zoals <strong>Pararius</strong> (<a href="https://www.pararius.com">pararius.com</a>). Ook zijn er meer platformen waarop je woningen kan vinden zoals Facebook, Marktplaats en andere sociale media.</li>
                <li><strong>Gebruik de filters slim:</strong> Als je vier slaapkamers nodig hebt, kun je dat instellen zodat je geen tijd verspilt aan woningen die sowieso niet passen. Let op dat je het niet té strak instelt, want soms wordt een kamer niet meegerekend of is de vraagprijs net iets boven je budget.</li>
                <li><strong>Stel alerts of notificaties in:</strong> Zo krijg je meteen een e-mail als er een nieuwe woning binnen je zoekcriteria online komt. In een krappe markt kan snelheid belangrijk zijn.</li>
              </ul>
              
              <h5>Kies je zoekgebieden zorgvuldig</h5>
              <ul>
                <li>Als je graag op loopafstand van winkels of een station wilt zitten, gebruik dan de kaartweergave om te checken waar voorzieningen zijn.</li>
                <li>Schakel tussen verschillende zoekgebieden: soms is het handig om je opties iets te verbreden, bijvoorbeeld als je in een bepaalde gemeente wilt wonen maar de buurstad ook open staat.</li>
                <li>Let op postcodegebieden of grenzen van wijken als je erg specifiek wilt filteren. Een buurt kan op de kaart klein lijken, maar in de praktijk toch groter en diverser zijn.</li>
              </ul>
              
              <h5>Waarom rondrijden (of wandelen) in de buurt loont</h5>
              <ul>
                <li>Online kun je veel informatie vinden, maar het echte gevoel van een buurt krijg je pas als je er doorheen rijdt of wandelt. Is het er druk? Is er veel groen? Hoe is de sfeer?</li>
                <li>Kijk naar praktische zaken als parkeergelegenheid en verkeersdoorstroming. Ligt er een school of speelplaats dichtbij, of wellicht een drukke weg waar je geen last van wilt hebben?</li>
                <li>Ga ook eens op verschillende momenten van de dag kijken. ’s Avonds kan de sfeer heel anders zijn dan overdag.</li>
              </ul>
              
              <h5>Wees realistisch over locatie</h5>
              <ul>
                <li>De locatie bepaalt vaak een groot deel van de prijs. Een populaire buurt dichtbij het centrum is duurder dan een buitenwijk. Bedenk waar je prioriteiten liggen: liever groter wonen in een rustigere wijk, of juist kleiner maar met alle levendigheid om de hoek?</li>
                <li>Check reistijden naar werk, familie of hobby’s. Houd er rekening mee dat files en druk openbaar vervoer je reistijd kunnen verlengen.</li>
              </ul>
              
              <h5>Maak een wensenlijst voor verschillende buurten</h5>
              <ul>
                <li>Noteer, als je door een buurt rijdt of wandelt, wat je wel en niet bevalt. Dit maakt het later makkelijker om gebieden te vergelijken en het helpt voorkomen dat je vergeten bent wat je ergens van vond.</li>
                <li>Heb je kinderen? Beoordeel dan speeltuinen, basisscholen en kinderopvang in de omgeving. Zonder kinderen kun je juist letten op de horeca of sportvoorzieningen.</li>
              </ul>
              
              <h5>Tot slot</h5>
              <p>Bij het zoeken naar een woning is het slim om online én offline te combineren. Online platformen geven een eerste indruk van wat er beschikbaar is, maar pas als je een wijk echt ervaart, weet je of je er kunt aarden. Wees niet bang om je zoekcriteria aan te passen als je merkt dat een bepaalde locatie of prijsrange niet realistisch is. Door flexibel en nieuwsgierig te blijven, vergroot je de kans dat je straks in een huis belandt waar je je helemaal thuis voelt. Succes met je speurtocht!</p>
            `
          }
        ]
      },
      {
        stageId: "woningen-bezichtigen",
        title: "Woningen bezichtigen",
        description:
          "Je hebt enkele woningen gevonden die je tof vond, hoe nu verder? Wij helpen je met tips voor het contact en de bezichtiging.",
        templateCount: 1,
        elements: [
          {
            elementId: "verkoper-contact",
            title: "Contact met de verkoper",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Contact met de verkopende partij: hoe pak je dat aan?</h4>
              <p>Wanneer je een interessante woning hebt gevonden, volgt al snel de vraag hoe je het beste contact opneemt met de verkopende partij. Vaak is dat de makelaar die namens de verkoper optreedt, maar het kan ook direct de eigenaar zijn. Hier lees je hoe je dat contact op een prettige en effectieve manier start, en hoe je rekening kunt houden met de huidige markt (koper of verkoper markt).</p>
              
              <h5>Wees duidelijk en vriendelijk</h5>
              <p>Het eerste contact is meestal via telefoon of e-mail. Stel jezelf kort voor en geef aan dat je geïnteresseerd bent in de woning. Vraag of er een moment is om wat vragen te stellen of meteen een bezichtiging te plannen. Door vriendelijk en to the point te zijn, laat je een goede indruk achter en kom je professioneel over.</p>
              
              <h5>Koper- vs. verkopersmarkt</h5>
              <p>In een krappe verkopersmarkt is er vaak veel concurrentie. De makelaar of eigenaar kan het dan druk hebben met bezichtigingen. Soms is er niet veel ruimte voor uitgebreide vragen voordat je gaat kijken. Als je merkt dat de interesse voor de woning heel groot is, kan het slim zijn eerst snel een bezichtiging te plannen en tijdens of na dat bezoek je verdiepende vragen te stellen.</p>
              <p>In een ruimere kopersmarkt, met minder concurrentie, heb je vaak wat meer tijd. De verkoper is dan blij met alle interesse, dus er is meer ruimte voor een uitgebreid telefoongesprek of mailverkeer. Laat gerust weten dat je verschillende woningen bekijkt en vraag alvast naar zaken als de oplevertermijn of eventuele renovaties die zijn uitgevoerd.</p>
              
              <h5>Tonen van interesse</h5>
              <p>Als je echt enthousiast bent, kun je dat best laten blijken. Vraag bijvoorbeeld of er al biedingen liggen of of er een open huis gepland is. Geef aan dat je graag snel een afspraak wilt maken, maar dring niet te hard aan. Een beleefde, geïnteresseerde houding komt beter over dan gehaaste of juist heel afstandelijke communicatie.</p>
              
              <h5>Tijd voor vragen of alleen bezichtiging?</h5>
              <p>Sommige makelaars plannen bewust eerst een bezichtiging in, waarna er tijd is voor vragen. Anderen nemen juist voor de afspraak al de tijd om je vragen te beantwoorden, zodat je tijdens de rondleiding doelgericht kunt kijken. Als je twijfelt, kun je simpelweg vragen hoe de verkoper of makelaar het liefst te werk gaat. Zo respecteer je hun aanpak en kun je je eigen verwachtingen duidelijk maken.</p>
              
              <h5>Conclusie</h5>
              <p>Je eerste contact met de verkoper of makelaar zet de toon voor de verdere communicatie. Houd het kort en duidelijk, wees beleefd en laat zien dat je oprechte interesse hebt. In een verkopersmarkt is snel handelen belangrijk, terwijl je in een kopersmarkt vaak meer ruimte hebt om vragen te stellen. Probeer alvast te bepalen wat je echt wilt weten en schroom niet om aan te geven hoe je graag het verdere traject ziet. Een goede start vergroot de kans dat je soepel richting een succesvolle bezichtiging en mogelijk een bieding gaat.</p>
            `
          },
          {
            elementId: "verkoopmakelaar-begrijpen",
            title: "De verkoopmakelaar begrijpen",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Woningbezichtiging in zicht: hoe ga je om met de verkopende makelaar?</h4>
              <p>Als je een huis gaat bezichtigen, is de kans groot dat je te maken krijgt met een verkopend makelaar. Deze makelaar heeft veel kennis van de markt, is vaak erg charismatisch en behendig in het presenteren van de woning. Het is goed om te beseffen dat de verkopende makelaar in dienst is van de verkoper – niet van jou. Hieronder lees je wat handig is om te weten, zodat je goed voorbereid het contact aangaat.</p>
              
              <h5>Wie vertegenwoordigt de makelaar?</h5>
              <p>De verkopende makelaar heeft als taak het huis zo goed mogelijk te verkopen en de belangen van de verkoper te behartigen. Dit betekent dat hij of zij soms alleen de zonnige kant van de woning belicht en minder nadruk legt op mogelijke minpunten. Dat is niet verkeerd of misleidend per se, maar wél iets om je bewust van te zijn.</p>
              
              <h5>Onderzoeksplicht voor jou als koper</h5>
              <p>Het is in Nederland zo geregeld dat je als koper een eigen onderzoeksplicht hebt. Je mag vragen stellen en de verkopende partij moet eerlijk antwoorden, maar het is óók jouw verantwoordelijkheid om belangrijke zaken te checken. Dat kan betekenen dat je bijvoorbeeld een bouwkundige keuring laat uitvoeren of documenten over de woning opvraagt (zoals VvE-stukken bij een appartement). Neem niet te snel alles aan wat er wordt gezegd; verdiep je in de informatie die je krijgt en vraag na waar je twijfelt.</p>
              
              <h5>Voorkom overdreven enthousiasme</h5>
              <p>De verkopende makelaar zal de woning vaak enthousiast aanprijzen. Dat kan aanstekelijk werken, maar probeer realistisch en kritisch te blijven. Laat je niet te veel leiden door een mooie presentatie of een gezellig praatje. Houd altijd je eigen criteria en budget in het achterhoofd.</p>
              
              <h5>Neem je tijd om na te denken</h5>
              <p>Soms kan er een sfeer worden gecreëerd van: “Er zijn nog meer geïnteresseerden, je moet snel beslissen.” Zeker in een markt waar veel concurrentie is, gebeurt dit wel eens. Uiteraard kan het waar zijn dat er meer kijkers zijn, maar laat je niet opjagen als je merkt dat je nog vragen hebt of de informatie niet compleet is. Als je wél snel moet beslissen, probeer dan in ieder geval de belangrijkste checks te doen voordat je een bod uitbrengt.</p>
              
              <h5>Vraag naar relevante documenten</h5>
              <p>Is het een appartement? Dan zijn notulen van de Vereniging van Eigenaren of een meerjarenonderhoudsplan belangrijk om te bekijken. Voor een eengezinswoning wil je misschien weten of er recent groot onderhoud is gedaan of dat er garanties zijn op bijvoorbeeld de cv-ketel. De makelaar kan je hier vaak bij helpen, maar onthoud dat je zelf verantwoordelijk bent voor het opvragen en beoordelen van deze documenten.</p>
              
              <h5>Verkoopstrategie en prijs</h5>
              <p>Het kan dat de makelaar een bepaalde verkoopstrategie hanteert, zoals een ‘bieden vanaf’-prijs of een vraagprijs die hoger of lager ligt dan de daadwerkelijke waarde. Voor jou als koper is het handig om te beseffen dat deze prijs niet per se de werkelijke marktwaarde weerspiegelt. Overweeg bijvoorbeeld om later – als je het huis echt overweegt – zelf een taxatie te laten uitvoeren of in elk geval een schatting bij een onafhankelijke partij op te vragen.</p>
              
              <h5>Tips voor het contact</h5>
              <ul>
                <li>Blijf beleefd en ontspannen, maar onthoud dat dit een zakelijke transactie is.</li>
                <li>Vraag door als dingen onduidelijk zijn of je iets niet helemaal vertrouwt.</li>
                <li>Laat je niet te snel verleiden tot uitspraken als: “We willen het zeker hebben!” of “Dit is precies wat we zoeken!” (Tenzij je het écht zeker weet en je die positie strategisch wilt inzetten.)</li>
              </ul>
              
              <h5>Tot slot</h5>
              <p>De verkopende makelaar kan een goede bron van informatie zijn, maar je bent er niet voor niets zelf bij. Stel je kritische vragen, doe zelf onderzoek en laat je niet meeslepen door de verkoopskills die ongetwijfeld worden ingezet. In een volgend artikel gaan we verder in op de bezichtiging zelf en welke vragen je dan kunt stellen. Voor nu is het belangrijkste: besef dat de makelaar de belangen van de verkoper dient en jij je eigen belangen moet bewaken. Succes met de voorbereidingen!</p>
            `
          },
          {
            elementId: "bezichtiging-tips",
            title: "De kunst van bezichtigen",
            templates: [
              {
                fileUrl: "/public/assets/documents/kopen/Bezichtiging Checklist - MoveRoof Template.pdf",
                fileName: "Bezichtiging Checklist - MoveRoof Template.pdf",
                labelText: "Download Template"
              },
              {
                fileUrl: "/public/assets/documents/kopen/Bezichtiging Checklist - MoveRoof Template.docx",
                fileName: "Bezichtiging Checklist - MoveRoof Template.docx",
                labelText: "Download Template"
              }
            ],
            articleHtml: `
              <h4 class="secondary">De kunst van het bezichtigen: een woning met een scherp oog bekijken</h4>
              <p>Het moment dat je een woning gaat bezichtigen, kan spannend en overweldigend zijn. Dit is niet zomaar een rondleiding, het is jouw kans om een eerste indruk te vormen van wat misschien jouw toekomstige thuis wordt. Maar hoe haal je het meeste uit zo’n bezoek? Het begint allemaal met een open blik, een dosis nieuwsgierigheid, en de juiste mindset.</p>
              <p>Een woning laat meer zien dan muren en een dak; het vertelt een verhaal. Probeer bij binnenkomst even stil te staan en je in te beelden hoe je je hier zou voelen op een rustige zondagochtend. Wat voel je? Vaak merk je al direct of een huis prettig aanvoelt of juist niet. Vertrouw op dat gevoel, maar laat het je niet volledig leiden. Soms verhullen een goede geur of warme belichting gebreken die pas zichtbaar worden bij een tweede, kritische blik.</p>
              <p><em>MoveRoof heeft een gratis bezichtigingschecklist template, download deze via de knop en zorg dat je niks mist tijdens je bezichtiging!</em></p>
              
              <h5>Loop niet te snel</h5>
              <p>Een veelgemaakte fout is dat mensen te gehaast door een woning bewegen, alsof ze bang zijn de verkoper te veel tijd te kosten. Neem de tijd. Dit is jouw moment om alles in je op te nemen. Bekijk niet alleen de ruimtes, maar ook hoe ze op elkaar aansluiten. Is de indeling logisch? Voelt het ruim, of juist benauwend? Let ook op kleine dingen zoals hoe het licht valt op verschillende momenten van de dag. Een woonkamer die overdag zonnig lijkt, kan in de ochtend donker en kil zijn.</p>
              
              <h5>Luisteren en observeren</h5>
              <p>Geluiden vertellen je meer over een woning dan je misschien denkt. Hoor je bijvoorbeeld verkeer van buiten? Of zijn de muren zo dun dat je de buren hoort praten? Let ook op geur. Een lichte verf- of schoonmaakgeur is normaal, maar een zware geur van schimmel of vocht kan een waarschuwingssignaal zijn. Kijk daarnaast naar details: zijn er vochtplekken, scheuren in muren of afgebladderde verf? Dit zijn signalen die kunnen wijzen op achterstallig onderhoud.</p>
              
              <h5>Gedrag in een kopers- of verkopersmarkt</h5>
              <p>In een kopersmarkt heb je vaak meer tijd en ruimte om kritisch te zijn. Je kunt meerdere bezichtigingen plannen en eventueel zelfs onderhandelen over kleine gebreken. Maar in een verkopersmarkt, waar woningen snel verkocht worden, kan er druk ontstaan om snel te beslissen. Laat je in zo’n geval niet meeslepen door de snelheid. Het is belangrijk om een balans te vinden tussen voortvarendheid en zorgvuldigheid. Vraag jezelf telkens af of je met een rationele blik naar de woning kijkt, of dat je door emoties wordt gedreven.</p>
              
              <h5>Het grotere plaatje</h5>
              <p>Een woning is meer dan alleen het gebouw zelf. Kijk ook naar de buurt. Hoe is de straat? Wat voor gevoel krijg je als je rondloopt? Is er voldoende parkeerruimte? Zijn de voorzieningen zoals winkels, scholen of openbaar vervoer in de buurt geschikt voor jouw behoeften? Dit zijn belangrijke vragen die vaak over het hoofd worden gezien in het enthousiasme van een bezichtiging.</p>
              
              <h5>Neem je tijd na afloop</h5>
              <p>Een goede bezichtiging stopt niet bij de voordeur als je weggaat. Geef jezelf na afloop de tijd om alles te laten bezinken. Maak notities over wat je is opgevallen, zodat je bij een tweede bezichtiging gericht kunt kijken naar zaken die je eerder gemist hebt. Als het mogelijk is, neem dan iemand mee die je vertrouwt en een frisse blik kan werpen op de woning. Zij kunnen details opmerken die jij misschien over het hoofd hebt gezien.</p>
              
              <h5>Tot slot</h5>
              <p>Bezichtigingen zijn niet alleen een praktische stap in het aankoopproces, maar ook een kans om je dromen en wensen te concretiseren. Hoe beter je weet waar je op moet letten, hoe groter de kans dat je een woning vindt die echt bij je past. Vertrouw op je gevoel, maar combineer dat met een scherp oog en een open houding. Zo maak je van iedere bezichtiging een stap dichter bij het vinden van jouw ideale thuis.</p>
            `
          },
          {
            elementId: "koper-vragen",
            title: "De juiste vragen stellen",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Welke vragen moet je stellen om zoveel mogelijk te weten te komen?</h4>
              <p>Zodra je een woning op het oog hebt en contact hebt met de verkopende makelaar of eigenaar, wil je natuurlijk zo veel mogelijk informatie verzamelen. Toch is er een balans: je wilt niet overkomen als een onmogelijke ondervrager, zeker niet in een markt waar je mogelijk in de rij staat met andere geïnteresseerden. In dit artikel vind je inspiratie voor vragen die je kunt stellen om een goed beeld te krijgen, zonder het contact te zwaar te belasten.</p>
              
              <h5>Reden van verkoop en achtergrond van de verkopers</h5>
              <p>Het kan interessant zijn om te weten waarom de verkoper eigenlijk vertrekt. Kopen ze een groter huis omdat ze gezinsuitbreiding krijgen? Of gaan ze naar een andere stad? Zo krijg je een inkijkje in de motivatie. Je wilt niet meteen in detail gaan wroeten (“Hebben jullie ruzie met de buren?”), maar een subtiele vraag als “Wat is de reden dat jullie gaan verhuizen?” kan heel verhelderend zijn.</p>
              
              <h5>Onderhoud en verbouwingen</h5>
              <p>Hoe oud is de cv-ketel en wanneer is die voor het laatst onderhouden? Is het dak recent vernieuwd, of heeft het schilderwerk nog een opknapbeurt nodig? Vaak kan de verkoper of makelaar je al een globaal overzicht geven. Als je merkt dat er wat vraagtekens zijn, kun je later altijd overwegen om een bouwkundige keuring te laten uitvoeren.</p>
              
              <h5>Vergunningen en veranderingen</h5>
              <p>Sommige aanpassingen – zoals een uitbouw of dakkapel – vragen om een vergunning van de gemeente. Vraag na of de verkoper alle papieren op orde heeft. Zo kom je niet voor verrassingen te staan als je de woning koopt en er achteraf een illegale verbouwing blijkt te zijn.</p>
              
              <h5>Situatie rond de VvE (bij appartementen)</h5>
              <p>Als je een appartement bekijkt, wil je weten hoe actief en financieel gezond de Vereniging van Eigenaren is. Bestaan er al plannen voor groot onderhoud of een verhoging van de maandelijkse bijdrage? Zo’n vraag kun je tijdens of na de bezichtiging even stellen, vooral als je merkt dat de informatie in de brochure summier is.</p>
              
              <h5>Buren en buurt</h5>
              <p>Vraag hoe de sfeer in de straat is en of er bijvoorbeeld regelmatig burenoverlast is. Veel makelaars of verkopers geven daar een algemeen beeld van, al zullen ze negatieve kanten niet altijd uitbundig noemen. Als de verkoper al aangaf dat de buurt ‘heel gezellig’ is, zou je kunnen doorvragen of er in de afgelopen tijd bijvoorbeeld grote veranderingen in de wijk zijn geweest.</p>
              
              <h5>Eventuele gebreken of lopende geschillen</h5>
              <p>Benadruk dat je goed geïnformeerd wilt worden over eventuele mankementen of lopende juridische geschillen. Je wilt geen juridische last mee overnemen, bijvoorbeeld een burenruzie over een erfafscheiding of een conflict over een recht van overpad. Houd het luchtig, maar wees wel duidelijk dat je hier later op terug wilt komen als er twijfels zijn.</p>
              
              <h5>Onderhandelingsruimte en verloop van het proces</h5>
              <p>In een verkopersmarkt is het soms lastig om direct te polsen of er onderhandelingsruimte is. Je kunt wel informeren naar de animo: zijn er al biedingen binnengekomen of aankomende bezichtigingen? Dit geeft je een idee van hoe snel je moet handelen. Stel je hier bescheiden op, zodat je niet al te opdringerig overkomt, maar laat merken dat je serieus bent.</p>
              
              <h5>De juiste balans</h5>
              <p>Probeer je vragen te spreiden en in te passen in een normaal gesprek. Het kan helpen om eerst een paar algemene vragen te stellen (“Heeft u bijvoorbeeld een lijst met verbouwingen?”) en later wat specifieker te worden (“Wanneer is de elektra eigenlijk vernieuwd?”). Als je te veel vragen in één keer op iemand afvuurt, kan het gesprek stroef worden en kom je mogelijk te gespannen over.</p>
              
              <h5>Tot slot</h5>
              <p>Informatie is belangrijk, maar de manier waarop je het vraagt minstens zo. Door vriendelijk en nieuwsgierig te blijven, zul je merken dat veel makelaars of verkopers bereid zijn het één en ander te delen. Heb je later nog extra vragen na de bezichtiging? Je kunt altijd een mailtje sturen of bellen met de makelaar. Houd je onderbuikgevoel in de gaten; als iets niet helemaal klopt of onduidelijk blijft, dan is het slim om er verder in te duiken vóór je een bod uitbrengt.</p>
              <p>Op deze manier krijg je een vollediger beeld van de woning, zonder dat je de indruk wekt een kruisverhoor te houden. Dat helpt je om uiteindelijk een weloverwogen besluit te nemen als je daadwerkelijk overweegt om deze woning te kopen.</p>
            `
          }
        ]
      },
      {
        stageId: "biedingen-en-onderhandelingen",
        title: "Biedingen & onderhandelen",
        description:
          "Je hebt dé woning gevonden. Een belangrijk volgend onderdeel is weten hoe je moet bieden en onderhandelen, wij helpen je!",
        templateCount: 0,
        elements: [
          {
            elementId: "bieden-voorbereiding",
            title: "Voorbereidingen op het bieden & onderhandelen",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Wat moet je vaststellen voordat je gaat bieden?</h4>
              <p>Zodra je een woning hebt gevonden die je echt aanspreekt, komt het moment dichterbij dat je een bod wilt uitbrengen. Dat kan behoorlijk spannend zijn, zeker als je niet precies weet welke factoren je allemaal moet meenemen in je overweging. Hieronder vind je een aantal aandachtspunten die je helpen om rationeel te blijven in deze fase, zonder al te diep in te gaan op biedstrategieën of onderhandelingen.</p>
              
              <h5>Ken je financiële ruimte</h5>
              <p>Voordat je überhaupt aan een bod denkt, is het cruciaal dat je duidelijk voor ogen hebt hoeveel je kunt én wilt uitgeven. Je maximale hypotheekbedrag kan anders zijn dan het bedrag waarmee je je comfortabel voelt. Noteer een harde bovengrens voor jezelf. Zo voorkom je dat je in een emotionele opwelling boven je limiet gaat of je belangrijkste wensen vergeet.</p>
              
              <h5>Vergelijk de vraagprijs met de marktwaarde</h5>
              <p>Heb je al enig idee wat de woning écht waard is? Een vraagprijs kan afwijken van de marktwaarde. Als je twijfelt, kun je bijvoorbeeld in dezelfde buurt vergelijkbare woningen bekijken of een (globale) taxatie laten doen. Een gevoel van de reële waarde helpt je om rationeel te blijven, ook als de verkoper snel zaken wil doen.</p>
              
              <h5>Bedenk welke voorwaarden voor jou belangrijk zijn</h5>
              <p>De koopprijs is meestal het eerste waar je aan denkt, maar er zijn ook andere voorwaarden die je in de gaten moet houden. Wil je bijvoorbeeld een bouwkundige keuring? Vind je een snelle oplevering essentieel, of heb je juist meer tijd nodig? Lees ons volgende artikel om inzicht te krijgen in wat er nog meer belangrijk is. Dat voorkomt dat je later in de onderhandelingen nog snel iets moet bedenken.</p>
              
              <h5>Check je eigen tijdlijn en flexibiliteit</h5>
              <p>Stel vast hoe flexibel je zelf bent qua opleverdatum. Als jij snel kunt verhuizen, kan dat voor de verkoper een voordeel zijn. Of misschien juist niet, als de verkoper meer tijd nodig heeft. Weet in elk geval voor jezelf waar je op in kunt spelen.</p>
              
              <h5>Maak een realistische inschatting van de concurrentie</h5>
              <p>Komt de woning net op de markt en is er veel interesse? Dan is het goed te beseffen dat er mogelijk meerdere bieders zijn. In een rustigere markt kun je misschien wat meer tijd nemen en informatie verzamelen. Probeer desondanks niet te veel in de ‘hype’ te stappen; houd je financiële grenzen en je voorwaarden duidelijk voor ogen.</p>
              
              <h5>Krijg inzicht in je gevoel vs. de feiten</h5>
              <p>Emoties spelen bij een huis kopen altijd een rol. Dat is prima – het gaat tenslotte om je thuis. Maar balanceer dit met feiten: hoe staat het met onderhoud, buurt, faciliteiten en eventuele gebreken? Schrijf zo nodig de belangrijkste plus- en minpunten op, zodat je hoofd en hart samen beslissen.</p>
              
              <h5>Denk na over eventuele risico’s</h5>
              <p>Als de woning niet nieuw is, is er kans op verborgen gebreken. Overweeg daarom of je voorwaarden als een bouwkundige keuring wilt stellen. Heb je al andere kosten (zoals een verbouwing) op de planning? Maak voor jezelf een lijstje van risico’s en hoe je die wilt afdekken – bijvoorbeeld via een voorbehoud in je bod.</p>
              
              <h5>Tot slot</h5>
              <p>Door deze zaken vooraf op een rij te zetten, ga je veel relaxter richting een eventuele bieding. Je weet beter wat voor jou haalbaar en verstandig is, en je laat je minder meeslepen door de spanning van het moment. In een volgend artikel gaan we dieper in op hoe je daadwerkelijk een bod kunt uitbrengen en welke strategieën en onderhandelingen daarbij horen. Maar voor nu: neem de tijd om je eigen uitgangspunten en grenzen helder te krijgen, zodat je straks met vertrouwen kunt bieden.</p>
            `
          },
          {
            elementId: "meer-dan-aankoopprijs",
            title: "Meer dan alleen aankoopprijs",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Meer dan de prijs: Onderhandelen over de details die ertoe doen</h4>
              <p>Onderhandelen over een woning wordt vaak gereduceerd tot één centraal thema: de verkoopprijs. Maar wist je dat er meer ruimte is om te onderhandelen? Slimme kopers richten hun aandacht op de minder zichtbare aspecten van de deal, waarmee je niet alleen financieel voordeel kunt behalen, maar ook praktische voordelen die jouw aankooptraject soepeler maken. Het draait erom om verder te kijken dan het bedrag op papier.</p>
              
              <h5>Meubels en apparatuur</h5>
              <p>Een woning is meer dan een leeg omhulsel. Vaak blijven meubels, apparaten of andere zaken achter die van waarde kunnen zijn. Denk bijvoorbeeld aan een ingebouwde koelkast, gordijnen op maat of die prachtige lamp boven de eettafel. Het opnemen van deze items in de koopovereenkomst kan je geld en moeite besparen na de overdracht. Bespreek tijdens de onderhandelingen welke zaken je graag overneemt en zorg dat dit zwart-op-wit wordt vastgelegd. Soms is de verkoper zelfs bereid meubels achter te laten tegen een scherpe meerprijs, wat goedkoper kan uitpakken dan nieuwe aanschaffen.</p>
              
              <h5>Opleverdatum</h5>
              <p>De opleverdatum is een onderhandelingspunt dat vaak wordt onderschat, maar cruciaal kan zijn. Heb jij bijvoorbeeld een huurcontract dat nog maanden doorloopt? Of moet je je eigen woning nog verkopen? Door een flexibele opleverdatum te bespreken, kun je dubbele lasten vermijden of juist meer tijd krijgen om alles goed te regelen. Voor de verkoper kan flexibiliteit in de oplevering ook voordelen bieden, bijvoorbeeld om een verhuizing beter te plannen. Dit kan je een sterke onderhandelingspositie geven.</p>
              
              <h5>Eventuele reparaties</h5>
              <p>Tijdens een bezichtiging of bouwkundige keuring kunnen gebreken aan het licht komen, zoals een lekkende dakgoot, slecht functionerende verwarmingsinstallatie of een verouderde keuken. Dit zijn uitstekende aanknopingspunten om mee te nemen in de onderhandelingen. In plaats van direct de verkoopprijs te verlagen, kun je de verkoper vragen om bepaalde reparaties uit te voeren vóór de overdracht. Dit bespaart jou niet alleen tijd en moeite, maar zorgt er ook voor dat je geen onverwachte kosten hebt na de koop.</p>
              
              <h5>Overdrachtsbelasting en bijkomende kosten</h5>
              <p>In sommige gevallen kun je afspraken maken over wie bepaalde kosten voor zijn rekening neemt. Hoewel de overdrachtsbelasting wettelijk door de koper betaald wordt, kun je bijvoorbeeld bespreken of de verkoper bereid is een deel van jouw notariskosten of andere bijkomende kosten te compenseren. Dit kan een interessante manier zijn om het totaalplaatje van je aankoop gunstiger te maken.</p>
              
              <h5>Overname van energieleveranciers of onderhoudscontracten</h5>
              <p>Veel woningen komen met lopende contracten, zoals onderhoudscontracten voor een cv-ketel of een abonnement voor een alarmsysteem. Het overnemen van deze contracten kan voordelig zijn, vooral als de huidige voorwaarden gunstig zijn. Bespreek dit met de verkoper en vraag of deze contracten mee kunnen worden overgedragen. Dit kan niet alleen geld besparen, maar voorkomt ook administratieve rompslomp na de aankoop.</p>
              
              <h5>Creatieve oplossingen</h5>
              <p>Tot slot kun je denken aan creatieve oplossingen die het voor beide partijen aantrekkelijker maken. Is de verkoper bijvoorbeeld bereid om extra schilderwerk uit te voeren of de woning professioneel te laten schoonmaken? Deze ogenschijnlijk kleine gebaren kunnen een groot verschil maken in hoe soepel de overgang verloopt en hoe tevreden je bent met de uiteindelijke deal.</p>
              
              <h5>Tot slot</h5>
              <p>Onderhandelen over een woning is meer dan alleen een spel van cijfers. Door verder te kijken dan de verkoopprijs en te onderhandelen over zaken als meubels, opleverdata, reparaties en bijkomende kosten, kun je een deal sluiten die écht bij jouw wensen past. Vergeet niet dat een woning kopen niet alleen een transactie is, maar een proces waarin details vaak net zo belangrijk zijn als het eindbedrag.</p>
            `
          },
          {
            elementId: "slim-bieden",
            title: "Slim bieden",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Slim bieden: strategieën en praktische tips</h4>
              <p>Heb je een woning gevonden die je wilt kopen? Dan komt al snel de vraag hoe je je bod uitbrengt. Je wilt natuurlijk niet te laag inzetten en de woning mislopen, maar ook niet te hoog bieden en onnodig veel betalen. Hieronder vind je verschillende strategieën en overwegingen voor het plaatsen van je eerste en je (eventuele) final bod. Ook lees je wat een biedingstermijn inhoudt en hoe je daarmee kunt omgaan.</p>
              
              <h5>Bepaal je startbod</h5>
              <ul>
                <li>Ga uit van de waarde van de woning in plaats van alleen de vraagprijs. Soms ligt de vraagprijs lager of juist hoger dan de marktwaarde. Het helpt om vergelijkbare woningen in de buurt te bekijken of een (globale) waardebepaling op te vragen.</li>
                <li>Houd rekening met de markt. In een krappe markt met veel vraag zul je vaak minder ruimte hebben om laag te beginnen.</li>
                <li>Stel jezelf de vraag: “Wat is een bod dat ik me prettig bij voel als het direct wordt geaccepteerd?” Dit voorkomt dat je achteraf denkt: “Oeps, ik heb toch te hoog (of te laag) ingezet.”</li>
              </ul>
              
              <h5>Verschillende biedstrategieën</h5>
              <ul>
                <li><strong>Direct vol inzetten:</strong> Als je weinig onderhandelingsruimte verwacht of de woning erg gewild is, kun je hoog inzetten. Dit kan de verkoper verleiden om snel akkoord te gaan. Het risico is natuurlijk dat je bovenin je budget zit en mogelijk “te veel” biedt.</li>
                <li><strong>Stap voor stap verhogen:</strong> Je begint iets lager en laat ruimte om later te verhogen. Zo kun je de reacties van de verkoper peilen. Het nadeel is dat je meer tijd in de onderhandelingen steekt en dat een snelle concurrent je misschien voorbij kan streven.</li>
                <li><strong>Tegelijk concurreren:</strong> Soms zie je dat een verkoper aangeeft dat je met meerdere gegadigden in een ‘inschrijfprocedure’ zit. In dat geval doe je één bod en is er geen (of weinig) onderhandeling meer. Dan moet je meteen met je ‘beste’ bod komen, omdat je niet weet wat anderen doen.</li>
              </ul>
              
              <h5>Omgaan met de biedingstermijn</h5>
              <ul>
                <li>De verkoper (of makelaar) kan een specifieke termijn stellen, bijvoorbeeld: “We verzamelen alle biedingen tot vrijdag 12:00 uur.” Als koper kun je op twee manieren reageren:
                  <ul>
                    <li>Bieden binnen deze termijn (logisch als je de woning echt wilt).</li>
                    <li>Kijken of je vóór die deadline contact kunt opnemen om extra vragen te stellen of duidelijkheid te krijgen.</li>
                  </ul>
                </li>
                <li>Wanneer jij zelf een bod uitbrengt zonder dat er een officiële termijn is, kun je aangeven tot wanneer jouw bod geldt. Bijvoorbeeld: “Dit bod is geldig tot morgen 17:00 uur.” Zo zet je de verkoper aan om een snelle keuze te maken, maar wees je bewust dat het in een krappe markt ook kan gebeuren dat ze je bod laten verlopen in de hoop op een beter bod van een ander.</li>
              </ul>
              
              <h5>Hoe beslis je over een definitief bod?</h5>
              <ul>
                <li>Een definitief bod is vaak het punt waarop je zegt: “Ik ga niet verder.” Dit kan zijn omdat de verkoper of makelaar aangeeft dat ze gaan kiezen uit de laatste biedingen, of omdat je het gevoel hebt dat je niet verder wilt onderhandelen.</li>
                <li>Bepaal dit grensbedrag voor jezelf vooraf. Zo voorkom je dat je in de emotie van het moment toch nog hoger gaat dan je eigenlijk van plan was.</li>
                <li>Vergeet niet om eventuele voorwaarden die voor jou essentieel zijn (bijvoorbeeld bouwkundige keuring, voorbehoud van financiering) ook in je definitieve bod te noemen.</li>
              </ul>
              
              <h5>Let op je tone of voice</h5>
              <ul>
                <li>Blijf altijd netjes en duidelijk in je communicatie. Vaak is er een bepaalde spanning in zo’n biedingsfase, maar een vriendelijke toon kan net het verschil maken.</li>
                <li>Geef kort aan waarom je serieus geïnteresseerd bent (“We zijn een gezin dat graag in deze buurt wil wonen vanwege de scholen.”). Dat kan sympathie opwekken, al is het niet altijd doorslaggevend.</li>
              </ul>
              
              <h5>Tot slot</h5>
              <p>Het uitbrengen van een bod is een spannend proces waarin je veel keuzes moet maken. Probeer rationeel te blijven en houd je eigen financiële grenzen goed in het oog. In een volgende stap kun je je verdiepen in wat je naast de koopprijs nog meer kunt bieden of vragen en hoe onderhandelingen in hun werk gaan. Succes met het uitbrengen van je bod!</p>
            `
          },
          {
            elementId: "onderhandelen-tips",
            title: "Onderhandelen doe je zo",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Onderhandelen: blijf bij je plan en houd het hoofd koel</h4>
              <p>Als je eenmaal in een situatie belandt waarin je kunt onderhandelen over de koop van een woning, kan de spanning hoog oplopen. Het is verleidelijk om direct over de prijs te praten, maar er komt meer bij kijken dan alleen het bedrag. Hieronder vind je enkele tips om het proces soepel te laten verlopen en in lijn te blijven met de overwegingen die je eerder voor jezelf hebt bepaald.</p>
              
              <h5>Herinner jezelf aan je eerdere bedenkingen</h5>
              <p>In een eerder stadium heb je waarschijnlijk al nagedacht over je financiële grenzen, je must-haves en de redenen waarom je dit huis écht wilt. Die punten vormen nu je houvast. Houd deze voor ogen tijdens de onderhandelingen, zodat je niet in het moment alsnog over je limiet gaat of je belangrijkste wensen vergeet.</p>
              
              <h5>Weet wat je kunt bieden naast de prijs</h5>
              <p>Hoewel de hoogte van je bod natuurlijk belangrijk is, spelen er vaak meer zaken een rol. Denk bijvoorbeeld aan:</p>
              <ul>
                <li>Een vlotte of juist flexibele opleverdatum.</li>
                <li>Voorwaarden zoals een bouwkundige keuring of voorbehoud van financiering.</li>
                <li>Een eventueel aanvullende clausule als je bijvoorbeeld je huidige woning nog moet verkopen.</li>
              </ul>
              <p>Deze factoren kunnen voor de verkoper even belangrijk zijn als de prijs. Houd in gedachten wat voor jou wél en niet onderhandelbaar is.</p>
              
              <h5>Blijf rustig en respectvol</h5>
              <p>Onderhandelingen kunnen soms gehaast of emotioneel verlopen, maar juist dan is het belangrijk om vriendelijk te blijven en je emoties onder controle te houden. Probeer te begrijpen waar de verkoper vandaan komt: welke druk of wensen hebben zij? Het tonen van begrip kan het contact versoepelen, terwijl een harde of ongeduldige houding de sfeer juist kan verpesten.</p>
              
              <h5>Geef niet te snel alles prijs</h5>
              <p>Je hoeft niet direct je allerhoogste bedrag op tafel te leggen. Vertel ook niet tot in detail waarom je zo graag dit huis wilt (als dat je onderhandelingspositie kan verzwakken). Natuurlijk wil je een eerlijke en open indruk maken, maar je mag jezelf ook wat speelruimte gunnen.</p>
              
              <h5>Durf weg te lopen als het niet past</h5>
              <p>Verlieft raken op een huis kan ervoor zorgen dat je er koste wat kost in wilt trekken. Maar als de vraagprijs of voorwaarden na onderhandelingen ver boven je grens uitkomen, is het soms beter om ‘nee’ te zeggen. Bedenk: er komen altijd weer andere woningen op de markt. Je wilt niet met een onbetaalbare hypotheek achterblijven of een huis kopen dat niet aan je basisvoorwaarden voldoet.</p>
              
              <h5>Voorkom twijfel achteraf</h5>
              <p>Heb je een akkoord bereikt? Neem dan nog een korte reflectiemoment. Sluit deze deal echt aan bij je eerdere overwegingen? Zo ja, dan kun je met een gerust hart de volgende stap zetten. Zo niet, dan is het beter om nog eens in gesprek te gaan of – als dat niet lukt – van de deal af te zien.</p>
              
              <h5>Tot slot</h5>
              <p>Onderhandelen is een spel van geven en nemen, maar jij bepaalt je eigen spelregels. Houd vast aan je eerder vastgestelde grenzen en wensen, blijf vriendelijk en helder in je communicatie, en laat je niet meeslepen door de druk van het moment. Zo vergroot je de kans dat je een deal sluit waar je later nog steeds blij mee bent.</p>
            `
          }
        ]
      },
      {
        stageId: "koopovereenkomst",
        title: "Koopovereenkomst",
        description:
          "De koopovereenkomst is heel belangrijk en een mooi mijlpaal. Wij helpen je opweg in dit juridische landschap van de aankoop!",
        templateCount: 0,
        elements: [
          {
            elementId: "koopovereenkomst-toelichting",
            title: "De koopovereenkomst, wat is het en waarom?",
            templates: [],
            articleHtml: `
              <h4 class="secondary">De koopovereenkomst: een belangrijke stap naar jouw nieuwe thuis</h4>
              <p>Het vinden van een woning die helemaal bij je past is een bijzondere mijlpaal, maar de weg naar het daadwerkelijk bezitten van dat huis verloopt in verschillende stappen. Een van de belangrijkste daarvan is het opstellen en ondertekenen van een koopovereenkomst. Voor veel mensen roept dit document spanning of onzekerheid op, omdat het voelt alsof er geen weg meer terug is. Maar dat is niet helemaal het geval, en juist door te begrijpen wat een koopovereenkomst precies inhoudt, kun je deze stap met meer vertrouwen nemen.</p>
              
              <h5>Wat is een voorlopige koopovereenkomst?</h5>
              <p>De term "voorlopige koopovereenkomst" kan wat misleidend klinken, want zodra dit document door beide partijen is ondertekend, is het juridisch bindend. Het ‘voorlopige’ zit hem in de ruimte die de koper (en soms de verkoper) nog heeft om onder bepaalde voorwaarden van de koop af te zien. Denk hierbij aan:</p>
              <ul>
                <li><strong>Bedenktijd:</strong> Als koper heb je na ondertekening drie dagen bedenktijd waarin je zonder opgave van reden van de koop kunt afzien.</li>
                <li><strong>Ontbindende voorwaarden:</strong> Dit zijn vooraf afgesproken voorwaarden waaronder de overeenkomst kan worden ontbonden, zoals het niet rondkrijgen van de financiering of een negatieve uitkomst van een bouwkundige keuring.</li>
              </ul>
              <p>Hoewel het misschien “voorlopig” wordt genoemd, kun je het dus niet zomaar naast je neerleggen; het is een officiële overeenkomst.</p>
              
              <h5>Wanneer wordt een voorlopige koopovereenkomst gebruikt?</h5>
              <p>De voorlopige koopovereenkomst wordt altijd gebruikt voordat de definitieve overdracht plaatsvindt. Het is een tussenstap waarin de afspraken tussen koper en verkoper worden vastgelegd, zodat beide partijen duidelijkheid hebben over wat er is afgesproken. Pas bij de notaris, tijdens de eigendomsoverdracht, wordt de koop definitief.</p>
              
              <h5>Wat is een koopovereenkomst?</h5>
              <p>De term "koopovereenkomst" wordt vaak als overkoepelende term gebruikt, maar het verwijst in feite naar hetzelfde document als de voorlopige koopovereenkomst – met één verschil: zodra de ontbindende voorwaarden en bedenktijd zijn verlopen, wordt de overeenkomst definitief. Het document blijft inhoudelijk hetzelfde, maar het juridische karakter verandert doordat de koper (en verkoper) er niet meer zonder gevolgen van af kunnen zien.</p>
              
              <h5>Wie stelt de koopovereenkomst op?</h5>
              <p>In de meeste gevallen wordt de koopovereenkomst opgesteld door de makelaar van de verkoper of een notaris. Het is hun taak om ervoor te zorgen dat alle afspraken tussen koper en verkoper correct en volledig worden vastgelegd. Heb je zelf geen makelaar? Dan is het extra belangrijk om het document goed door te nemen of eventueel juridisch advies in te winnen. Hoewel de inhoud vaak standaard lijkt, kunnen er specifieke clausules zijn die belangrijk zijn om te begrijpen.</p>
              
              <h5>Wat staat er in de koopovereenkomst?</h5>
              <p>De koopovereenkomst bevat alle belangrijke afspraken over de woning en de verkoop. Denk hierbij aan:</p>
              <ul>
                <li>De verkoopprijs van de woning.</li>
                <li>De opleverdatum.</li>
                <li>Eventuele ontbindende voorwaarden.</li>
                <li>Welke roerende zaken (zoals meubels of apparatuur) worden overgenomen.</li>
                <li>Afspraken over wie welke kosten betaalt, zoals de notaris- en overdrachtskosten.</li>
              </ul>
              <p>Dit document legt de basis voor de vervolgstappen, zoals het regelen van de financiering en het plannen van de overdracht.</p>
              
              <h5>Waarom is dit een cruciale stap?</h5>
              <p>Het tekenen van een koopovereenkomst is een van de belangrijkste momenten in het aankoopproces. Het markeert het punt waarop beide partijen zich verbinden aan de gemaakte afspraken, maar het biedt ook een vorm van bescherming. Voor de koper geeft het de zekerheid dat de woning voor jou wordt gereserveerd, terwijl de verkoper zekerheid krijgt dat jij je verplicht om de woning te kopen – mits aan de voorwaarden is voldaan.</p>
              
              <h5>Wat kun je verwachten in de vervolgartikelen?</h5>
              <p>Nu je weet wat de koopovereenkomst is en waarom deze wordt opgesteld, gaan we in de volgende artikelen dieper in op specifieke onderdelen ervan. We bespreken bijvoorbeeld welke termen je tegenkomt, zoals ontbindende voorwaarden en de boeteclausule, en waar je op moet letten om verrassingen te voorkomen. Ook gaan we in op hoe je een notaris kiest en welke vragen je jezelf daarbij moet stellen. Elk artikel is bedoeld om je stap voor stap door dit proces te begeleiden, zodat je met vertrouwen elke beslissing kunt nemen.</p>
              
              <h5>Tot slot</h5>
              <p>De koopovereenkomst mag dan een grote stap zijn, maar het is er vooral een die je dichter bij je nieuwe thuis brengt. Begrip van het proces en wat er van je verwacht wordt, zorgt ervoor dat je met een gerust hart kunt tekenen.</p>
            `
          },
          {
            elementId: "koopovereenkomst-taal",
            title: "De taal van de koopovereenkomst",
            templates: [],
            articleHtml: `
              <h4 class="secondary">De taal van de koopovereenkomst: begrijpelijke uitleg van belangrijke termen</h4>
              <p>Als je een koopovereenkomst onder ogen krijgt, lijkt het soms alsof het document in een andere taal is geschreven. Juridische termen en formele taal kunnen verwarrend zijn, maar het is belangrijk dat je begrijpt wat er staat. Het gaat tenslotte om een grote beslissing. In dit artikel leggen we de meest voorkomende termen uit in eenvoudige woorden, zodat je met meer zekerheid en minder stress aan de slag kunt.</p>
              
              <h5>Ontbindende voorwaarden</h5>
              <p>Dit zijn afspraken die je beschermen als er iets misgaat. Als je bijvoorbeeld de hypotheek niet rond krijgt of als er iets belangrijks uit een bouwkundige keuring komt, kun je dankzij deze voorwaarden onder de koop uit zonder dat je een boete betaalt. De meest gebruikte ontbindende voorwaarden zijn:</p>
              <ul>
                <li><strong>Financieringsvoorbehoud:</strong> Als je geen lening kunt krijgen bij de bank, mag je de koop afblazen.</li>
                <li><strong>Bouwkundige keuring:</strong> Als er grote gebreken worden gevonden die niet acceptabel zijn, kun je ook nog stoppen.</li>
              </ul>
              <p>Zorg ervoor dat deze voorwaarden duidelijk in de koopovereenkomst staan als je ze nodig hebt.</p>
              
              <h5>Bedenktijd</h5>
              <p>Dit is een periode van drie dagen waarin je na het tekenen van de koopovereenkomst mag nadenken of je de woning echt wilt kopen. Binnen deze tijd kun je de overeenkomst annuleren zonder reden op te geven. Dit is een wettelijke regeling, dus iedereen heeft hier recht op.</p>
              
              <h5>Boeteclausule</h5>
              <p>Dit is een regel die bepaalt hoeveel je moet betalen als je de afspraken in de koopovereenkomst niet nakomt. Bijvoorbeeld als je zonder geldige reden besluit de woning toch niet te kopen. Vaak bedraagt deze boete 10% van de koopsom, wat een flink bedrag kan zijn. Het is dus belangrijk om zeker te zijn voordat je tekent.</p>
              
              <h5>Kosten koper (k.k.)</h5>
              <p>Als je een woning koopt, staat er vaak “k.k.” achter de vraagprijs. Dit betekent dat de koper bepaalde kosten betaalt, zoals:</p>
              <ul>
                <li><strong>Overdrachtsbelasting:</strong> Een belasting die je betaalt als je eigenaar wordt van een woning.</li>
                <li><strong>Notariskosten:</strong> De kosten voor het opstellen van de officiële eigendomsakte en de hypotheekakte.</li>
              </ul>
              <p>Bij nieuwbouwwoningen zie je vaak “vrij op naam (v.o.n.)” staan. Dit betekent dat de verkoper deze kosten betaalt.</p>
              
              <h5>Opleverdatum</h5>
              <p>Dit is de dag waarop je officieel eigenaar wordt van de woning en de sleutel krijgt. Dit staat vastgelegd in de koopovereenkomst. Het is belangrijk om een datum te kiezen die voor beide partijen haalbaar is. Als de verkoper bijvoorbeeld meer tijd nodig heeft om te verhuizen, kun je hierover onderhandelen.</p>
              
              <h5>Roerende en onroerende zaken</h5>
              <ul>
                <li><strong>Onroerende zaken:</strong> Alles wat vastzit aan het huis, zoals muren, een ingebouwde keuken of een badkuip. Deze blijven altijd achter.</li>
                <li><strong>Roerende zaken:</strong> Dingen die je kunt verplaatsen, zoals meubels, gordijnen of lampen. Het is slim om een lijst te maken van wat wel of niet achterblijft en dit op te nemen in de overeenkomst.</li>
              </ul>
              
              <h5>Waarborgsom of bankgarantie</h5>
              <p>Dit is een bedrag dat je als koper moet storten om te laten zien dat je serieus bent over de aankoop. Meestal is dit 10% van de koopsom. Je kunt dit bedrag zelf storten of een bankgarantie regelen, waarbij de bank het bedrag garandeert. Dit geeft de verkoper extra zekerheid.</p>
              
              <h5>Juridische levering</h5>
              <p>Dit is het moment waarop de woning officieel van de verkoper naar jou overgaat. Dit gebeurt bij de notaris, waar je de eigendomsakte tekent en de woning op jouw naam komt te staan. Vanaf dat moment ben jij de eigenaar.</p>
              
              <h5>Voorbehoud</h5>
              <p>Een voorbehoud is een afspraak die ervoor zorgt dat je de koop kunt annuleren als bepaalde voorwaarden niet worden vervuld. Het meest bekende voorbeeld is het financieringsvoorbehoud, maar je kunt ook een voorbehoud laten opnemen voor bijvoorbeeld een bouwkundige keuring of de verkoop van je eigen woning.</p>
              
              <h5>Kadaster</h5>
              <p>Het kadaster is een organisatie die bijhoudt wie de eigenaar is van alle grond en gebouwen in Nederland. Bij de juridische levering wordt jouw woning officieel ingeschreven in het kadaster, zodat het eigendom zwart-op-wit vastligt.</p>
              
              <h5>Vrij op naam (v.o.n.)</h5>
              <p>Als je een woning koopt met de vermelding “v.o.n.”, betekent dit dat de kosten voor de overdracht (zoals notariskosten en overdrachtsbelasting) al in de vraagprijs zijn opgenomen. Dit zie je vaak bij nieuwbouwwoningen.</p>
              
              <h5>Tot slot</h5>
              <p>Het begrijpen van deze termen helpt je om met een gerust hart door het aankoopproces te gaan. Voel je nooit bezwaard om vragen te stellen als iets onduidelijk is. Het is jouw recht – en in jouw belang – om alles goed te begrijpen voordat je tekent.</p>
            `
          },
          {
            elementId: "koopovereenkomst-controleren",
            title: "Koopovereenkomst controleren",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Koopovereenkomst controleren: Waar moet je écht op letten?</h4>
              <p>Het ondertekenen van een koopovereenkomst is een grote stap. Dit document legt alle afspraken vast tussen jou en de verkoper, en het is belangrijk dat alles klopt. Een foutje of onduidelijkheid kan later voor problemen zorgen. Dit artikel helpt je te begrijpen waar je echt op moet letten, zodat je met vertrouwen kunt tekenen.</p>
              
              <h5>Controleer of alles waarover is onderhandeld goed is opgenomen</h5>
              <p>Alles wat je hebt besproken met de verkoper, zoals afspraken over de prijs, opleverdatum of over te nemen spullen, moet precies in de koopovereenkomst staan. Kijk goed of details zoals:</p>
              <ul>
                <li><strong>De verkoopprijs:</strong> Is dit het bedrag waar je mee akkoord bent gegaan?</li>
                <li><strong>Overname van roerende zaken:</strong> Staat alles wat je wilt overnemen (bijvoorbeeld gordijnen, meubels of apparatuur) duidelijk beschreven?</li>
                <li><strong>Opleverdatum:</strong> Is dit de afgesproken dag waarop je de sleutel krijgt?</li>
              </ul>
              <p>Als iets niet in de overeenkomst staat, bestaat de kans dat het niet wordt nagekomen.</p>
              
              <h5>Boeteclausule: Wat gebeurt er bij problemen?</h5>
              <p>Een boeteclausule bepaalt wat er gebeurt als jij of de verkoper zich niet aan de afspraken houdt. Meestal staat hierin dat de partij die de afspraken niet nakomt een boete moet betalen, vaak 10% van de koopsom. Controleer:</p>
              <ul>
                <li><strong>Bij welke situaties een boete geldt:</strong> Bijvoorbeeld als jij de financiering niet op tijd rond hebt of als de verkoper niet wil opleveren.</li>
                <li><strong>Of de clausule redelijk is:</strong> Als je twijfelt of de voorwaarden eerlijk zijn, vraag advies aan een juridisch expert of een notaris.</li>
              </ul>
              
              <h5>Financieringstermijn en ontbindende voorwaarden</h5>
              <p>Het financieringstermijn bepaalt hoeveel tijd je hebt om je hypotheek rond te krijgen. Controleer:</p>
              <ul>
                <li><strong>De duur van het termijn:</strong> Standaard is dit vaak 4 tot 6 weken. Is dit voldoende voor jouw situatie? Als je denkt meer tijd nodig te hebben, vraag dan om een langere termijn.</li>
                <li><strong>Ontbindende voorwaarden:</strong> Zorg dat een financieringsvoorbehoud is opgenomen, zodat je de koop kunt annuleren als je de hypotheek niet krijgt. Controleer ook of eventuele andere voorwaarden die je hebt besproken erin staan, zoals een bouwkundige keuring.</li>
              </ul>
              
              <h5>De lijst van roerende zaken</h5>
              <p>In de koopovereenkomst staat vaak een lijst van roerende zaken. Hierin staat welke spullen achterblijven of juist meegaan. Denk aan gordijnen, lampen, inbouwapparatuur enzovoort. Controleer deze lijst zorgvuldig en vraag om aanpassingen als iets niet klopt. Wat op deze lijst staat, is bindend.</p>
              
              <h5>Oplevering en staat van de woning</h5>
              <p>De koopovereenkomst beschrijft vaak in welke staat de woning wordt opgeleverd. Let op:</p>
              <ul>
                <li><strong>Leeg en schoon:</strong> Meestal staat erin dat de woning ‘leeg en schoon’ wordt opgeleverd, tenzij anders afgesproken.</li>
                <li><strong>Eventuele gebreken:</strong> Als je hebt afgesproken dat bepaalde gebreken nog worden gerepareerd, zorg dat dit duidelijk in de overeenkomst staat.</li>
              </ul>
              
              <h5>Wie betaalt welke kosten?</h5>
              <p>In Nederland betaalt de koper meestal de kosten voor de overdracht, zoals notariskosten en overdrachtsbelasting. Controleer of dit duidelijk is opgenomen. Als je hebt afgesproken dat de verkoper bepaalde kosten betaalt, moet dit ook in de overeenkomst staan.</p>
              
              <h5>Kadastergegevens</h5>
              <p>In de koopovereenkomst staan de gegevens van de woning zoals geregistreerd bij het kadaster. Controleer of deze kloppen, bijvoorbeeld:</p>
              <ul>
                <li>Het juiste adres en perceelnummer.</li>
                <li>Eventuele bijzondere rechten, zoals een recht van overpad of erfpacht.</li>
              </ul>
              <p>Als je iets niet begrijpt, vraag dan uitleg aan de notaris.</p>
              
              <h5>Wat gebeurt er als de verkoper zich niet aan de afspraken houdt?</h5>
              <p>Niet alleen jij, maar ook de verkoper moet zich aan de afspraken houden. Controleer of er clausules zijn opgenomen die de verkoper verplichten om op tijd op te leveren of reparaties uit te voeren. Staat er een boete of andere consequentie als de verkoper zich niet aan de afspraken houdt?</p>
              
              <h5>Laat de koopovereenkomst nakijken</h5>
              <p>Ook al lijkt alles in orde, het kan geen kwaad om een extra paar ogen naar de overeenkomst te laten kijken. Een juridisch adviseur of notaris kan fouten of onduidelijkheden vinden die jij misschien over het hoofd ziet.</p>
              
              <h5>Tot slot</h5>
              <p>De koopovereenkomst is een belangrijk document dat zekerheid geeft aan zowel jou als de verkoper. Neem de tijd om alles goed te controleren en stel vragen als iets onduidelijk is. Het is jouw recht – en in jouw belang – om volledig te begrijpen wat je tekent. Met de juiste voorbereiding kun je met een gerust hart deze belangrijke stap zetten.</p>
            `
          },
          {
            elementId: "notaris-kiezen",
            title: "De notaris kiezen",
            templates: [],
            articleHtml: `
              <h4 class="secondary">Hoe kies je een notaris: waar moet je op letten en wat is belangrijk?</h4>
              <p>Bij het kopen van een woning mag je als koper vaak zelf bepalen welke notaris de eigendomsoverdracht regelt. Dit lijkt een eenvoudige keuze, maar er zijn enkele belangrijke zaken waar je rekening mee moet houden. In sommige gevallen zijn er zelfs afspraken in de koopovereenkomst die invloed hebben op jouw keuze. Dit artikel geeft je de inzichten die je nodig hebt om een goede beslissing te maken.</p>
              
              <h5>Waarom is de keuze voor een notaris belangrijk?</h5>
              <p>De notaris speelt een cruciale rol in het koopproces. Deze zorgt ervoor dat:</p>
              <ul>
                <li>De eigendomsakte wordt opgesteld en officieel wordt vastgelegd.</li>
                <li>De hypotheekakte wordt geregeld (als je een hypotheek afsluit).</li>
                <li>De betaling via de notaris verloopt, inclusief het verrekenen van de koopsom en kosten zoals overdrachtsbelasting.</li>
                <li>De eigendomsoverdracht officieel wordt ingeschreven bij het Kadaster.</li>
              </ul>
              <p>Een goede notaris biedt niet alleen juridische zekerheid, maar legt ook in begrijpelijke taal uit wat je tekent. Dit is vooral belangrijk als je niet vaak met juridische documenten te maken hebt.</p>
              
              <h5>Controleer de afspraken in de koopovereenkomst</h5>
              <p>Hoewel je in veel gevallen zelf een notaris mag kiezen, is het belangrijk om de koopovereenkomst goed te lezen. Hierin kan bijvoorbeeld staan:</p>
              <ul>
                <li><strong>Reisafstand:</strong> Sommige overeenkomsten bepalen dat de notaris binnen een bepaalde straal (bijvoorbeeld 20 kilometer) van de woning moet zijn. Kies je een notaris die verder weg is, dan kun je zelf opdraaien voor de extra kosten die de verkoper daardoor maakt.</li>
                <li><strong>Tijdslimiet:</strong> In sommige gevallen moet je binnen een bepaalde periode – vaak vijf werkdagen – de keuze voor een notaris doorgeven. Als je dit niet op tijd doet, kan de verkoper zelf een notaris aanwijzen.</li>
              </ul>
              <p>Zorg ervoor dat je deze bepalingen goed begrijpt voordat je je keuze maakt.</p>
              
              <h5>Waar moet je op letten bij het kiezen van een notaris?</h5>
              <h6>1. Transparantie over kosten</h6>
              <p>Notariskosten kunnen flink variëren. Vraag daarom bij meerdere kantoren een offerte op en vergelijk deze. Let daarbij op:</p>
              <ul>
                <li>De kosten voor de eigendomsakte en hypotheekakte.</li>
                <li>Eventuele extra kosten, zoals voor het opvragen van gegevens bij het kadaster.</li>
                <li>Of de offerte inclusief btw is.</li>
              </ul>
              <p>Goedkoop hoeft niet altijd slecht te zijn, maar let erop dat de notaris duidelijke communicatie biedt en geen verborgen kosten heeft.</p>
              
              <h6>2. Ervaring en specialisatie</h6>
              <p>Niet elke notaris is even ervaren in vastgoedtransacties. Kies bij voorkeur een notaris die gespecialiseerd is in het opstellen van akten voor de koop en verkoop van woningen. Zij kunnen je beter adviseren en zijn bekend met mogelijke valkuilen.</p>
              
              <h6>3. Locatie en bereikbaarheid</h6>
              <p>De locatie van het notariskantoor is belangrijk, niet alleen vanwege mogelijke afspraken in de koopovereenkomst, maar ook voor jouw gemak. Tijdens het proces moet je vaak documenten ondertekenen of bespreken. Een notaris die dichtbij is, maakt dit makkelijker.</p>
              
              <h6>4. Communicatie en uitleg</h6>
              <p>Een goede notaris legt juridische documenten duidelijk uit in begrijpelijke taal. Dit is belangrijk omdat de akten die je ondertekent ingewikkeld kunnen zijn. Kies een notaris waarbij je je op je gemak voelt om vragen te stellen en die de tijd neemt om alles uit te leggen.</p>
              
              <h5>Wat als je geen notaris kiest?</h5>
              <p>Als je niet binnen de afgesproken tijd een notaris aanwijst, kan de verkoper dit doen. Dit kan betekenen dat je minder invloed hebt op de kosten en de locatie. Het is dus verstandig om direct na het ondertekenen van de koopovereenkomst te beginnen met het zoeken naar een notaris.</p>
              
              <h5>Samenvatting</h5>
              <p>De keuze voor een notaris lijkt misschien een detail in het proces van een woning kopen, maar het kan grote invloed hebben op hoe soepel de overdracht verloopt. Lees de koopovereenkomst goed door om te zien of er specifieke afspraken over de notaris in staan. Let bij het kiezen van een notaris op transparantie, ervaring, locatie en communicatie. Neem de tijd om offertes te vergelijken en kies een notaris waar je vertrouwen in hebt – dit geeft je de juridische zekerheid die je nodig hebt, zonder stress.</p>
            `
          }
        ]
      },
      {
        stageId: "financieringsperiode",
        title: "Financieringsperiode",
        description:
          "De financieringsperiode is een spannende periode als koper, wij helpen je hier zo rustig en goed mogelijk door te komen.",
        templateCount: 0,
        elements: [
          {
            elementId: "financerieringsperiode",
            title: "De financerieringsperiode",
            templates: [],
            articleHtml: `
            <h4 class="secondary">De financieringsperiode: wat is het en wat kun je verwachten?</h4>
            <p>Wanneer jouw bod op een woning is geaccepteerd en je een (voorlopig) koopovereenkomst hebt getekend, begint vaak de zogeheten financieringsperiode. Dit is de periode waarin je de hypotheek (en eventuele andere financieringsbronnen) definitief moet regelen. Hier lees je wat deze periode inhoudt en wat je kunt verwachten.</p>
            
            <h5>Wat is de financieringsperiode?</h5>
            <p>De financieringsperiode is de tijd die je hebt om jouw hypotheek rond te krijgen. In het (voorlopig) koopovereenkomst wordt vaak een “voorbehoud van financiering” opgenomen. Dat is een clausule waarin staat dat je nog onder de koop uit kunt als het je niet lukt om de financiering rond te krijgen binnen de afgesproken termijn.</p>
            
            <h5>Waarom is deze periode belangrijk?</h5>
            <p>Deze periode geeft je de ruimte om:</p>
            <ul>
              <li>Met je hypotheekadviseur of bank te schakelen over de definitieve hypotheekofferte.</li>
              <li>Eventueel nog andere financieringsopties te onderzoeken (bijvoorbeeld een lening van familie, als dat van toepassing is).</li>
              <li>Te wachten tot alle benodigde documenten, zoals een taxatierapport of werkgeversverklaring, binnen zijn en zijn goedgekeurd door de geldverstrekker.</li>
            </ul>
            
            <h5>Hoelang duurt de financieringsperiode?</h5>
            <p>Meestal spreek je in het voorlopig koopovereenkomst af dat je binnen een aantal weken – vaak 4, 6 of 8 weken – de financiering rond moet hebben. Dit is afhankelijk van de afspraken die je maakt met de verkoper. In een krappe markt, waar verkopers zeker willen weten dat het snel gaat, kan de verkoper een kortere financieringstermijn vragen. Zorg ervoor dat je voldoende tijd inschat, zodat je niet in de problemen komt als er vertraging optreedt.</p>
            
            <h5>Wat kun je in deze periode verwachten?</h5>
            
            <h6>Aanleveren van documenten</h6>
            <p>Je geldverstrekker of hypotheekadviseur zal je vragen om een reeks documenten, zoals recente loonstroken, een werkgeversverklaring, je taxatierapport en eventueel een bouwkundig rapport. Verzamel alles zo snel mogelijk om vertraging te voorkomen.</p>
            
            <h6>Beoordeling door de bank</h6>
            <p>De bank beoordeelt of jouw inkomen en de waarde van de woning voldoende zijn om de lening te verstrekken. Ze checken daarbij de regels en normen (bijvoorbeeld die vanuit de overheid en NHG als je daarvoor in aanmerking komt).</p>
            
            <h6>Contactmomenten met je adviseur</h6>
            <p>Als er vragen zijn of er ontbreken documenten, nemen je adviseur of de geldverstrekker contact met je op. Zorg dat je goed bereikbaar bent en vlot kunt reageren. Hoe sneller jij anticipeert, hoe sneller de hypotheek rond kan zijn.</p>
            
            <h6>Mogelijk geregel rondom verzekeringen</h6>
            <p>Denk aan een opstalverzekering (verplicht als je een hypotheek hebt) en eventueel een overlijdensrisicoverzekering, afhankelijk van de eisen van de geldverstrekker. Het is handig om hier niet mee te wachten tot het laatste moment.</p>
            
            <h5>Wat als het niet lukt binnen de termijn?</h5>
            <p>Het kan gebeuren dat de financiering langer duurt dan verwacht. In dat geval kun je soms met de verkoper overleggen of je de financieringstermijn mag verlengen. Dat moet dan wel schriftelijk worden vastgelegd. Lukt het echt niet om de financiering rond te krijgen binnen de gestelde termijn én is er geen verlenging? Dan kun je in principe terugvallen op het voorbehoud van financiering en de koop ontbinden. Doe dit echter alleen in overleg met juridisch advies of een goede begeleiding, want er zijn termijnen en voorwaarden aan verbonden.</p>
            
            <h5>Tips om de financieringsperiode soepel te laten verlopen</h5>
            <ul>
              <li>Zorg dat je vlot alle gevraagde documenten aanlevert, deze hebben we besproken in stap 1.</li>
              <li>Houd rekening met vakantieperiodes of feestdagen die voor vertraging kunnen zorgen bij de bank of werkgever.</li>
              <li>Bewaar het contact met je adviseur of bank. Blijf vragen stellen als je iets niet begrijpt.</li>
            </ul>
            
            <h5>Tot slot</h5>
            <p>De financieringsperiode is een spannende en belangrijke fase. Je zet hierin de stap van een ‘voorlopig’ koopovereenkomst naar een definitieve financiering. Door goed voorbereid te zijn, alle documenten op tijd te verzamelen en actief contact te houden met je adviseur en de geldverstrekker, vergroot je de kans dat het soepel verloopt. Zo kun je straks vol vertrouwen de laatste stappen zetten naar het daadwerkelijk eigendom van je nieuwe huis.</p>
          `
        },
        {
          elementId: "verplichte-documenten",
          title: "Verplichte documenten verzamelen",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Welke documenten heb je nodig voor je hypotheekaanvraag?</h4>
            <p>Het aanvragen van een hypotheek is een belangrijke stap in het proces van een huis kopen. Het is niet alleen een financiële verplichting, maar ook een moment waarop je veel documenten moet aanleveren om de bank of geldverstrekker te overtuigen van jouw financiële situatie. We hebben dit al eens eerder behandeld in stap 1, maar in dit artikel leggen we nogmaals uit welke standaard documenten je nodig hebt, maar ook welke extra documenten nodig zijn als je bijvoorbeeld een gift ontvangt om de woning mee te financieren.</p>
            
            <h5>Standaarddocumenten voor de hypotheekaanvraag</h5>
            <p>Bij elke hypotheekaanvraag zijn er een aantal documenten die standaard vereist zijn. Deze helpen de geldverstrekker om een compleet beeld te krijgen van jouw financiële situatie. Zorg ervoor dat je deze documenten al klaar hebt liggen om het proces te versnellen:</p>
            <ul>
              <li><strong>Een geldig identiteitsbewijs:</strong> Een paspoort, identiteitskaart of verblijfsvergunning (als je geen Nederlands staatsburger bent) is verplicht om je identiteit te verifiëren.</li>
              <li><strong>Loonstroken en werkgeversverklaring:</strong> Werk je in loondienst? Dan zijn de drie meest recente loonstroken en een werkgeversverklaring nodig. De werkgeversverklaring toont aan dat je een vast of tijdelijk contract hebt en wat je inkomen is.</li>
              <li><strong>Inkomensgegevens van zelfstandigen:</strong> Als je zelfstandig ondernemer bent, vraagt de geldverstrekker meestal om:
                <ul>
                  <li>De jaarrekeningen van de afgelopen drie jaar.</li>
                  <li>De IB-aangiftes (inkomstenbelasting).</li>
                  <li>Een prognose van je inkomsten voor het lopende jaar, opgesteld door je boekhouder.</li>
                </ul>
              </li>
              <li><strong>Bankafschriften:</strong> Je moet vaak afschriften van je betaalrekening(en) aanleveren, waarop je inkomen en vaste lasten zichtbaar zijn.</li>
              <li><strong>Overzicht van bestaande leningen of kredieten:</strong> Heb je andere leningen, zoals een persoonlijke lening of een studieschuld? Dan moet je hiervan een overzicht aanleveren, inclusief het openstaande saldo en de maandelijkse lasten.</li>
              <li><strong>Koopovereenkomst van de woning:</strong> Zodra je een koopovereenkomst hebt getekend, moet je deze aanleveren bij de geldverstrekker. Hierin staan de details van de aankoop, zoals de koopsom en de afgesproken opleverdatum.</li>
            </ul>
            
            <h5>Documenten voor aanvullende situaties</h5>
            <p>Soms is er meer nodig dan alleen de standaarddocumenten. Bijvoorbeeld als je de aankoop (deels) financiert met een gift, een schenking, of andere bijzondere omstandigheden:</p>
            <ul>
              <li><strong>Schenking of gift:</strong> Als een familielid of vriend je helpt met een schenking, zijn de volgende documenten nodig:
                <ul>
                  <li><strong>Schenkingsakte:</strong> Dit document toont aan dat de gift officieel is. Als de gift fiscaal voordelig is (bijvoorbeeld een belastingvrije schenking voor een woning), moet dit worden vastgelegd in een notariële akte of een schriftelijke overeenkomst.</li>
                  <li><strong>Bewijs van ontvangst:</strong> Dit is een bankafschrift waarop de overboeking van de schenking zichtbaar is.</li>
                  <li><strong>Eventuele fiscale aangifte:</strong> Als de schenking boven het belastingvrije bedrag ligt, moet je dit aangeven bij de Belastingdienst.</li>
                </ul>
              </li>
              <li><strong>Overwaarde uit een andere woning:</strong> Als je de overwaarde van je huidige woning gebruikt voor de aankoop, moet je:
                <ul>
                  <li>Een overzicht van de overwaarde aanleveren.</li>
                  <li>Bewijzen dat het geld beschikbaar is, bijvoorbeeld via de verkoopakte of een afrekening van de notaris.</li>
                </ul>
              </li>
              <li><strong>Partnerinkomen of gezamenlijke aankoop:</strong> Koop je samen met een partner? Dan moeten jullie beide alle inkomensdocumenten aanleveren, zoals loonstroken, werkgeversverklaring of zelfstandigengegevens.</li>
              <li><strong>Geld uit eigen vermogen:</strong> Gebruik je spaargeld of beleggingen voor een deel van de aankoop? Dan vraagt de geldverstrekker om:
                <ul>
                  <li>Bankafschriften die laten zien dat het geld beschikbaar is.</li>
                  <li>Een overzicht van je beleggingsportefeuille als je geld uit beleggingen gebruikt.</li>
                </ul>
              </li>
            </ul>
            
            <h5>Tips om het proces soepel te laten verlopen</h5>
            <ul>
              <li><strong>Begin op tijd:</strong> Verzamel alle documenten voordat je de hypotheekaanvraag indient. Dit voorkomt vertraging.</li>
              <li><strong>Controleer op geldigheid:</strong> Sommige documenten, zoals een werkgeversverklaring, hebben een beperkte geldigheidsduur. Vraag een nieuwe aan als dit nodig is.</li>
              <li><strong>Overleg bij twijfel:</strong> Als je niet zeker weet welke documenten nodig zijn, neem dan contact op met je hypotheekadviseur of de geldverstrekker. Zij kunnen je precies vertellen wat ze verwachten.</li>
            </ul>
            
            <h5>Extra aandacht voor schenkingen</h5>
            <p>Het ontvangen van een gift is een geweldige manier om je droomhuis dichterbij te brengen, maar het moet wel goed worden vastgelegd. Zorg ervoor dat je duidelijk kunt aantonen waar het geld vandaan komt, om vragen of problemen te voorkomen. Dit geldt ook als je gebruik wilt maken van de belastingvrije schenking voor een eigen woning.</p>
            
            <h5>Tot slot</h5>
            <p>Met de juiste voorbereiding kun je het hypotheekproces een stuk makkelijker en sneller maken. Door alle documenten op orde te hebben, laat je zien dat je goed voorbereid bent en vergroot je de kans op een soepele goedkeuring van je hypotheek. Of je nu een gift ontvangt, eigen spaargeld gebruikt of een complexe financiële situatie hebt: zorg dat alles zwart-op-wit staat. Zo kun je met een gerust hart de volgende stap zetten in het koopproces.</p>
          `
        },
        {
          elementId: "financieringsperiode-inspecties",
          title: "Bouwkundige inspectie & taxatie",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Bouwkundige inspectie en taxatie: Wanneer en hoe regel je dit?</h4>
            <p>Bij het kopen van een woning komen veel vragen kijken, en een van de belangrijkste is of je een bouwkundige inspectie en/of een taxatie moet laten uitvoeren. Dit zijn essentiële stappen om inzicht te krijgen in de staat van de woning en de waarde ervan. Maar wanneer is het echt nodig? Wie betaalt het, en waar moet je op letten bij het kiezen van een professional? Dit artikel helpt je deze stappen goed te begrijpen en voor te bereiden.</p>
            
            <h5>Wat is een bouwkundige inspectie en wanneer laat je die uitvoeren?</h5>
            <p>Een bouwkundige inspectie is een onderzoek waarbij een expert de technische staat van de woning beoordeelt. Ze kijken naar onderdelen zoals:</p>
            <ul>
              <li>Het dak en de gevels.</li>
              <li>De fundering.</li>
              <li>De staat van de installaties, zoals de cv-ketel en elektriciteit.</li>
              <li>Eventuele gebreken, zoals vochtproblemen, scheuren of houtrot.</li>
            </ul>
            
            <h6>Wanneer is een bouwkundige inspectie nodig?</h6>
            <ul>
              <li>Bij oudere woningen: Als de woning meer dan 20 jaar oud is, is een inspectie vaak verstandig. Oude huizen hebben vaker onderhoudsproblemen of verborgen gebreken.</li>
              <li>Bij twijfel over de staat van de woning: Als je tijdens een bezichtiging gebreken ziet of twijfels hebt over de bouwkwaliteit, biedt een inspectie zekerheid.</li>
              <li>Als je een financieringsvoorbehoud hebt opgenomen: Bij sommige hypotheken is een bouwkundig rapport verplicht, bijvoorbeeld als je een extra lening wilt afsluiten voor renovaties.</li>
              <li>Bij grote investeringen: Als je een flink bedrag uitgeeft aan een woning, wil je zeker weten dat er geen onverwachte kosten komen door gebreken.</li>
            </ul>
            
            <h6>Wanneer is het niet nodig?</h6>
            <ul>
              <li>Bij nieuwbouwwoningen: Hier is een inspectie vaak overbodig, omdat alles nieuw is en er garantieperiodes gelden.</li>
              <li>Bij woningen die recent bouwkundig zijn gekeurd: Vraag of de verkoper al een rapport heeft laten maken. Als dit rapport actueel en betrouwbaar is, kun je mogelijk een eigen keuring overslaan.</li>
              <li>Als je geen twijfel hebt over de staat van de woning: Als er tijdens een bezichtiging geen gebreken zichtbaar zijn en je geen twijfels hebt.</li>
            </ul>
            
            <h5>Wat is een taxatie en waarom is het nodig?</h5>
            <p>Een taxatie bepaalt de marktwaarde van een woning. Dit rapport is meestal verplicht bij het aanvragen van een hypotheek, omdat de bank wil weten wat de woning waard is. De waarde kan ook van invloed zijn op de hoogte van je hypotheek en of je extra kosten moet betalen, zoals bij een hoge rente.</p>
            
            <h6>Wanneer moet je een taxatie laten uitvoeren?</h6>
            <ul>
              <li><strong>Altijd bij een hypotheekaanvraag:</strong> Een taxatierapport is vrijwel altijd een vereiste van de geldverstrekker.</li>
              <li><strong>Bij twijfel over de vraagprijs:</strong> Als je twijfelt of de vraagprijs realistisch is, kan een taxatie je helpen een goed bod te doen.</li>
              <li><strong>Bij bijzondere situaties:</strong> Bijvoorbeeld als je een woning koopt met erfpacht of als er een complexe waardebepaling nodig is, zoals bij een monumentaal pand.</li>
            </ul>
            
            <h5>Wie betaalt de kosten?</h5>
            <ul>
              <li><strong>Bouwkundige inspectie:</strong> Meestal betaalt de koper dit, omdat het in hun belang is om de woning te laten keuren. Als de verkoper het rapport al heeft laten maken, kun je overwegen om dit rapport te gebruiken – maar zorg dat het actueel is.</li>
              <li><strong>Taxatie:</strong> Dit is vrijwel altijd een kostenpost voor de koper, omdat het nodig is voor jouw hypotheekaanvraag.</li>
            </ul>
            <p>In sommige gevallen kun je over deze kosten onderhandelen met de verkoper, bijvoorbeeld als er gebreken worden gevonden die nog moeten worden opgelost.</p>
            
            <h5>Waar let je op bij het selecteren van een professional?</h5>
            <ul>
              <li><strong>Ervaring en certificering:</strong> Kies voor een bouwkundige inspecteur die gecertificeerd is, bijvoorbeeld door de Vereniging Bouw- en Woningtoezicht Nederland (VBWTN). Voor een taxateur moet deze erkend zijn door het Nederlands Register Vastgoed Taxateurs (NRVT).</li>
              <li><strong>Onafhankelijkheid:</strong> Zorg dat de inspecteur of taxateur onafhankelijk is en niet verbonden is aan de verkoper of makelaar. Dit voorkomt belangenverstrengeling.</li>
              <li><strong>Specialisatie:</strong> Voor bijzondere situaties, zoals monumenten of woningen met erfpacht, kun je een specialist inschakelen die ervaring heeft met dit soort panden.</li>
              <li><strong>Reviews en aanbevelingen:</strong> Zoek naar reviews van eerdere klanten of vraag naar aanbevelingen in je netwerk.</li>
              <li><strong>Prijs-kwaliteitverhouding:</strong> Vraag meerdere offertes op en vergelijk niet alleen de prijs, maar ook wat er wordt geleverd. Voor een bouwkundige inspectie kan dit bijvoorbeeld een uitgebreide rapportage met kostenraming zijn.</li>
            </ul>
            
            <h5>Waar moet je op letten in de rapporten?</h5>
            <h6>Bij een bouwkundig rapport:</h6>
            <ul>
              <li>Zijn er grote gebreken gevonden?</li>
              <li>Wat zijn de geschatte kosten voor reparaties en onderhoud?</li>
              <li>Zijn er urgente zaken die direct opgelost moeten worden, zoals lekkages of funderingsproblemen?</li>
            </ul>
            
            <h6>Bij een taxatierapport:</h6>
            <ul>
              <li>Komt de waarde overeen met de vraagprijs?</li>
              <li>Zijn er bijzonderheden gemeld, zoals erfpacht, recht van overpad of beperkingen?</li>
            </ul>
            <p>Neem de tijd om de rapporten goed door te nemen. Bij twijfel kun je altijd advies vragen aan je hypotheekadviseur.</p>
            
            <h5>Conclusie</h5>
            <p>Een bouwkundige inspectie en taxatie geven je inzicht in de staat en waarde van een woning, waardoor je weloverwogen keuzes kunt maken. Hoewel deze stappen extra kosten met zich meebrengen, bieden ze ook bescherming tegen onverwachte gebreken en financiële risico’s. Zorg ervoor dat je professionals kiest die betrouwbaar en ervaren zijn, en neem de tijd om de rapporten te begrijpen. Met deze informatie op zak kun je met een gerust hart verder in het koopproces.</p>
          `
        },
        {
          elementId: "hypotheek-aanbod",
          title: "Het definitieve hypotheek aanbod",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Het definitieve aanbod van je hypotheek: waar moet je op letten voordat je tekent?</h4>
            <p>Je hebt het traject van de hypotheekaanvraag doorlopen, en eindelijk ontvang je het definitieve aanbod van de geldverstrekker. Het lijkt verleidelijk om direct te tekenen en dit onderdeel af te ronden, maar het is essentieel om eerst alle details grondig te controleren. Het definitieve aanbod is namelijk een juridisch bindend document dat jouw financiële toekomst bepaalt. Dit artikel helpt je te begrijpen waar je op moet letten voordat je enthousiast je handtekening zet.</p>
            
            <h5>Wat is een definitief hypotheekaanbod?</h5>
            <p>Het definitieve aanbod is een schriftelijke overeenkomst waarin de geldverstrekker alle voorwaarden van jouw hypotheek vastlegt. Zodra je dit ondertekent, verbind je jezelf aan deze voorwaarden. Het aanbod bevat onder andere:</p>
            <ul>
              <li>De hoogte van de hypotheek.</li>
              <li>De rente en rentevaste periode.</li>
              <li>De maandelijkse lasten.</li>
              <li>Eventuele voorwaarden en verplichtingen.</li>
            </ul>
            
            <h5>Waar moet je op letten?</h5>
            
            <h6>1. Controleer de basisgegevens</h6>
            <p>Begin met het controleren van alle persoonlijke en woninggegevens:</p>
            <ul>
              <li><strong>Naam en adresgegevens:</strong> Zijn jouw naam, geboortedatum en andere persoonlijke gegevens correct?</li>
              <li><strong>Woningdetails:</strong> Kloppen het adres en de gegevens van de woning waarvoor je de hypotheek aanvraagt?</li>
            </ul>
            <p>Fouten in deze gegevens kunnen later problemen veroorzaken bij de notaris of tijdens de eigendomsoverdracht.</p>
            
            <h6>2. Hypotheekbedrag en rentepercentage</h6>
            <p>Controleer of het aangeboden hypotheekbedrag overeenkomt met wat je hebt aangevraagd en nodig hebt om de woning te kopen. Let ook op:</p>
            <ul>
              <li><strong>Rentepercentage:</strong> Is dit het afgesproken percentage en geldt dit voor de hele rentevaste periode?</li>
              <li><strong>Rentevaste periode:</strong> Controleer of de afgesproken periode (bijvoorbeeld 10, 20 of 30 jaar) correct is opgenomen.</li>
            </ul>
            <p>Houd in gedachten dat kleine verschillen in de rente grote gevolgen kunnen hebben voor je totale kosten over de looptijd van de hypotheek.</p>
            
            <h6>3. Type hypotheek en aflosvorm</h6>
            <p>Het type hypotheek bepaalt hoe je jouw lening aflost. Controleer of het juiste type is opgenomen:</p>
            <ul>
              <li><strong>Annuïteitenhypotheek:</strong> Je betaalt elke maand een vast bedrag dat bestaat uit rente en aflossing.</li>
              <li><strong>Lineaire hypotheek:</strong> Je lost elke maand een vast bedrag af, waardoor je maandlasten steeds lager worden.</li>
              <li><strong>Aflossingsvrije hypotheek:</strong> Je betaalt alleen rente en lost niet verplicht af. Dit kan alleen voor een deel van je hypotheek worden gebruikt.</li>
            </ul>
            <p>Let op of dit overeenkomt met je financiële planning en de afspraken met je hypotheekadviseur.</p>
            
            <h6>4. Maandelijkse lasten en totale kosten</h6>
            <p>De geldverstrekker vermeldt in het aanbod wat je maandelijks moet betalen en hoeveel de hypotheek je in totaal kost. Controleer:</p>
            <ul>
              <li><strong>Maandlasten:</strong> Zijn deze inclusief of exclusief verzekeringen en belastingen?</li>
              <li><strong>Totale kosten:</strong> Kijk naar de kosten over de hele looptijd van de hypotheek. Dit geeft inzicht in hoeveel je uiteindelijk betaalt.</li>
              <li><strong>Boetevrij aflossen:</strong> Zijn er mogelijkheden om extra af te lossen zonder boete? Dit kan handig zijn als je in de toekomst je hypotheek sneller wilt aflossen.</li>
            </ul>
            
            <h6>5. Bijbehorende verplichtingen</h6>
            <p>Bij het afsluiten van een hypotheek horen vaak aanvullende verplichtingen. Controleer of deze in het aanbod staan en begrijp wat ze betekenen:</p>
            <ul>
              <li>Verplichte verzekeringen: Soms moet je een opstalverzekering of overlijdensrisicoverzekering afsluiten.</li>
              <li>Bankspaarrekening of beleggingsrekening: Bij bepaalde hypotheken moet je een gekoppelde rekening openen.</li>
              <li>Inkomensverzekeringen: Controleer of een arbeidsongeschiktheids- of werkloosheidsverzekering verplicht is.</li>
            </ul>
            
            <h6>6. Geldigheid van het aanbod</h6>
            <p>Een hypotheekaanbod heeft een beperkte geldigheid, meestal tussen de 30 en 90 dagen. Controleer:</p>
            <ul>
              <li><strong>De uiterste datum:</strong> Tot wanneer kun je het aanbod accepteren?</li>
              <li><strong>Vervallen van het aanbod:</strong> Wat gebeurt er als je de deadline mist? Sommige banken rekenen kosten voor het verlengen van de geldigheid.</li>
            </ul>
            
            <h6>7. Voorwaarden en kleine lettertjes</h6>
            <p>Lees de voorwaarden zorgvuldig door, ook al lijken ze op het eerste gezicht ingewikkeld. Let op zaken zoals:</p>
            <ul>
              <li>Wat gebeurt er als je in de toekomst verhuist? Sommige hypotheken zijn niet overdraagbaar.</li>
              <li>Zijn er boetes bij vervroegd aflossen of oversluiten?</li>
              <li>Bijzondere voorwaarden: Bijvoorbeeld aanvullende eisen als je een deel van je hypotheek gebruikt voor een verbouwing.</li>
            </ul>
            
            <h6>8. Schenkingen of eigen geld</h6>
            <p>Als je een deel van de woning financiert met eigen geld of een gift, controleer dan of dit correct is opgenomen in het aanbod. De geldverstrekker kan aanvullende eisen stellen, zoals:</p>
            <ul>
              <li>Een bewijs van de schenking.</li>
              <li>Aantonen dat het eigen geld beschikbaar is.</li>
            </ul>
            
            <h5>Tips voor een soepele ondertekening</h5>
            <ul>
              <li><strong>Overleg met je adviseur:</strong> Laat je hypotheekadviseur het aanbod doornemen. Zij kunnen je wijzen op details die je zelf over het hoofd ziet.</li>
              <li><strong>Neem de tijd:</strong> Voel je niet opgejaagd om snel te tekenen. Dit is een belangrijke beslissing, en je mag alle tijd nemen die nodig is om het aanbod goed te begrijpen.</li>
              <li><strong>Vragen? Stel ze direct:</strong> Als iets onduidelijk is, neem contact op met de geldverstrekker of je adviseur. Het is belangrijk dat je alles volledig begrijpt voordat je tekent.</li>
            </ul>
            
            <h5>Conclusie</h5>
            <p>Het definitieve hypotheekaanbod is een belangrijke mijlpaal in het proces van een woning kopen, maar het is cruciaal om alles goed te controleren voordat je tekent. Let op het bedrag, de rente, de maandlasten en de voorwaarden, en zorg dat je weet wat je financiële verplichtingen zijn. Met de juiste voorbereiding en aandacht kun je met vertrouwen je handtekening zetten en een stap dichter bij je nieuwe huis komen.</p>
          `
        }
      ]
    },
    {
      stageId: "eindinspectie",
      title: "Eindinspectie",
      description:
        "De eindinspectie is een belangrijk onderdeel voor jou en de verkoper om toekomstige geschillen te voorkomen.",
      templateCount: 1,
      elements: [
        {
          elementId: "eindinspectie-toelichting",
          title: "Wat is een eindinspectie?",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Wat is de eindinspectie en waarom is dit belangrijk voor jou als koper?</h4>
            <p>De eindinspectie is een belangrijke laatste stap in het proces van een woning kopen. Het is jouw kans om de woning vlak voor de overdracht nog een laatste keer te controleren. Hoewel het vaak een formaliteit lijkt, kan de eindinspectie problemen aan het licht brengen die je nog kunt bespreken voordat je de woning officieel accepteert. In dit artikel lees je wat een eindinspectie is, waarom het belangrijk is, en wat je daarbij kunt verwachten.</p>
            <p><em>In ons volgende artikel hebben wij een checklist toegevoegd die je kan gebruiken tijdens jouw eindinspectie.</em></p>
            
            <h5>Wat is de eindinspectie?</h5>
            <p>De eindinspectie vindt meestal plaats op de dag van de sleuteloverdracht, vlak voordat je naar de notaris gaat. Samen met de verkoper (of diens makelaar) loop je door de woning om te controleren of alles in de afgesproken staat is. Dit betekent:</p>
            <ul>
              <li>De woning moet leeg en schoon zijn opgeleverd, tenzij anders is afgesproken.</li>
              <li>Gebreken die na het tekenen van de koopovereenkomst zijn ontstaan, moeten zijn opgelost.</li>
              <li>Roerende zaken die je hebt overgenomen (zoals gordijnen of keukenapparatuur) moeten aanwezig zijn.</li>
            </ul>
            
            <h5>Waarom is de eindinspectie belangrijk?</h5>
            <h6>Voorkomen van verrassingen</h6>
            <p>De woning moet in dezelfde staat zijn als bij het tekenen van de koopovereenkomst. Als er schade is ontstaan of afgesproken reparaties niet zijn uitgevoerd, kun je dit direct bespreken.</p>
            
            <h6>Controle van afspraken</h6>
            <p>Je controleert of alles wat je met de verkoper hebt afgesproken correct is nagekomen, zoals het achterlaten van bepaalde meubels of apparatuur.</p>
            
            <h6>Oplossingen vóór de overdracht</h6>
            <p>Problemen die tijdens de eindinspectie worden gevonden, kunnen nog worden opgelost voordat je de eigendomsoverdracht tekent. Dit voorkomt gedoe of extra kosten achteraf.</p>
            
            <h5>Wat als er problemen zijn?</h5>
            <p>Als je tijdens de eindinspectie problemen ontdekt, bespreek dit direct met de verkoper of makelaar. In sommige gevallen kun je afspraken maken om dit op te lossen voordat je naar de notaris gaat. Bij grotere problemen kun je de notaris informeren en eventueel de eigendomsoverdracht uitstellen totdat er een oplossing is.</p>
            
            <h5>Conclusie</h5>
            <p>De eindinspectie is een cruciaal moment om ervoor te zorgen dat de woning in de afgesproken staat wordt opgeleverd. Het voorkomt onaangename verrassingen en geeft je als koper de zekerheid dat alles klopt voordat je je handtekening zet bij de notaris. Met een goede checklist en aandacht voor details kun je deze stap soepel en zonder zorgen doorlopen.</p>
          `
        },
        {
          elementId: "eindinspectie-tips",
          title: "Tips voor de eindinspectie",
          templates: [
            {
              fileUrl: "/public/assets/documents/kopen/Eindinspectie Koper Checklist - MoveRoof.pdf",
              fileName: "Eindinspectie Checklist - MoveRoof.pdf",
              labelText: "Inspectie checklist - PDF"
            },
            {
              fileUrl: "/public/assets/documents/kopen/Eindinspectie Koper Checklist - MoveRoof.docx",
              fileName: "Eindinspectie Checklist - MoveRoof.docx",
              labelText: "Inspectie checklist - Word"
            }
          ],
          articleHtml: `
            <h4 class="secondary">Eindinspectie: Tips en een handige checklist voor een zorgeloze laatste controle</h4>
            <p>De eindinspectie is het moment waarop je de woning nog één keer grondig controleert voordat deze officieel jouw eigendom wordt. Het lijkt misschien een formaliteit, maar deze controle is van groot belang. Problemen of gebreken die je opmerkt tijdens de eindinspectie, kun je nog bespreken met de verkoper voordat je naar de notaris gaat. In dit artikel geven we je tips om de inspectie zorgvuldig uit te voeren en bieden we een handige checklist die je kunt downloaden.</p>
            
            <h5>Tips voor een succesvolle eindinspectie</h5>
            <h6>Neem je tijd</h6>
            <p>Een eindinspectie mag geen haastklus zijn. Plan voldoende tijd in en controleer alles zorgvuldig. Dit is jouw laatste kans om zeker te zijn dat de woning in de afgesproken staat wordt opgeleverd.</p>
            
            <h6>Neem de koopovereenkomst en lijst van roerende zaken mee</h6>
            <p>Controleer tijdens de inspectie of alles wat in de koopovereenkomst staat is nagekomen. Gebruik de lijst van roerende zaken om te controleren of de overgenomen spullen aanwezig zijn.</p>
            
            <h6>Controleer de technische staat</h6>
            <p>Let op gebreken die tijdens eerdere bezichtigingen niet zichtbaar waren of die na de koop zijn ontstaan, zoals:</p>
            <ul>
              <li>Krassen of beschadigingen op muren, vloeren of deuren.</li>
              <li>Lekkages of vochtplekken.</li>
              <li>Ramen en deuren die niet goed sluiten.</li>
            </ul>
            
            <h6>Test de werking van essentiële zaken</h6>
            <p>Controleer of alles functioneert zoals afgesproken, bijvoorbeeld:</p>
            <ul>
              <li>Verlichting, stopcontacten en schakelaars.</li>
              <li>De cv-ketel en verwarming.</li>
              <li>De kraan in de keuken en badkamer (koud en warm water).</li>
              <li>Overgenomen apparaten, zoals de koelkast, oven of wasmachine.</li>
            </ul>
            
            <h6>Let op details</h6>
            <p>Kleine zaken kunnen later grote ergernissen worden. Controleer bijvoorbeeld of:</p>
            <ul>
              <li>Alle sleutels aanwezig zijn, inclusief reservesleutels en sleutels van schuren en brievenbussen.</li>
              <li>De woning netjes en schoon is opgeleverd.</li>
            </ul>
            
            <h6>Maak foto’s van problemen</h6>
            <p>Als je tijdens de inspectie problemen ontdekt, maak hier dan duidelijke foto’s van. Deze kunnen dienen als bewijs als je met de verkoper afspraken wilt maken over een oplossing.</p>
            
            <h5>Wat als er iets niet in orde is?</h5>
            <p>Ontdek je tijdens de eindinspectie dat de woning niet in de afgesproken staat is? Bespreek dit direct met de verkoper of diens makelaar. Mogelijke oplossingen kunnen zijn:</p>
            <ul>
              <li>Het verlagen van de koopsom als compensatie.</li>
              <li>Afspraken maken over reparaties die de verkoper nog moet uitvoeren.</li>
              <li>In sommige gevallen kun je de notaris vragen de overdracht tijdelijk uit te stellen totdat het probleem is opgelost.</li>
            </ul>
            
            <h5>Download onze checklist</h5>
            <p>We hebben een handige checklist gemaakt om je te helpen tijdens de eindinspectie. Deze checklist is een complete gids waarmee je niets over het hoofd ziet. Hierin vind je onder andere:</p>
            <ul>
              <li>Een overzicht van zaken om te controleren, van technische aspecten tot overgenomen spullen.</li>
              <li>Ruimte om zelf notities te maken over eventuele gebreken of afspraken met de verkoper.</li>
            </ul>
            <p>Klik op de knop boven dit artikel om de checklist te downloaden en neem hem mee naar de eindinspectie.</p>
            
            <h5>Conclusie</h5>
            <p>De eindinspectie is een belangrijk moment in het koopproces. Het geeft je de kans om zeker te zijn dat de woning in de afgesproken staat is voordat je officieel eigenaar wordt. Met een goede voorbereiding, aandacht voor details en onze checklist kun je deze stap met vertrouwen doorlopen en genieten van jouw nieuwe woning.</p>
          `
        }
      ]
    },
    {
      stageId: "de-notaris",
      title: "De notaris",
      description:
        "De koopovereenkomst en hypotheek zijn rond, nog 1 formele stap. De notaris. Wat kan je verwachten en waar moet je op letten?",
      templateCount: 0,
      elements: [
        {
          elementId: "notaris-voorbereiding",
          title: "Voorbereiding op de afspraak",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Voorbereiding op de afspraak bij de notaris: welke documenten heb je nodig?</h4>
            <p>De afspraak bij de notaris is een van de laatste stappen in het proces van een woning kopen. Tijdens deze afspraak worden de eigendomsakte en de hypotheekakte ondertekend, en wordt de woning officieel van jou. De notaris vraagt vooraf al een aantal documenten op, maar het is belangrijk dat jij weet wat nodig is en eventueel zelf documenten voorbereidt. Zo verloopt alles soepel en zonder verrassingen.</p>
            
            <h5>Documenten die je (mogelijk) nodig hebt</h5>
            
            <h6>Een geldig identiteitsbewijs</h6>
            <p>Zorg dat je een geldig paspoort, identiteitskaart of verblijfsvergunning meeneemt. Zonder dit document kan de notaris de eigendomsoverdracht niet voltooien. Controleer ruim van tevoren of je identiteitsbewijs niet is verlopen.</p>
            
            <h6>Bankafschrift of betaalbewijs</h6>
            <p>Als je een waarborgsom hebt gestort, kan de notaris vragen om hiervan een bewijs. Dit geldt ook als je eigen geld hebt overgemaakt voor de aankoop.</p>
            
            <h6>Hypotheekofferte en -akkoord</h6>
            <p>De notaris heeft de gegevens van je hypotheek nodig. Hoewel de bank deze vaak rechtstreeks naar de notaris stuurt, is het verstandig om een kopie van je definitieve hypotheekaanbod mee te nemen.</p>
            
            <h6>De koopovereenkomst</h6>
            <p>Dit document wordt door de notaris gebruikt om de eigendomsakte op te stellen. Meestal heeft de notaris deze al van de verkoper of makelaar ontvangen, maar neem voor de zekerheid je eigen kopie mee.</p>
            
            <h6>Eventuele aanvullende documenten bij schenkingen of eigen geld</h6>
            <ul>
              <li><strong>Schenkingsakte:</strong> Als een deel van de aankoop is gefinancierd met een gift, moet de notaris dit vastleggen.</li>
              <li><strong>Bewijs van eigen geld:</strong> Bijvoorbeeld bankafschriften die laten zien dat het bedrag beschikbaar is.</li>
            </ul>
            
            <h6>Overzicht van bestaande schulden of leningen</h6>
            <p>Als je andere leningen hebt (zoals een studieschuld), kan de notaris vragen om een overzicht. Dit is vooral belangrijk als het invloed heeft op jouw financiering.</p>
            
            <h6>Bijzondere documenten bij erfpacht of appartementsrechten</h6>
            <ul>
              <li><strong>De erfpachtvoorwaarden:</strong> Als de woning op erfpachtgrond staat.</li>
              <li><strong>De splitsingsakte:</strong> Voor appartementen.</li>
            </ul>
            
            <h5>Praktische tips voor een soepele afspraak</h5>
            <ul>
              <li><strong>Controleer de uitnodiging van de notaris:</strong> Hierin staat vaak precies vermeld welke documenten je moet meenemen.</li>
              <li><strong>Kom op tijd:</strong> De afspraak is vaak strak gepland, dus zorg dat je op tijd bent en alles bij je hebt.</li>
              <li><strong>Neem iemand mee als het nodig is:</strong> Als je het spannend vindt, kun je een partner, vriend of familielid meenemen voor steun.</li>
            </ul>
            
            <h5>Conclusie</h5>
            <p>De afspraak bij de notaris is de laatste formele stap voordat de woning van jou is. Zorg dat je alle benodigde documenten compleet hebt en controleer ruim van tevoren wat de notaris van je verwacht. Met een goede voorbereiding verloopt de afspraak soepel en kun je met een gerust hart je handtekening zetten.</p>
          `
        },
        {
          elementId: "notaris-afspraak",
          title: "De notaris afspraak",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Wat kun je bij de notaris verwachten?</h4>
            <p>De afspraak bij de notaris is het laatste officiële moment in het proces van een woning kopen. Het is een belangrijke stap waarin alles juridisch wordt vastgelegd en de woning officieel jouw eigendom wordt. Maar wat gebeurt er precies tijdens deze afspraak, en wat kun je verwachten?</p>
            
            <h5>De eigendomsakte en hypotheekakte</h5>
            <p>Tijdens de afspraak onderteken je twee belangrijke documenten:</p>
            <ul>
              <li><strong>De eigendomsakte:</strong> Dit document maakt de woning officieel jouw eigendom. Hierin staan alle details van de koopovereenkomst, zoals de koopsom, eventuele afspraken over roerende zaken, en bijzonderheden zoals erfpacht of recht van overpad.</li>
              <li><strong>De hypotheekakte:</strong> Als je een hypotheek hebt afgesloten, wordt dit document ook getekend. Hierin staan de afspraken tussen jou en de geldverstrekker, zoals het leenbedrag, de rente en de voorwaarden van de hypotheek.</li>
            </ul>
            
            <h5>De rol van de notaris</h5>
            <p>De notaris is verantwoordelijk voor:</p>
            <ul>
              <li><strong>Het controleren van alle documenten:</strong> De notaris checkt of alle gegevens kloppen en of alles juridisch juist is opgesteld.</li>
              <li><strong>Het voorlezen en uitleggen van de akten:</strong> Dit gebeurt in begrijpelijke taal, zodat je precies weet wat je tekent.</li>
              <li><strong>De financiële afhandeling:</strong> De notaris ontvangt de koopsom van jouw geldverstrekker en zorgt ervoor dat de verkoper betaald wordt.</li>
              <li><strong>Inschrijving bij het Kadaster:</strong> Na ondertekening wordt de eigendomsoverdracht geregistreerd in het Kadaster.</li>
            </ul>
            
            <h5>Wat gebeurt er tijdens de afspraak?</h5>
            <ul>
              <li><strong>Identiteitscontrole:</strong> De notaris controleert jouw identiteitsbewijs om zeker te weten dat je de juiste persoon bent.</li>
              <li><strong>Uitleg van de documenten:</strong> De notaris neemt de eigendomsakte en hypotheekakte met je door. Dit is jouw moment om vragen te stellen als iets niet duidelijk is.</li>
              <li><strong>Ondertekening:</strong> Als alles klopt, zet je je handtekening onder beide akten. Dit geldt ook voor de verkoper (bij de eigendomsakte).</li>
              <li><strong>Overdracht van de sleutels:</strong> Na de ondertekening ontvang je meestal direct de sleutels van de woning, tenzij er andere afspraken zijn gemaakt.</li>
            </ul>
            
            <h5>Hoe lang duurt de afspraak?</h5>
            <p>Een afspraak bij de notaris duurt meestal tussen de 30 en 60 minuten, afhankelijk van hoe uitgebreid de uitleg is en of er vragen zijn.</p>
            
            <h5>Conclusie</h5>
            <p>Bij de notaris wordt alles officieel gemaakt en geregeld, zodat jij met een gerust hart de sleutels van jouw nieuwe woning kunt ontvangen. Bereid je goed voor, stel gerust vragen als iets onduidelijk is, en geniet van dit belangrijke moment in het aankoopproces!</p>
          `
        },
        {
          elementId: "nota-van-afrekening",
          title: "Nota van afrekening controleren",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Waarom je de nota van afrekening moet controleren</h4>
            <p>Na de afspraak bij de notaris ontvang je een nota van afrekening. Dit document geeft een overzicht van alle kosten en betalingen die met de koop van de woning te maken hebben. Het is belangrijk om deze nota zorgvuldig te controleren, omdat fouten of onduidelijkheden je onnodig geld kunnen kosten.</p>
            
            <h5>Wat is een nota van afrekening?</h5>
            <p>De nota van afrekening is een financieel overzicht waarin staat:</p>
            <ul>
              <li>De koopsom van de woning.</li>
              <li>Het hypotheekbedrag dat je leent.</li>
              <li>Eventuele ingehouden waarborgsom.</li>
              <li>Notariskosten en andere bijkomende kosten, zoals inschrijving bij het Kadaster.</li>
              <li>Kosten koper (zoals overdrachtsbelasting).</li>
              <li>Overige betalingen, zoals overgenomen roerende zaken of servicekosten.</li>
            </ul>
            
            <h5>Waarom is het belangrijk om deze te controleren?</h5>
            <p>De nota van afrekening moet precies kloppen met de afspraken die zijn gemaakt in de koopovereenkomst en met jouw hypotheekaanvraag. Een fout, zoals een dubbel gerekende kostenpost of een ontbrekende betaling, kan leiden tot financiële problemen of vertragingen bij de overdracht.</p>
            
            <h5>Waar moet je op letten?</h5>
            <ul>
              <li><strong>De koopsom en hypotheekbedrag:</strong> Controleer of het bedrag dat je betaalt overeenkomt met de afgesproken koopsom en het bedrag dat je leent.</li>
              <li><strong>Ingehouden waarborgsom:</strong> Als je een waarborgsom hebt gestort, moet dit bedrag correct zijn verwerkt op de nota.</li>
              <li><strong>Notariskosten en belastingen:</strong> Controleer of de kosten voor de notaris en de overdrachtsbelasting kloppen met wat je verwachtte en de offerte van de notaris.</li>
              <li><strong>Overname van roerende zaken:</strong> Zijn de kosten voor overgenomen spullen, zoals meubels of apparatuur, correct opgenomen?</li>
              <li><strong>Totaalbedrag:</strong> Kijk naar het uiteindelijke bedrag dat je moet overmaken of dat uit je hypotheek wordt betaald. Klopt dit met jouw berekeningen?</li>
            </ul>
            
            <h5>Wat te doen bij fouten?</h5>
            <p>Als je iets niet begrijpt of een fout ontdekt, neem dan direct contact op met de notaris. Het corrigeren van de nota moet vóór de eigendomsoverdracht gebeuren, anders kan het proces vertraging oplopen.</p>
            
            <h5>Conclusie</h5>
            <p>De nota van afrekening is een belangrijk document dat laat zien hoe jouw woning wordt betaald. Controleer deze zorgvuldig om er zeker van te zijn dat alles klopt en je niet voor verrassingen komt te staan. Het kost je maar een paar minuten en kan je veel gedoe besparen!</p>
          `
        }
      ]
    },
    {
      stageId: "laatste-zaken",
      title: "De laatste zaken",
      description:
        "De verkoop is rond! We zetten alle belangrijke tips voor de laatste zaken op een rijtje, van verhuizing tot belastinginformatie!",
      templateCount: 0,
      elements: [
        {
          elementId: "slim-verhuizen",
          title: "Slim verhuizen",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Slim verhuizen: Hoe maak je er een overzichtelijk en leuk proces van?</h4>
            <p>Na de overdracht breekt een spannend moment aan: verhuizen naar jouw nieuwe woning! Maar wat vaak een moment van vreugde zou moeten zijn, kan snel veranderen in chaos en stress. Gelukkig kun je met een goede voorbereiding, slimme planning en een positieve mindset het verhuizen soepel en zelfs leuk maken. In dit artikel lees je waar je op moet letten, wat veelgemaakte fouten zijn, en hoe je overzicht houdt.</p>
            
            <h5>Tips voor een soepele verhuizing</h5>
            <h6>1. Begin ruim van tevoren met plannen</h6>
            <p>Een verhuizing wordt al snel stressvol als alles op het laatste moment gebeurt. Maak een duidelijke planning waarin je stap voor stap toewerkt naar de verhuisdag. Denk aan:</p>
            <ul>
              <li><strong>Inpakken:</strong> Begin weken van tevoren met het inpakken van spullen die je niet dagelijks nodig hebt.</li>
              <li><strong>Regel hulp:</strong> Boek een verhuisbedrijf of regel vrienden en familie om te helpen.</li>
              <li><strong>Adreswijzigingen:</strong> Geef je nieuwe adres tijdig door aan instanties, zoals de gemeente, je bank, en je zorgverzekering.</li>
            </ul>
            
            <h6>2. Declutter voordat je inpakt</h6>
            <p>Een nieuwe woning is een frisse start, dus neem alleen mee wat je echt nodig hebt. Gooi kapotte spullen weg en doneer of verkoop wat je niet meer gebruikt. Dit bespaart niet alleen ruimte, maar ook tijd en geld tijdens het verhuizen.</p>
            
            <h6>3. Label alles duidelijk</h6>
            <p>Geef dozen duidelijke labels met wat erin zit en naar welke kamer ze moeten. Bijvoorbeeld: “Keuken - Kookgerei” of “Slaapkamer - Beddengoed”. Dit maakt het uitpakken overzichtelijker en voorkomt dat je uren zoekt naar je koffiemok.</p>
            
            <h6>4. Maak een prioriteitenpakket voor de eerste dagen</h6>
            <p>Pak een aparte doos of tas in met spullen die je meteen nodig hebt, zoals:</p>
            <ul>
              <li>Toilettas (tandpasta, zeep, etc.).</li>
              <li>Schoon beddengoed.</li>
              <li>Kleding voor de eerste dagen.</li>
              <li>Belangrijke documenten.</li>
              <li>Opladers voor telefoons en laptops.</li>
            </ul>
            
            <h5>Veelgemaakte fouten en hoe je ze voorkomt</h5>
            <h6>Te veel tegelijk willen doen</h6>
            <p>Verhuizen is een intensieve klus. Probeer niet alles in één dag te doen, maar verspreid taken over meerdere dagen.</p>
            
            <h6>Geen hulp vragen</h6>
            <p>Veel mensen onderschatten hoeveel werk een verhuizing is. Vraag vrienden, familie of een professioneel verhuisbedrijf om te helpen.</p>
            
            <h6>Geen schoonmaak plannen</h6>
            <p>Zorg dat je de nieuwe woning schoonmaakt voordat je gaat verhuizen, vooral de keuken en badkamer. Dit scheelt een hoop gedoe achteraf.</p>
            
            <h6>Vergeten om meubels op te meten</h6>
            <p>Controleer of je grote meubels, zoals een bank of kast, door deuren en trappenhuizen passen. Zo voorkom je frustratie op de verhuisdag.</p>
            
            <h5>Maak het leuk!</h5>
            <h6>1. Zet een goede sfeer neer</h6>
            <p>Speel je favoriete muziek tijdens het inpakken en verhuizen. Dit houdt de energie hoog en maakt de dag leuker.</p>
            
            <h6>2. Vier mijlpalen</h6>
            <p>Heb je alle dozen ingepakt? Is de verhuizing succesvol afgerond? Neem een moment om dit te vieren, bijvoorbeeld met een pizza in je nieuwe huis.</p>
            
            <h6>3. Maak tijd voor persoonlijke touches</h6>
            <p>Begin direct met het personaliseren van je nieuwe woning. Hang een favoriete foto op, zet planten neer, of steek een geurkaars aan. Dit helpt om je snel thuis te voelen.</p>
            
            <h5>Checklist voor een overzichtelijke verhuizing</h5>
            <h6>Weken vooraf</h6>
            <ul>
              <li>Regel een verhuisbedrijf of huur een busje.</li>
              <li>Begin met inpakken en opruimen.</li>
              <li>Geef je adreswijzigingen door.</li>
              <li>Controleer de afmetingen van grote meubels en deuropeningen.</li>
            </ul>
            
            <h6>Een paar dagen voor de verhuizing</h6>
            <ul>
              <li>Maak een prioriteitenpakket klaar.</li>
              <li>Pak een schoonmaakset in voor de laatste schoonmaak.</li>
              <li>Regel dat je meterstanden noteert bij de eindinspectie, hierover meer in de voorgaande stap “De eindinspectie”.</li>
            </ul>
            
            <h6>De verhuisdag zelf</h6>
            <ul>
              <li>Zorg dat alles klaarstaat om direct in te laden.</li>
              <li>Noteer de meterstanden van de oude én nieuwe woning.</li>
              <li>Neem pauzes en geniet van het proces!</li>
            </ul>
            
            <h5>Conclusie</h5>
            <p>Verhuizen hoeft geen stressvolle chaos te zijn. Met een goede voorbereiding, een duidelijk plan en aandacht voor de details kun je van deze stap een leuk en overzichtelijk proces maken. Zie het als de start van een nieuw hoofdstuk in jouw leven, en geniet van het moment waarop je jouw nieuwe woning echt jouw thuis maakt.</p>
          `
        },
        {
          elementId: "nieuwe-contracten",
          title: "Nieuwe contracten & adreswijzigingen",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Contracten en adreswijzigingen regelen na je verhuizing: Een complete gids</h4>
            <p>Na de verhuizing komt het moment om de praktische zaken te regelen. Het afsluiten van contracten voor gas, water, elektra, internet en tv, en het doorgeven van je adreswijziging bij instanties en abonnementen, is essentieel om je nieuwe woning echt jouw thuis te maken. Met een goede aanpak kun je dit overzichtelijk en zonder stress afhandelen. In dit artikel lees je wat je moet doen, hoe je dit het beste aanpakt, en waar je op moet letten.</p>
            
            <h5>1. Contracten voor gas, water en elektra afsluiten</h5>
            <p>Deze nutsvoorzieningen zijn essentieel in je nieuwe woning. Volg deze stappen:</p>
            <h6>Gas en elektra</h6>
            <ul>
              <li><strong>Vergelijk energieleveranciers:</strong> Gebruik vergelijkingswebsites om de beste prijs en voorwaarden te vinden. Let op het verschil tussen vaste en variabele tarieven.</li>
              <li><strong>Let op de meterstanden:</strong> Noteer de meterstanden van je nieuwe woning op de dag van de sleuteloverdracht en geef deze door aan de gekozen energieleverancier.</li>
              <li><strong>Controleer het type aansluiting:</strong> Sommige woningen hebben geen gasaansluiting meer en zijn volledig elektrisch. Zorg dat je een passend contract afsluit.</li>
            </ul>
            <h6>Water</h6>
            <ul>
              <li><strong>Registreer je bij het lokale waterbedrijf:</strong> In Nederland is dit afhankelijk van je woonplaats. Meestal word je automatisch aangemeld na het doorgeven van je adreswijziging bij de gemeente, maar check dit altijd.</li>
            </ul>
            
            <h5>2. Internet, tv en telefoon</h5>
            <h6>Internet en tv</h6>
            <ul>
              <li><strong>Vergelijk aanbieders:</strong> Controleer welke providers beschikbaar zijn op jouw adres. Gebruik een postcodecheck om te zien of je DSL, kabel of glasvezel kunt krijgen.</li>
              <li><strong>Let op de snelheid:</strong> Kies een abonnement met voldoende snelheid voor jouw gezinssituatie en gebruik (bijvoorbeeld voor thuiswerken of streamen).</li>
              <li><strong>Controleer op lopende contracten:</strong> Als je al een lopend abonnement hebt, kun je dit vaak meeverhuizen.</li>
            </ul>
            <h6>Mobiele telefoon</h6>
            <p>Meestal hoef je alleen je adreswijziging door te geven aan je provider. Controleer of er specifieke acties nodig zijn bij jouw abonnement.</p>
            
            <h5>3. Adreswijziging doorgeven aan overheidsinstanties</h5>
            <h6>Gemeente</h6>
            <p>Meld je nieuwe adres bij de gemeente: Dit moet binnen 5 dagen na je verhuizing. Dit kan meestal online via de website van je gemeente. De gemeente geeft je nieuwe adres door aan het Basisregistratie Personen (BRP).</p>
            <h6>Belastingdienst</h6>
            <p>Als je je verhuizing bij de gemeente doorgeeft, wordt dit automatisch verwerkt bij de Belastingdienst. Controleer dit wel via je persoonlijke pagina op hun website.</p>
            <h6>Rijbewijs en voertuigregistratie</h6>
            <p>Je adres wordt automatisch aangepast bij de RDW (Rijksdienst voor het Wegverkeer), maar controleer dit altijd als je voertuigen op je naam hebt staan.</p>
            
            <h5>4. Abonnementen en inschrijvingen</h5>
            <h6>Banken en verzekeraars</h6>
            <ul>
              <li><strong>Bank:</strong> Pas je adres aan via de app of website van je bank.</li>
              <li><strong>Verzekeringen:</strong> Controleer of je adreswijziging invloed heeft op je premie. Vooral bij je opstal-, inboedel-, en autoverzekering is dit belangrijk.</li>
            </ul>
            <h6>Post en pakketten</h6>
            <ul>
              <li><strong>PostNL doorzendservice:</strong> Met deze dienst wordt post die naar je oude adres gaat automatisch doorgestuurd naar je nieuwe adres. Dit geeft je extra tijd om je adreswijziging overal door te geven.</li>
            </ul>
            <h6>Abonnementen en lidmaatschappen</h6>
            <ul>
              <li>Denk aan abonnementen voor tijdschriften, sportscholen, streamingdiensten en goede doelen. Door je adres tijdig te wijzigen, voorkom je dat je belangrijke post mist.</li>
              <li><strong>Webshops en klantenkaarten:</strong> Controleer je adresgegevens bij veelgebruikte webshops en pas deze aan. Vergeet klantenkaarten van bijvoorbeeld supermarkten niet.</li>
            </ul>
            
            <h5>5. Speciale situaties en tips</h5>
            <ul>
              <li><strong>Huurwoningen:</strong> Geef je nieuwe adres ook door aan je verhuurder of woningcorporatie, als dit niet automatisch gebeurt.</li>
              <li><strong>Toeslagen:</strong> Als je toeslagen ontvangt (zoals huur- of zorgtoeslag), controleer dan of je verhuizing invloed heeft op het bedrag dat je ontvangt.</li>
              <li><strong>Energielabels:</strong> Bij een koopwoning kan het handig zijn om een kopie van het energielabel op te vragen bij de vorige eigenaar.</li>
            </ul>
            
            <h5>Checklist: Adreswijzigingen en contracten regelen</h5>
            <ul>
              <li>Gas, water, elektra: Sluit contracten af en geef meterstanden door.</li>
              <li>Internet en tv: Vergelijk providers en regel je aansluiting.</li>
              <li>Gemeente: Geef je verhuizing binnen 5 dagen door.</li>
              <li>Belastingdienst: Controleer je adres via Mijn Belastingdienst.</li>
              <li>Banken en verzekeraars: Pas je gegevens aan en controleer je premies.</li>
              <li>Post en pakketten: Activeer een doorzendservice en wijzig je adres bij veelgebruikte webshops.</li>
              <li>Overige abonnementen: Denk aan tijdschriften, sportscholen en klantenkaarten.</li>
            </ul>
            
            <h5>Conclusie</h5>
            <p>Het regelen van contracten en adreswijzigingen na je verhuizing lijkt misschien veel werk, maar met een gestructureerde aanpak is het goed te overzien. Door op tijd te beginnen en gebruik te maken van handige tools, zoals de <a href="https://www.postnl.nl/ontvangen/post-doorsturen/verhuisservice/" target="_blank">Post-NL Verhuisservice</a> en online adreswijzigingen, houd je overzicht en verloopt de overgang soepel. Met alles geregeld kun je je volledig richten op genieten van je nieuwe woning!</p>
          `
        },
        {
          elementId: "woonverzekeringen",
          title: "Verzekeringen afsluiten",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Welke verzekeringen zijn belangrijk na het kopen van een woning?</h4>
            <p>Na het kopen van een woning is het belangrijk om goed verzekerd te zijn. Sommige verzekeringen zijn verplicht, terwijl andere afhankelijk zijn van jouw situatie en type woning. Als je een appartement hebt, betaalt de Vereniging van Eigenaren (VvE) vaak al voor bepaalde verzekeringen via de servicekosten. Hier lees je welke verzekeringen belangrijk zijn en waar je op moet letten.</p>
            
            <h5>1. Opstalverzekering (verplicht bij een hypotheek)</h5>
            <p>Een opstalverzekering dekt schade aan je woning door bijvoorbeeld brand, storm, of inbraak. Denk aan de muren, het dak, en de leidingen.</p>
            <ul>
              <li><strong>Verplicht bij een hypotheek:</strong> Geldverstrekkers eisen dat je deze verzekering afsluit.</li>
              <li><strong>VvE:</strong> Bij een appartement regelt de VvE vaak een collectieve opstalverzekering. Controleer dit in het huishoudelijk reglement en voorkom dubbele kosten.</li>
            </ul>
            
            <h5>2. Inboedelverzekering</h5>
            <p>Met een inboedelverzekering verzeker je je spullen tegen schade door bijvoorbeeld brand, wateroverlast, of diefstal. Dit geldt voor alles wat je kunt verplaatsen, zoals meubels, elektronica, en sieraden.</p>
            <ul>
              <li><strong>Check bij de VvE:</strong> Soms is een basisdekking voor inboedel al inbegrepen in de servicekosten. Controleer of aanvullende dekking nodig is.</li>
              <li><strong>Extra dekking:</strong> Overweeg aanvullende dekking voor kostbare spullen, zoals kunst of dure apparatuur.</li>
            </ul>
            
            <h5>3. Aansprakelijkheidsverzekering</h5>
            <p>Deze verzekering dekt schade die jij (of je huisgenoten) veroorzaakt aan anderen of hun eigendommen.</p>
            <ul>
              <li><strong>Waarom belangrijk:</strong> Als bijvoorbeeld een lekkage in jouw woning schade veroorzaakt bij de buren, ben jij hiervoor verantwoordelijk.</li>
            </ul>
            
            <h5>4. Overlijdensrisicoverzekering</h5>
            <p>Bij het afsluiten van een hypotheek kan een overlijdensrisicoverzekering verplicht zijn. Hiermee wordt een deel van de hypotheek afgelost als jij of je partner overlijdt.</p>
            <ul>
              <li><strong>Niet altijd verplicht:</strong> Bij sommige hypotheekvormen, zoals een hypotheek met een lage lening ten opzichte van de woningwaarde, is deze verzekering niet verplicht, maar wel verstandig.</li>
            </ul>
            
            <h5>5. Rechtsbijstandverzekering</h5>
            <p>Een rechtsbijstandverzekering kan handig zijn als er juridische conflicten ontstaan, bijvoorbeeld met buren of een aannemer tijdens een verbouwing.</p>
            <ul>
              <li><strong>Check de voorwaarden:</strong> Niet alle conflicten worden standaard gedekt, dus kijk of het pakket past bij jouw situatie.</li>
            </ul>
            
            <h5>6. Woonlastenverzekering</h5>
            <p>Deze verzekering dekt (een deel van) je hypotheeklasten als je door ziekte of werkloosheid tijdelijk geen inkomen hebt.</p>
            <ul>
              <li><strong>Overweging:</strong> Dit is geen verplichte verzekering, maar kan rust geven als je een onzeker inkomen hebt.</li>
            </ul>
            
            <h5>Tips voor het regelen van verzekeringen</h5>
            <ul>
              <li><strong>Voorkom dubbele dekking:</strong> Controleer goed welke verzekeringen al via de VvE zijn geregeld.</li>
              <li><strong>Vergelijk verzekeraars:</strong> Gebruik vergelijkingswebsites om de beste prijs en voorwaarden te vinden.</li>
              <li><strong>Pas dekking aan jouw situatie aan:</strong> Oververzekeren kost onnodig geld, maar onderverzekeren kan problemen geven bij schade.</li>
            </ul>
            
            <h5>Conclusie</h5>
            <p>De juiste verzekeringen beschermen jou, je woning en je spullen tegen onverwachte gebeurtenissen. Controleer bij de VvE welke verzekeringen al geregeld zijn en sluit zelf de verzekeringen af die nodig zijn voor jouw specifieke situatie. Zo kun je met een gerust hart genieten van je nieuwe woning!</p>
          `
        },
        {
          elementId: "verbouwing-tips",
          title: "Tips voor mogelijke verbouwingen",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Verbouwen na de koop: Waar moet je op letten bij grote en kleine verbouwingen?</h4>
            <p>Gefeliciteerd, je hebt een woning gekocht! Of het nu gaat om een flinke renovatie of een paar kleine aanpassingen, verbouwen is dé manier om van je nieuwe huis echt jouw thuis te maken. Maar voordat je begint, zijn er een aantal belangrijke zaken waar je rekening mee moet houden. Van vergunningen en bouwregels tot het omgaan met buren: een goede voorbereiding voorkomt problemen en zorgt ervoor dat jouw project soepel verloopt.</p>
            
            <h5>1. Grote versus kleine verbouwingen: wat moet je weten?</h5>
            <h6>Grote verbouwingen</h6>
            <p>Bij grote projecten, zoals het plaatsen van een dakkapel, uitbouwen van de woning of verplaatsen van muren, zijn er vaak extra stappen nodig:</p>
            <ul>
              <li><strong>Vergunningen:</strong> Controleer via het omgevingsloket (www.omgevingsloket.nl) of je een vergunning nodig hebt. Veel grote verbouwingen vereisen een vergunning van de gemeente.</li>
              <li><strong>Constructieve aanpassingen:</strong> Laat draagmuren altijd beoordelen door een constructeur om schade of instorting te voorkomen.</li>
              <li><strong>Planning en budget:</strong> Maak een realistische planning en reserveer een buffer voor onverwachte kosten.</li>
            </ul>
            <h6>Kleine verbouwingen</h6>
            <p>Voor kleinere aanpassingen, zoals schilderen of het vervangen van een vloer, heb je meestal geen vergunning nodig. Toch zijn er aandachtspunten:</p>
            <ul>
              <li><strong>Check de ondergrond:</strong> Zorg dat de vloer stevig genoeg is voor bijvoorbeeld nieuwe tegels of zware apparatuur.</li>
              <li><strong>Kies duurzame materialen:</strong> Dit scheelt op de lange termijn in onderhoud en energiekosten.</li>
            </ul>
            
            <h5>2. Appartementen en de rol van de VvE</h5>
            <p>Bij appartementen gelden vaak regels van de Vereniging van Eigenaren (VvE). Controleer wat je wel en niet mag aanpassen.</p>
            <ul>
              <li><strong>Grote verbouwingen:</strong> Alles wat invloed heeft op gemeenschappelijke delen, zoals muren of leidingen, moet worden besproken met de VvE.</li>
              <li><strong>Geluidsisolatie:</strong> Bij een nieuwe vloer moet je vaak voldoen aan eisen voor geluidsisolatie. Vraag de VvE naar de exacte regels.</li>
              <li><strong>Kleine aanpassingen:</strong> Cosmetische aanpassingen, zoals schilderen of het vervangen van binnendeuren, hoef je meestal niet te melden. Controleer het huishoudelijk reglement voor uitzonderingen.</li>
            </ul>
            
            <h5>3. Praktische tips voor een soepele verbouwing</h5>
            <h6>Vergunningen en regels</h6>
            <ul>
              <li>Controleer altijd of een vergunning nodig is, ook voor kleinere projecten.</li>
              <li>Overweeg energiebesparende subsidies bij isolatie of zonnepanelen.</li>
            </ul>
            <h6>Stortcontainers en afval</h6>
            <ul>
              <li>Regel een container en controleer of je een vergunning nodig hebt voor plaatsing.</li>
              <li>Houd rekening met afvalscheiding om kosten te besparen.</li>
            </ul>
            <h6>Houd buren te vriend</h6>
            <ul>
              <li>Informeer buren vooraf over je plannen en tijdsbestek.</li>
              <li>Beperk overlast door binnen normale werktijden te werken.</li>
            </ul>
            
            <h5>4. Veiligheid en professionals inschakelen</h5>
            <ul>
              <li>Schakel professionals in voor complexe klussen, zoals elektriciteit en loodgieterswerk.</li>
              <li>Vraag offertes op en controleer referenties van bedrijven.</li>
            </ul>
            
            <h5>5. Checklist: Wat moet je regelen voor je begint?</h5>
            <h6>Vergunningen en regels</h6>
            <ul>
              <li>Check of je een vergunning nodig hebt.</li>
              <li>Vraag toestemming van de VvE bij appartementen.</li>
            </ul>
            <h6>Voorbereiding</h6>
            <ul>
              <li>Maak een planning en budget.</li>
              <li>Regel stortcontainers en informeer buren.</li>
            </ul>
            <h6>Tijdens de verbouwing</h6>
            <ul>
              <li>Houd werkuren beperkt om overlast te minimaliseren.</li>
              <li>Zorg voor een opgeruimde werkplek, ook buiten.</li>
            </ul>
            <h6>Na de verbouwing</h6>
            <ul>
              <li>Controleer het eindresultaat en laat restafval ophalen.</li>
              <li>Los eventuele klachten met buren op.</li>
            </ul>
            
            <h5>Conclusie</h5>
            <p>Verbouwen na de aankoop van een woning kan spannend en uitdagend zijn, maar met de juiste voorbereiding en aandacht voor details wordt het een succes. Zorg dat je alle vergunningen en regels op orde hebt, houd rekening met buren, en werk met een duidelijke planning. Zo creëer je niet alleen jouw ideale huis, maar behoud je ook een goede band met de buurt. Veel succes met je project!</p>
          `
        },
        {
          elementId: "belasting-info",
          title: "Belastingaangifte informatie",
          templates: [],
          articleHtml: `
            <h4 class="secondary">Waar let je op bij je belastingaangifte en welke kosten kun je aftrekken?</h4>
            <p>Je hebt de sleutels van je nieuwe woning in handen. Gefeliciteerd! Naast alle leuke zaken zoals inrichten en verhuizen, zijn er ook een aantal financiële en fiscale aandachtspunten. Hieronder vind je de belangrijkste zaken voor je eerstvolgende belastingaangifte én welke kosten je vooral moet bewaren om te kijken of ze aftrekbaar zijn.</p>
            
            <h5>Hypotheekrenteaftrek</h5>
            <ul>
              <li>De rente die je betaalt over de lening voor je eigen woning, mag je onder bepaalde voorwaarden aftrekken in box 1 (inkomen uit werk en woning).</li>
              <li>Je moet wel voldoen aan de aflossingseis: bij een annuïteiten- of lineaire hypotheek is dit in de meeste gevallen automatisch het geval.</li>
              <li>Betaal je maandelijks of jaarlijks rente? Het bedrag dat je daadwerkelijk in dat kalenderjaar hebt betaald, is relevant voor je aangifte.</li>
            </ul>
            
            <h5>Notariskosten voor de hypotheekakte</h5>
            <ul>
              <li>Kosten die direct te maken hebben met het afsluiten van de hypotheek, mag je aftrekken.</li>
              <li>Het gaat dan specifiek om de notariskosten en inschrijfkosten bij het Kadaster voor de hypotheekakte.</li>
              <li>De kosten voor de transportakte (waarmee de woning officieel op jouw naam komt) zijn echter niet aftrekbaar. Bewaar dus altijd een gespecificeerde factuur van de notaris, zodat je precies weet wat je wel en niet kunt opvoeren.</li>
            </ul>
            
            <h5>Advies- en bemiddelingskosten</h5>
            <ul>
              <li>Heb je een hypotheekadviseur ingeschakeld of een bemiddelaar betaald om je hypotheek rond te krijgen? Ook die kosten kunnen (deels) aftrekbaar zijn.</li>
              <li>Kijk goed naar de specificatie op de factuur. Als er ook andere diensten in rekening zijn gebracht (bijvoorbeeld een overlijdensrisicoverzekering of financieel advies dat niet hypotheek-gerelateerd is), dan kunnen die delen niet aftrekbaar zijn.</li>
            </ul>
            
            <h5>Taxatiekosten</h5>
            <ul>
              <li>Een taxatierapport dat verplicht is gesteld door de geldverstrekker om de hypotheek te krijgen, is aftrekbaar.</li>
              <li>Let erop dat als je de taxatie hebt laten uitvoeren voor andere doeleinden (bijvoorbeeld voor een verbouwingsofferte zonder dat de geldverstrekker het vroeg), het dan mogelijk niet aftrekbaar is.</li>
            </ul>
            
            <h5>Eventuele bouwkundige keuring</h5>
            <ul>
              <li>Dit is meestal niet aftrekbaar, tenzij de keuring verplicht was om de hypotheek te kunnen krijgen. Dat moet dan wél duidelijk in de voorwaarden van de geldverstrekker staan.</li>
            </ul>
            
            <h5>Betaalde boeterente of oversluitkosten</h5>
            <ul>
              <li>Heb je een bestaande hypotheek overgesloten en betaalde je boeterente? Ook die rente kan in veel gevallen aftrekbaar zijn.</li>
              <li>Let goed op de spelregels: de boeterente moet gaan over een hypotheek die je gebruikt voor de financiering van jouw eigen woning.</li>
            </ul>
            
            <h5>Verzekeringen gerelateerd aan de hypotheek</h5>
            <ul>
              <li>Een overlijdensrisicoverzekering (ORV) die verplicht is gesteld door de geldverstrekker, is niet aftrekbaar. De betaalde premie komt niet in aanmerking voor hypotheekrenteaftrek.</li>
              <li>Een opstalverzekering is verplicht bij een hypotheek, maar de premie is niet aftrekbaar.</li>
            </ul>
            
            <h5>Bewaar al je facturen gestructureerd</h5>
            <ul>
              <li>Maak een aparte map (digitaal of fysiek) voor alle woning- en hypotheekgerelateerde documenten. Zo kun je bij de aangifte precies terugvinden welke kosten je hebt gemaakt.</li>
              <li>Bewaar ook offertes en specificaties, zodat je kunt aantonen welke posten puur voor de hypotheekafsluiting waren en welke niet.</li>
            </ul>
            
            <h5>Check je voorlopige aanslag</h5>
            <ul>
              <li>Als je voor het eerst een eigen woning hebt, kun je in aanmerking komen voor een voorlopige teruggave via de Belastingdienst. Hiermee ontvang je maandelijks je (geschatte) hypotheekrenteaftrek.</li>
              <li>Je kunt dit aanvragen of wijzigen op <a href="https://www.belastingdienst.nl" target="_blank">belastingdienst.nl</a>. Let op dat je schatting zo nauwkeurig mogelijk is, want bij grote afwijkingen moet je later bijbetalen of krijg je geld terug.</li>
            </ul>
            
            <h5>Tot slot</h5>
            <p>Het is een hoop geregel, maar door netjes je facturen te bewaren en te controleren welke kosten gerelateerd zijn aan de hypotheek, maak je straks gebruik van de fiscale voordelen waar je recht op hebt. Twijfel je of iets aftrekbaar is? Raadpleeg een financieel adviseur of check de website van de Belastingdienst (<a href="https://www.belastingdienst.nl" target="_blank">belastingdienst.nl</a>) voor actuele en gedetailleerde informatie.</p>
            <p>Geniet ondertussen vooral van je nieuwe woning en het inrichten van je eigen plek!</p>
          `
        }
      ]
    }
  ];
</script>

<!-- Now render them in your markup. For example: -->
<main>
  <h1 class="secondary">Zelf kopen - MoveRoof</h1>
  <p>Bij MoveRoof begrijpen we dat het zelf kopen van een woning een grote stap is...</p>
  <!-- ... your hero section, etc. ... -->

  <!-- Render the stages: -->
  {#each stages as stage}
    <Stage
      stageId={stage.stageId}
      title={stage.title}
      description={stage.description}
      templateCount={stage.templateCount}
      elements={stage.elements}
      isOpen={openStageId === stage.stageId}
      on:toggleStage={onToggleStage}
    />
  {/each}
</main>

<style>
  /* Add or adapt your styling as needed. */
</style>
  