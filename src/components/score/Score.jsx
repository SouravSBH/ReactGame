import React, { useState, useContext } from 'react'
import styles from "../target/Target.module.css"
import { setColor } from '../../helper/HelperFunction';

import { GameLogicContext } from '../../provider/GameLogicProvider';


export default function Score() {

    const [ gameLogic, ] = useContext(GameLogicContext);
    // const gameLogic = {};
    return (

        <div className={styles.score}>
            {/* {console.count("rerender")} */}
            <CurScore ></CurScore>
            <h2 style={{ color: setColor(gameLogic.maxAttempts, gameLogic.yourAttempts, "attempts") }} className={styles.yourAttemptsH2}>Attempts Left:
                <span className={styles.attemptsValue}>{gameLogic.maxAttempts - gameLogic.yourAttempts}
                </span>
            </h2>
        </div>
    )
}

function CurScore() {
    const [ gameLogic, ] = useContext(GameLogicContext);
    return <h2 className={styles.scoreH2} style={{ color: setColor(gameLogic.target, gameLogic.score, "score") }} >
        Current Score: <span className={styles.scoreValue}>{gameLogic.score}
        </span>
    </h2>
}

