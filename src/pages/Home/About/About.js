import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from "./About.module.scss";
import "./About.scss"

const contents = [
    {
        key: "Cybosium",
        value: `Cybosium, India’s first ever IEEE Robotics and Automation Society backed Technical Education Programme (RAS TEP),
        is a mutual initiative of the budding student volunteers of IEEE RAS Student Branch Chapter MACE and IEEE MACE
        Student Branch. Organized in collaboration with companies and organizations in the industry, the main goal of
        the seasonal school is to help students and professionals grow technically in the field of robotics, with a primary
        focus on our school’s tracks. A culmination of both technical and non-technical events, the school will be conducted
        in hybrid mode spread over 20 days - from 24th February 2023 to 19th March 2023`,

    },
    {
        key: "IEEE Mace SB",
        value: `IEEE MACE SB Cybosium, India’s first ever IEEE Robotics and Automation Society backed Technical Education Programme (RAS TEP),
        is a mutual initiative of the budding student volunteers of IEEE RAS Student Branch Chapter MACE and IEEE MACE
        Student Branch. Organized in collaboration with companies and organizations in the industry, the main goal of
        the seasonal school is to help students and professionals grow technically in the field of robotics, with a primary
        focus on our school’s tracks. A culmination of both technical and non-technical events, the school will be conducted
        in hybrid mode spread over 20 days - from 24th February 2023 to 19th March 2023`
    },
    {
        key: "RAS SBC Mace",
        value: `RAS SBC Cybosium, India’s first ever IEEE Robotics and Automation Society backed Technical Education Programme (RAS TEP),
        is a mutual initiative of the budding student volunteers of IEEE RAS Student Branch Chapter MACE and IEEE MACE
        Student Branch. Organized in collaboration with companies and organizations in the industry, the main goal of
        the seasonal school is to help students and professionals grow technically in the field of robotics, with a primary
        focus on our school’s tracks. A culmination of both technical and non-technical events, the school will be conducted
        in hybrid mode spread over 20 days - from 24th February 2023 to 19th March 2023`
    },
    {

        key: "Mace",
        value: `MACE Cybosium, India’s first ever IEEE Robotics and Automation Society backed Technical Education Programme (RAS TEP),
        is a mutual initiative of the budding student volunteers of IEEE RAS Student Branch Chapter MACE and IEEE MACE
        Student Branch. Organized in collaboration with companies and organizations in the industry, the main goal of
        the seasonal school is to help students and professionals grow technically in the field of robotics, with a primary
        focus on our school’s tracks. A culmination of both technical and non-technical events, the school will be conducted
        in hybrid mode spread over 20 days - from 24th February 2023 to 19th March 2023`
    },
    {
        key: "RAS",
        value: `RAS Cybosium, India’s first ever IEEE Robotics and Automation Society backed Technical Education Programme (RAS TEP),
        is a mutual initiative of the budding student volunteers of IEEE RAS Student Branch Chapter MACE and IEEE MACE
        Student Branch. Organized in collaboration with companies and organizations in the industry, the main goal of
        the seasonal school is to help students and professionals grow technically in the field of robotics, with a primary
        focus on our school’s tracks. A culmination of both technical and non-technical events, the school will be conducted
        in hybrid mode spread over 20 days - from 24th February 2023 to 19th March 2023`
    }
]


const About = (props) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.activeIndex)
    }

    return (
        <>
            <div className={`${styles.About} About`}>
                <h1 className={styles.About__title}>ABOUT <span>{contents[activeSlideIndex].key}</span></h1>
                <Swiper
                    modules={[Pagination, EffectFade]}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true }}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                >
                    {
                        contents.map((content) => {
                            return <SwiperSlide className={styles.About__description}>{content.value}</SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}

About.propTypes = {}

export default About