import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ palette }) => ({
  container: {
    width: "100%",
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentTitle: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 6,
    padding: "0 1.6rem",
    alignItems: "center",
    color: palette.secondary.main,

    "& h4": {
      fontWeight: "bold",
      color: palette.secondary.dark,
    },

    "& p": {
      fontSize: 14,
      color: palette.secondary.dark,
      cursor: "pointer",
    },
  },
  content: {
    overflowX: "auto",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",

    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
    },
  },
  contentProducts: {
    display: "flex",
    height: "100%",
    alignItems: "center",

    "&:first-child": {
      marginLeft: "1.6rem",
    },
  },
  product: {
    width: 180,
    height: 220,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  detailsProduct: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",

    "& h4": {
      fontWeight: "600",
      fontSize: 18,
      color: palette.secondary.dark,
      marginBottom: 2,
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "0 16px",
  },
  descuent: {
    fontSize: 12,
    fontWeight: "600",
    textDecoration: "line-through",
    color: palette.error.main,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: palette.warning.main,
  },
  contentImg: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 135,
  },
  img: {
    width: 135,
    height: 135,
  },
  buttonCar: {
    width: 40,
    height: 30,
    position: "absolute",
    backgroundColor: palette.error.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 0,

    "&:hover": {
      backgroundColor: palette.error.main,
    },
  },
  porcent: {
    width: 40,
    height: 36,
    position: "absolute",
    backgroundColor: palette.warning.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    right: 0,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 15,

    "& p": {
      fontWeight: "600",
      color: "#fff",
      fontSize: 14,
    },
  },
}));
