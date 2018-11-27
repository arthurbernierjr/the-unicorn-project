import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";
import MenuItem from "views/customviews/functionalcomponents/MenuItem.jsx"
import axios from "axios";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

class Menu extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: [],
        sizes:[]
      };
      this.getItems = this.getItems.bind(this);
      this.getSizes = this.getSizes.bind(this);
    }

  async getItems() {
    const api_end = '/api/items/all';
    const response = await axios.get(api_end)
    this.setState({
      data: response.data,
    });
    console.log(response.data);
  }
  async getSizes() {
    const api_end = '/api/sizes/all';
    const response = await axios.get(api_end)
    this.setState({
      sizes: response.data,
    });
    console.log(response.data);
  }

  componentDidMount() {
    this.getItems();
    this.getSizes();
  }
  render() {
    const items = this.state.data
    const sizes = this.state.sizes
    return (
      <DefaultLayout parallaxImg={require('assets/images/signup_hero.png')} heroHeight={"60vh"}>
      <center style={{display:`flex`,justifyContent:`center`}}>
      <h1 style={{fontFamily:`Futura-Bold,Arial,Nunito`, fontWeight:`800`}}>
      MENU</h1> <div style={{borderColor:`#ff802c`,borderWidth:`3px`, borderStyle:`solid`, display:`inline`,fontSize:`1rem`, padding:`.5rem`, height:`4rem`, margin:`1rem 2rem`}}><a style={{color:`#ff802c`, fontWeight:`300`}}href="https://www.ubereats.com/en-US/new-york/food-delivery/smac-east-village/F32sN5eFT8yHHoDBbK6u7g/" className="link" >Want it Delivered? <br/><span style={{fontWeight:"700",fontFamily:`Arial black`}}>UBER EATS</span></a></div>
      </center>
      <GridContainer>
           { items.map((item,index)=>{
           return <MenuItem key={index} name={item.name} description ={"I'm Yummy Buy Me"} image = "http://progressandfortune.com/smac_images/menu_items/sampler.png">
           <GridContainer>
            {sizes.map((size,index)=>{
              return( <GridItem md={3}>
                <h4>{size.size}</h4>
                <h5>{size.price}</h5>
                </GridItem>)
            })}
              </GridContainer>
           </MenuItem>
           })
         }
         </GridContainer>

      <MenuItem name={"Name Data Here"} description={"Description Data Here"}
      image="http://progressandfortune.com/smac_images/menu_items/sampler.png"/>
      </DefaultLayout>

    );
  }
}

export default Menu;
