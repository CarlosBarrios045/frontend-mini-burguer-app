import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "calc(100vh - 72px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  divForm: {
    width: "500px",
    height: "88%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "4rem",
    boxShadow: "0px 8px 12px 0 rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem",
      width: "100%",
      boxShadow: "none",
    },
  },
  flex: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  img: {
    width: "120px",
  },
  icon: {
    width: "25px",
    height: "25px",
    color: theme.palette.primary.main,
    marginBottom: "5px",
  },
  title: {
    fontSize: "42px",
    marginTop: ".6rem",
    marginBottom: 0,
  },
  link: {
    marginRight: "10px",
    color: theme.palette.primary.main,
  },
  inputEmail: {
    margin: "2rem 0",
  },
  inputPass: {
    marginBottom: "1rem",
  },
  button: {
    marginTop: "20px",
    width: 250,
    textTransform: "uppercase",
  },
  register: {
    marginTop: "20px",
    color: theme.palette.primary.main,
  },
}));
