import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ palette }) => ({
  container: {
    width: "94%",
    margin: "0 auto",
    backgroundColor: palette.error.main,
    borderRadius: 12,
    height: 40,
    display: "flex",
    position: "fixed",
    bottom: 20,
    left: "3.2%",
    zIndex: 50,
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
    height: "100%",
    width: "100%",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    padding: ".2rem .8rem",
    color: "#fff",
    backgroundColor: palette.primary.dark,
    borderRadius: 15,

    "&:hover": {
      backgroundColor: palette.primary.dark,
    },
  },
  flex: {
    display: "flex",
    color: "#fff",

    "& p": {
      border: "1px solid #fff",
      borderRadius: 50,
      padding: "3px 7px",
      fontSize: 12,
    },
  },
}));
