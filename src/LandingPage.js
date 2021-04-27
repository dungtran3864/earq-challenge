import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LeftSection from "./common/LeftSection";
import OticonSub1 from "./img/oticon-sub1.webp";
import RightSection from "./common/RightSection";
import OticonSub2 from "./img/oticon-sub2.webp";
import OticonSub3 from "./img/oticon-sub3.webp";
import OticonSub4 from "./img/oticon-sub4.webp";
import OticonFooter1 from "./img/oticon-footer1.webp";
import OticonFooter2 from "./img/oticon-footer2.webp";
import HalfSection from "./common/HalfSection";
import Header from "./common/Header";
import Footer from "./common/Footer";

const useStyles = makeStyles((theme) => ({
  halfSection: {
    marginTop: theme.spacing(3),
  },
}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div>
      <Header />
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
          className={classes.halfSection}
        >
          <Grid item xs={12} sm={12} lg={6}>
            <HalfSection
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
              onClick={() =>
                (window.location.href =
                  "https://www.oticon.com/solutions/accessories/connectclip")
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <HalfSection
              description={
                "Take back control and manage tinnitus symptoms with Tinnitus SoundSupport™. " +
                "This feature offers a variety of relief sounds, including popular ocean‑like " +
                "sounds that can be customized for your hearing needs."
              }
              title={"Tinnitus relief"}
              buttonTitle={"Learn more about Tinnitus"}
              imageSrc={OticonFooter2}
              onClick={() =>
                (window.location.href =
                  "https://www.oticon.com/solutions/other-devices/tinnitus")
              }
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default LandingPage;
