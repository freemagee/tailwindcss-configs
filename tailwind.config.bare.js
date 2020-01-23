module.exports = {
  corePlugins: ["container", "margin", "padding", "textColor"],
  theme: {
    colors: {
      red: "#de3618",
      "dodger-blue": "#22a7f0"
    },
    screens: {
      sm: "420px",
      md: "600px"
    },
    spacing: {
      gap: "20px"
    }
  },
  variants: {
    container: ["responsive"],
    margin: [],
    padding: [],
    textColor: []
  },
  plugins: []
};
