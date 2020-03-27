import { createMuiTheme } from "@material-ui/core/styles";

const traxRed = "#A6141A";
const traxGrey = "#262626";
export default createMuiTheme({
  palette: {
    common: {
      red: `${traxRed}`,
      grey: `${traxGrey}`
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
        fontFamily: "Faustina",
        fontWeight: "600",
        fontSize: "1.2rem",
        textTransform: "none"
      },
      estimate: {
        fontFamily: "Faustina",
        fontWeight: "600",
        fontSize: "1rem",
        color: "white"
      }
  }
});
