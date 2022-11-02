
import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOn from '@mui/icons-material/LocationOn';
import Phone from '@mui/icons-material/Phone';
import MailOutline from '@mui/icons-material/MailOutline';
// import { mobile } from '../reponsive';
const Container = styled.div`
  display: flex;
    background-color:whitesmoke;
   /* border: 2px solid black; */
   margin-top: 1.3%;
   


`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
      width: 50%;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`  
`
const Description = styled.p`  
margin: 20px 0px;
`
const SocialContainer = styled.h1` 
/* width : 70%;
height: 20%; */
/* border: 2px solid black; */
display: flex;
align-items: center;

`

const SocialIcon = styled.h1`
/* border: 2px solid orange; */
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right:20px ;
    
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
 
  
`

const Title = styled.h3`
      margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
      width: 50%;
      margin-bottom: 10px;
  `

const Right = styled.div`
  flex: 1;
  padding: 20px;
  
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Diners.</Logo>
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum eveniet veritatis, nam cupiditate explicabo voluptates. Aliquam in dignissimos hic adipisci quidem tenetur soluta? Veniam voluptatem sequi quia mollitia, inventore adipisci.</Description>

        <SocialContainer>

          <SocialIcon color='3B5999'>
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color='E4405F'>
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon color='55ACEE'>

            <TwitterIcon />

          </SocialIcon>

          <SocialIcon color='E60023'>

            <PinterestIcon />

          </SocialIcon>

        </SocialContainer>

      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem ><LocationOn style={{ marginRight: "10px" }} ></LocationOn> 622 Dixie Path , Sothern Continent 923213</ContactItem>
        <ContactItem><Phone style={{ marginRight: "10px" }}></Phone> +92 3162612318</ContactItem>
        <ContactItem><MailOutline style={{ marginRight: "10px" }}></MailOutline> Hassan@Dev.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
      </Right>
    </Container>
  )
};

export default Footer