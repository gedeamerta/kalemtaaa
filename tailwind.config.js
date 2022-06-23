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
    extend: {   
      colors: {
      'primary': '#333333',
      'secondary': '#F4F4F4',
      'third-color': '#BDC3D6',
      'gradient': 'rgba(0, 0, 0, 0.5)',
      'white': 'rgba(255, 255, 255, 1)',
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}
