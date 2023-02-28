import React, { useState, useContext } from 'react'
import styles from "../target/Target.module.css"

import { GameLogicContext } from '../../provider/GameLogicProvider';
export default function Score() {

    const [ gameLogic, ] = useContext(GameLogicContext);
    // const gameLogic = {}


    return (

        <div className={styles.score}>
            {/* {console.count("rerender")} */}
            <CurScore ></CurScore>
            <h2 className={styles.yourAttemptsH2}>Your Attempts:
                <span className={styles.attemptsValue}>{gameLogic.yourAttempts}
                </span>
            </h2>
        </div>
    )
}

function CurScore() {
    const [ gameLogic, ] = useContext(GameLogicContext);
    return <h2 className={styles.scoreH2}>
        Current Score: <span className={styles.scoreValue}>{gameLogic.score}
        </span>
    </h2>
}

