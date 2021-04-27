import { Box, Container, Grid, Hidden, Typography } from "@material-ui/core";
import CustomButton from "./CustomButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerSubImage: {
    height: "15rem",
    borderRadius: 150,
  },
  button: {
    backgroundColor: "#C7168D",
  },
  section: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    backgroundColor: "#f6f6f6",
  },
  title: {
    color: "#C7168D",
    fontWeight: "bold",
    fontSize: "1.25rem",
  },
  margin: {
    marginTop: theme.spacing(2),
  },
  smTitle: {
    color: "#C7168D",
    fontWeight: "bold",
    fontSize: "1.25rem",
    marginTop: theme.spacing(3),
  },
  textBox: {
    width: "1rem",
  },
}));

function RightSection({ title, description, imageSrc }) {
  const classes = useStyles();

  return (
    <Box className={classes.section}>
      <Container>
        <Hidden smDown>
          <Grid
            container
            direction={"row"}
            justify={"center"}
            alignItems={"center"}
            spacing={10}
          >
            <Grid item xs={12} sm={12} lg={6}>
              <Typography className={classes.title}>{title}</Typography>
              <Typography className={classes.margin}>{description}</Typography>
              <CustomButton
                className={classes.margin}
                title={"Learn more"}
                onClick={() =>
                  (window.location.href =
                    "https://www.oticon.com/solutions/more-hearing-aids")
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Grid container justify={"center"}>
                <img
                  src={imageSrc}
                  className={classes.headerSubImage}
                  alt={"oticon-sub-1"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <img
              src={imageSrc}
              className={classes.headerSubImage}
              alt={"oticon-sub-1"}
            />
            <Typography align={"center"} className={classes.smTitle}>
              {title}
            </Typography>
            <Typography align={"center"} className={classes.margin}>
              {description}
            </Typography>
            <CustomButton
              className={classes.margin}
              title={"Learn more"}
              onClick={() =>
                (window.location.href =
                  "https://www.oticon.com/solutions/more-hearing-aids")
              }
            />
          </Grid>
        </Hidden>
      </Container>
    </Box>
  );
}

export default RightSection;
