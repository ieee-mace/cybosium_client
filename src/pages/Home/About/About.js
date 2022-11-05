import styles from "./About.module.scss"
import SectionTitle from "../SectionTitle/SectionTitle"
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from "swiper"

const About = () => {
    return (
        <div className={styles.About}>
            <SectionTitle text="About" description="Know more about us" />

            <div className={styles.About__cards}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                >
                    <SwiperSlide>
                        <div className={styles.Card}>
                            <h1 className={styles.Card__title}>IEEE MACE SB</h1>
                            <p className={styles.Card__description}>Mar Athanasius College of Engineering, popularly known as MACE is one of the first engineering colleges in Kerala. It is a government-aided college established in 1961 under Mar Athanasius College Association affiliated with the APJ Abdul Kalam Technological University and approved by the AICTE. The college provides Bachelor of Technology programmes, Master of Technology programmes, Master of Computer Applications (MCA) and PhD programmes. Student-level technical clubs are very active in MACE. IEEE and ASME student chapters have gained global-level recognition.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Card}>
                            <h1 className={styles.Card__title}>IEEE MACE SB</h1>
                            <p className={styles.Card__description}>Mar Athanasius College of Engineering, popularly known as MACE is one of the first engineering colleges in Kerala. It is a government-aided college established in 1961 under Mar Athanasius College Association affiliated with the APJ Abdul Kalam Technological University and approved by the AICTE. The college provides Bachelor of Technology programmes, Master of Technology programmes, Master of Computer Applications (MCA) and PhD programmes. Student-level technical clubs are very active in MACE. IEEE and ASME student chapters have gained global-level recognition.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Card}>
                            <h1 className={styles.Card__title}>IEEE MACE SB</h1>
                            <p className={styles.Card__description}>Mar Athanasius College of Engineering, popularly known as MACE is one of the first engineering colleges in Kerala. It is a government-aided college established in 1961 under Mar Athanasius College Association affiliated with the APJ Abdul Kalam Technological University and approved by the AICTE. The college provides Bachelor of Technology programmes, Master of Technology programmes, Master of Computer Applications (MCA) and PhD programmes. Student-level technical clubs are very active in MACE. IEEE and ASME student chapters have gained global-level recognition.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.Card}>
                            <h1 className={styles.Card__title}>IEEE MACE SB</h1>
                            <p className={styles.Card__description}>Mar Athanasius College of Engineering, popularly known as MACE is one of the first engineering colleges in Kerala. It is a government-aided college established in 1961 under Mar Athanasius College Association affiliated with the APJ Abdul Kalam Technological University and approved by the AICTE. The college provides Bachelor of Technology programmes, Master of Technology programmes, Master of Computer Applications (MCA) and PhD programmes. Student-level technical clubs are very active in MACE. IEEE and ASME student chapters have gained global-level recognition.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )

}

export default About