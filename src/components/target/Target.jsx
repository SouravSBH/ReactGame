import React, { useContext } from 'react'
import styles from './Target.module.css';
import { GameLogicContext } from '../../provider/GameLogicProvider';


export default function Target() {
    const [ gameLogic, ] = useContext(GameLogicContext)

    return (
        <div className={styles.target}>
            <h1>Level: <span className={styles.level}>{gameLogic.level}</span></h1>
            <section>
                <h2>Target: <span className={styles.targetText}>{gameLogic.target}</span></h2>
                <h2>Max Attempts: <span className={styles.maxAttempts}>{gameLogic.maxAttempts}</span></h2>
            </section>
        </div>
    )
}
