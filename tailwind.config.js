module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        dark: '#0F0F1A',
      },
      boxShadow: {
        glow: '0 0 50px rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
};



