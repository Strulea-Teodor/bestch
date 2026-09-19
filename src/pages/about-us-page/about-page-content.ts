export type Translate = (value: string) => string

type TypeScale = {
  min: number
  preferredViewportPercentage: number
  max: number
}

const typeScale = {
  intro: { min: 20, preferredViewportPercentage: 2.8334, max: 34 },
  events: { min: 22, preferredViewportPercentage: 2.8334, max: 34 },
  body: { min: 18, preferredViewportPercentage: 2.3334, max: 28 },
  label: { min: 14, preferredViewportPercentage: 1.6667, max: 20 }
} satisfies Record<'body' | 'events' | 'intro' | 'label', TypeScale>

const resolveTypeSize = (scale: TypeScale, viewportWidth: number) =>
  Math.min(scale.max, Math.max(scale.min, viewportWidth * (scale.preferredViewportPercentage / 100)))

const toCssClamp = ({ min, preferredViewportPercentage, max }: TypeScale) =>
  `clamp(${min}px, ${preferredViewportPercentage}vw, ${max}px)`

const eventNames = [
  'Cursul de Vară',
  'Rube Goldberg',
  'Hackathon',
  'BEST Talks',
  'Recrutări',
  'Motivational Weekend',
  'Aniversare'
] as const

export const getAboutPageContent = (translate: Translate) => ({
  typography: {
    intro: toCssClamp(typeScale.intro),
    events: toCssClamp(typeScale.events),
    body: toCssClamp(typeScale.body),
    label: toCssClamp(typeScale.label)
  },
  typographyAt: (viewportWidth: number) => ({
    intro: resolveTypeSize(typeScale.intro, viewportWidth),
    events: resolveTypeSize(typeScale.events, viewportWidth),
    body: resolveTypeSize(typeScale.body, viewportWidth),
    label: resolveTypeSize(typeScale.label, viewportWidth)
  }),
  introDefinition: translate('(Board of European Students of Technology)'),
  introLead: translate(
    'este o organizație studențească ce activează în peste 80 de universități tehnice din întreaga Europă, având ca scop principal dezvoltarea studenților.'
  ),
  introLocal: translate(
    'BEST Chișinău face parte din BEST din anul 2007. De atunci, echipa noastră a contribuit la dezvoltarea academică, socială și culturală a numeroși studenți europeni și moldoveni.'
  ),
  eventsLabel: translate('Evenimentele noastre'),
  events: eventNames.map(translate),
  boardLabel: translate('Consiliul director'),
  boardDescription: translate(
    'Consiliul director coordonează direcția organizației și susține echipa în transformarea ideilor în proiecte pentru studenți.'
  ),
  departmentsLabel: translate('Departamentele BEST Chișinău'),
  departmentsDescription: translate(
    'În departamente, membrii își dezvoltă abilitățile lucrând împreună în proiecte, comunicare, relații externe și resurse umane.'
  ),
  galleryLabel: translate('Galerie'),
  galleryPlaceholder: translate('Aici merge galeria')
})
