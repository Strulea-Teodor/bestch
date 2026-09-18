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

const RubeGoldbergPage = () => {
  const { i18n } = useTranslation()
  const english = i18n.language.startsWith('en')
  const copy = (ro: string, en: string) => english ? en : ro
  const stages = [
    ['14.09', copy('Startul competiției', 'The competition begins'), copy('Deschiderea oficială și anunțarea provocării ediției.', 'Official opening and announcement of this year’s challenge.')],
    ['30.09', copy('De la idee la schiță', 'From idea to sketch'), copy('Echipele transmit conceptul mașinăriei.', 'Teams submit their machine concepts.')],
    ['21.10', copy('Ultimele teste', 'Final tests'), copy('Se încheie etapa de construcție și asamblare.', 'Construction and assembly come to a close.')],
    ['22–28.10', copy('Pregătiri pentru finală', 'Getting ready for the final'), copy('Transportarea mașinăriilor la locul competiției.', 'Machines are transported to the competition venue.')],
    ['30.10', copy('Reacția în lanț, pe viu', 'The chain reaction, live'), copy('Prezentări, demonstrații și jurizarea mașinăriilor.', 'Presentations, live demonstrations and judging.')]
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
  const sponsors = [
    { name: 'Klever', logo: kleverLogo, featured: true },
    { name: 'Ambalaj Market', logo: ambalajLogo, featured: true },
    { name: 'Universitatea Tehnică a Moldovei', logo: utmLogo },
    { name: 'Cybercor', logo: cybercorLogo },
    { name: 'diez', logo: diezLogo }
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
            <p>{copy('Nouă echipe. Zeci de reacții. O singură provocare: să întorci o pagină dintr-o carte.', 'Nine teams. Dozens of reactions. One challenge: turn a page in a book.')}</p>
            <a className="rg-button" href="#finala">{copy('Vino la finală', 'Come to the final')}<span aria-hidden="true">↗</span></a>
          </div>
          <div className="rg-date-strip"><time dateTime="2026-10-30">30.10.2026</time><span>10:00–14:00</span><span>UTM · Aula 3-3</span></div>
        </div>
      </section>

      <section id="despre" className="rg-about rg-shell" aria-labelledby="rg-about-heading">
        <div className="rg-section-label">{copy('Ingineria iese din manual', 'Engineering leaves the textbook')}</div>
        <div className="rg-about-grid">
          <h2 id="rg-about-heading">{copy('COMPLICAT.\nCU UN SCOP\nFOARTE SIMPLU.', 'COMPLICATED.\nFOR A VERY\nSIMPLE REASON.')}</h2>
          <div className="rg-prose">
            <p className="rg-lead">{copy('O bilă pornește. O pârghie se mișcă. O altă piesă cade. Și, din aproape în aproape, imposibilul începe să funcționeze.', 'A ball rolls. A lever moves. Another piece falls. Step by step, the impossible starts to work.')}</p>
            <p>{copy('O mașinărie Rube Goldberg îndeplinește o sarcină simplă printr-un lanț intenționat complicat de reacții și transferuri de energie. Mecanica, electronica și designul se întâlnesc într-un mecanism în care fiecare piesă contează.', 'A Rube Goldberg machine completes a simple task through an intentionally complicated chain of reactions and energy transfers. Mechanics, electronics and design come together in a machine where every piece matters.')}</p>
            <p>{copy('Organizată de BEST Chișinău și Universitatea Tehnică a Moldovei, singura competiție de acest gen din Republica Moldova ajunge la ediția a zecea.', 'Organised by BEST Chișinău and the Technical University of Moldova, the country’s only competition of its kind reaches its tenth edition.')}</p>
          </div>
        </div>
        <figure className="rg-wide-photo"><img src={workshopPhoto} alt={copy('Studenți BEST la o activitate de echipă', 'BEST students taking part in a team activity')} loading="lazy" /><figcaption>{copy('Creativitate care se construiește împreună.', 'Creativity, built together.')}</figcaption></figure>
      </section>

      <section id="provocare" className="rg-challenge rg-paper" aria-labelledby="rg-challenge-heading">
        <div className="rg-shell">
          <div className="rg-section-label">{copy('Provocarea ediției 2026', 'The 2026 challenge')}</div>
          <div className="rg-challenge-title"><span className="rg-challenge-number" aria-hidden="true">10</span><h2 id="rg-challenge-heading">{copy('TOTUL PENTRU\nO PAGINĂ.', 'ALL THIS FOR\nONE PAGE.')}</h2></div>
          <p className="rg-challenge-description">{copy('Construiește o mașinărie care întoarce o pagină dintr-o carte. Drumul până acolo? Asta depinde de imaginația echipei.', 'Build a machine that turns a page in a book. How you get there? That’s up to your team’s imagination.')}</p>
          <div className="rg-rules">
            <div><strong>20+</strong><span>{copy('transferuri de energie', 'energy transfers')}</span></div>
            <div><strong>2×2×2<span>m</span></strong><span>{copy('dimensiuni maxime', 'maximum dimensions')}</span></div>
            <div><strong>5+1</strong><span>{copy('studenți și un mentor / echipă', 'students and a mentor / team')}</span></div>
          </div>
          <p className="rg-judging">{copy('Juriul urmărește funcționarea mecanismului, creativitatea, surpriza, prezentarea și colaborarea. Fiecare echipă are două parcursuri pentru demonstrația live.', 'Judges assess how the machine works, creativity, surprise, presentation and teamwork. Each team has two runs for its live demonstration.')}</p>
        </div>
      </section>

      <section id="calendar" className="rg-timeline rg-shell" aria-labelledby="rg-timeline-heading">
        <div className="rg-section-label">{copy('Calendarul competiției', 'Competition calendar')}</div>
        <h2 id="rg-timeline-heading">{copy('FIECARE PAS\nÎL PORNEȘTE PE URMĂTORUL.', 'EVERY STEP\nSETS THE NEXT IN MOTION.')}</h2>
        <ol>{stages.map(([date, title, description]) => <li key={date}><time>{date}</time><div><h3>{title}</h3><p>{description}</p></div><span className="rg-timeline-dot" aria-hidden="true" /></li>)}</ol>
      </section>

      <section id="echipe" className="rg-teams rg-paper" aria-labelledby="rg-teams-heading">
        <div className="rg-shell">
          <div className="rg-section-label">{copy('O competiție, perspective diferite', 'One competition, different perspectives')}</div>
          <div className="rg-teams-heading"><h2 id="rg-teams-heading">{copy('9 ECHIPE.\nACELEAȘI EMOȚII.', '9 TEAMS.\nTHE SAME EXCITEMENT.')}</h2><p>{copy('Studenți din opt facultăți și centre universitare aduc la aceeași masă idei, abilități și moduri diferite de a vedea lumea.', 'Students from eight faculties and university centres bring together different ideas, skills and ways of seeing the world.')}</p></div>
          <div className="rg-team-grid">{teams.map(([short, full]) => <div className="rg-team" key={short}><h3>{short}</h3><p>{full}</p>{short === 'FCIM' && <span>{copy('2 echipe', '2 teams')}</span>}</div>)}</div>
        </div>
      </section>

      <section className="rg-people rg-shell" aria-labelledby="rg-people-heading">
        <div className="rg-people-copy"><div className="rg-section-label">{copy('Oamenii din spatele ideilor', 'The people behind the ideas')}</div><h2 id="rg-people-heading">{copy('ÎMPREUNĂ\nPUNEM LUCRURILE\nÎN MIȘCARE.', 'TOGETHER,\nWE SET THINGS\nIN MOTION.')}</h2><p>{copy('BEST Chișinău înseamnă studenți voluntari care creează loc pentru idei, experiențe și prietenii. Rube Goldberg este unul dintre locurile în care învățăm construind.', 'BEST Chișinău is a community of student volunteers creating space for ideas, experiences and friendships. Rube Goldberg is one of the places where we learn by building.')}</p><Link className="rg-text-link" to="/about-us">{copy('Cunoaște BEST Chișinău', 'Meet BEST Chișinău')} <span aria-hidden="true">↗</span></Link></div>
        <div className="rg-photo-collage"><img src={groupPhoto} alt={copy('Comunitatea BEST Chișinău', 'The BEST Chișinău community')} loading="lazy" /><img src={communityPhoto} alt={copy('Membri BEST la o activitate împreună', 'BEST members at a community activity')} loading="lazy" /></div>
      </section>

      <section className="rg-sponsors rg-shell" aria-labelledby="rg-sponsors-heading">
        <div className="rg-section-label">{copy('Partenerii competiției', 'Competition partners')}</div>
        <h2 id="rg-sponsors-heading">{copy('CONSTRUIT\nÎMPREUNĂ.', 'BUILT\nTOGETHER.')}</h2>
        <div className="rg-sponsor-grid">
          {sponsors.map((sponsor) => (
            <figure
              className={`rg-sponsor ${sponsor.featured ? 'rg-sponsor-featured' : ''}`}
              key={sponsor.name}
            >
              <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section id="finala" className="rg-final rg-paper" aria-labelledby="rg-final-heading"><div className="rg-shell"><div className="rg-section-label">{copy('Finala Rube Goldberg 2026', 'Rube Goldberg 2026 final')}</div><h2 id="rg-final-heading">{copy('VINO SĂ VEZI\nCE SE ÎNTÂMPLĂ\nMAI DEPARTE.', 'COME AND SEE\nWHAT HAPPENS\nNEXT.')}</h2><div className="rg-final-bottom"><p>{copy('Susține-ți facultatea și descoperă, pe viu, cât de departe poate ajunge o idee simplă.', 'Support your faculty and see just how far a simple idea can go.')}</p><div><time dateTime="2026-10-30">30.10.2026</time><span>10:00–14:00 · UTM, Aula 3-3</span></div></div></div></section>
    </div>
  )
}

export default RubeGoldbergPage
