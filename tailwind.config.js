/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FDFBF7',
          warm: '#F7F2E9',
          deep: '#EFE7D8',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#3D3A34',
          muted: '#6E6A61',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#D9BC80',
          /* Sui fondi chiari l'oro della copertina scende a 3.47:1 e le
             etichette a 11px non sono leggibili: questo tiene i 4.5:1 su
             tutti e tre i toni della carta. */
          dark: '#7C5E28',
        },
        sage: {
          DEFAULT: '#8A9A7B',
          light: '#B3BFA5',
          dark: '#6B7A5E',
        },
        terracotta: {
          DEFAULT: '#C07A5E',
          dark: '#A25F45',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        literary: '0.22em',
      },
      boxShadow: {
        book: '0 10px 30px -10px rgba(26, 26, 26, 0.25)',
        'book-hover': '0 24px 50px -12px rgba(26, 26, 26, 0.35)',
        card: '0 4px 24px -6px rgba(26, 26, 26, 0.12)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
          '50%': { transform: 'translate3d(24px, -32px, 0) rotate(3deg)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
          '50%': { transform: 'translateY(-18px) rotate(var(--tw-rotate, 0deg))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        floaty: 'floaty 9s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
