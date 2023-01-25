import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CardDetail = () => {

  const [data, setData] = useState([]);
  console.log(data);
  const getdata = useSelector((state) => state.cartreducer.carts);


  const { id } = useParams();

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id
    });
    setData(comparedata);
  }

  useEffect(() => {
    compare();
  }, [id])

  return (
    <div>
      <div className='container'>
        <div className='row mt-5 mb-3'>

          {
            data.map((ele, index) => {
              return (
                <div>

                <div className='card_detail_hit'>
                <div className='left_card_img'>
                  <img src={ele.imgdata} alt='img' width="240" />
                </div>
                <div className='right_card_detail d-flex'>
                  <Table>
                    <tr>
                      <td >
                        <p> <strong> Restaurant </strong> : {ele.rname}</p>
                        <p> <strong> Price </strong> : $ {ele.price}</p>
                        <p> <strong> Dishes </strong> : {ele.address}</p>
                        <p> <strong> total </strong> : $ 345</p>
                      </td>
    
                      <td >
                       
                        <p> <strong> Order Review </strong> : {ele.somedata}</p>
                        <p> <strong> Rating </strong> : {ele.rating}</p>
                        <p><strong> Remove<i className='fas fa-trash mx-2' style={{ color: "red" }}></i></strong></p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </div>
                 
                </div>
              )
            })
          }

         

        </div>
      </div>
    </div>
  )
}

export default CardDetail
