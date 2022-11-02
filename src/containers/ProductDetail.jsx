import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, removeSelectedProduct, AddtoCartAction } from './redux/Actions/ProductActions';
import ReactLoading from 'react-loading';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import styled from 'styled-components';
import { Announcement } from '../components/Announcement';


const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight:700;

`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;

`


const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product)
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);




  const { image, title, price, description, category } = product;

  // const fetchProductDetail = async () =>{
  //   const Response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
  //     console.log(err)
  //   })

  //   dispatch(selectedProduct(Response.data))
  // }


  useEffect(() => {
    if (productId && productId !== "") {

      dispatch(fetchProduct(productId))
      // return () => {
      //   dispatch(removeSelectedProduct())
      // }
    }
  }, [productId])

  const handleClick = () => {
    dispatch(AddtoCartAction({product,quantity}))

    // alert('working')
  }
 
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <Announcement />
      <div className="ui grid container" style={{marginTop:"1%"}}>

        {Object.keys(product).length === 0 ? (

          <ReactLoading type={'bars'} color={'teal'} height={'20%'} width={'20%'} />

        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <AmountContainer>
                    <Remove onClick={() => handleQuantity("dec")} />
                    <Amount>{quantity}</Amount>
                    <Add onClick={() => handleQuantity("inc")} />
                  </AmountContainer>
                  <div className="ui vertical animated button" tabIndex="0" onClick={() => {
                    handleClick()
                  }}>
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>

                    <div className="visible content">Add to Cart</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetail