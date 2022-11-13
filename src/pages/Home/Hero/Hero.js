import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Hero.module.scss";
import CybosiumImage from "../../../assets/images/cybosium.png"
import Button from "../Button/Button"

const Hero = (props) => {
    return (
        <div className={styles.Hero}>
            <img className={styles.Hero__image} src={CybosiumImage} alt="Cybosium" />
            <h2 className={styles.Hero__description}>one bot at a time</h2>
            <p className={styles.Hero__date}>February 24th to 19 March | Novotel, Kochi</p>
            <div className={styles.Hero__buttons}>
                <Button text="I want to attend" filled={true} />
                <Button text="Call for robots" filled={false} />
            </div>
        </div>
    )
}

Hero.propTypes = {}

export default Hero