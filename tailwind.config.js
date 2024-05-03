/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      lg:{min :"1024px"},
      md:{min :"768px" , max:"1024px"},
      sm:{min :"320px" , max:"767px"},
      ll:{max :"1280px" }
    },
    extend: {},
  },
  plugins: [],
}
