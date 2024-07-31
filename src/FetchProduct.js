import { useEffect, useState } from "react";
import CardComp from "./CardComp";
function FetchProduct(){
    let[Products,setproduct]=useState([])
    let[search,setSearch]=useState('')
    //when products has to be initialed ? when the component gets rendered
    //from where? from external API 

    async function getAllProducts(){// call the function in useEffect callback
        try{
            let response = await fetch("https://fakestoreapi.com/products")
            let data =await response.json()//Array of 20 products 
            console.log(data)
            setproduct(data)
        }catch(err){
            console.log(err)
        }

    }
    useEffect(()=>{
getAllProducts()
    
    },[])
    const handle=(event)=>{
        setSearch(event.target.value)
    }
    let filterProducts=search?Products.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase())):Products
    return (<>
    {/* JSON - stringlyfy -to convert json objects to string */}
    <b>Search</b><input type="text" value={search} onChange={handle}></input>

    <div className="card-container">
    {filterProducts && filterProducts.map((product)=><CardComp product={product}></CardComp>)}
    </div>
    </>)
}

export default FetchProduct