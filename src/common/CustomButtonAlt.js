import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "white",
    borderColor: "white",
    "&:hover": {
      backgroundColor: "#f6f6f6",
      borderColor: "#f6f6f6",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#f6f6f6",
      borderColor: "#f6f6f6",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#C7168D",
  },
}));

function CustomButtonAlt({ title, className }) {
  const classes = useStyles();

  return (
    <BootstrapButton
      className={className}
      variant="contained"
      color="#f6f6f6"
      disableRipple
      onClick={() =>
        (window.location.href = "https://www.oticon.com/risk-free-trial-more")
      }
    >
      <Typography className={classes.title}>{title}</Typography>
    </BootstrapButton>
  );
}

export default CustomButtonAlt;
