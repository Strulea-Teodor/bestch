import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import groupPhoto from '../../assets/about-us/best-text-group-photo.jpg'
import workshopPhoto from '../../assets/about-us/about-us-11.jpg'
import communityPhoto from '../../assets/about-us/gallery/about-us-17.jpg'
import rubeGoldbergTitle from '../../assets/rube-goldberg/rube-goldberg-text.png'
import ambalajLogo from '../../assets/rube-goldberg/sponsors/ambalaj.png'
import cybercorLogo from '../../assets/rube-goldberg/sponsors/cybercor.png'
import diezLogo from '../../assets/rube-goldberg/sponsors/diez.png'
import kleverLogo from '../../assets/rube-goldberg/sponsors/klever.png'
import utmLogo from '../../assets/rube-goldberg/sponsors/utm-logo.png'
import './rube-goldberg.css'

const calendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rube%20Goldberg%202026&dates=20261030T100000%2F20261030T140000&ctz=Europe%2FChisinau&location=Universitatea%20Tehnica%20a%20Moldovei%2C%20Aula%203-3&details=Jurizarea%20Rube%20Goldberg%202026%20si%20demonstratiile%20celor%209%20echipe.'
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Universitatea+Tehnica+a+Moldovei+Aula+3-3+Chisinau'
const instagramUrl = 'https://www.instagram.com/best_chisinau/'

