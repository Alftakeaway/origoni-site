const normalize = (value) =>
  String(value ?? '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[\p{P}\p{S}]+/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim()
    .toLowerCase()

function searchableValues(value) {
  if (typeof value === 'string' || typeof value === 'number') return [String(value)]
  if (value && typeof value === 'object') return Object.values(value).flatMap(searchableValues)
  return []
}

export function filterWorks(works, { query = '', type = 'all' } = {}) {
  const term = normalize(query.trim())

  return works.filter((work) => {
    if (type !== 'all' && work.type?.it !== type) return false
    if (!term) return true

    const fields = [work.title, work.subtitle, work.type, work.publisher, work.year, work.isbn, work.pages, work.coAuthors]
    return fields.flatMap(searchableValues).some((value) => normalize(value).includes(term))
  })
}
