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
    extend: {},
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
}
