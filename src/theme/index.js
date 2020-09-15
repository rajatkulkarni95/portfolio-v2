const theme = {
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Nunito, serif",
    text: "Roboto, serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
};

const light = {
  colors: {
    text: "#f4f4f4",
    background: "#14141f",
    primary: "#0121FB",
    secondary: "#d9d9d9",
    accent: "#37354D",
  },
};

const dark = {
  colors: {
    text: "#f4f4f4",
    background: "#07070A",
    primary: "#2350B2",
    secondary: "#C8230F",
    accent: "#161617",
  },
};

export const lightTheme = { ...theme, ...light };
export const darkTheme = { ...theme, ...dark };
