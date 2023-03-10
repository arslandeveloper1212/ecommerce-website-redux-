import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {DLT,ADD,REMOVE} from '../redux/actions/action'
import {useNavigate} from 'react-router-dom'

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

  const history = useNavigate();
  const dispatch = useDispatch();


    //add one on + bar

    const send = (e) =>{
      dispatch(ADD(e));
      
     }

     //remove one on - bar

     const remove = (item) =>{
      dispatch(REMOVE(item))
     }

  const dlt = (id) =>{
    dispatch(DLT(id))
    history("/")
  }

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
                        <p> <strong> total </strong> : $ {ele.price * ele.qnty}</p>
                      </td>
    
                      <td  className='hit_carddetail_area'>
                       
                        <p> <strong> Order Review </strong> : {ele.somedata}</p>
                        <p> <strong> Rating </strong> : {ele.rating}</p>
                        <p><strong> Remove<i className='fas fa-trash mx-2' style={{ color: "red" }} onClick= {()=>dlt(ele)}></i></strong></p>

                        <div className='d-flex bg-light justify-content-between align-items-center' style={{cursor:"pointer", width: 100}}>
                              <span style= {{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id):()=>remove(ele.id)}> - </span>
                              <span style= {{fontSize:24}}> {ele.qnty} </span>
                              <span style= {{fontSize:24}} onClick= {()=>send(ele)}> + </span>
                              </div>

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
