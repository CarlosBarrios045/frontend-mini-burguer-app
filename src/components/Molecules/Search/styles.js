import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ palette, breakpoints }) => ({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    height: 50,
    display: "flex",
    alignItems: "center",
  },
  search: {
    width: 65,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: palette.secondary.main,
  },
  content: {
    color: "#fff",
    overflowX: "auto",
    height: "100%",
    display: "flex",
    alignItems: "center",

    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
    },
  },
  contentButton: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  button: {
    padding: ".4rem 1.1rem",
    color: palette.secondary.dark,
    backgroundColor: palette.secondary.main,
    marginRight: 10,

    "&:hover": {
      backgroundColor: palette.secondary.main,
    },

    [breakpoints.down("sm")]: {
      width: 200,
    },
  },
  buttonSelected: {
    padding: ".3rem 1rem",
    color: palette.primary.ultraDark,
    backgroundColor: palette.primary.light,
    border: `2px solid ${palette.primary.dark}`,
    marginRight: 10,

    "&:hover": {
      backgroundColor: palette.primary.light,
    },

    [breakpoints.down("sm")]: {
      width: 200,
    },
  },
}));
