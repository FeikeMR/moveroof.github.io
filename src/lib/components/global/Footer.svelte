<script>
  // Your Svelte script logic (if any) goes here.
</script>

<style>
  /* Main footer container */
  .footer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: #333;
    gap: 25px;
  }

  /* Top section with brand and icons */
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  /* Brand area (logo and slogan) */
  .brand {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .logo {
    width: auto;
    height: 60px;
  }
  .logo-full {
    display: block;
  }
  .logo-icon {
    display: none;
  }

  #slogan, #agent-type {
    color: #F4F4F4;
    margin: 0;
    font-size: 24px;
    font-weight: 400;
    margin-top: 10px;
  }

  /* Icon row for “Ongebonden makelaar” and funda icon */
  .icon-row {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
  }

  #icon-funda {
    height: 30px;
    width: auto;
  }

  /* Divider line */
  .divider {
    border: 0.5px solid #787878;
    width: 80%;
  }

  /* Columns container */
  .columns {
    display: flex;
    justify-content: space-between;
    width: 80%;
    gap: 20px;
  }
  .column {
    flex: 1;
  }
  .column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .column li {
    margin-bottom: 15px;
  }
  .column h3 {
    font-size: 22px;
    color: #F86D11;
    margin-bottom: 10px;
  }
  .column a,
  .column p {
    color: #F4F4F4;
    text-decoration: none;
  }
  .column a:hover,
  .bottom a:hover {
    color: #F86D11;
    cursor: pointer;
  }
  .column p {
    margin-bottom: 15px;
  }

  /* Bottom strip */
  .bottom {
    width: 100%;
    background-color: #333;
    padding: 10px 20px;
    text-align: center;
  }
  .bottom a,
  .bottom span {
    color: #F4F4F4;
    margin: 0 5px;
    text-decoration: none;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .top {
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 5px;
    }
    #slogan {
      font-size: 24px;
    }
    #agent-type {
      font-size: 20px;
    }
    .columns {
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 2em;
    }
    .column {
      width: 100%;
      text-align: center;
    }
    .divider {
      width: 90%;
    }
    /* On mobile, show the icon logo instead of the full logo */
    .logo-full {
      display: none;
    }
    .logo-icon {
      display: block;
      height: 40px;
    }
  }
</style>

<footer class="footer">
  <!-- Top section -->
  <div class="top">
    <div class="brand">
      <img
        src="/visuals/logos/full-logo/full-logo-yellow-orange-light.svg"
        alt="Full MoveRoof Logo"
        class="logo logo-full"
      />
      <img
        src="/visuals/logos/icon-logo/logo-icon-yellow-orange-light.svg"
        alt="MoveRoof Icon Logo"
        class="logo logo-icon"
      />
      <p id="slogan">Jouw huis. jouw deal</p>
    </div>
  </div>

  <!-- Divider -->
  <div class="divider"></div>

  <!-- Columns with navigation links -->
  <div class="columns">
    <!-- Column 1: Over ons -->
    <div class="column">
      <h3>Over ons</h3>
      <ul>
        <li>
          <a href="/zelf-verkopen">
            Onze verkooppaketten
          </a>
        </li>
        <li>
          <a href="/over-moveroof">
            Over MoveRoof
          </a>
        </li>
        <li>
          <a href="/verkoop-begeleiding">
            Begeleiding bij verkopen
          </a>
        </li>
        <li>
          <a href="/koop-begeleiding">
            Begeleiding bij aankopen
          </a>
        </li>
      </ul>
    </div>

    <!-- Column 2: Verkoop begeleiding -->
    <div class="column">
      <h3>Verkoop begeleiding</h3>
      <ul>
        <li>
          <a href="/verkoop-begeleiding#klaar-voor-verkoop">
            Klaar om te verkopen?
          </a>
        </li>
        <li>
          <a href="/verkoop-begeleiding#vraagprijs-bepalen">
            De vraagprijs bepalen
          </a>
        </li>
        <li>
          <a href="/verkoop-begeleiding#bezichtigingen-geven">
            Tips voor bezichtigingen
          </a>
        </li>
        <li>
          <a href="/verkoop-begeleiding#pro-onderhandelingen">
            Onderhandelingen als een pro
          </a>
        </li>
        <li>
          <a href="/verkoop-begeleiding#verkoopovereenkomst">
            De overeenkomst opstellen
          </a>
        </li>
        <li>
          <a href="/verkoop-begeleiding#eindinspectie-tips">
            Tips voor de eindinspectie
          </a>
        </li>
      </ul>
    </div>

    <!-- Column 3: Koop begeleiding -->
    <div class="column">
      <h3>Koop begeleiding</h3>
      <ul>
        <li>
          <a href="/koop-begeleiding#kosten-woningbezit">
            Totale kosten woningaankoop
          </a>
        </li>
        <li>
          <a href="/koop-begeleiding#verkoopmakelaar-begrijpen">
            Verkoopmakelaars begrijpen
          </a>
        </li>
        <li>
          <a href="/koop-begeleiding#slim-bieden">
            Slim bieden
          </a>
        </li>
        <li>
          <a href="/koop-begeleiding#verplichte-documenten">
            Verplichte hypotheek documenten
          </a>
        </li>
        <li>
          <a href="/koop-begeleiding#koopovereenkomst-taal">
            De taal van de koopovereenkomst
          </a>
        </li>
        <li>
          <a href="/koop-begeleiding#belasting-info">
            De Belastingaangifte na de aankoop
          </a>
        </li>
      </ul>
    </div>

    <!-- Column 4: Contact -->
    <div class="column">
      <h3>Contact</h3>
      <p>Email: moveroofnl@gmail.com</p>
      <p>KvK nummer: 96269960</p>
      <p>Persoon hierachter: Feike Leemkuil</p>
    </div>
  </div>
</footer>

<!-- Bottom strip -->
<div class="bottom">
  <a href="/terms-of-service">Algemene voorwaarden</a>
  <span>|</span>
  <a href="/privacy-statement">Privacy</a>
  <span>|</span>
  <a href="XXX">Cookies</a>
</div>
