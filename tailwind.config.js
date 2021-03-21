
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "class",
    theme: {
      extend: {
        screens: {
          "mobile": {'min': '340px', 'max': '1200px'},
        },
      },
    },
    plugins: [],
  }