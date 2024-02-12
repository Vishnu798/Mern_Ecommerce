import {useEffect} from 'react'
import AdminService from '../service/admin_services'

const HomePage = () => {

const  getData = async()=>{
    const {data} = await AdminService.getProducts()
    console.log("data is :",data)
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
    <tr style={{height:'200px'}}>
      <th style={{paddingTop:'7em'}} scope="row">1</th>
      

      <td style={{paddingTop:'7em'}}>Mark</td>
      
      <td style={{paddingTop:'7em'}}>Otto</td>
      <td style={{width:'200px',height:'200px',paddingTop:'0px'}}>
  
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYf2kxTRYxdiaEWETTsmSFIZc1sNzL0ZIURw&usqp=CAU' alt='tshirt' style={{ width: '10rem', height: '12rem'}} />
        
</td>

      <td style={{paddingTop:'7em'}} >@mdo</td>
      <td style={{paddingTop:'7em'}} >@mdo</td>
      <td style={{paddingTop:'7em'}}>Mark</td>
      <td style={{paddingTop:'7em'}}>Otto</td>
      <td style={{paddingTop:'7em'}}>@mdo</td>
   

    </tr>
    <tr style={{height:'200px'}}>
      <th style={{paddingTop:'7em'}} scope="row">1</th>
      

      <td style={{paddingTop:'7em'}}>Mark</td>
      
      <td style={{paddingTop:'7em'}}>Otto</td>
      <td style={{width:'200px',height:'200px',paddingTop:'0px'}}>
  
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYf2kxTRYxdiaEWETTsmSFIZc1sNzL0ZIURw&usqp=CAU' alt='tshirt' style={{ width: '10rem', height: '12rem'}} />
        
</td>

      <td style={{paddingTop:'7em'}} >@mdo</td>
      <td style={{paddingTop:'7em'}} >@mdo</td>
      <td style={{paddingTop:'7em'}}>Mark</td>
      <td style={{paddingTop:'7em'}}>Otto</td>
      <td style={{paddingTop:'7em'}}>@mdo</td>
   

    </tr>
    <tr style={{height:'200px'}}>
      <th style={{paddingTop:'7em'}} scope="row">1</th>
      

      <td style={{paddingTop:'7em'}}>Mark</td>
      
      <td style={{paddingTop:'7em'}}>Otto</td>
      <td style={{width:'200px',height:'200px',paddingTop:'0px'}}>
  
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYf2kxTRYxdiaEWETTsmSFIZc1sNzL0ZIURw&usqp=CAU' alt='tshirt' style={{ width: '10rem', height: '12rem'}} />
        
</td>

      <td style={{paddingTop:'7em'}} >@mdo</td>
      <td style={{paddingTop:'7em'}} >@mdo</td>
      <td style={{paddingTop:'7em'}}>Mark</td>
      <td style={{paddingTop:'7em'}}>Otto</td>
      <td style={{paddingTop:'7em'}}>@mdo</td>
   

    </tr>
  </tbody>
</table>
    </div>
     
    </>
  )
}

export default HomePage
