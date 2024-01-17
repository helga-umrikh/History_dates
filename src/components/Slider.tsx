import './Slider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Dates {
    dates: {
        year: number
        description: string
    }[]
}

interface SliderProps {
    dataItem: Dates
}

const Slider: React.FC<SliderProps> = ({ dataItem }) => {
    return (
        <div>
            <Swiper
                className="swiper_container"
                modules={[Navigation, Pagination, Scrollbar]}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
            >
                {dataItem.dates.map((e, index) => (
                    <SwiperSlide key={index}>
                        <p className="slide__title _slide-year">{e.year}</p>
                        <p className="slide__description _slide-text _text">
                            {e.description}
                        </p>
                    </SwiperSlide>
                ))}
                <div className="slider_controler">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    )
}

export default Slider
