import { createMuiTheme } from "@material-ui/core/styles";

const traxRed = "#A6141A";
const traxGrey = "#262626";
export default createMuiTheme({
  palette: {
    common: {
      red: `${traxRed}`,
      grey: `${traxGrey}`,
      gold: "#FFDF00",
      goldDark: "#eacc00"
    },
    primary: {
      main: `${traxRed}`
    },
    secondary: {
      main: `${traxGrey}`
    },
    background: {
      paper: "#fff",
      default: "#b74347"
    }
  },
  typography: {
      tab: {
        fontFamily: "Roboto Condensed",
        fontWeight: "400",
        fontSize: "1.2rem",
        textTransform: "none"
      },
      estimate: {
        fontFamily: "Roboto Condensed",
        fontWeight: "400",
        fontSize: "1rem",
        color: "white"
      }
  }
});
