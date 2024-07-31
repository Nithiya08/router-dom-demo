import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductByCat(){
    let {category}=useParams()
    let [products,setproducts]=useState([])
    async function getcateroty(){
      
        try{
            let response=await fetch(`http://fakestoreapi.com/products/category/${category}`)
            let data=await response.json()
            setproducts(data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getcateroty()
    },[category])
    return(<>
    <b>You clicked the caterogry of {category}</b>
    {/* {JSON.stringify(products)} */}
    {products && products.map((p)=>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={p.image} />
      <Card.Body>
        <Card.Title>{p.title}</Card.Title>
        <Card.Text>
          {p.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )}
    </>)
}
export default ProductByCat