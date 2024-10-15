/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        primary: "#8246AF",
        secondary: "#D4BAE8",
        back: "#F3E5F5"
      },
      fontFamily:{
        title: "Righteous",
        content: ["Josefin Sans", "system-ui"]
      },
      rotate: {
        "135": "135deg" 
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}