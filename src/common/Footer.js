import { Box, Container, Grid, Typography } from "@material-ui/core";
import CustomButtonAlt from "./CustomButtonAlt";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  halfSection: {
    marginTop: theme.spacing(3),
  },
  footerContainer: {
    backgroundColor: "#C7168D",
    marginTop: theme.spacing(6),
    padding: theme.spacing(6),
  },
  footerButton: {
    marginTop: theme.spacing(2),
  },
  footerTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
  },
  footerDescription: {
    fontSize: "1.25rem",
    color: "white",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <Container>
        <Grid
          container
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Typography align={"center"} className={classes.footerTitle}>
            Ready to get more out of life?
          </Typography>
          <Typography align={"center"} className={classes.footerDescription}>
            Sign up for a risk free-trial of Oticon More and experience the
            revolutionary hearing aid designed to work like your brain.
          </Typography>
          <CustomButtonAlt
            title={"Try Oticon More risk-free"}
            className={classes.footerButton}
          />
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
