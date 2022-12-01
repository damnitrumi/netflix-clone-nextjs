export const theme = {
  colors: {
    netflixMainColor: "#e50914",
    netflixHoverColor: "#f40612",
    netflixTextColor: "#FFFFFF",
    netflixBackGround: "black",
    netflixBorderBottom: "#222222",
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: "8rem",
      small: "1.6rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
  },
  media: {
    ltaMedium: "(max-width: 768px)",
  },
  spacings: {
    xsmall: "8rem",
    small: "1.6rem",
    medium: "2.4rem",
    large: "3.2rem",
    xlarge: "4.0rem",
    xxlarge: "4.8rem",
    huge: "5.6rem",
    xhuge: "6.4rem",
  },
  fixedMeasures: {
    mainPadding: "4.5rem 7.0rem",
    introMainBorder: "0.8rem solid #222",
  },
} as const;
