module.exports = {
  mode: 'jit',
  content: [    
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    maxWidth: {
      'sm': '400px'
    },
    colors: {
      'primary': '#333333',
      'secondary': '#F4F4F4',
      'third-color': '#BDC3D6',
      'gradient': 'rgba(0, 0, 0, 1)'
    },
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}
