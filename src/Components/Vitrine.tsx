
import 'swiper/css';
import { SwiperSlide, Swiper } from 'swiper/react';
export const Vitrine = () =>{

const data= [
    {id: '1', image:'https://novadarm.com/cdn/shop/files/br-11134207-7r98r-llv1sta8f3u3e8_800x.jpg?v=1710266786'},
    {id: '2', image:'https://down-br.img.susercontent.com/file/sg-11134201-7rbkz-lntbs13ppp9a3a'},
    {id: '3', image:'https://effit.com.br/cdn/shop/files/br-11134207-7r98o-lqcd91m2veovf6.webp?v=1709912658'},
]
  
    return(

      <div>
      <Swiper 
      slidesPerView={1}
      pagination={{clickable:true}}
      navigation
      
      >
            {data.map((item)=>(
                <SwiperSlide key={item.id}>
                    <img
                       src={item.image}
                       alt='slide'
                       className='slide-item'
                       />
                </SwiperSlide>
            ))}
      </Swiper>
      </div>
    )
}