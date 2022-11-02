import React from 'react';
import { Announcement } from '../components/Announcement';

import styled from 'styled-components';


import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux';
// import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
// import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';
import Cart from './AddtoCart';
import ProductListing from './ProductListing';
import { removeSelectedProduct } from './redux/Actions/ProductActions';

// const Stripe = require('stripe');
// const stripe = Stripe('sk_test_51KqYGFCpPi8IDrPcWDFmOeavzJ2aUoIVZsBfPQ7qfcBUot2LNly3znmex7cPjNpqALiYID5gFMBq92RIiJS93mfz00fCqacLOE');

// const KEY = "pk_test_51KqYGFCpPi8IDrPczZurFc8o1tllnhNEDnxigfIZTAZluptrCjY6q5CqeLiGhBLpwlCbEDIrjIGSfZmk1mNRUEsC00gyv1V4H6";


const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
   
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
   
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color:${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    `
const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px ;
`

const Info = styled.div`
    flex: 3;
    
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItemText = styled.span`
    
`
const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemPrice = styled.span`
    
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 70px;
    margin-top: 40px;
   
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    height: 200px;
`
const Image = styled.img`
   display: flex;
	justify-content: center;
	align-items: center;
 
    `
const Details = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const DeleteAndFavourite = styled.div`
    
    display: flex;
    justify-content: space-between;
    margin-top: 6%;
    /* border: 1px solid orange; */
    width: 30%;
   
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
  
`

const HR = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`





const AddtoCart = () => {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const cartItems = useSelector((state) => state.AddtoCart)


    
    //console.log(cartItems.CartItem[0])
    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }

    };
    const removeToCart = (index) => {
        dispatch(removeSelectedProduct(index))
      };
    // useEffect(() => {

    //     const makeRequest = async () => {
    //         try {
    //             const res = await userRequest.post("/checkout/payment", {
    //                 tokenId: stripeToken.id,
    //                 amount: cart.total * 100,


    //             })
    //             navigate("/success", {
    //                 stripeData: res.data,
    //                 products: cart,
    //             });

    //         } catch (error) { }
    //     }
    //     stripeToken && makeRequest();
    // }, [stripeToken, cart.total, navigate])
    const totalAmountCount = () => {
        let totalPrice = 0
        cartItems.CartItem.map((item) => {


            totalPrice = totalPrice + item.product.price;
            // console.log(totalPrice)
        })
        // totalPrice =totalPrice - 5.90
        return (totalPrice)
    }
    const dicountedPrice = () => {
        return (totalAmountCount() - 5.90)
    }
    console.log()
    // console.log( totalAmountCount())
    return (
        <Container>
            {/* <<Navbar></Navbar>> */}
            <Announcement></Announcement>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cartItems?.CartItem.map((product, index) => {
                           
                            return (
                                <Product key={index}>


                                    <ProductDetail>
                                        <div style={{ display: 'flex', width: 200, alignItems: "center" }}>
                                            <Image src={product.product.image} style={{ width: 200, height: 200 }}></Image>
                                        </div>
                                        <Details>
                                            <ProductName><b>Product:</b> {product.product.title} </ProductName>
                                            <ProductId><b>ID:</b>{product.product.id}</ProductId>
                                            <ProductColor><b>category:</b>{product.product.category}</ProductColor>
                                            <ProductSize><b>rating:</b> {product.product.rating.rate}</ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <Add onClick={() => handleQuantity("inc")} />
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <Remove onClick={() => handleQuantity("dec")} />
                                        </ProductAmountContainer>

                                        <ProductPrice>$ {product.product.price * product.quantity}</ProductPrice>

                                        <DeleteAndFavourite>
                                            <FavoriteBorderIcon sx={{ fontSize: "25px" }}/>
                                            <DeleteIcon sx={{ fontSize: "25px" }} onClick={()=>removeToCart(product.product.id)}/>
                                        </DeleteAndFavourite>
                                    </PriceDetail>
                                </Product>
                            )
                        }
                        )}


                        <HR />

                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>

                            <SummaryItemPrice>$ {totalAmountCount()}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {dicountedPrice()}</SummaryItemPrice>
                        </SummaryItem>

                        {/* <StripeCheckout name="Ivolvo Shop"
                            image="https://image.shutterstock.com/z/stock-vector-avatar-man-and-shopping-and-ecommerce-icon-489296014.jpg"
                            billingAddress
                            shippingAddress
                            description={`Your total is $ ${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}>


                            <button
                                style={{
                                    border: "none",
                                    width: 120,
                                    borderRadius: 5,
                                    padding: "20px",
                                    backgroundColor: "black",
                                    color: "white",
                                    fontWeight: "600",
                                    cursor: "pointer",

                                }}
                            >
                                Pay Now

                            </button>
                        </StripeCheckout> */}
                    </Summary>
                </Bottom>
            </Wrapper>
            {/* <Footer></Footer> */}
        </Container>
    )
}

export default AddtoCart