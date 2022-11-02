import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import './header.css';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-top: 10px;
 
`



const Header = () => {
  const qty  = useSelector((state) => state.AddtoCart.quantity);


  // const Navigate = useNavigate();
 
  return (
    <div className='ui fixed menu' >
      <div className='ui container center'>
        <div className="navbarCenter">
          <Link style={{ color: 'red',cursor:'pointer', fontSize:'25px' }} to='/'>Diners</Link>
          <MenuItem>
          {/* <Navigate to='/cart'/> */}
          <Badge color="secondary" badgeContent={qty} >
          <Link to='/cart'>
          <AiOutlineShoppingCart size={'2em'} color={'gray'} />
          </Link>


          </Badge>
        </MenuItem>
       
        </div>
      
      </div>
    </div>
  )
}

export default Header