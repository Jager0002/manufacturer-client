module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // tailwind themes here
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#04a9e8",    
          "secondary": "#04E8D0",
          "accent": "#62819c",
          "neutral": "#124369",
          "base-100": "#ffffff",
          "info": "#3282D2",
          "success": "#00C853",
          "warning": "#F7C04B",
          "error": "#D32F2F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
