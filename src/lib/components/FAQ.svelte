<script>
    let faqs = [
      {
        question: "Komt mijn woning op Funda?",
        answer: "Jazeker. We plaatsen jou woning direct op Funda na aanvraag. Fun fact: MoveRoof is een van de weinige (enige?) ongebonden makelaars op Funda.",
        open: false
      },
      {
        question: "Heb ik verkoopervaring nodig om te verkopen via MoveRoof?",
        answer: "Nee, MoveRoof geeft gratis advies en instructies gedurende het verkoopproces. Verkopen = simpel via MoveRoof.",
        open: false
      },
      {
        question: "Wat als ik hulp nodig heb tijdens de verkoop?",
        answer: "Als ik toch een onderdeel niet voldoende heb toegelicht ben ik bereikbaar voor hulp.",
        open: false
      },
      {
        question: "Hoe snel kan ik mijn woning verkopen?",
        answer: "Sneller dan bij traditionele makelaars, maar dit blijft altijd afhankelijk van marktvraag, hier kunnen wij samen naast goede marketing niet veel aan veranderen.",
        open: false
      },
      {
        question: "Wat is een ongebonden makelaar?",
        answer: "MoveRoof is een ongebonden makelaar, dit betekent dat wij niet zijn aangesloten bij een branche vereniging zoals bijv. de NVM. Dit is een bewuste keuze geweest om onafhankelijk enkel en alleen in het voordeel van de consument te kunnen handelen.",
        open: false
      },
      {
        question: "Kan ik mijn woningpagina elk moment verwijderen of aanpassen?",
        answer: "Ja. Echter, omdat MoveRoof geen data verwerkt zal dit verwijderen/aanpassen in contact met mij moeten. Gelukkig sta ik altijd voor je klaar.",
        open: false
      }
    ];
  
    // Toggle an FAQ item open/closed
    function toggleFAQ(index) {
      faqs[index].open = !faqs[index].open;
    }
</script>
  
<style>
    .FAQ {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 30px auto 0 auto;
      width: 80%;
    }
  
    .FAQ > div:first-child {
      width: 55%;
    }
  
    .FAQ > div.FAQ-questions {
      width: 45%;
    }
  
    #FAQ-img {
      display: block;
      width: 55%;
      height: auto;
    }
  
    .FAQ-questions {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  
    .FAQ-question {
      display: flex;
      flex-direction: column;
      gap: 4px;
      margin-bottom: 12px;
    }
  
    .FAQ-question h6 {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-weight: 600;
      margin: 0;
    }
  
    .FAQ-question img {
      margin-right: 10px;
      width: 30px;
      transition: transform 0.5s ease;
    }
  
    .FAQ-question p {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      margin: 0;
      transition: max-height 0.8s ease, opacity 0.8s ease;
    }
  
    .FAQ-question.active p {
      max-height: 200px;
      opacity: 1;
      margin: 10px 0 0 28px;
    }
  
    .FAQ-question.active img {
      transform: rotate(180deg);
    }
  
    /* Mobile FAQ */
    @media (max-width: 768px) {
      .FAQ {
        flex-direction: column;
        align-items: center;
        margin: 30px auto 0 auto;
        width: 90%;
        gap: 20px;
      }
      .FAQ > div:first-child,
      .FAQ > div.FAQ-questions {
        width: 95%;
      }
      #FAQ-img {
        width: 100%;
      }
      .FAQ-questions {
        align-items: center;
      }
      .FAQ-question {
        margin-bottom: 12px;
      }
      .FAQ-question h6 {
        margin: 0;
      }
      .FAQ-question img {
        width: 30px;
      }
      .FAQ-question p {
        width: 100%;
      }
      .FAQ-question.active p {
        margin: 10px 0 0 28px;
      }
    }
</style>
  
<section>
    <div class="FAQ">
      <div id="FAQ-img">
        <img
          src="/assets/visuals/general/phone-listingpage-mockup.svg"
          alt="phone with listing page mockup"
        />
      </div>
  
      <div class="FAQ-questions">
        <!-- each FAQ item -->
        {#each faqs as faq, i}
          <div
            class="FAQ-question {faq.open ? 'active' : ''}"
            on:click={() => toggleFAQ(i)}
          >
            <h6>
              <img
                src="/assets/visuals/icons/chevron-down-orange.svg"
                alt="chevron"
              />
              {faq.question}
            </h6>
            <p>{faq.answer}</p>
          </div>
        {/each}
      </div>
    </div>
</section>