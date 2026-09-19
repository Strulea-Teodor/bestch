import assert from 'node:assert/strict'
import test from 'node:test'

import { getAboutPageContent } from '../src/pages/about-us-page/about-page-content.ts'

test('builds the complete translated about-page event sequence from the Frame 11 design', () => {
  const translated: string[] = []
  const translate = (value: string) => {
    translated.push(value)
    return `translated:${value}`
  }

  const content = getAboutPageContent(translate)

  assert.deepEqual(
    content.events.map((event) => event.label),
    [
      'translated:Cursul de Vară',
      'translated:Rube Goldberg',
      'translated:Hackathon',
      'translated:BEST Talks',
      'translated:Recrutări',
      'translated:Motivational Weekend',
      'translated:Aniversare'
    ]
  )
  assert.ok(content.events.every((event) => !('hint' in event)))
  assert.ok(content.events.every((event) => !('href' in event)))
  assert.deepEqual(content.eventPresentation, {
    showSeparators: false
  })
  assert.ok(translated.includes('Consiliul director'))
  assert.ok(translated.includes('Departamentele BEST Chișinău'))
  assert.ok(translated.includes('Galerie'))
})

test('keeps the about-page type scale readable within mobile and desktop browser widths', () => {
  const content = getAboutPageContent((value) => value) as ReturnType<
    typeof getAboutPageContent
  > & {
    typographyAt?: (viewportWidth: number) => {
      body: number
      events: number
      intro: number
      label: number
    }
  }

  assert.ok(content.typographyAt, 'responsive typography is available')
  assert.deepEqual(content.typographyAt(558), {
    intro: 20,
    events: 22,
    body: 18,
    label: 14
  })
  assert.deepEqual(content.typographyAt(1200), {
    intro: 34,
    events: 34,
    body: 28,
    label: 20
  })
})
