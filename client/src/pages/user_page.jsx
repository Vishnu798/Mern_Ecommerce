import React from 'react'
import Carousels from '../components/carousel'

const UserPage = () => {
  return (
    <>
      <div className='d-flex top-image flex-column align-items-center justify-content-center '>
        
          <h4 className='move' > Make Shopping Easy And Fashionable</h4>
        <img className='top-image' src='https://images.ctfassets.net/wowgx05xsdrr/5YszVlLodSONRRVN9O6CE6/107a1a991daad1e92dda43dac5de03e0/shopping-cart-software-Header.png' alt='decoration'/>
        </div>
          <Carousels/>
    </>
  )
}

export default UserPage
