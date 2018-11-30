import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Help from "@material-ui/icons/Help";
import Account from "@material-ui/icons/AccountBalance";
import Https from "@material-ui/icons/Https";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={11} md={10}>
            <h2 className={classes.title}>Welcome</h2>

            <h5 className={classes.description}>
                 We are Phil and Dianne Nordan and we accepted the Lord's plan of salvation in 1983.  Where we are today, we owe to the mercy and grace of the Almighty and two individuals - Mr. Phill Simpson (now with the Lord) and Mr. Ralph H. Mount (now with the Lord).
                 <br/>
                 I met Phill Simpson in 1985 and in the same year, he introduced me to his mentor, Ralph Mount.  Both of these men were tremendous servants of the Lord and very dear friends and supporters of Israel.
                 <br/>
                 Ralph Mount taught me how to study the Bible.  On many occasions, I would call him with questions and he would never answer them directly, but told me where to find the answer -- in the word of the Lord.  You must remember, the only inspired word is the Hebrew Old Testament and the Greek New Testament.
                 <br/>
                 Thanks to the efforts of Al Greenway of Ocala, Florida, I was able to acquire Ralph's model of the Wilderness Tabernacle and his collection of books, totalling about 2,000.  Many of these books were written in the 1800's when books were written for historical reasons instead of for profit.  All of these items are now available in our Museum in Monroe, North Carolina.
                 <br/>
                 Come to see us and/or enjoy our website.  We love to talk about the Tabernacle and discuss scripture.
            </h5>

          </GridItem>
        </GridContainer>
        <div>
        <GridContainer justify="center">
          <GridItem xs={11}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="The Wilderness Tabernacle"
                description="And the LORD spake unto Moses, saying, Speak unto the children of Israel, that they bring me an offering: of every man that giveth it willingly with his heart ye shall take my offering.  And this is the offering which ye shall take of them; gold, and silver, and brass, and blue, and purple, and scarlet, and fine linen, and goats' hair, and rams' skins dyed red, and badgers' skins, and shittim wood, oil for the light, spices for anointing oil, and for sweet incense, onyx stones, and stones to be set in the ephod, and in the breastplate.  And let them make me a sanctuary; that I may dwell among them.  According to all that I shew thee, after the pattern of the tabernacle, and the pattern of all the instruments thereof, even so shall ye make it.  Exodus 25: 1-9."
                icon={Account}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>

              <InfoArea
                title="Why study the Wilderness Tabernacle?"
                description="Revelations 13:6 – “and it-opened ( the beast) its mouth with-reference-to blasphemies towards the God, to-blaspheme his name and his tabernacle and the ones tabernacling in the heavens."
                icon={Help}
                iconColor="success"
                vertical

                title2="If the Beast hates the Tabernacle it must be worth studying."
                description2="Ralph H. Mount, Jr. has produced the most comprehensive account of the Tabernacle I have ever read.  There are truths written in his works that I have never seen in any other work.  Mr. Mount was born in 1911, and he received his first model of the Tabernacle when he was about 14 years old.  During the 1940’s he started the model you see on this web site which is a 1 inch = 1 cubit (18 inches) model of real gold, silver, brass, shittim wood, etc.  As he studied and learned he made changes as his knowledge of the works of the Lord progressed. His work is so important we have copied his entire book on this web page for your information and study."


              />

            </GridItem>
          </GridContainer>
          </GridItem>
        </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
