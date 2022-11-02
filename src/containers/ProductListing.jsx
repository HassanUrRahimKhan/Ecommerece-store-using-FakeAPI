import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import { useEffect } from 'react';
import {  fetchProducts } from './redux/Actions/ProductActions';
import { Announcement } from '../components/Announcement';

const ProductListing = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(fetchProducts())

  }, [])

  // console.log(products,'products')


 

  return (
    <>
      <Announcement/>
    <div className='ui grid container '>
   
      <ProductComponent />
    </div>
    </>
  )
}

export default ProductListing