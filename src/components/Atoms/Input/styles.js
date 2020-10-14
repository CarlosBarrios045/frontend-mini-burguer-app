import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  default: {
    fontSize: 14,

    "&::placeholder": {
      color: "#000 !important",
      opacity: 1,
      lineHeight: 1,
      letterSpacing: "-0.2px",
    },
  },
  helperText: {
    color: "#8696a8",
    fontSize: 13,
    marginTop: 8,
  },
  iconMaterial: {
    width: 18,
    height: 18,
    cursor: "pointer",
    color: "rgb(137, 163, 191)",
  },
  inputSecondary: {
    "& > div:before": {
      borderBottom: "none !important",
    },
  },
  focused: {
    "&::before": {
      borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  label: {
    color: "#000",
  },
  labelShrink: {
    color: "#58616a !important",
  },
}));
