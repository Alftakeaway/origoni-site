import test from 'node:test'
import assert from 'node:assert/strict'
import { filterWorks } from '../src/utils/filterWorks.js'

const catalogue = [
  {
    id: 'santi',
    title: { it: 'I fiori dei santi', en: 'Flowers of the Saints' },
    subtitle: { it: 'Iconografia sacra', en: 'Sacred iconography' },
    type: { it: 'Saggio', en: 'Essay' },
    publisher: 'Barbieri',
    year: 2000,
    isbn: '9780000000000',
  },
  {
    id: 'modica',
    title: { it: 'L’oro nero di Modica', en: 'The Black Gold of Modica' },
    subtitle: { it: 'Storia artigiana delle città', en: 'Craft history of a town' },
    type: { it: 'Saggio', en: 'Essay' },
    publisher: 'Nemapress',
    year: 2009,
  },
  {
    id: 'romanzo',
    title: { it: 'Non escludo il ritorno', en: 'Non escludo il ritorno' },
    type: { it: 'Romanzo', en: 'Novel' },
    publisher: 'Nemapress',
    year: 2023,
  },
]

test('returns the full catalogue in its original order when no filters are set', () => {
  assert.deepEqual(filterWorks(catalogue).map((work) => work.id), ['santi', 'modica', 'romanzo'])
})

test('searches both languages and ignores diacritics', () => {
  assert.deepEqual(filterWorks(catalogue, { query: 'oro nero' }).map((work) => work.id), ['modica'])
  assert.deepEqual(filterWorks(catalogue, { query: "L'oro nero" }).map((work) => work.id), ['modica'])
  assert.deepEqual(filterWorks(catalogue, { query: 'Flowers of the Saints' }).map((work) => work.id), ['santi'])
  assert.deepEqual(filterWorks(catalogue, { query: 'citta' }).map((work) => work.id), ['modica'])
})

test('searches publisher and numeric bibliographic details', () => {
  assert.deepEqual(filterWorks(catalogue, { query: '9780000000000' }).map((work) => work.id), ['santi'])
})

test('applies the selected type and search term together', () => {
  assert.deepEqual(filterWorks(catalogue, { type: 'Saggio', query: '2009' }).map((work) => work.id), ['modica'])
})

test('returns no matches for an unknown category or search term', () => {
  assert.deepEqual(filterWorks(catalogue, { type: 'Poetry' }), [])
  assert.deepEqual(filterWorks(catalogue, { query: 'unpublished' }), [])
})
