import { Box, Hidden, Typography } from "@material-ui/core";
import CustomButton from "./CustomButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    borderRadius: 10,
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#C7168D",
    marginTop: theme.spacing(3),
  },
  margin: {
    marginTop: theme.spacing(2),
  },
  textBox: {
    height: "12.5rem",
  },
}));

function HalfSection({ imageSrc, title, description, buttonTitle, onClick }) {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <img src={imageSrc} alt={"oticon-footer1"} className={classes.image} />
      <Hidden smDown>
        <Box className={classes.textBox}>
          <Typography align={"center"} className={classes.title}>
            {title}
          </Typography>
          <Typography align={"center"} className={classes.margin}>
            {description}
          </Typography>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Typography align={"center"} className={classes.title}>
          {title}
        </Typography>
        <Typography align={"center"} className={classes.margin}>
          {description}
        </Typography>
      </Hidden>
      <CustomButton
        title={buttonTitle}
        className={classes.margin}
        onClick={onClick}
      />
    </Box>
  );
}

export default HalfSection;
