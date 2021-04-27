import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#C7168D",
    borderColor: "#C7168D",
    "&:hover": {
      backgroundColor: "#a0066f",
      borderColor: "#a0066f",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#a0066f",
      borderColor: "#a0066f",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

function CustomButton({ title, className, onClick }) {
  return (
    <BootstrapButton
      onClick={onClick}
      className={className}
      variant="contained"
      color="primary"
      disableRipple
    >
      {title}
    </BootstrapButton>
  );
}

export default CustomButton;
