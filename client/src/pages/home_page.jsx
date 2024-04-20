import {useEffect,useState} from 'react'
import AdminService from '../service/admin_services'

const HomePage = () => {
const [product,setProduct] = useState([]);
const  getData = async()=>{
    const {data} = await AdminService.getProducts()
    console.log("data is :",data.data)
    setProduct(data.data);
}

  useEffect(()=>{

    getData()
  }
  ,[])
  return (
    <>
    <div class="table-responsive">
    <table class="table table-danger table-borderless mx-5">
      <thead class="table-light">

      <tr>

      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product ID</th>
      <th scope="col">Product Image</th>
      <th scope="col">Main-Cat</th>
      <th scope="col">Main-Cat</th>
      <th scope="col">Price</th>
      <th scope="col">Discount</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {product.map((e,i)=>{
      console.log(e);
      return  <tr style={{height:'200px'}}>
      <th style={{paddingTop:'7em'}} scope="row">{++i}</th>
      

      <td style={{paddingTop:'7em'}}>{e.product_name}</td>
      
      <td style={{paddingTop:'7em'}}>{e.id}</td>
      <td style={{width:'200px',height:'200px',paddingTop:'0px'}}>
  
    <img src={e.product_image} alt='tshirt' style={{ width: '10rem', height: '12rem'}} />
        
</td>

      <td style={{paddingTop:'7em'}} >{e.main_category}</td>
      <td style={{paddingTop:'7em'}} >{e.sub_category}</td>
      <td style={{paddingTop:'7em'}}>{e.price}</td>
      <td style={{paddingTop:'7em'}}>{e.discount}</td>
      <td style={{paddingTop:'7em'}}>@mdo</td>
   

    </tr>
    })}
    

  </tbody>
</table>
    </div>
     
    </>
  )
}

export default HomePage
