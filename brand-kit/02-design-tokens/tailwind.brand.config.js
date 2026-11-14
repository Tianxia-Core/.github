// ffp: TX-BRANDKIT-TAILWIND declarative javascript
// Official Tailwind CSS theme extension for RASA-X-MACHINA & tianxiaOS
module.exports = {
  theme: {
    extend: {
      colors: {
        tx: {
          void: '#050505',
          obsidian: '#080808',
          void2: '#0a0a12',
          violet: '#7c5cff',
          orchid: '#a855f7',
          royal: '#6d28d9',
          lavender: '#c084fc',
          cyan: '#22d3ee',
          emerald: '#34d399',
          signal: '#00f59b',
          rose: '#f472b6',
        },
      },
      fontFamily: {
        rxm: ['Syne', 'sans-serif'],
        os: ['Clash Display', 'Geist', 'Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Geist', 'Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grad-rxm': 'linear-gradient(120deg, #7c5cff 0%, #a855f7 48%, #22d3ee 100%)',
        'grad-os': 'linear-gradient(120deg, #7c5cff 0%, #a855f7 45%, #c084fc 100%)',
        'grad-royal': 'linear-gradient(135deg, #6d28d9 0%, #7c5cff 50%, #22d3ee 100%)',
      },
      borderRadius: {
        'tx-outer': '2rem',
        'tx-inner': '1.625rem',
      },
      transitionTimingFunction: {
        'tx-spring': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
};
