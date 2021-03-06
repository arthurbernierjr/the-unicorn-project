import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";


import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";

class DefaultLayout extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, children, parallaxImg, h1Text, h2Text, heroHeight, noParallax } = this.props;
    return (
      <div style={{fontFamily:`Futura-Bold,Arial,Nunito`, fontWeight:`800`}}>
        <Header
          links={<HeaderLinks dropdownHoverColor="warning" />}
          fixed
          color="warning"
        />
        {noParallax?<span></span>:
        <Parallax style ={{height:heroHeight}}
          image={parallaxImg}
          className={classes.parallax}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 style={{fontSize:"6rem"}}>
                  {h1Text}
                  </h1>
                  <h2 style={{fontSize:"3rem"}} className={classes.title}>
                    {h2Text}
                  </h2>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>}
        <div className={classNames(classes.main, classes.mainRaised)}>
        {children}
        </div>
        <Footer
          theme="warning"
          content={
            <div>
              <div className={classes.left}>
                <a
                  href="https://google.com"
                  className={classes.footerBrand}
                >
                  Location: 197 1st Avenue, NY, NY 10003
                </a>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.google.com/"
                      className={classes.block}
                    >
                    Phone: 212-358-7912
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="emailto: eastvillage@smacnyc.com"
                      className={classes.block}
                    >
                      Email: eastvillage@smacnyc.com
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="hhtps://google.com"
                      className={classes.block}
                    >
                      Open Daily: 11:00am - 11:00pm
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      href="https://facebook.com/eatsmac"
                      color="facebook"
                      justIcon
                      simple
                    >
                      <i className="fab fa-facebook fa-2x" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://twitter.com/eatsmac"
                      color="twitter"
                      justIcon
                      simple
                    >
                      <i className="fab fa-twitter fa-2x" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href="https://instagram.com/eatsmac"
                      color="instagram"
                      justIcon
                      simple
                    >
                      <i className="fab fa-instagram fa-2x"></i>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(presentationStyle)(DefaultLayout);
