/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/Volvo.jpeg')",
        "custom-bg2": "url('/bg1.jpeg')",
        "bg1": "url('/bg4.jpeg')",
        "bg2": "url('/bg5.jpeg')",
        "bg3": "url('/img-2.jpeg')",
        
        
      },
    },
  },
  plugins: [],
};

