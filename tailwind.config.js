/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'sans': ['Lora', 'sans-serif'],
        'display': ['Playfair Display', 'sans-serif'],
      },

      colors: {
        'primary': '#2563EB',      // Azul principal para botões, links e destaques
        'secondary': '#0D9488',    // Cor secundária para outros destaques (não usaremos ainda)
        'surface': '#FFFFFF',      // Cor de "superfície" para cards, headers (branco)
        'background': '#F9FAFB',   // Cor de fundo geral da página (cinza bem claro)
        'text-base': '#1F2937',    // Cor principal do texto (cinza escuro, quase preto)
        'text-muted': '#6B7280',   // Cor para textos secundários, mais claros
        'bg-neutral': '#F9FAFB',   // Background tipo 1: Cor neutra padrão para a maior parte do site.
        'bg-primary-tint': '#EFF6FF',// Background tipo 2: Uma tonalidade bem clara da cor primária, para seções de destaque.
      },
    },
  },
  plugins: [],
}