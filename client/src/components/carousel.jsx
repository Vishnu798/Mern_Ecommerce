import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carousels = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    
      <Carousel className='mt-4 container'

  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  //  ssr={true} // means to render carousel on server-side.
  infinite={true}
 autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="transform 400ms ease-in-out"
  transitionDuration={2000}
  shouldResetAutoplay={false}
 
  // renderDotsOutside={true}
   containerClass="carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
    arrows = {false}
   dotListClass="custom-dot-list-style"
  //  itemClass="carousel-item-padding-40-px"
  
>
  <div className='box' >
    <img className='fit' src="https://cdn.dribbble.com/users/895544/screenshots/3903662/media/562b25c993427af50f28262a6b8b51f7.jpg?resize=400x0" alt="" />

  </div>
  <div className='box'>
    <img src="https://i.pinimg.com/originals/22/f0/7c/22f07c59344a599d2648d3e4e97ef4c5.jpg" alt="" />

  </div>
  <div className='box'>
    <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/12/Blossom-Shop-theme.webp" alt="" />

  </div>
  <div className='box'>
    <img src="https://www.toocss.com/wp-content/uploads/2022/01/hexashop-toocss.jpg" alt="" />

  </div>
  <div className='box'>
    <img src="https://www.shutterstock.com/image-vector/mobile-application-shopping-online-on-260nw-1379237159.jpg" alt="" />

  </div>
  <div className='box'>
    <img src="https://img.lovepik.com/free-template/20211026/lovepik-online-shopping-mobile-website-web-banner-image_2515590_list.jpg!/fw/431/clip/0x300a0a0" alt="" />

  </div>
  <div className='box'>
    <img src="https://st3.depositphotos.com/1688079/17279/i/450/depositphotos_172796792-stock-photo-buy-yellow-square-button-red.jpg" alt="" />

  </div>
  <div className='box'>
    <img src="https://storage.needpix.com/thumbs/online-store-3265497_1280.jpg" alt="" />

  </div>
</Carousel>
    
  )
}

export default Carousels
