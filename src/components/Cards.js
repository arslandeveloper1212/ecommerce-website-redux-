import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import Cardsdata from '../components/CardsData'
import '../components/style.css'
import { ADD } from '../redux/actions/action';


const Cards = () => {
    const [data, setdata] = useState(Cardsdata)
    console.log(data)

   const dispatch =  useDispatch();

   const send = (e) =>{
    dispatch(ADD(e));
    
   }

    return (
        <div>
            <div className='container'>
                <div className='row '>
                <h2 className='text-center mt-5 mb-5'>Add to Cart Projects</h2>
                    <div className='cards_hit'>

                        {
                            data.map((item,index)=>{
                                return(
                                <div key={index}>
                                
                        <Card style={{ width: '16rem' }} className="card">
                        <Card.Img variant="top" src={item.imgdata} style={{width: "259px", padding: "14px"}} />
                        <Card.Body>
                            <Card.Title>{item.rname}</Card.Title>
                            <Card.Text>
                           Price: $ {item.price}
                            </Card.Text>
                            <Button className="button_1"
                            onClick={()=>send(item)}
                            >Add to Cart</Button>
                        </Card.Body>
                    </Card>
                            
                                
                                
                                </div>
                                )
                            })
                        }






                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards



