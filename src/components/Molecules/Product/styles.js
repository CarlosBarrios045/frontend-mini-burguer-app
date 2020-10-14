import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ palette }) => ({
  product: {
    width: 200,
    height: 260,
    borderRadius: 15,
    backgroundColor: palette.terceary.main,
    marginRight: 10,
  },
  detailsProduct: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",

    "& h4": {
      fontWeight: "700",
      fontSize: 16,
      color: "#2e3031",
      marginBottom: 2,
      marginTop: 12,
      marginLeft: 16,
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "0 16px",
  },
  contentDetails: {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    paddingLeft: 6,

    "&::-webkit-scrollbar": {
      backgroundColor: "transparent",
      width: 8,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: palette.secondary.dark,
    },
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
    color: palette.secondary.dark,
  },
  contentImg: {
    width: "100%",
    height: "100%",
    maxHeight: 135,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  img: {
    height: "100%",
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  buttonCar: {
    height: 35,
    position: "absolute",
    backgroundColor: palette.error.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 0,
    borderRadius: 0,
    borderBottomRightRadius: 15,

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
  cardOpen: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 16px",
    margin: "10px 0",
  },
  buttonsCard: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    border: "2px solid red",
  },
}));
