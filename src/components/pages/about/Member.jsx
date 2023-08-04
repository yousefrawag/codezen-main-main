import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide  } from 'swiper/react'
import './About.scss'
import 'swiper/scss'
import 'swiper/css/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import { Navigation,  A11y , Autoplay } from 'swiper'
import Coustomheader from '../../coustom_header/Coustomheader'

 
const Member = () => {
  
  const {t} =useTranslation();
  const teamData = t("team_staff" , {returnObjects: true})
   
  
  
  return (
    <div className='meber'>
    <div >
                <Coustomheader title = {t("provile_header")} />
 
        
        <p className="content-center">
                {
                        t("provile_header_text")
                }
        </p>
    </div>
    <div className="member_rapper">
            <Swiper
              modules={[Navigation,  A11y , Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              autoplay={{ delay: 5000,disableOnInteraction: true }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween:10
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween:10
                },
                992: {
                  slidesPerView: 3,
                 
                },
              
              }}
    
      
            >
            
              {
                  teamData.map((Member) => {
                    return (
                          <SwiperSlide key={Member.id} className='swiper'>
                        <div className="card"  >
                          <div className="bg">
                            <div className="image">
                              <img className='img' src={Member.image} alt="reduce" />
                            </div>
                            <h5>{Member.name}</h5>
                            <p>{Member.jop_type}</p>
                            <p className='subtitle'>{Member.subtitle}</p>
                            <hr className='hr' />
                            <Link className="link_to_member" to={`/Sainglemember/${Member.name}`}>show profile</Link>
                          </div>
                          <div className="blob"></div>
                        </div>
                  </SwiperSlide>
                    )
                  })
                  
                }
              
            
            
            
            </Swiper>
    
    </div>
  
    
            
  </div>



  )
}

export default Member
