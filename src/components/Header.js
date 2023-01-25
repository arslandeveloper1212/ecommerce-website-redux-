import React, { useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import '../components/style.css'
import Menu from '@mui/material/Menu';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import {DLT} from '../redux/actions/action';



const Header = () => {

  const [price, setPrice] = useState(0);
  console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const dispatch = useDispatch();

  const dlt = (id) =>{
    dispatch(DLT(id))
  }

  const total = () =>{
    let price = 0;
    getdata.map((ele,k)=>{
      price = ele.price + price
    });
    setPrice(price);
  }

  useEffect(()=>{
    total();
  },[total])

  return (
    <div>
      <Navbar className='custom' variant='dark' style={{ padding: "20px" }}>
        <Container>
          <Link to="/" className='text-decoration-none text-white' >Add to Cart</Link>
          <Nav className="me-auto mx-3">
            <Link to="/" className='text-light text-decoration-none'>Home</Link>
          </Nav>



          <Badge badgeContent={getdata.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}

          >
            <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: "26px", cursor: "pointer" }}></i>
          </Badge>

        </Container>


        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}>

          {
            getdata.length ?
              <div>
                <Table>
                  <thead className=''>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurant </th>
                      
                    </tr>
                  </thead>

                  <tbody>
                    {
                      getdata.map((e, index) => {
                        return (
                          <div>
                            <div key={index}>
                              <tr>
                                <td >
                              <Link to = {`/cart/${e.id}`} onClick={handleClose}>   
                              <img src={e.imgdata} alt='img' style={{ width: "7rem", height: "6rem" }} /> 
                              </Link>   
                                </td>
                                
                                <td className='table_text mx-3'>
                                <p>{e.rname}</p>
                                <p>Price: ${e.price}</p>
                                <p>Quantity: ${e.qnty}</p>
                               
                                </td>

                                <td><strong>Remove</strong><i className='fas fa-trash mx-3 d-sm-flex flex-column' style = {{color:"red", cursor:"pointer"}} onClick = {()=>dlt(e.id) }></i></td>
                               
                              </tr>
                              <div className='d-flex bg-grey'>
                              <span>-</span>
                              </div>
                            </div>
                          
                          </div>
                         
                        )
                      })
                    
                    }

                    <td>total : ${price}</td>
                  </tbody>
                </Table>
              </div>
              :

              <div className='cart-top p-4 d-flex justify-content-center align-items-center' style={{ width: "24rem", position: "relative" }}>
                <i className='fas fa-close d-flex justify-content-end pb-1' style={{ position: "absolute", top: "15px", right: "24px", cursor: "pointer" }}
                  onClick={handleClose}
                ></i>
                <p className='mt-3 mb-3 text-center'>Your cart is empty</p>
              </div>
          }




        </Menu>

      </Navbar>
    </div>
  )
}

export default Header
