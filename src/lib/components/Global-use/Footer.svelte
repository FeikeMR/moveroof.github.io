<script>
  // Currently no JS needed.
</script>

<style>
  /* Main footer container */
  #footer-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: #333333;
    gap: 25px;
  }

  /* Brand Row (top row) */
  #footer-row-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
  #footer-brand-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  /* Two different logos: 'full' logo & 'icon' logo */
  #footer-logo-full,
  #footer-logo-icon {
    width: auto;
    height: 60px;
  }

  /* Full logo (visible on desktop), icon logo (visible on mobile) */
  .footer-logo-full {
    display: block;
  }
  .footer-logo-icon {
    display: none;
  }

  /* Slogan text */
  .footer-white-text {
    color: #F4F4F4;
    margin: 0; /* remove default <p> margin if needed */
  }
  #footer-brand-group p {
    font-size: 24px;
    font-weight: 400;
    margin-top: 10px; /* slight top offset */
  }

  /* “Ongebonden makelaar” and funda icon row */
  #footer-icon-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
  }
  #footer-funda-icon {
    height: 30px;
    width: auto;
  }

  /* Divider line */
  #footer-divider {
    border: 0.5px solid #787878;
    width: 80%;
  }

  /* The second row of the footer (selling, buying, about, contact) */
  #footer-row-main {
    display: flex;
    justify-content: space-between;
    width: 80%;
    gap: 20px;
  }
  .footer-col {
    flex: 1;
  }

  /* “Verkoop begeleiding” column */
  #footer-col-selling ul,
  #footer-col-buying ul,
  #footer-col-about ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  #footer-col-selling li,
  #footer-col-buying li,
  #footer-col-about li {
    margin-bottom: 15px;
  }

  /* “Contact” column */
  #footer-col-contact p {
    margin-bottom: 15px;
  }

  /* Shared styles for each column’s heading */
  .footer-col h3 {
    font-size: 22px;
    color: #F86D11;
    margin-bottom: 10px;
  }

  /* Footer link styles */
  .footer-col a {
    text-decoration: none;
    color: #F4F4F4;
  }

  /* White bottom strip with links */
  #footer-bottom-strip {
    width: 100%;
    background-color: #333333;
    padding: 10px 20px;
    text-align: center;
  }
  #footer-bottom-strip a {
    text-decoration: none;
    color: #F4F4F4;
    margin: 0 5px;
  }
  #footer-bottom-strip span {
    color: #F4F4F4;
    margin: 0 5px;
  }

  /* Responsive (mobile) */
  @media (max-width: 768px) {
    #footer-row-top {
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 15px;
    }
    #footer-row-main {
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 20px;
    }
    .footer-col {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
    }
    #footer-divider {
      width: 90%;
    }

    /* Show icon logo on mobile, hide full logo */
    .footer-logo-full {
      display: none;
    }
    .footer-logo-icon {
      display: block;
      height: 40px;
    }
  }
</style>

