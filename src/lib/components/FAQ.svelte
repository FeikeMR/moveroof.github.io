<script>
  let faqs = [
    {
      question: "Komt mijn woning op Funda?",
      answer:
        "Jazeker. We plaatsen jou woning direct op Funda na aanvraag. Fun fact: MoveRoof is een van de weinige (enige?) ongebonden makelaars op Funda.",
      open: false
    },
    {
      question: "Heb ik verkoopervaring nodig om te verkopen via MoveRoof?",
      answer:
        "Nee, MoveRoof geeft gratis advies en instructies gedurende het verkoopproces. Verkopen = simpel via MoveRoof.",
      open: false
    },
    {
      question: "Wat als ik hulp nodig heb tijdens de verkoop?",
      answer:
        "Als ik toch een onderdeel niet voldoende heb toegelicht ben ik bereikbaar voor hulp.",
      open: false
    },
    {
      question: "Hoe snel kan ik mijn woning verkopen?",
      answer:
        "Sneller dan bij traditionele makelaars, maar dit blijft altijd afhankelijk van marktvraag, hier kunnen wij samen naast goede marketing niet veel aan veranderen.",
      open: false
    },
    {
      question: "Wat is een ongebonden makelaar?",
      answer:
        "MoveRoof is een ongebonden makelaar, dit betekent dat wij niet zijn aangesloten bij een branche vereniging zoals bijv. de NVM. Dit is een bewuste keuze geweest om onafhankelijk enkel en alleen in het voordeel van de consument te kunnen handelen.",
      open: false
    },
    {
      question: "Kan ik mijn woningpagina elk moment verwijderen of aanpassen?",
      answer:
        "Ja. Echter, omdat MoveRoof geen data verwerkt zal dit verwijderen/aanpassen in contact met mij moeten. Gelukkig sta ik altijd voor je klaar.",
      open: false
    }
  ];

  function toggleFAQ(index) {
    faqs[index].open = !faqs[index].open;
  }
</script>

<style>
  /* FAQ Container */
  .faq {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 30px auto 0;
  }
  /* Left side: image */
  #faq-img {
    width: 55%;
  }
  .faq-image img {
    display: block;
    width: 55%;
    height: auto;
  }
  /* Right side: FAQ list */
  .faq-list {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  /* Each FAQ item */
  .faq-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;
  }
  .faq-item h6 {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    margin: 0;
  }
  .faq-item h6 img {
    margin-right: 10px;
    width: 30px;
    transition: transform 0.5s ease;
  }
  /* Initially, hide answer text with zero max-height, no opacity, and a left padding */
  .faq-item p {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    padding-left: 28px;
    transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
  }
  /* When an FAQ is active, reveal the answer with some top padding */
  .faq-item.active p {
    max-height: 200px;
    opacity: 1;
    padding: 10px 0 0 28px;
  }
  .faq-item.active h6 img {
    transform: rotate(180deg);
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    .faq {
      flex-direction: column;
      align-items: center;
      width: 90%;
      gap: 20px;
    }
    #faq-img,
    .faq-list {
      width: 100%;
    }
    .faq-list {
      align-items: center;
    }
    .faq-item p {
      width: 100%;
    }
  }
</style>

<section class="faq">
      <img id="faq-img"
        src="/visuals/general/phone-listingpage-mockup.svg"
        alt="phone with listing page mockup"
      />

    <div class="faq-list">
      {#each faqs as faq, i}
        <div
          class="faq-item {faq.open ? 'active' : ''}"
          on:click={() => toggleFAQ(i)}
        >
          <h6>
            <img
              src="/visuals/icons/chevron-down-orange.svg"
              alt="chevron"
            />
            {faq.question}
          </h6>
          <p>{faq.answer}</p>
        </div>
      {/each}
    </div>
</section>