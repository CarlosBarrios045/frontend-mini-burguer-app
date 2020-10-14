import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ palette }) => ({
  header: {
    width: "100%",
    backgroundColor: palette.background.secondary,
    height: 380,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  content: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
  },
  textOpen: {
    backgroundColor: palette.success.main,
    padding: ".1rem 2rem",
    marginTop: 5,
    borderRadius: 15,
  },
  img: {
    width: 95,
    borderRadius: 50,
    marginBottom: 10,
  },
  country: {
    backgroundColor: "#fff",
    padding: "3px 16px",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 26,
    right: 17,

    "@media screen and (max-width: 360px)": {
      right: 6,
    },
  },
}));
