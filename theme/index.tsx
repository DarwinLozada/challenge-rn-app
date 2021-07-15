import { extendTheme } from "native-base";

const theme = extendTheme({
  components: {
    Toast: {
      baseStyle: {
        bottom: 48,
      },
    },
  },
  colors: {
    primary: {
      50: "#0e7490",
    },
  },
});

export default theme;
