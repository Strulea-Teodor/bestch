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
import content from './content.json'
import './rube-goldberg.css'

const calendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rube%20Goldberg%202026&dates=20261030T100000%2F20261030T150000&ctz=Europe%2FChisinau&location=Campusul%20UTM%20Riscani%2C%20Chisinau&details=Demonstratii%20live%20in%20Cortul%20UTM%2C%20urmate%20de%20anuntarea%20castigatorilor%20si%20ceremonia%20de%20inchidere%20in%20Aula%203-3.'
const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Universitatea+Tehnica+a+Moldovei+campus+Riscani+Chisinau'
const instagramUrl = 'https://www.instagram.com/best_chisinau/'

const RubeGoldbergPage = () => {
  const { i18n } = useTranslation()
  const english = i18n.language.startsWith('en')
  const locale: 'ro' | 'en' = english ? 'en' : 'ro'
  const copy = (ro: string, en: string) => english ? en : ro
  const participantStages = [
    ['14.09', copy('Deschiderea competiției', 'Competition opening')],
    ['30.09', copy('Transmiterea conceptului', 'Concept submission')],
    ['21.10', copy('Finalizarea asamblării', 'Assembly deadline')],
    ['22–29.10', copy('Transportarea mașinăriilor', 'Machine transport')],
    ['30.10', copy('Finala și jurizarea', 'Final and judging')]
  ]
  const teams = [
    ['FET', copy('Electronică și Telecomunicații', 'Electronics and Telecommunications')],
    ['FEIE', copy('Energetică și Inginerie Electrică', 'Power and Electrical Engineering')],
    ['FCIM', copy('Calculatoare, Informatică și Microelectronică', 'Computers, Informatics and Microelectronics')],
    ['FIMIT', copy('Inginerie Mecanică, Industrială și Transporturi', 'Mechanical, Industrial and Transport Engineering')],
    ['FUA', copy('Urbanism și Arhitectură', 'Urbanism and Architecture')],
    ['FD', copy('Design', 'Design')],
    ['FCGC', copy('Construcții, Geodezie și Cadastru', 'Construction, Geodesy and Cadastre')],
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
  const faqs = [
    [copy('Când are loc finala?', 'When is the final?'), copy('Pe 30 octombrie 2026, între 10:00 și 15:00.', 'On 30 October 2026, from 10:00 to 15:00.')],
    [copy('Unde are loc?', 'Where does it take place?'), copy('Prezentările și jurizarea au loc în Cortul UTM. La 14:00, programul continuă în Aula 3-3 cu anunțarea câștigătorilor și ceremonia de închidere.', 'Presentations and judging take place in the UTM Tent. At 14:00, the programme continues in Aula 3-3 with the winner announcement and closing ceremony.')],
    [copy('Ce voi vedea?', 'What will I see?'), copy('Prezentarea celor nouă mașinării, două runde de jurizare și ceremonia de premiere.', 'Nine machine presentations, two judging rounds and the awards ceremony.')],
    [copy('Cine organizează evenimentul?', 'Who organises the event?'), copy('BEST Chișinău împreună cu Universitatea Tehnică a Moldovei.', 'BEST Chișinău together with the Technical University of Moldova.')]
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
            <p>{copy('Nouă echipe construiesc nouă drumuri complicate spre aceeași destinație: o singură pagină întoarsă.', 'Nine teams build nine complicated routes to the same destination: one turned page.')}</p>
            <a className="rg-button" href="#program">{copy('Vezi programul', 'See the programme')}<span aria-hidden="true">↓</span></a>
          </div>
          <div className="rg-date-strip"><time dateTime="2026-10-30">30.10.2026</time><span>10:00–15:00</span><span>{copy('Campusul UTM · Rîșcani', 'UTM Campus · Rîșcani')}</span></div>
        </div>
      </section>

      <section id="despre" className="rg-explainer rg-shell" aria-labelledby="rg-about-heading">
        <div className="rg-explainer-grid">
          <h2 id="rg-about-heading">{copy('O SARCINĂ SIMPLĂ. UN DRUM DELIBERAT COMPLICAT.', 'A SIMPLE TASK. A DELIBERATELY COMPLICATED ROUTE.')}</h2>
          <div className="rg-explainer-copy">
            <p className="rg-lead">{copy('Un obiect pornește următorul mecanism, iar energia trece din piesă în piesă până când mașinăria îndeplinește o sarcină simplă.', 'One object triggers the next mechanism, passing energy from piece to piece until the machine completes a simple task.')}</p>
            <p>{copy('La ediția din acest an, fiecare echipă trebuie să construiască un lanț care întoarce o pagină dintr-o carte.', 'This year, every team must build a chain reaction that turns a page in a book.')}</p>
          </div>
        </div>
        <figure className="rg-wide-photo"><img src={workshopPhoto} alt={copy('Studenți BEST lucrând împreună', 'BEST students working together')} loading="lazy" /></figure>
      </section>

      <section id="provocare" className="rg-challenge rg-paper" aria-labelledby="rg-challenge-heading">
        <div className="rg-shell">
          <div className="rg-challenge-title"><span className="rg-challenge-number" aria-hidden="true">10</span><h2 id="rg-challenge-heading">{copy('TOTUL PENTRU O PAGINĂ.', 'ALL THIS FOR ONE PAGE.')}</h2></div>
          <p className="rg-challenge-description">{copy('Construiește o mașinărie care întoarce o pagină dintr-o carte. Drumul până acolo depinde de imaginația echipei.', 'Build a machine that turns a page in a book. How it gets there depends on the team’s imagination.')}</p>
          <div className="rg-rules">
            <div><strong>20–30</strong><span>{copy('transferuri de energie', 'energy transfers')}</span></div>
            <div><strong>2×2×2<span>m</span></strong><span>{copy('dimensiuni maxime', 'maximum dimensions')}</span></div>
            <div><strong>5+1</strong><span>{copy('studenți și un mentor', 'students and one mentor')}</span></div>
          </div>
          <p className="rg-judging">{copy('Juriul evaluează funcționarea, complexitatea, tema, umorul, surpriza și prezentarea. Fiecare mașinărie are două parcursuri.', 'Judges assess function, complexity, theme, humour, surprise and presentation. Each machine gets two runs.')}</p>
        </div>
      </section>

      <section className="rg-reasons rg-shell" aria-labelledby="rg-reasons-heading">
        <h2 id="rg-reasons-heading">{copy('VEZI IDEILE CÂND ÎNCEP SĂ SE MIȘTE.', 'SEE THE IDEAS START MOVING.')}</h2>
        <div className="rg-reason-grid">{reasons.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>

      <section id="program" className="rg-programme rg-paper" aria-labelledby="rg-programme-heading">
        <div className="rg-shell">
          <div className="rg-programme-intro">
            <h2 id="rg-programme-heading">30.10<br />10:00–15:00</h2>
            <p>{copy('Demonstrațiile se desfășoară în Cortul UTM. La 14:00, ne mutăm în Aula 3-3 pentru a afla câștigătorii.', 'Demonstrations take place in the UTM Tent. At 14:00, we move to Aula 3-3 to announce the winners.')}</p>
          </div>
          <ol className="rg-programme-list">
            {content.finalDay.map((item, index) => (
              <li className={item.venue === 'aula' ? 'rg-programme-closing' : ''} key={`${item.start}-${item.title.ro}`}>
                <time dateTime={`2026-10-30T${item.start}`}>{item.start}<span>–{item.end}</span></time>
                <div><h3>{item.title[locale]}</h3>{!item.public && <small>{copy('Moment de deliberare a juriului', 'Jury deliberation')}</small>}</div>
                <strong>{item.venue === 'tent' ? copy('Cortul UTM', 'UTM Tent') : 'Aula 3-3'}</strong>
                {index === content.finalDay.length - 1 && <span className="rg-venue-shift">{copy('Ne mutăm aici pentru închidere', 'We move here for the closing')}</span>}
              </li>
            ))}
          </ol>
          <div className="rg-action-row">
            <a className="rg-button" href={calendarUrl} target="_blank" rel="noreferrer">{copy('Adaugă în calendar', 'Add to calendar')}<span aria-hidden="true">↗</span></a>
            <a className="rg-outline-link" href={mapUrl} target="_blank" rel="noreferrer">{copy('Vezi campusul pe hartă', 'View the campus on the map')}</a>
          </div>
        </div>
      </section>

      <section id="echipe" className="rg-teams rg-shell" aria-labelledby="rg-teams-heading">
        <div className="rg-teams-heading"><h2 id="rg-teams-heading">{copy('OPT FACULTĂȚI. NOUĂ MECANISME.', 'EIGHT FACULTIES. NINE MACHINES.')}</h2><p>{copy('FCIM participă cu două echipe. Fiecare dintre celelalte facultăți și centre universitare intră în concurs cu câte o echipă.', 'FCIM enters two teams. Each of the other faculties and university centres enters one team.')}</p></div>
        <div className="rg-team-grid">{teams.map(([short, full]) => <div className="rg-team" key={short}><h3>{short}</h3><p>{full}</p>{short === 'FCIM' && <span>{copy('2 echipe', '2 teams')}</span>}</div>)}</div>
      </section>

      <section id="participanti" className="rg-participant-timeline rg-paper" aria-labelledby="rg-participant-heading">
        <div className="rg-shell">
          <div className="rg-participant-layout"><h2 id="rg-participant-heading">{copy('DE LA SCHIȚĂ LA FINALĂ.', 'FROM SKETCH TO FINAL.')}</h2><ol>{participantStages.map(([date, title]) => <li key={date}><time>{date}</time><span>{title}</span></li>)}</ol></div>
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
          <div><h2 id="rg-people-heading">{copy('STUDENȚI CARE PUN IDEILE ÎN MIȘCARE.', 'STUDENTS WHO SET IDEAS IN MOTION.')}</h2><p>{copy('Rube Goldberg este organizat de BEST Chișinău împreună cu Universitatea Tehnică a Moldovei.', 'Rube Goldberg is organised by BEST Chișinău together with the Technical University of Moldova.')}</p><div className="rg-inline-links"><Link to="/about-us">{copy('Despre BEST Chișinău', 'About BEST Chișinău')}</Link><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a></div></div>
          <div className="rg-photo-collage"><img src={groupPhoto} alt={copy('Comunitatea BEST Chișinău', 'The BEST Chișinău community')} loading="lazy" /><img src={communityPhoto} alt={copy('Membri BEST la o activitate împreună', 'BEST members at a community activity')} loading="lazy" /></div>
        </div>
      </section>

      <section id="finala" className="rg-final rg-shell" aria-labelledby="rg-final-heading">
        <h2 id="rg-final-heading">{copy('VINO SĂ VEZI CE SE ÎNTÂMPLĂ MAI DEPARTE.', 'COME AND SEE WHAT HAPPENS NEXT.')}</h2>
        <div className="rg-final-bottom"><a className="rg-button" href="#program">{copy('Planifică-ți ziua', 'Plan your day')}<span aria-hidden="true">↑</span></a></div>
      </section>
    </div>
  )
}

export default RubeGoldbergPage
