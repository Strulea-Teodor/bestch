import { useTranslation } from 'react-i18next'

import bestChisinauLogo from '../../assets/best-chisinau.png'
import groupPhoto from '../../assets/about-us/best-text-group-photo.jpg'
import { getAboutPageContent } from './about-page-content'

type SectionLabelProps = {
  children: string
  fontSize: string
  id: string
}

const SectionLabel = ({ children, fontSize, id }: SectionLabelProps) => (
  <div
    className="flex items-center gap-[9px] leading-[1.125] text-white/70"
    style={{ fontSize }}
  >
    <span className="relative block h-[32px] w-[29px] shrink-0 overflow-hidden" aria-hidden="true">
      <img
        src={bestChisinauLogo}
        alt=""
        className="pointer-events-none absolute left-[-17.36%] top-[-15.71%] h-[130.89%] w-[246.87%] max-w-none opacity-70"
      />
    </span>
    <h2 id={id}>{children}</h2>
  </div>
)

const Watermarks = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <img
      src={bestChisinauLogo}
      alt=""
      className="absolute left-1/2 top-[-430px] w-[1450px] max-w-none -translate-x-1/2 opacity-10"
    />
    <img
      src={bestChisinauLogo}
      alt=""
      className="absolute left-[-720px] top-[500px] w-[1900px] max-w-none -rotate-[67deg] opacity-10"
    />
    <img
      src={bestChisinauLogo}
      alt=""
      className="absolute right-[-760px] top-[1510px] w-[1900px] max-w-none -rotate-[67deg] opacity-10"
    />
    <img
      src={bestChisinauLogo}
      alt=""
      className="absolute left-[-620px] top-[2720px] w-[1900px] max-w-none -rotate-[67deg] opacity-10"
    />
  </div>
)

const AboutUsPage = () => {
  const { t } = useTranslation()
  const content = getAboutPageContent(t)

  return (
    <div className="relative isolate min-h-[2700px] overflow-hidden bg-[#c61700] text-white md:min-h-[3943px]">
      <Watermarks />

      <div className="relative z-10 mx-auto max-w-[1200px] px-[clamp(20px,6.58vw,79px)] pb-[180px] pt-[clamp(150px,15.67vw,188px)]">
        <section aria-labelledby="about-introduction" className="text-center">
          <h1 id="about-introduction" className="sr-only">
            {t('About us')}
          </h1>
          <p
            className="mx-auto max-w-[1041px] leading-[1.2]"
            style={{ fontSize: content.typography.intro }}
          >
            <span>BEST </span>
            <span className="text-white/55">{content.introDefinition}</span>{' '}
            <span>{content.introLead}</span>
          </p>

          <img
            src={groupPhoto}
            alt="Membrii BEST Chișinău"
            className="mx-auto mt-[clamp(56px,6vw,72px)] aspect-[771/424] w-full max-w-[771px] rounded-[20px] object-cover"
          />

          <p
            className="mx-auto mt-[clamp(54px,6.5vw,78px)] max-w-[1041px] leading-[1.2]"
            style={{ fontSize: content.typography.intro }}
          >
            {content.introLocal}
          </p>
        </section>

        <section aria-labelledby="about-events" className="mt-[clamp(100px,10.5vw,126px)]">
          <SectionLabel id="about-events" fontSize={content.typography.label}>
            {content.eventsLabel}
          </SectionLabel>
          <div
            className="mt-[clamp(42px,5.25vw,63px)] space-y-[clamp(16px,2.5vw,30px)] pl-[15px] leading-[1.2]"
            style={{ fontSize: content.typography.events }}
          >
            {content.events.map((event) => (
              <p key={event}>{event}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-board" className="mt-[clamp(74px,8vw,96px)]">
          <SectionLabel id="about-board" fontSize={content.typography.label}>
            {content.boardLabel}
          </SectionLabel>
          <p
            className="mt-[clamp(28px,3vw,36px)] max-w-[1041px] leading-[1.25]"
            style={{ fontSize: content.typography.body }}
          >
            {content.boardDescription}
          </p>
        </section>

        <section aria-labelledby="about-departments" className="mt-[clamp(120px,17.5vw,210px)]">
          <SectionLabel id="about-departments" fontSize={content.typography.label}>
            {content.departmentsLabel}
          </SectionLabel>
          <p
            className="mt-[clamp(28px,3vw,36px)] max-w-[1041px] leading-[1.25]"
            style={{ fontSize: content.typography.body }}
          >
            {content.departmentsDescription}
          </p>
        </section>

        <section aria-labelledby="about-gallery" className="mt-[clamp(120px,17.5vw,210px)]">
          <SectionLabel id="about-gallery" fontSize={content.typography.label}>
            {content.galleryLabel}
          </SectionLabel>
          <p
            className="mx-auto mt-[clamp(28px,3vw,36px)] max-w-[1041px] text-center leading-[1.25]"
            style={{ fontSize: content.typography.body }}
          >
            {content.galleryPlaceholder}
          </p>
        </section>
      </div>
    </div>
  )
}

export default AboutUsPage
