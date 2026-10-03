// Calendario senza backend: il file .ics si compone a runtime e si scarica
// come data URI. Gli orari noti sono locali e senza fuso (floating time),
// così l'appuntamento resta all'ora in cui si svolge davvero a Selinunte
// o ad Alghero, qualunque sia la timezone di chi importa.

const pad = (n) => String(n).padStart(2, '0')

const escape = (text) =>
  String(text ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')

// RFC 5545 vuole righe da 75 ottetti: le più lunghe si spezzano con uno spazio.
const fold = (line) => {
  if (line.length <= 74) return line
  const parts = []
  let rest = line
  while (rest.length > 74) {
    parts.push(rest.slice(0, 74))
    rest = ' ' + rest.slice(74)
  }
  parts.push(rest)
  return parts.join('\r\n')
}

const stamp = () => {
  const d = new Date()
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(
    d.getUTCHours(),
  )}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
}

const datePart = (iso) => iso.replace(/-/g, '')

export function icsForEvent(event, { title, place, description, url }) {
  const [y, m, d] = event.sort.split('-')
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Claudia Origoni//Eventi//IT',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.id}@origoni-site`,
    `DTSTAMP:${stamp()}`,
  ]

  if (event.time) {
    const [hh, mm] = event.time.split(':')
    const endHour = pad(Math.min(23, Number(hh) + 2))
    lines.push(`DTSTART:${y}${m}${d}T${hh}${mm}00`)
    lines.push(`DTEND:${y}${m}${d}T${endHour}${mm}00`)
  } else {
    lines.push(`DTSTART;VALUE=DATE:${datePart(event.sort)}`)
    const nextDay = new Date(Number(y), Number(m) - 1, Number(d) + 1)
    lines.push(
      `DTEND;VALUE=DATE:${nextDay.getFullYear()}${pad(nextDay.getMonth() + 1)}${pad(
        nextDay.getDate(),
      )}`,
    )
  }

  lines.push(`SUMMARY:${escape(title)}`)
  if (place) lines.push(`LOCATION:${escape(place)}`)
  lines.push(`DESCRIPTION:${escape(`${description}${url ? `\n\n${url}` : ''}`)}`)
  if (url) lines.push(`URL:${escape(url)}`)
  lines.push('END:VEVENT', 'END:VCALENDAR')

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.map(fold).join('\r\n'))}`
}
