import { Container, Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OticonHeader from "./img/oticon-header.jpg";
import LeftSection from "./common/LeftSection";
import OticonSub1 from "./img/oticon-sub1.webp";
import RightSection from "./common/RightSection";
import OticonSub2 from "./img/oticon-sub2.webp";
import OticonSub3 from "./img/oticon-sub3.webp";
import OticonSub4 from "./img/oticon-sub4.webp";
import OticonFooter1 from "./img/oticon-footer1.webp";
import OticonFooter2 from "./img/oticon-footer2.webp";
import FooterHalfSection from "./common/FooterHalfSection";
import CustomButton from "./common/CustomButton";
import CustomButtonAlt from "./common/CustomButtonAlt";

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
  footerContainer: {
    marginTop: theme.spacing(3),
  },
  bottom: {
    backgroundColor: "#C7168D",
    marginTop: theme.spacing(6),
    padding: theme.spacing(6),
  },
  bottomButton: {
    marginTop: theme.spacing(2),
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.headerContainer}>
        <Container>
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
        </Container>
      </Box>
      <LeftSection
        title={"Designed to support your brain"}
        description={
          "Oticon More supports your brain by giving it more of what it needs to make better sense of sound"
        }
        imageSrc={OticonSub1}
      />
      <RightSection
        imageSrc={OticonSub2}
        title={
          "The world’s first hearing aid with an on-board Deep Neural Network"
        }
        description={
          "Introducing the hearing aid that works more like how the brain works because it learned through experience"
        }
      />
      <LeftSection
        title={"Effortless connections"}
        description={
          "Enjoy the convenience of direct streaming from your favorite, iPhone®, iPad® and Android™* devices"
        }
        imageSrc={OticonSub3}
      />
      <RightSection
        imageSrc={OticonSub4}
        title={"A full day’s power"}
        description={
          "Oticon More miniRITE R rechargeable style takes just three hours to charge for a full day’s power**"
        }
      />
      <Container>
        <Grid
          container
          direction={"row"}
          spacing={10}
          className={classes.footerContainer}
        >
          <Grid item xs={12} sm={12} lg={6}>
            <FooterHalfSection
              description={
                "Turn your Oticon More hearing aids into a wireless stereo headset with" +
                "ConnectClip. ConnectClip uses Bluetooth® Low Energy technology to" +
                "connect with your phone or tablet and its remote microphone" +
                "functionality is something you’ll appreciate when trying to hear speech" +
                "from a distance or in a noisy place."
              }
              title={"Make everyday connections easier"}
              imageSrc={OticonFooter1}
              buttonTitle={"Learn more about ConnectClip"}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <FooterHalfSection
              description={
                "Take back control and manage tinnitus symptoms with Tinnitus SoundSupport™. " +
                "This feature offers a variety of relief sounds, including popular ocean‑like " +
                "sounds that can be customized for your hearing needs."
              }
              title={"Tinnitus relief"}
              buttonTitle={"Learn more about Tinnitus"}
              imageSrc={OticonFooter2}
            />
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.bottom}>
        <Container>
          <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <Typography align={"center"} className={classes.header}>
              Ready to get more out of life?
            </Typography>
            <Typography align={"center"} className={classes.subHeader}>
              Sign up for a risk free-trial of Oticon More and experience the
              revolutionary hearing aid designed to work like your brain.
            </Typography>
            <CustomButtonAlt
              title={"Try Oticon More risk-free"}
              className={classes.bottomButton}
            />
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default LandingPage;
