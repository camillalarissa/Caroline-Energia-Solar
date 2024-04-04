/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    /* Fonte*/
    fontFamily: {
      sans: ["Oswald", "sans-serif"],
    },
    extend: {
      /* Paralax*/
      backgroundImage: {
        "custom-image": "url('/assets/solar.webp')",
      },
      /* Animação botão, frase e imagem*/
      animation: {
        blink: "blink 3s infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
