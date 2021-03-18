
import React from 'react'
import Slider from "react-slick";

const Slides = () => {



  var settings = {
  
    infinite: true,
    
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
   
    autoplaySpeed: 2000,
 
  };
  return (
    <div className="menu-box">
        <div className="container-fluid" style={{marginTop:100}}>
         
           
          
          
          <div className="row inner-menu-box">
           
            <div className="col-12" >
            <Slider {...settings} arrows={false}  >
            <div  style={{height:800,width:'99%'}} >
        <img src='https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-16.jpg' style={{height:800,width:'99%'}}/>
      </div> <div  style={{height:800,width:'99%'}} >
        <img src='https://nguyenlieuphachehanoi.com/wp-content/uploads/2019/12/nguyen-tac-chup-hinh.jpg' style={{height:800,width:'99%'}}/>
      </div> <div  style={{height:800,width:'99%'}} >
        <img src='https://kenh14cdn.com/thumb_w/660/2019/7/16/photo-1-15632697559341504925124.jpg' style={{height:800,width:'99%'}}/>
      </div> <div  style={{height:800,width:'99%'}} >
        <img src='https://static.wixstatic.com/media/e7da97_5706273c863d4f24aaf2a84d89462c3e~mv2.png/v1/fill/w_560,h_372,al_c,q_85,usm_0.66_1.00_0.01/Them-nhung-yeu-to-lam-tang-mau-sac.webp' style={{height:800,width:'99%'}}/>
      </div>
      
    </Slider>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Slides

