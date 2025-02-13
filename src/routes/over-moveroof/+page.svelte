<script>
  // No JS needed for this page
</script>

<svelte:head>
  <title>Over MoveRoof - MoveRoof</title>
</svelte:head>
  
<style>
  /* Container for the entire About page */
  .about-page {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    padding: 10vh 0 3vh;
    gap: 20px;
  }

  .about-intro {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 0 auto;
    text-align: center;
    font-size: 24px;
  }

  .about-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    gap: 10px;
  }

  /* Founder section */
  .founder {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  
  .founder img {
    width: 60%;
    height: auto;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  
  .founder-text {
    padding: 1.5% 0;
    text-align: start;
  }

  /* Mobile/responsive adjustments */
  @media (max-width: 768px) {
    .about-page {
      width: 90%;
      padding-top: 10vh;
    }
    .about-intro {
      width: 100%;
    }
    .founder {
      flex-direction: column;
    }
    .founder img {
      width: 100%;
      order: 2;
    }
    .founder-text {
      text-align: center;
    }
  }
</style>
  
<section class="about-page">
  <!-- Intro -->
  <div class="about-intro">
    <h1 class="secondary">Over MoveRoof</h1>
    <br />
    <h6>
      MoveRoof maakt vastgoedtransacties eenvoudig, transparant en voordelig.
      We helpen huiseigenaren om zonder kosten en zonder gedoe hun woning zelf te verkopen.
    </h6>
    <br />
  </div>

  <!-- Founder section -->
  <div class="about-section">
    <h3 class="secondary">Persoon achter MoveRoof</h3>
    <div class="founder">
      <img
        src="/visuals/general/about-moveroof-me.jpeg"
        alt="Foto van Feike Leemkuil, allesdoener van MoveRoof"
      />
      <div class="founder-text">
        <p>
          Aangezien MoveRoof flink goedkoper is, kan dit twijfels oproepen. 
          Hier een korte toelichting van wie er achter MoveRoof zit.
        </p>
        <br />
        <p>
          Mijn naam is Feike Leemkuil en ik werk fulltime als Programma Manager bij ANVA. 
          Hier verdien ik het inkomen waarmee ik onze rekeningen kan betalen.
        </p>
        <br />
        <p>
          Vanaf mijn eerste ervaringen met woningbezichtigingen en het kopen van mijn eigen 
          huis was ik verbaasd over de complexiteit en de hoge kosten van vastgoedtransacties. 
          Dit frustreerde mij genoeg om te leren programmeren, zodat ik deze processen 
          geleidelijk zelf kon vereenvoudigen, aantrekkelijker, mooier en goedkoper kon maken 
          voor consumenten.
        </p>
        <br />
        <p>
          MoveRoof blijft onafhankelijk van investeerders. Hierdoor kan ik mij volledig richten 
          op het belang van de consument zonder enig compromis.
        </p>
        <br />
        <p>
          Dit betekent dat we samen kunnen groeien naar een complete 
          vastgoedtransactie-oplossing, ingericht en gebouwd voor de consument. Elke verdiende 
          euro omzet gaat hierom direct terug in MoveRoof, ik ontvang vanuit MoveRoof geen 
          salaris.
        </p>
      </div>
    </div>
  </div>

  <!-- Complexity of real estate section -->
  <div class="about-section">
    <h3 class="secondary">Vastgoedtransacties zijn onnodig complex</h3>
    <p>
      Om een woning te verkopen zijn ongeveer tien partijen nodig om de transactie rond te 
      krijgen. Dit zijn meer partijen dan nodig is bij het produceren en verkopen van 
      medicijnen of het importeren en exporteren van goederen over de hele wereld.
    </p>
    <p>
      Dat is natuurlijk al zonde, maar al deze partijen willen geld verdienen en hebben hun 
      eigen systemen. Dit leidt tot veel handmatig werk, het meerdere keren delen van 
      informatie, hoge kosten en de noodzaak dat ze allemaal naadloos samenwerken.
    </p>
    <p>
      Sommige mensen hebben al ingezien dat twee partijen (verkoop- en aankoopmakelaars) niet 
      nodig zijn. Maar dat is slechts het begin van de verandering die we nodig hebben in deze 
      markt.
    </p>
  </div>

  <!-- Future of MoveRoof section -->
  <div class="about-section">
    <h3 class="secondary">Hoe ziet de toekomst van MoveRoof eruit?</h3>
    <p>
      De visie van MoveRoof is een platform waarop verkopers en kopers direct contact met 
      elkaar hebben en MoveRoof de enige partij is die nodig is voor de hele transactie. 
      Je kunt hier bezichtigingen plannen, bieden, hypotheken aanvragen, kosten berekenen, 
      aktes ondertekenen en meer.
    </p>
    <p>
      Wij zien een toekomst waarin elke woning op MoveRoof wordt vermeld met een grondige 
      bouwkundige inspectie en inspectierapport, een open biedingsproces en tools die kopers 
      inzicht geven in de totale woningbezitkosten.
    </p>
    <p>
      Dit maakt het (ver)kopen van woningen makkelijker, transparanter en goedkoper. Bovendien 
      hoef je niet je informatie bij tien verschillende partijen te delen.
    </p>
    <h4>Op naar een betere toekomst!</h4>
  </div>
</section>