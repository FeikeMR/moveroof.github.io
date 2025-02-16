import{t as H,b as x,c as V}from"../chunks/B-FElII2.js";import"../chunks/CU8CDMvg.js";import{S as Pe,P as ve,a9 as U,R as de,a8 as e,a7 as p,a5 as d,a4 as o,a6 as c,ay as F,k as s,aH as Re,aI as Ce,ab as ce,$ as Te,aM as Ae}from"../chunks/BPB6zGR0.js";import{l as Ee,e as P,k as qe}from"../chunks/CC-Vp8pk.js";import{S as ie,s as Be}from"../chunks/oyXKRfIe.js";import{b as ze}from"../chunks/Ce8ShSsf.js";import{a as z,r as B}from"../chunks/BfJPdjCu.js";import{i as pe}from"../chunks/Bk6LkYh5.js";import{c as De,o as Le}from"../chunks/BgNj6qsk.js";import{a as He}from"../chunks/BLIClOF5.js";import{i as Ie}from"../chunks/B9bQSa7m.js";import{s as E}from"../chunks/Bjwh0b6H.js";import{b as ne,a as A,p as $e}from"../chunks/DE_it28E.js";import{i as Ke,p as Ne}from"../chunks/dRWcjXu1.js";import{M as Fe}from"../chunks/BGRuzDfG.js";function xe(l,v,r){if(l.multiple)return Ye(l,v);for(var a of l.options){var n=N(a);if(Ke(n,v)){a.selected=!0;return}}(!r||v!==void 0)&&(l.selectedIndex=-1)}function Ve(l,v){Pe(()=>{var r=new MutationObserver(()=>{var a=l.__value;xe(l,a)});return r.observe(l,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function Ue(l,v,r=v){var a=!0;Ee(l,"change",n=>{var i=n?"[selected]":":checked",u;if(l.multiple)u=[].map.call(l.querySelectorAll(i),N);else{var m=l.querySelector(i)??l.querySelector("option:not([disabled])");u=m&&N(m)}r(u)}),Pe(()=>{var n=v();if(xe(l,n,a),a&&n===void 0){var i=l.querySelector(":checked");i!==null&&(n=N(i),r(n))}l.__value=n,a=!1}),Ve(l)}function Ye(l,v){for(var r of l.options)r.selected=~v.indexOf(N(r))}function N(l){return"__value"in l?l.__value:l.value}var We=H('<header class="header svelte-17im5kk"><div class="header__menu svelte-17im5kk"><img class="header__menu-icon svelte-17im5kk" alt="Menu Icon"> <p class="svelte-17im5kk">MENU</p></div> <a href="/" class="svelte-17im5kk"><img class="header__logo svelte-17im5kk" alt="Full Logo"></a> <!></header>');function Xe(l,v){ve(v,!1);const r=De();let a=!1,n=p("/visuals/icons/menu-icon-light.svg"),i=p("/visuals/logos/full-logo/full-logo-yellow-orange-light.svg"),u=p("#F4F4F4"),m=p("transparent"),D=p("none");function y(){const b=window.location.pathname;return b==="/"||b==="/home"||b.startsWith("/listings/")}function _(){a?(e(m,"#F4F4F4"),e(D,"0px 4px 6px rgba(0,0,0,0.1)"),e(n,"/visuals/icons/menu-icon-dark.svg"),e(u,"#333333"),e(i,"/visuals/logos/full-logo/full-logo-yellow-orange-dark.svg")):(e(D,"none"),e(m,y()?"transparent":"#333333"),e(n,"/visuals/icons/menu-icon-light.svg"),e(u,"#F4F4F4"),e(i,"/visuals/logos/full-logo/full-logo-yellow-orange-light.svg"))}function f(){a=window.scrollY>0,_()}function g(){r("openMenu")}function S(){r("openDealPopup")}Le(()=>(y()||e(m,"#333333"),window.addEventListener("scroll",f),f(),()=>{window.removeEventListener("scroll",f)})),He(()=>{a=window.scrollY>0,_()}),pe();var h=We(),w=d(h),k=d(w),O=o(k,2);c(w);var R=o(w,2),L=d(R);c(R);var M=o(R,2);ie(M,{id:"header-button",$$events:{click:S},children:(b,I)=>{F();var C=V("Kies jouw deal");x(b,C)},$$slots:{default:!0}}),c(h),U(()=>{z(h,"style",`background-color: ${s(m)??""}; box-shadow: ${s(D)??""};`),z(w,"style",`color: ${s(u)??""};`),z(k,"src",s(n)),z(O,"style",`color: ${s(u)??""}`),z(L,"src",s(i))}),P("click",w,g),x(l,h),de()}var Je=H('<div class="drawer-links svelte-1n7pmmo"><a href="/" style="animation-delay: 0.1s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Home</h4></a> <a href="/aanbod" style="animation-delay: 0.2s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Aanbod</h4></a> <a href="/zelf-verkopen" style="animation-delay: 0.3s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Zelf je huis verkopen</h4></a> <a href="/verkoop-begeleiding" style="animation-delay: 0.4s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Verkoop begeleiding</h4></a> <a href="/koop-begeleiding" style="animation-delay: 0.5s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Koop begeleiding</h4></a> <a href="/over-moveroof" style="animation-delay: 0.6s" class="svelte-1n7pmmo"><h4 class="svelte-1n7pmmo">Over MoveRoof</h4></a></div>'),Ge=H('<div></div> <div><div class="drawer-close svelte-1n7pmmo"><img class="drawer-close-icon svelte-1n7pmmo" src="/visuals/icons/close-icon.svg" alt="Close Menu"></div>  <!> <div class="button-row"><!> <!></div></div>',1);function Ze(l,v){ve(v,!1);let r=Ne(v,"isOpen",12,!1);const a=De();let n=p(0);function i(){r(!1)}function u(){r(!0)}function m(){a("openFeedback"),i()}function D(){a("openDeal"),i()}Re(()=>(Te(r()),s(n)),()=>{r()&&e(n,s(n)+1)}),Ce(),pe();var y=Ge(),_=ce(y),f=o(_,2),g=d(f),S=d(g);c(g);var h=o(g,2);{var w=L=>{var M=Je(),b=d(M),I=o(b,2),C=o(I,2),q=o(C,2),T=o(q,2),K=o(T,2);c(M),U(()=>z(M,"key",s(n))),P("click",b,i),P("click",I,i),P("click",C,i),P("click",q,i),P("click",T,i),P("click",K,i),x(L,M)};Ie(h,L=>{r()&&L(w)})}var k=o(h,2),O=d(k);Fe(O,{$$events:{click:m},children:(L,M)=>{F();var b=V("Geef feedback");x(L,b)},$$slots:{default:!0}});var R=o(O,2);return Fe(R,{$$events:{click:D},children:(L,M)=>{F();var b=V("Deal kiezen");x(L,b)},$$slots:{default:!0}}),c(k),c(f),U(()=>{E(_,`overlay ${(r()?"active":"")??""} svelte-1n7pmmo`),E(f,`drawer ${(r()?"open":"")??""} svelte-1n7pmmo`)}),P("click",_,i),P("click",S,i),x(l,y),ne(v,"openDrawer",u),de({openDrawer:u})}var Qe=H('<footer class="footer svelte-1oes2r1"><div class="top svelte-1oes2r1"><div class="brand svelte-1oes2r1"><img src="/visuals/logos/full-logo/full-logo-yellow-orange-light.svg" alt="Full MoveRoof Logo" class="logo logo-full svelte-1oes2r1"> <img src="/visuals/logos/icon-logo/logo-icon-yellow-orange-light.svg" alt="MoveRoof Icon Logo" class="logo logo-icon svelte-1oes2r1"> <p id="slogan" class="svelte-1oes2r1">Jouw huis. jouw deal</p></div></div> <div class="divider svelte-1oes2r1"></div> <div class="columns svelte-1oes2r1"><div class="column svelte-1oes2r1"><h3 class="svelte-1oes2r1">Over ons</h3> <ul class="svelte-1oes2r1"><li class="svelte-1oes2r1"><a href="/zelf-verkopen" class="svelte-1oes2r1">Onze verkooppaketten</a></li> <li class="svelte-1oes2r1"><a href="/over-moveroof" class="svelte-1oes2r1">Over MoveRoof</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding" class="svelte-1oes2r1">Begeleiding bij verkopen</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding" class="svelte-1oes2r1">Begeleiding bij aankopen</a></li></ul></div> <div class="column svelte-1oes2r1"><h3 class="svelte-1oes2r1">Verkoop begeleiding</h3> <ul class="svelte-1oes2r1"><li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#klaar-voor-verkoop" class="svelte-1oes2r1">Klaar om te verkopen?</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#vraagprijs-bepalen" class="svelte-1oes2r1">De vraagprijs bepalen</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#bezichtigingen-geven" class="svelte-1oes2r1">Tips voor bezichtigingen</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#pro-onderhandelingen" class="svelte-1oes2r1">Onderhandelingen als een pro</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#verkoopovereenkomst" class="svelte-1oes2r1">De overeenkomst opstellen</a></li> <li class="svelte-1oes2r1"><a href="/verkoop-begeleiding#eindinspectie-tips" class="svelte-1oes2r1">Tips voor de eindinspectie</a></li></ul></div> <div class="column svelte-1oes2r1"><h3 class="svelte-1oes2r1">Koop begeleiding</h3> <ul class="svelte-1oes2r1"><li class="svelte-1oes2r1"><a href="/koop-begeleiding#kosten-woningbezit" class="svelte-1oes2r1">Totale kosten woningaankoop</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding#verkoopmakelaar-begrijpen" class="svelte-1oes2r1">Verkoopmakelaars begrijpen</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding#slim-bieden" class="svelte-1oes2r1">Slim bieden</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding#verplichte-documenten" class="svelte-1oes2r1">Verplichte hypotheek documenten</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding#koopovereenkomst-taal" class="svelte-1oes2r1">De taal van de koopovereenkomst</a></li> <li class="svelte-1oes2r1"><a href="/koop-begeleiding#belasting-info" class="svelte-1oes2r1">De Belastingaangifte na de aankoop</a></li></ul></div> <div class="column svelte-1oes2r1"><h3 class="svelte-1oes2r1">Contact</h3> <p class="svelte-1oes2r1">Email: moveroofnl@gmail.com</p> <p class="svelte-1oes2r1">KvK nummer: 96269960</p> <p class="svelte-1oes2r1">Persoon hierachter: Feike Leemkuil</p></div></div></footer> <div class="bottom svelte-1oes2r1"><a href="/terms-of-service" class="svelte-1oes2r1">Algemene voorwaarden</a> <span class="svelte-1oes2r1">|</span> <a href="/privacy-statement" class="svelte-1oes2r1">Privacy</a> <span class="svelte-1oes2r1">|</span> <a href="XXX" class="svelte-1oes2r1">Cookies</a></div>',1);function es(l){var v=Qe();F(2),x(l,v)}var ss=H(`<div></div> <div><h3 class="secondary">Verkopen via MoveRoof</h3> <p>Breng verandering in de markt teweeg met een ongebonden makelaar en bespaar
    duizenden euro's.</p> <form class="form svelte-j5gud2"><div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="text" required placeholder="Naam"> <label class="label svelte-j5gud2">Naam</label></div> <div class="row svelte-j5gud2"><div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="email" required placeholder="E-mailadres"> <label class="label svelte-j5gud2">E-mail</label></div> <div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="tel" placeholder="Tel nr - optioneel"> <label class="label svelte-j5gud2">Tel nr - optioneel</label></div></div> <div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="text" required placeholder="Adres - Straat, nummer en plaats"> <label class="label svelte-j5gud2">Adres - Straat, nummer en plaats</label></div> <div class="group svelte-j5gud2"><select class="input svelte-j5gud2" required><option disabled selected hidden>Kies een deal</option><option>Starter - €395,-</option><option>Premium - €850,-</option><option>All-In - €1.050,-</option></select></div> <br> <!></form></div> <div><h4 class="secondary">Bedankt voor de aanvraag! Oprecht!</h4> <br> <p>Dat je het vertrouwen in mij en MoveRoof hebt om je woning met ons te delen
    vind ik onwijs tof.</p> <br> <p>Het vertrouwen is mij onwijs veel waard, dankjewel hiervoor! We gaan er wat
    moois van maken samen.</p> <br> <p>Feike Leemkuil.</p></div> <div><h3 class="secondary">Feedback delen</h3> <p>Heb je suggesties of feedback op MoveRoof en de website en/of service? Deel het
    hieronder. Waardeer het oprecht!</p> <form class="form svelte-j5gud2"><div class="row svelte-j5gud2"><div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="text" required placeholder="Naam"> <label class="label svelte-j5gud2">Naam</label></div> <div class="group svelte-j5gud2"><input class="input svelte-j5gud2" type="email" placeholder="E-mailadres"> <label class="label svelte-j5gud2">E-mail - optioneel</label></div></div> <div class="group svelte-j5gud2"><textarea class="textarea svelte-j5gud2" placeholder="Deel hier je bericht..."></textarea> <label class="label svelte-j5gud2">Je feedback/suggestie</label></div> <!></form></div> <div><h4 class="secondary">Bedankt voor de feedback! Oprecht!</h4> <br> <p>Dat je de tijd hebt genomen om je gedachtes en suggesties omtrent MoveRoof te
    delen waardeer ik oprecht enorm. Dankjewel!</p> <br> <p>Als je je contactgegevens hebt gedeeld hoop ik je nog te kunnen spreken en
    nogmaals te bedanken. Anders bij deze: mijn dankbaarheid is groot!</p> <br> <p>Fijne dag en hopelijk spreken we elkaar nog eens.</p> <br> <p>Feike Leemkuil.</p></div>`,1);function as(l,v){ve(v,!1);const r="https://moveroofgithubio-production.up.railway.app";let a=p(!1),n=p(!1),i=p(!1),u=p(!1),m=p(!1),D=p(""),y=p(""),_=p(""),f=p(""),g=p(""),S=p(""),h=p(""),w=p("");function k(t=""){e(g,t),e(n,!0),e(a,!0),e(i,!1)}function O(){e(u,!0),e(a,!0),e(m,!1)}function R(){e(a,!1),e(n,!1),e(i,!1),e(u,!1),e(m,!1)}async function L(t){t.preventDefault();const j=new URLSearchParams;j.append("naam",s(D)),j.append("email",s(y)),j.append("telefoon",s(_)),j.append("adres",s(f)),j.append("packageSelect",s(g));try{const $=await fetch(`${r}/submit-listing-request`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:j});$.ok?(e(n,!1),e(i,!0)):console.error("Form submission failed:",$.status)}catch($){console.error("Error during form submission:",$)}}async function M(t){t.preventDefault();const j=new URLSearchParams;j.append("naam",s(S)),j.append("email",s(h)),j.append("bericht",s(w));try{const $=await fetch(`${r}/submit-feedback`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:j});$.ok?(e(u,!1),e(m,!0)):console.error("Feedback submission failed:",$.status)}catch($){console.error("Error during feedback submission:",$)}}function b(){e(D,""),e(y,""),e(_,""),e(f,""),e(g,""),e(S,""),e(h,""),e(w,"")}Le(()=>()=>{b()});function I(t){t.currentTarget===t.target&&(R(),b())}pe();var C=ss(),q=ce(C),T=o(q,2),K=o(d(T),4),W=d(K),ue=d(W);B(ue),F(2),c(W);var X=o(W,2),J=d(X),ge=d(J);B(ge),F(2),c(J);var me=o(J,2),fe=d(me);B(fe),F(2),c(me),c(X);var G=o(X,2),he=d(G);B(he),F(2),c(G);var Z=o(G,2),Q=d(Z);U(()=>{s(g),Ae(()=>{})});var ee=d(Q);ee.value=((ee.__value="")==null,"");var se=o(ee);se.value=(se.__value="Starter")==null?"":"Starter";var ae=o(se);ae.value=(ae.__value="Premium")==null?"":"Premium";var ke=o(ae);ke.value=(ke.__value="All-In")==null?"":"All-In",c(Q),c(Z);var Se=o(Z,4);ie(Se,{type:"submit",children:(t,j)=>{F();var $=V("Start de verkoop!");x(t,$)},$$slots:{default:!0}}),c(K),c(T);var be=o(T,2),Y=o(be,2),le=o(d(Y),4),oe=d(le),re=d(oe),_e=d(re);B(_e),F(2),c(re);var we=o(re,2),ye=d(we);B(ye),F(2),c(we),c(oe);var te=o(oe,2),je=d(te);qe(je),F(2),c(te);var Me=o(te,2);ie(Me,{type:"submit",children:(t,j)=>{F();var $=V("Feedback versturen");x(t,$)},$$slots:{default:!0}}),c(le),c(Y);var Oe=o(Y,2);return U(()=>{E(q,`overlay ${(s(a)?"active":"")??""} svelte-j5gud2`),E(T,`popup listing ${(s(n)?"":"hidden")??""} svelte-j5gud2`),E(be,`popup thankyou ${(s(i)?"":"hidden")??""} svelte-j5gud2`),E(Y,`popup feedback ${(s(u)?"":"hidden")??""} svelte-j5gud2`),E(Oe,`popup thankyou ${(s(m)?"":"hidden")??""} svelte-j5gud2`)}),P("click",q,I),A(ue,()=>s(D),t=>e(D,t)),A(ge,()=>s(y),t=>e(y,t)),A(fe,()=>s(_),t=>e(_,t)),A(he,()=>s(f),t=>e(f,t)),Ue(Q,()=>s(g),t=>e(g,t)),P("submit",K,$e(L)),A(_e,()=>s(S),t=>e(S,t)),A(ye,()=>s(h),t=>e(h,t)),A(je,()=>s(w),t=>e(w,t)),P("submit",le,$e(M)),x(l,C),ne(v,"openListingPopup",k),ne(v,"openFeedbackPopup",O),de({openListingPopup:k,openFeedbackPopup:O})}var ls=H("<!> <!> <main><!></main> <!> <!>",1);function bs(l,v){let r=p(!1),a=p();function n(){console.log("handleOpenMenu triggered"),e(r,!0)}function i(){console.log("Header Deal Clicked"),s(a)&&s(a).openListingPopup?s(a).openListingPopup():console.error("popupsRef is not set or openListingPopup is not defined")}function u(){console.log("MenuDrawer Feedback Clicked"),s(a)&&s(a).openFeedbackPopup?s(a).openFeedbackPopup():console.error("popupsRef is not set or openFeedbackPopup is not defined")}function m(){console.log("MenuDrawer Deal Clicked"),s(a)&&s(a).openListingPopup?s(a).openListingPopup():console.error("popupsRef is not set or openListingPopup is not defined")}function D(k){console.log("Package chosen:",k.detail.packageName),s(a)&&s(a).openListingPopup?s(a).openListingPopup(k.detail.packageName):console.error("popupsRef is not set or openListingPopup is not defined")}var y=ls(),_=ce(y);Xe(_,{$$events:{openMenu:n,openDealPopup:i}});var f=o(_,2);Ze(f,{get isOpen(){return s(r)},set isOpen(k){e(r,k)},$$events:{openFeedback:u,openDeal:m},$$legacy:!0});var g=o(f,2),S=d(g);Be(S,v,"default",{},null),c(g);var h=o(g,2);es(h);var w=o(h,2);ze(as(w,{$$legacy:!0}),k=>e(a,k),()=>s(a)),P("choosePackage",g,D),x(l,y)}export{bs as component};
