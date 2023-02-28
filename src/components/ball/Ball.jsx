import React from 'react'
import styles from './Ball.module.css'

export default function Ball({ number, randomColor, delay }) {
    const ballStyle = {
        backgroundColor: randomColor,
        background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 1), ${randomColor} 45%)`,
        animationDelay: delay
    };
    return (
        <div style={ballStyle} className={`${styles[ "ball" ]}`}>{number}</div>
    )
}