const RubeGoldbergPage = () => {
  const { i18n } = useTranslation()
  const english = i18n.language.startsWith('en')
  const copy = (ro: string, en: string) => english ? en : ro
  const participantStages = [
    ['14.09', copy('Deschiderea oficială și prezentarea provocării', 'Official opening and challenge presentation')],
    ['30.09', copy('Prezentarea conceptelor și schițelor', 'Concept and sketch presentation')],
    ['21.10', copy('Etapa finală de construcție și testare', 'Final construction and testing stage')],
    ['22–28.10', copy('Pregătirea pentru jurizare', 'Preparation for judging')],
    ['30.10', copy('Jurizarea finală', 'Final judging')]
  ]
  const teams = [
    ['FET', copy('Electronică și Telecomunicații', 'Electronics and Telecommunications')],
    ['FEIE', copy('Energetică și Inginerie Electrică', 'Power and Electrical Engineering')],
    ['FCIM', copy('Calculatoare, Informatică și Microelectronică', 'Computers, Informatics and Microelectronics')],
    ['FIMIT', copy('Inginerie Mecanică, Industrială și Transporturi', 'Mechanical, Industrial and Transport Engineering')],
    ['FUA', copy('Urbanism și Arhitectură', 'Urbanism and Architecture')],
    ['FD', copy('Design', 'Design')],
    ['FCG', copy('Construcții, Geodezie și Cadastru', 'Construction, Geodesy and Cadastre')],
    ['CAHUL', copy('Centrul Universitar „B. P. Hasdeu”', '“B. P. Hasdeu” University Centre')]
  ]
  const reasons = [
    [copy('Vezi mecanismele în acțiune', 'See the machines in action'), copy('Urmărești două runde de demonstrații și fiecare reacție care duce spre pagina întoarsă.', 'Watch two demonstration rounds and every reaction that leads to the turning page.')],
    [copy('Susține echipa facultății tale', 'Support your faculty team'), copy('Nouă echipe din opt facultăți și centre universitare intră în aceeași provocare.', 'Nine teams from eight faculties and university centres take on the same challenge.')],
    [copy('Descoperă soluții neașteptate', 'Discover unexpected solutions'), copy('Aceeași sarcină capătă nouă interpretări prin mecanică, electronică și design.', 'The same task gets nine interpretations through mechanics, electronics and design.')],
    [copy('Află cine câștigă', 'See who wins'), copy('Ziua se încheie în Aula 3-3 cu premierea și ceremonia oficială.', 'The day ends in Aula 3-3 with the awards and official closing ceremony.')]
  ]
  const sponsors = [
    { name: 'Klever', logo: kleverLogo, featured: true },
    { name: 'Ambalaj Market', logo: ambalajLogo, featured: true },
    { name: 'Universitatea Tehnică a Moldovei', logo: utmLogo },
    { name: 'Cybercor', logo: cybercorLogo },
    { name: 'diez', logo: diezLogo }
  ]
  const faqs = english ? [
    ['When is the final?', 'On 30 October 2026, from 10:00 to 14:00.'],
    ['Where does it take place?', 'The event takes place at the Technical University of Moldova, Aula 3-3.'],
    ['What will I see?', 'Nine machine presentations, two judging rounds and the awards ceremony.'],
    ['Who organises the event?', 'BEST Chișinău together with the Technical University of Moldova.']
  ] : [
    ['Pot participa la jurizare dacă nu fac parte dintr-o echipă?', 'Da. Jurizarea este deschisă publicului, iar cei interesați pot veni să urmărească prezentările și demonstrațiile echipelor.'],
    ['Unde are loc evenimentul?', 'Evenimentul are loc la Universitatea Tehnică a Moldovei, Aula 3-3, pe 30 octombrie 2026, între orele 10:00 și 14:00.'],
    ['Este necesară înregistrarea?', 'Informațiile privind accesul și eventuala înregistrare vor fi publicate înainte de eveniment.']
  ]

  return (
    <div className="rg-page">
      <section className="rg-hero rg-paper" aria-labelledby="rg-title">
        <div className="rg-shell">
          <div className="rg-edition"><span>BEST Machine Contest</span><span>{copy('Ediția 10 / 2026', 'Edition 10 / 2026')}</span></div>
          <div className="rg-title-panel">
            <h1 id="rg-title" className="rg-visually-hidden">Rube Goldberg 2026</h1>
            <img className="rg-title-art" src={rubeGoldbergTitle} alt="" aria-hidden="true" />
          </div>
          <div className="rg-hero-bottom">
            <p>{copy('Rube Goldberg este o competiție inginerească în care echipele de studenți construiesc mecanisme complexe pentru a realiza o sarcină simplă. Ediția din acest an reunește 9 echipe, iar provocarea lor este să întoarcă o pagină dintr-o carte printr-un lanț de cel puțin 20 de transferuri de energie.', 'Rube Goldberg is an engineering competition where student teams build complex mechanisms to complete a simple task. This year, nine teams must turn a page in a book through a chain of at least 20 energy transfers.')}</p>
            <a className="rg-button" href="#program">{copy('Vino la jurizare', 'Come to the judging')}<span aria-hidden="true">↓</span></a>
          </div>
          <div className="rg-date-strip"><time dateTime="2026-10-30">30.10.2026</time><span>10:00–14:00</span><span>{copy('Campusul UTM · Rîșcani', 'UTM Campus · Rîșcani')}</span></div>
        </div>
      </section>

      <section id="despre" className="rg-explainer rg-shell" aria-labelledby="rg-about-heading">
        <div className="rg-explainer-grid">
          <h2 id="rg-about-heading">{copy('CE ESTE RUBE GOLDBERG?', 'WHAT IS RUBE GOLDBERG?')}</h2>
          <div className="rg-explainer-copy">
            <p className="rg-lead">{copy('O mașinărie Rube Goldberg este un mecanism construit pentru a realiza o sarcină simplă printr-o serie de acțiuni interconectate.', 'A Rube Goldberg machine is a mechanism built to complete a simple task through a series of interconnected actions.')}</p>
            <p>{copy('În loc să ajungă direct la rezultatul final, mașinăria folosește diferite obiecte și mecanisme care declanșează succesiv următoarea acțiune. Echipele combină astfel cunoștințele tehnice cu creativitatea pentru a construi un mecanism funcțional.', 'Instead of reaching the result directly, the machine uses different objects and mechanisms that trigger each successive action. Teams combine technical knowledge with creativity to build a working mechanism.')}</p>
          </div>
        </div>
        <figure className="rg-wide-photo"><img src={workshopPhoto} alt={copy('Studenți BEST lucrând împreună', 'BEST students working together')} loading="lazy" /></figure>
      </section>

      <section id="provocare" className="rg-challenge rg-paper" aria-labelledby="rg-challenge-heading">
        <div className="rg-shell">
          <div className="rg-challenge-title"><h2 id="rg-challenge-heading">{copy('PROVOCAREA EDIȚIEI 2026.', 'THE 2026 CHALLENGE.')}</h2></div>
          <div className="rg-book" aria-hidden="true"><span /><span /><span /></div>
          <p className="rg-challenge-description">{copy('În acest an, fiecare echipă trebuie să construiască o mașinărie care să întoarcă o pagină dintr-o carte. Deși toate echipele pornesc de la aceeași sarcină, modul în care aleg să construiască mecanismul este la alegerea lor.', 'This year, every team must build a machine that turns a page in a book. Although every team starts with the same task, how they build the mechanism is up to them.')}</p>
          <div className="rg-rules">
            <div><strong>20+</strong><span>{copy('transferuri de energie', 'energy transfers')}</span></div>
            <div><strong>2×2×2<span>m</span></strong><span>{copy('dimensiuni maxime', 'maximum dimensions')}</span></div>
            <div><strong>5+1</strong><span>{copy('studenți și un mentor', 'students and one mentor')}</span></div>
          </div>
        </div>
      </section>

      <section className="rg-reasons rg-shell" aria-labelledby="rg-reasons-heading">
        <h2 id="rg-reasons-heading">{copy('VEZI IDEILE CÂND ÎNCEP SĂ SE MIȘTE.', 'SEE THE IDEAS START MOVING.')}</h2>
        <div className="rg-reason-grid">{reasons.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section id="program" className="rg-programme rg-paper" aria-labelledby="rg-programme-heading">
        <div className="rg-shell">
          <div className="rg-programme-intro">
            <h2 id="rg-programme-heading">30.10<br />10:00–14:00</h2>
            <p>{copy('Programul detaliat al jurizării va fi publicat în curând. Evenimentul va avea loc la Universitatea Tehnică a Moldovei, în Aula 3-3.', 'The detailed judging programme will be published soon. The event will take place at the Technical University of Moldova, in Aula 3-3.')}</p>
          </div>
          <div className="rg-action-row">
            <a className="rg-button" href={calendarUrl} target="_blank" rel="noreferrer">{copy('Adaugă în calendar', 'Add to calendar')}<span aria-hidden="true">↗</span></a>
            <a className="rg-outline-link" href={mapUrl} target="_blank" rel="noreferrer">{copy('Vezi campusul pe hartă', 'View the campus on the map')}</a>
          </div>
        </div>
      </section>

      <section id="echipe" className="rg-teams rg-shell" aria-labelledby="rg-teams-heading">
        <div className="rg-teams-heading"><h2 id="rg-teams-heading">{copy('ECHIPE PARTICIPANTE.', 'PARTICIPATING TEAMS.')}</h2><p>{copy('La ediția din 2026 participă 9 echipe formate din studenți ai mai multor facultăți și centre universitare. Sunt reprezentate facultățile FET, FEIE, FCIM, FIMIT, FUA, FD și FCG, precum și Centrul Universitar din Cahul.', 'The 2026 edition brings together nine teams of students from several faculties and university centres. FCIM enters two teams, while each of the other represented faculties and centres enters one.')}</p></div>
        <div className="rg-team-grid">{teams.map(([short, full]) => <div className="rg-team" key={short}><h3>{short}</h3><p>{full}</p>{short === 'FCIM' && <span>{copy('2 echipe', '2 teams')}</span>}</div>)}</div>
      </section>

      <section id="participanti" className="rg-participant-timeline rg-paper" aria-labelledby="rg-participant-heading">
        <div className="rg-shell">
          <div className="rg-participant-layout"><h2 id="rg-participant-heading">{copy('DESFĂȘURAREA COMPETIȚIEI.', 'COMPETITION TIMELINE.')}</h2><ol>{participantStages.map(([date, title]) => <li key={date}><time>{date}</time><span>{title}</span></li>)}</ol></div>
        </div>
      </section>

      <section id="faq" className="rg-faq rg-shell" aria-labelledby="rg-faq-heading">
        <div className="rg-faq-layout"><h2 id="rg-faq-heading">{copy('ÎNAINTE SĂ VII.', 'BEFORE YOU COME.')}</h2><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className="rg-sponsors rg-shell" aria-labelledby="rg-sponsors-heading">
        <h2 id="rg-sponsors-heading">{copy('CONSTRUIT ÎMPREUNĂ.', 'BUILT TOGETHER.')}</h2>
        <div className="rg-sponsor-grid">{sponsors.map((sponsor) => <figure className={`rg-sponsor ${sponsor.featured ? 'rg-sponsor-featured' : ''}`} key={sponsor.name}><img src={sponsor.logo} alt={sponsor.name} loading="lazy" /></figure>)}</div>
      </section>

      <section className="rg-people rg-paper" aria-labelledby="rg-people-heading">
        <div className="rg-shell rg-people-layout">
          <div><h2 id="rg-people-heading">{copy('DESPRE BEST CHIȘINĂU.', 'ABOUT BEST CHIȘINĂU.')}</h2><p>{copy('BEST Chișinău este o organizație studențească care organizează proiecte și activități dedicate dezvoltării studenților.', 'BEST Chișinău is a student organisation that runs projects and activities dedicated to student development.')}</p><p>{copy('Rube Goldberg este unul dintre proiectele organizate de BEST Chișinău în colaborare cu Universitatea Tehnică a Moldovei.', 'Rube Goldberg is one of the projects organised by BEST Chișinău in collaboration with the Technical University of Moldova.')}</p><div className="rg-inline-links"><Link to="/about-us">{copy('Descoperă BEST Chișinău', 'Discover BEST Chișinău')}</Link><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div></div>
          <div className="rg-photo-collage"><img src={groupPhoto} alt={copy('Comunitatea BEST Chișinău', 'The BEST Chișinău community')} loading="lazy" /><img src={communityPhoto} alt={copy('Membri BEST la o activitate împreună', 'BEST members at a community activity')} loading="lazy" /></div>
        </div>
      </section>

      <section id="finala" className="rg-final rg-shell" aria-labelledby="rg-final-heading">
        <h2 id="rg-final-heading">{copy('VINO SĂ VEZI CE SE ÎNTÂMPLĂ MAI DEPARTE.', 'COME AND SEE WHAT HAPPENS NEXT.')}</h2>
        <a className="rg-button" href={calendarUrl} target="_blank" rel="noreferrer">{copy('Adaugă în calendar', 'Add to calendar')}<span aria-hidden="true">↗</span></a>
      </section>
    </div>
  )
}

export default RubeGoldbergPage
