/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { 
      colors: {
      lgv: 'hsl(270, 3%, 87%)',
      dgv: 'hsl(279, 6%, 55%)',
      vdv: 'hsl(278, 68%, 11%)',
      rederr: 'hsl(0, 100%, 66%)',
      white: 'hsl(0, 0%, 100%)',
      bgfrm: 'hsl(249, 99%, 64%)',
      bgto: 'hsl(0, 100%, 66%)',
      },
     },
     fontFamily: {
      Grotesk:["Space Grotesk", "sans-serif"]
  }
  },
  plugins: [],
}
