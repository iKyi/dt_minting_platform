import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeOptions,
} from "@mui/material";
import { Theme, ThemeProvider } from "@mui/system";
import React, { createContext, ReactNode, useMemo, useState } from "react";
import { ImmortalColorsGetter } from "./pallette";
import MainBg from "assets/layout/background.png";

export enum FONTS {
  FURORE = "Furore, sans-serif, Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {}
}

let ImmortalMuITheme = createTheme({
  typography: {
    fontFamily: FONTS.FURORE,
    h1: {
      fontFamily: FONTS.FURORE,
    },
    h2: {
      fontFamily: FONTS.FURORE,
    },
    h3: {
      fontFamily: FONTS.FURORE,
    },
    h4: {
      fontFamily: FONTS.FURORE,
    },
    h5: {
      fontFamily: FONTS.FURORE,
    },
    h6: {
      fontFamily: FONTS.FURORE,
    },
  },
  shape: {
    borderRadius: 0,
  },
});

const getOverRides = (theme: Theme) => {
  const ThemeObj: Partial<ThemeOptions> = {
    components: {
      MuiOutlinedInput: {
        variants: [
          // {
          //   props: {
          //     color: "primary",
          //   },
          //   // style: {
          //   //   background: theme.palette.darkSecondary.secondary,
          //   // },
          // },
        ],
      },
      MuiButtonGroup: {
        styleOverrides: {
          root: {
            button: {
              textShadow: "none",
              fontSize: "1.05rem",
              "&:first-of-type": {
                clipPath:
                  "polygon(1px 1px, calc(0% + 10px) 1px, calc(100% - 2px) 1px, calc(100% - 2px) calc(100% - 1px),calc(0% + 10px) calc(100% - 1px), 1px calc(100% - 10px))",
              },
              clipPath:
                "polygon(1px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 1px), 1px calc(100% - 1px))",
              "&:last-of-type": {
                clipPath:
                  "polygon(2px 1px, calc(100% - 10px) 1px, calc(100% - 1px) calc(0% + 10px), calc(100% - 1px) calc(100% - 10px), calc(100% - 1px) calc(100% - 1px), 2px calc(100% - 1px));",
              },
            },
          },
        },
      },
      MuiChip: {
        variants: [],
      },
      MuiButton: {
        variants: [
          // {
          //   props: { variant: "angled", color: "primary" },
          //   style: {
          //     paddingTop: theme.spacing(1.5),
          //     color: theme.palette.common.white,
          //     "&:hover": {
          //       backgroundColor: "transparent",
          //     },
          //   },
          // },
        ],
        styleOverrides: {
          root: {
            fontFamily: FONTS.FURORE,
            textShadow: "1px 1px 0px rgba(0,0,0,0.75)",
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(1px)",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: `url(${MainBg})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "top center",
          },
          html: {
            height: "100%",
          },
          "& #root": {},
          p: {
            margin: 0,
          },
          ".TP": {
            color: theme.palette.primary.main,
          },
          ".TS": {
            color: theme.palette.secondary.main,
          },
          ".TW": {
            color: theme.palette.common.white,
          },
          ".TE": {
            color: theme.palette.error.main,
          },
          h1: {
            fontFamily: FONTS.FURORE,
          },
          h2: {
            fontFamily: FONTS.FURORE,
          },
          h3: {
            fontFamily: FONTS.FURORE,
          },
          h4: {
            fontFamily: FONTS.FURORE,
          },
          h5: {
            fontFamily: FONTS.FURORE,
          },
          h6: {
            fontFamily: FONTS.FURORE,
          },
          ".wallet-adapter-button-start-icon": {
            lineHeight: 1,
          },
          ".wallet-adapter-button": {
            justifyContent: "center",
            fontFamily: FONTS.FURORE,
            fontWeight: 300,
            color: theme.palette.error.main,
            textAlign: "center",
          },
          // ".wallet-adapter-button.loginButtonSmall": {
          //   background: `url('${RedSharp}')`,
          //   backgroundSize: "100% 100%",
          //   height: "24px",
          //   padding: "0 15px 0px 10px",
          // },
          // ".wallet-adapter-button.loginButton": {
          //   background: `url('${complexRed}')`,
          //   backgroundSize: "100% 100%",
          //   height: "60px",
          //   padding: "0 30px",
          // },
          // ".wallet-adapter-button.logoutButton": {
          //   background: `url('${RedSharp}')`,
          //   backgroundSize: "100% 100%",
          //   fontSize: "0.9rem",
          //   height: "36px",
          // },

          // "@keyframes hackEffect": {
          //   "0%": {
          //     background: theme.palette.primary.main,
          //     transform: "scale(0.9) rotate(45deg)",
          //     boxShadow: `0px 0px 20px 3px ${theme.palette.error.main}`,
          //   },
          // },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: FONTS.FURORE,
            borderColor: theme.palette.secondary.main,
            paddingTop: "6px",
            paddingBottom: "6px",
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:last-of-type": {
              td: {
                borderColor: "transparent",
              },
            },
          },
        },
      },
    },
  };
  return ThemeObj;
};

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const DarkTerminalThemeProvider: React.VFC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => {
    const palette = ImmortalColorsGetter(mode);
    const themeObj = { ...ImmortalMuITheme, ...palette };
    return createTheme(themeObj, getOverRides(themeObj));
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default DarkTerminalThemeProvider;
