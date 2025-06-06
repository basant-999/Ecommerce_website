import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/home.css"
import Base_url from '../config/Baseurl';
import { useDispatch } from 'react-redux';
import { addcard } from '../Reduxtool/cardSlice';

const ProductCard = ({defaultUrl,name,ctg,data,price}) => {
    const dispatch = useDispatch();

  return (
    <>
        <div >  
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`${Base_url}${defaultUrl}`} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
              <p>{ctg}</p>
              <p>{data}</p>
              <p>{price}</p>
              </Card.Text>
              {/* <Button variant="primary" onClick={()=>{dispatch(addcard({id:key._id,name:key.name,feild:key.feild,data:key.data,price:key.price,defaultImage:key.defaultImage, images:key.images,quanty:1}))}}>Add to Cart</Button> */}
              <Button variant="primary" onClick={()=>{dispatch(addcard({id:name,name:name,feild:ctg,data:data,price:price,defaultImage:defaultUrl, images:[],quanty:1})) }}>Add to Cart</Button>

            </Card.Body>
        </Card>
      </div>

    </>
  )
}

export default ProductCard