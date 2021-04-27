import { Box, Container, Grid, Typography, Hidden } from "@material-ui/core";
import OticonHeader from "../img/oticon-header.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    backgroundColor: "#C7168D",
    padding: theme.spacing(10),
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
  },
  subHeader: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "white",
  },
  headerDescription: {
    fontSize: "1rem",
    color: "white",
  },
  headerImage: {
    height: "20rem",
    borderRadius: 20,
  },
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
}));

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.headerContainer}>
      <Container>
        <Hidden smDown>
          <Grid
            container
            spacing={10}
            direction={"row"}
            justify={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12} sm={12} lg={6}>
              <Typography className={classes.header}>
                Introducing Oticon More™
              </Typography>
              <Typography className={classes.subHeader}>
                It’s time to get more out of life
              </Typography>
              <Typography className={classes.headerDescription}>
                Oticon More is the hearing aid with built-in intelligence to
                make more sense of sound.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <img
                src={OticonHeader}
                alt={"oticon-header"}
                className={classes.headerImage}
              />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Box>
            <Typography align={"center"} className={classes.header}>
              Introducing Oticon More™
            </Typography>
            <Typography align={"center"} className={classes.subHeader}>
              It’s time to get more out of life
            </Typography>
            <Typography align={"center"} className={classes.headerDescription}>
              Oticon More is the hearing aid with built-in intelligence to make
              more sense of sound.
            </Typography>
          </Box>
        </Hidden>
      </Container>
    </Box>
  );
}

export default Header;
