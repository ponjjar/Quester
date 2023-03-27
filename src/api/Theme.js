import { createTheme } from "@mui/material/styles";
import { blue, green, purple, yellow } from "@mui/material/colors";

export default function themeStyle(themeApplyed) {
  return themeApplyed === "sunLight"
    ? createTheme({
        palette: {
          background: {
            default: "#ffe4a6",
            paper: "#fcf4e6",
          },
          appBar: {
            primary: "#cea6ff",
            secondary: "#7c3fff",

            
          },
          primary: {
            main: blue[500],
          },
          secondary: {
            main: green[500],
          },
        },
      })
    : themeApplyed === "night"
    ? createTheme({
        palette: {
          background: {
            mode: "dark",
            default: "#0f0a26",
            paper: "#1C1347",
          },
          appBar: {
            primary: "#18015f",
            secondary: "#730075",

          },
          primary: {
            main: blue[500],
          },
          text: {
            primary: "#fff",
            secondary: "#b3b3b3",
          },
          secondary: {
            main: green[500],
          },
        },
      })
    : themeApplyed === "dark"
    ? createTheme({
        palette: {
          background: {
            mode: "dark",
            default: "#000000",
            paper: "#1a1a1a",
          },
          appBar: {
            primary: "#0e0030",
            secondary: "#1b0049",
          },
          primary: {
            main: blue[900],
          },

          text: {
            primary: "#fff",
            secondary: "#b3b3b3",
          },
          secondary: {
            main: green[900],
          },
        },
      })
    : themeApplyed === "DioGo"
    ? createTheme({
        palette: {
          background: {
            mode: "dark",
            default: "#002e02",
            paper: "#00291e",
          },
          appBar: {
            primary: "#005204",
            secondary: "#016147",
          },
          primary: {
            main: green[900],
          },

          text: {
            primary: "#fff",
            secondary: green[1000],
          },
          secondary: {
            main: yellow[900],
          },
        },
      })
    : themeApplyed === "JuLiA"
    ? createTheme({
        palette: {
          background: {
            mode: "light",
            default: "#fc86c3",
            paper: "#fac5e1",
          },
          appBar: {
            primary: "#ff5e9e",
            secondary: "#ff7eb2",
          },
          primary: {
            main: purple[500],
          },

          text: {
            secondary: purple[900],
          },
          secondary: {
            main: green[900],
          },
        },
      })
    : themeApplyed == "light" &&
      createTheme({
        palette: {
          background: {
            default: "#fcf4e6",
          },
          appBar: {
            primary: "#a6a7ff",
            secondary: "#3fa9ff",

            
          },
          primary: {
            main: blue[500],
          },
          secondary: {
            main: green[500],
          },
        },
      });
}