<footer id="footer-section">
  <!-- Top row: brand + “Ongebonden makelaar” + funda icon -->
  <div id="footer-row-top">
    <div id="footer-brand-group">
      <img
        id="footer-logo-full"
        class="footer-logo-full"
        src="/assets/visuals/logos/full-logo/full-logo-yellow-orange-light.svg"
        alt="Full MoveRoof Logo"
      />
      <img
        id="footer-logo-icon"
        class="footer-logo-icon"
        src="/assets/visuals/logos/icon-logo/logo-icon-yellow-orange-light.svg"
        alt="MoveRoof Icon Logo"
      />
      <p class="footer-white-text">Jouw huis. jouw deal</p>
    </div>

    <div id="footer-icon-row">
      <p class="footer-white-text">Ongebonden makelaar</p>
      <img
        id="footer-funda-icon"
        src="/assets/visuals/icons/funda-icon.png"
        alt="Funda logo icon"
      />
    </div>
  </div>

  <!-- Divider line -->
  <div id="footer-divider"></div>

  <!-- Second row: 4 columns (selling, buying, about, contact) -->
  <div id="footer-row-main">
    <!-- 1) Verkoop begeleiding -->
    <div class="footer-col" id="footer-col-selling">
      <h3>Verkoop begeleiding</h3>
      <ul>
        <li>
          <a
            href="/svelte/verkoop-begeleiding.html#klaar-voor-verkoop"
            class="footer-white-text"
            >Klaar om te verkopen?</a
          >
        </li>
        <li>
          <a
            href="/svelte/verkoop-begeleiding.html#vraagprijs-bepalen"
            class="footer-white-text"
            >De vraagprijs bepalen</a
          >
        </li>
        <li>
          <a
            href="/svelte/verkoop-begeleiding.html#bezichtigingen-geven"
            class="footer-white-text"
            >Tips voor bezichtigingen</a
          >
        </li>
        <li>
          <a
            href="/svelte/verkoop-begeleiding.html#pro-onderhandelingen"
            class="footer-white-text"
            >Onderhandelingen als een pro</a
          >
        </li>
        <li>
          <a
            href="/svelte/verkoop-begeleiding.html#verkoopovereenkomst"
            class="footer-white-text"
            >De overeenkomst opstellen</a
          >
        </li>
        <li>
          <a
            href="/svelte/verkoop-begeleiding.html#eindinspectie-tips"
            class="footer-white-text"
            >Tips voor de eindinspectie</a
          >
        </li>
      </ul>
    </div>

    <!-- 2) Koop begeleiding -->
    <div class="footer-col" id="footer-col-buying">
      <h3>Koop begeleiding</h3>
      <ul>
        <li>
          <a
            href="/svelte/koop-begeleiding.html#kosten-woningbezit"
            class="footer-white-text"
            >Totale kosten woningaankoop</a
          >
        </li>
        <li>
          <a
            href="/svelte/koop-begeleiding.html#verkoopmakelaar-begrijpen"
            class="footer-white-text"
            >Verkoopmakelaars begrijpen</a
          >
        </li>
        <li>
          <a
            href="/svelte/koop-begeleiding.html#slim-bieden"
            class="footer-white-text"
            >Slim bieden</a
          >
        </li>
        <li>
          <a
            href="/svelte/koop-begeleiding.html#verplichte-documenten"
            class="footer-white-text"
            >Verplichte hypotheek documenten</a
          >
        </li>
        <li>
          <a
            href="/svelte/koop-begeleiding.html#koopovereenkomst-taal"
            class="footer-white-text"
            >De taal van de koopovereenkomst</a
          >
        </li>
        <li>
          <a
            href="/svelte/koop-begeleiding.html#belasting-info"
            class="footer-white-text"
            >De Belastingaangifte na de aankoop</a
          >
        </li>
      </ul>
    </div>

    <!-- 3) Over ons -->
    <div class="footer-col" id="footer-col-about">
      <h3>Over ons</h3>
      <ul>
        <li>
          <a href="/svelte/zelf-verkopen.html" class="footer-white-text"
            >Onze verkooppaketten</a
          >
        </li>
        <li>
          <a href="/svelte/over-moveroof.html" class="footer-white-text"
            >Over MoveRoof</a
          >
        </li>
        <li>
          <a href="/svelte/verkoop-begeleiding.html" class="footer-white-text"
            >Begeleiding bij verkopen</a
          >
        </li>
        <li>
          <a href="/svelte/koop-begeleiding.html" class="footer-white-text"
            >Begeleiding bij aankopen</a
          >
        </li>
      </ul>
    </div>

    <!-- 4) Contact -->
    <div class="footer-col" id="footer-col-contact">
      <h3>Contact</h3>
      <p class="footer-white-text">Email: moveroofnl@gmail.com</p>
      <p class="footer-white-text">KvK nummer: 96269960</p>
      <p class="footer-white-text">Persoon hierachter: Feike Leemkuil</p>
    </div>
  </div>
</footer>

<!-- White bottom strip with small text links -->
<div id="footer-bottom-strip">
  <a href="/svelte/terms-of-service.html">Algemene voorwaarden</a>
  <span>|</span>
  <a href="/svelte/privacy-statement.html">Privacy</a>
  <span>|</span>
  <a href="XXX">Cookies</a>
</div>