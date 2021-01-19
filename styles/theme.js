import { pxToRem } from "./utils/functions";

const theme = {
  color: {
    primary: "#0A75D0",
    ligthPrimary: "#F0FBFF",
    yellow: "#FBB040",
    white: "white",
    black: "black",
    red: "#9B0505",
    lightRed: "#EBCDCD",
    gray: "#C4C4C4",
    lightGray: "#DADADA",
  },
  typography: {
    poppinsRegular: "Poppins-Regular",
    poppinsBold: "Poppins-Bold",
  },
  typographySizes: {
    xl: {
      mobileSize: pxToRem(20),
      mobileLine: pxToRem(28),
    },
    l: {
      mobileSize: pxToRem(20),
      mobileLine: pxToRem(28),
    },
    m: {
      mobileSize: pxToRem(20),
      mobileLine: pxToRem(28),
    },
    s: {
      mobileSize: pxToRem(14),
      mobileLine: pxToRem(22),
    },
    xs: {
      mobileSize: pxToRem(10),
      mobileLine: pxToRem(15),
    },
  },
  spaces: {
    xxl: {
      mobileSize: "100px",
    },
    xl: {
      mobileSize: "55px",
    },
    l: {
      mobileSize: "42px",
    },
    m: {
      mobileSize: "32px",
    },
    s: {
      mobileSize: "24px",
    },
    xs: {
      mobileSize: "16px",
    },
  },
};
export default theme;
