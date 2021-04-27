import { Box, Typography } from "@material-ui/core";
import CustomButton from "./CustomButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footerImage: {
    borderRadius: 10,
  },
  footerTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#C7168D",
    marginTop: theme.spacing(3),
  },
  margin: {
    marginTop: theme.spacing(2),
  },
}));

function FooterHalfSection({ imageSrc, title, description, buttonTitle }) {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <img
        src={imageSrc}
        alt={"oticon-footer1"}
        className={classes.footerImage}
      />
      <Typography align={"center"} className={classes.footerTitle}>
        {title}
      </Typography>
      <Typography align={"center"} className={classes.margin}>
        {description}
      </Typography>
      <CustomButton title={buttonTitle} className={classes.margin} />
    </Box>
  );
}

export default FooterHalfSection;
