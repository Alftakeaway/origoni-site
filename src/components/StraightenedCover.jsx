import { useId } from 'react'

// The original 693 x 1024 photograph stays untouched. This projective transform
// maps its four cover corners (26,96), (586,79), (678,910), (60,964)
// onto a front-facing 600 x 900 rectangle. The SVG viewport clips the tabletop.
const transform = 'matrix3d(1.042234204245, 0.03529650356861, 0, -0.00006220582639317, -0.04082484210176, 1.162708352848, 0, 0.0001311549631385, 0, 0, 1, 0, -23.1789044686, -112.5377109662, 0, 1)'

export default function StraightenedCover({ src, title, decorative = false }) {
  const clipId = useId().replace(/:/g, '')
  return (
    <svg
      viewBox="0 0 600 900"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full overflow-hidden"
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative ? true : undefined}
      focusable="false"
    >
      <defs><clipPath id={clipId}><rect width="600" height="900" /></clipPath></defs>
      <g clipPath={`url(#${clipId})`}>
      <foreignObject width="693" height="1024" overflow="visible">
        <img
          src={src}
          alt=""
          loading="lazy"
          width="693"
          height="1024"
          style={{
            display: 'block',
            width: 693,
            height: 1024,
            maxWidth: 'none',
            transformOrigin: '0 0',
            transform,
          }}
        />
      </foreignObject>
      </g>
    </svg>
  )
}
