/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px"
    },
    screens: {
      // gal_z_fold: "344px",
      // iPhone_se: "375px",
      // iPhone_xr: "414px",
      // iPhone_12_pro: "390px",
      // iPhone_14_pro_max: "430px",
      // pixel: "412px",
      // sam_gal_s8: "360px",
      // sam_gal_s20_ultra: "412px",
      // ipad_mini: "768px",
      // ipad_air: "820px",
      // ipad_pro: "1024px",
      // surface_pro: "912px",
      // surface_duo: "540px",
      // asus: 
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      2xl: "1400px"
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}